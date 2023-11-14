"use client";
import { ImagePreviewProps } from "@/models/props.model";
import Image from "next/image";
import React, {
    useImperativeHandle,
    useRef,
    useState,
    forwardRef,
} from "react";

function ImagePreview(
    { source }: ImagePreviewProps,
    ref: React.Ref<any>,
): React.ReactElement {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // [STATES]
    const [scale, setScale] = useState<number>(1);
    const [translateX, setTranslateX] = useState<number>(0);
    const [translateY, setTranslateY] = useState<number>(0);
    const [canvasContext, setCanvasContext] =
        useState<CanvasRenderingContext2D>();
    const [originImage, setOriginImage] = useState<HTMLImageElement>();

    const createCropMask = (
        event: React.SyntheticEvent<HTMLImageElement, Event>,
    ) => {
        const canvas = canvasRef.current;
        const image = event.target as HTMLImageElement;
        if (canvas && image) {
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvasRef.current.getContext("2d")!;
            context.fillStyle = "rgba(0, 0, 0, 0.6)";
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.rect(
                (canvas.width - canvas.height) / 2,
                0,
                canvas.height,
                canvas.height,
            );
            context.clip();
            context.clearRect(0, 0, canvas.width, canvas.height);
            setCanvasContext(context);
            setOriginImage(image);
        }
    };

    function handleMoveImage(
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) {
        const cropperContainer = containerRef.current;
        const canvas = canvasRef.current;
        if (cropperContainer && canvas && originImage) {
            const marginX = (originImage.width * scale - canvas.height) / 2;
            let currentTranslateX = translateX;
            const initPageX = event.pageX;

            const marginY = (originImage.height * scale - canvas.height) / 2;
            let currentTranslateY = translateY;
            const initPageY = event.pageY;

            cropperContainer.onmousemove = function (e) {
                const shiftX = e.pageX - initPageX;
                currentTranslateX = translateX + shiftX;
                if (currentTranslateX > marginX) currentTranslateX = marginX;
                if (currentTranslateX * -1 > marginX)
                    currentTranslateX = -marginX;

                const shiftY = e.pageY - initPageY;
                currentTranslateY = translateY + shiftY;
                if (currentTranslateY > marginY) currentTranslateY = marginY;
                if (currentTranslateY * -1 > marginY)
                    currentTranslateY = -marginY;

                originImage.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${scale})`;
            };
            cropperContainer.onmouseup = function () {
                setTranslateX(currentTranslateX);
                setTranslateY(currentTranslateY);
                cropperContainer.onmousemove = null;
                cropperContainer.onmouseup = null;
            };
        }
    }

    function handleZoomImage(event: React.ChangeEvent<HTMLInputElement>) {
        const canvas = canvasRef.current;
        if (canvas && originImage) {
            const marginX =
                (originImage.width * parseFloat(event.target.value) -
                    canvas.height) /
                2;
            if (translateX > marginX) setTranslateX(marginX);
            if (translateX * -1 > marginX) setTranslateX(-1 * marginX);
            const marginY =
                (originImage.height * parseFloat(event.target.value) -
                    canvas.height) /
                2;
            if (translateY > marginY) setTranslateY(marginY);
            if (translateY * -1 > marginY) setTranslateY(-1 * marginY);
            setScale(parseFloat(event.target.value));
        }
    }

    useImperativeHandle(ref, () => ({
        canvas: canvasRef.current,
        context: canvasContext,
        source: originImage,
        cropImage(
            canvas: HTMLCanvasElement,
            context: CanvasRenderingContext2D,
            src: HTMLImageElement,
        ) {
            return new Promise((resolve, reject) => {
                const naturalWidth = src.naturalWidth;
                const naturalHeight = src.naturalHeight;

                const widthScale = naturalWidth / src.width;
                const heightScale = naturalHeight / src.height;

                const scaleOffsetX = (naturalWidth * (scale - 1)) / (2 * scale);
                const scaleOffsetY =
                    (naturalHeight * (scale - 1)) / (2 * scale);

                const translateOffsetX = (translateX * widthScale) / scale;
                const translateOffsetY = (translateY * heightScale) / scale;
                context.drawImage(
                    src,
                    scaleOffsetX - translateOffsetX,
                    scaleOffsetY - translateOffsetY,
                    naturalWidth / scale,
                    naturalHeight / scale,
                    0,
                    0,
                    canvas.width,
                    canvas.height,
                );
                const maskSize = canvas.height;
                const croppedImageData = context.getImageData(
                    (canvas.width - maskSize) / 2,
                    (canvas.height - maskSize) / 2,
                    maskSize,
                    maskSize,
                );
                context.clearRect(0, 0, canvas.width, canvas.height);

                const cropCanvas = document.createElement("canvas");
                cropCanvas.width = maskSize;
                cropCanvas.height = maskSize;
                const cropContext = cropCanvas.getContext("2d");
                cropContext?.putImageData(croppedImageData, 0, 0);
                cropCanvas.toBlob(
                    (blob) => {
                        const croppedImageFile = new File(
                            [blob!],
                            "croped-image",
                            {
                                type: blob?.type,
                            },
                        );
                        resolve(croppedImageFile);
                    },
                    "image/png",
                    1,
                );
            });
        },
    }));

    return (
        <div className="w-full pt-6 flex flex-col items-center justify-center">
            <div
                className="relative w-3/4 cursor-move flex overflow-hidden"
                onMouseDown={handleMoveImage}
                ref={containerRef}
            >
                <canvas
                    className="absolute top-0 left-0 z-50"
                    ref={canvasRef}
                ></canvas>
                <Image
                    src={URL.createObjectURL(source)}
                    alt="Product image"
                    width={(400 * 16) / 9}
                    height={400}
                    className="w-full h-auto object-cover object-center aspect-video"
                    onLoad={createCropMask}
                    draggable={false}
                    style={{
                        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                    }}
                />
            </div>
            <input
                type="range"
                className="mt-5 w-1/4 cursor-pointer"
                defaultValue={1}
                min={1}
                max={3}
                step={0.1}
                onChange={handleZoomImage}
            />
        </div>
    );
}
export default forwardRef(React.memo(ImagePreview));
