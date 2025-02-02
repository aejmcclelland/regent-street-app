'use client';
import { useState } from "react";
import Link from "next/link";

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative group"
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
            <div className="absolute left-0 w-full h-[10px] bg-transparent pointer-events-auto"></div>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul
                    className="absolute left-0 top-[54px] w-44 bg-base-100 shadow-md p-2 border border-gray-300 rounded-none z-50"
                    style={{ marginTop: "-2px" }} // Prevents the gap issue
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