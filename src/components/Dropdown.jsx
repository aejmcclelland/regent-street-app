"use client";
import { useState } from "react";
import Link from "next/link";

export default function Dropdown({ title, items, isScrolled }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Dropdown Trigger */}
            <div
                tabIndex={0}
                className="cursor-pointer font-semibold text-base-content hover:text-primary px-4 py-2"
            >
                {title}
            </div>

            {/* Transparent Bridge Above Dropdown (Prevents Closing Too Soon) */}
            {isOpen && <div className="absolute left-0 top-full w-full h-[18px] bg-transparent"></div>}

            {/* Dropdown Menu */}
            {isOpen && (
                <ul
                    className={`absolute left-0 w-44 bg-base-100 shadow-md p-2 border border-gray-300 rounded-none transition-all duration-300
                       ${isScrolled
                            ? "top-[calc(100%+12px)]"
                            : "top-[calc(100%+19px)]"
                        }`}
                >
                    {items.map((item) => (
                        <li key={item.text}>
                            <Link
                                href={item.link}
                                className="block w-full px-4 py-2 text-lg font-bold hover:bg-gray-200"
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
