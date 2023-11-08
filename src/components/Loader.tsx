import React from "react";

export default function Loader(): React.ReactElement {
    return (
        <div className="w-full h-full overflow-hidden">
            <div className="fixed top-0 left-0 bottom-0 right-0 bg-opacity-60 bg-black flex items-center justify-center z-50">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
            </div>
        </div>
    );
}
