"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu({ isOpen, toggleMenu, navigationWhatsOn, navigationCommunity, navigationWhoWeAre, isScrolled, socialLinks }) {
    if (!isOpen) return null; // Only render the menu when it's open

    // State to track open dropdowns
    const [openDropdown, setOpenDropdown] = useState(null);

    // Toggle dropdown visibility
    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        if (toggleMenu) toggleMenu(false);
    };

    return (
        <div className={'absolute top-full left-0 w-full bg-base-100 shadow-lg p-4 text-base-content z-50 flex flex-col transition-all duration-300bg-base-100'}>
            <ul className="flex-1 space-y-4">
                {/* What's On Section */}
                <li className="w-full">
                    <button
                        onClick={() => toggleDropdown("whatsOn")}
                        className="font-bold cursor-pointer hover:text-primary w-full flex items-center justify-between"
                    >
                        What's On
                        <span className={`transition-transform duration-200 ${openDropdown === "whatsOn" ? "rotate-180" : "rotate-0"}`}>
                            ▼
                        </span>
                    </button>
                    {openDropdown === "whatsOn" && (
                        <ul className="space-y-2 pl-4 w-full">
                            {navigationWhatsOn.map((nav) => (
                                <li key={nav.text} className="w-full">
                                    <Link href={nav.link} onClick={closeMenu} className="hover:text-primary w-full block">
                                        {nav.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

                {/* Who We Are Section */}
                <li className="w-full">
                    <button
                        onClick={() => toggleDropdown("whoWeAre")}
                        className="font-bold cursor-pointer hover:text-primary w-full flex items-center justify-between"
                    >
                        Who We Are
                        <span className={`transition-transform duration-200 ${openDropdown === "whoWeAre" ? "rotate-180" : "rotate-0"}`}>
                            ▼
                        </span>
                    </button>
                    {openDropdown === "whoWeAre" && (
                        <ul className="space-y-2 pl-4 w-full">
                            {navigationWhoWeAre.map((nav) => (
                                <li key={nav.text} className="w-full">
                                    <Link href={nav.link} onClick={closeMenu} className="hover:text-primary w-full block">
                                        {nav.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

                {/* Community Section */}
                <li className="w-full">
                    <button
                        onClick={() => toggleDropdown("community")}
                        className="font-bold cursor-pointer hover:text-primary w-full flex items-center justify-between"
                    >
                        Community
                        <span className={`transition-transform duration-200 ${openDropdown === "community" ? "rotate-180" : "rotate-0"}`}>
                            ▼
                        </span>
                    </button>
                    {openDropdown === "community" && (
                        <ul className="space-y-2 pl-4 w-full">
                            {navigationCommunity.map((nav) => (
                                <li key={nav.text} className="w-full">
                                    <Link href={nav.link} onClick={closeMenu} className="hover:text-primary w-full block">
                                        {nav.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>

            {/* Social icons at the bottom */}
            <div className="flex justify-center space-x-4 mt-6">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                        className="text-gray-600 hover:text-primary transition p-2 bg-gray-100 rounded-full"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}