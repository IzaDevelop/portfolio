import React from "react";

export default function Details({ title, items }) {
    return (
        <div className="border rounded shadow-sm">
            <div
                className="flex items-center justify-between w-full p-4"
            >
                <p className="text-lg font-semibold">{title}</p>
            </div>
            <div className="p-4 pt-0">
                {items.map((item: any, index: number) => (
                    <React.Fragment key={index}>
                        <p>
                            {item.title} -{" "}
                            {item.link !== null ? (
                                <a
                                    className="font-bold text-purple-600 dark:text-purple-400"
                                    href={item.link}
                                    target="_blank"
                                    dangerouslySetInnerHTML={{ __html: item.institution }}
                                />
                            ) : (
                                item.institution
                            )}
                        </p>
                        <p className="text-sm">{item.period}</p>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-zinc-700 last:hidden" />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}