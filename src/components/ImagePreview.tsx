"use client";
import { ImagePreviewProps } from "@/models/props.model";
import { usePersistStore } from "@/stores";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function ImagePreview({ source }: ImagePreviewProps): React.ReactElement {
    const screenWidth = usePersistStore((state) => state.screenWidth);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const createCropMask = () => {
        const canvas = canvasRef.current;
        const image = imageRef.current;
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
        }
    };

    const handleCropImage = () => {};

    useEffect(() => {
        if (imageRef.current) {
            window.addEventListener("resize", createCropMask);
            createCropMask();
        }
        return () => {
            window.removeEventListener("resize", createCropMask);
        };
    }, [screenWidth]);
    return (
        <div className="w-full pt-6 flex flex-col items-center justify-center">
            <div className="relative w-2/3 cursor-move flex overflow-hidden">
                <canvas
                    className="absolute top-0 left-0"
                    ref={canvasRef}
                ></canvas>
                <Image
                    src={URL.createObjectURL(source)}
                    alt="Product image"
                    width={(400 * 16) / 9}
                    height={400}
                    className="w-full h-auto object-cover object-center aspect-video"
                    ref={imageRef}
                    onLoad={() => createCropMask()}
                />
            </div>
        </div>
    );
}
export default React.memo(ImagePreview);
