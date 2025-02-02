'use client';
import { useState } from "react";
import Link from "next/link";

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Dropdown Trigger */}
            <div
                className="cursor-pointer font-semibold text-base-content hover:text-primary px-4 py-2"
            >
                {title}
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul
                    className="absolute left-0 top-full w-44 bg-base-100 shadow-md p-2 border border-gray-300 rounded-none z-50"
                >
                    {items.map((item) => (
                        <li key={item.text}>
                            <Link
                                href={item.link}
                                className="block w-full px-4 py-2 hover:bg-gray-200"
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

export default Dropdown;