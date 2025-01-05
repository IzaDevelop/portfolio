import React from "react";

export default function Item({ title, children }) {
    return (
        <div className="border rounded shadow-sm">
            <div
                className="flex items-center justify-between w-full p-4"
            >
                <p className="text-lg font-semibold">{title}</p>
            </div>
            <div className="p-4 pt-0">
                <p className="">{children}</p>
            </div>
        </div>
    );
}