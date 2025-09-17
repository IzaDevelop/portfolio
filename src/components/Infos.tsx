import React from "react";

export default function Infos({ title, items }) {
    return (
        <div className="border rounded shadow-sm">
            <div className="flex items-center justify-between w-full p-4">
                <p className="text-lg font-semibold">{title}</p>
            </div>
            <div className="p-4 pt-0">
                {items.map((item: string, index: number) => (
                    <React.Fragment key={index}>
                        <p dangerouslySetInnerHTML={{ __html: item }} />
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-zinc-700 last:hidden" />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}