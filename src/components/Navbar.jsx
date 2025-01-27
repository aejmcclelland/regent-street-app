'use client';
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navigationWhatsOn = [
        { link: "/sundays", text: "Sundays" },
        { link: "/kids", text: "Kids" },
        { link: "/youth", text: "Youth" },
        { link: "/adult", text: "Adult" },
        { link: "/events", text: "Events" },
    ];

    const navigationCommunity = [
        { link: "/the-link", text: "The Link" },
        { link: "/fields-of-life", text: "Fields of Life" },
    ];

    return (
        <div className="navbar bg-base-100 shadow-md relative z-50">
            {/* Hamburger Menu and Church Name for Mobile */}
            <div className="navbar-start sm:hidden flex items-center justify-between w-full px-4">
                <Link
                    href="/"
                    className="text-xl font-bold text-base-content hover:text-primary-focus"
                >
                    Regent Street Presbyterian
                </Link>
                <button
                    onClick={toggleMenu}
                    className="btn btn-square btn-ghost text-base-content"
                >
                    {isMenuOpen ? (
                        // X Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Hamburger Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Dropdown Menu for Mobile */}
            {isMenuOpen && (
                <ul className="absolute top-full left-0 w-full bg-base-100 shadow-md p-4 text-base-content z-50">
                    {/* What's On */}
                    <li className="mb-2">
                        <details open>
                            <summary className="font-bold cursor-pointer">What's On</summary>
                            <ul className="ml-4">
                                {navigationWhatsOn.map((nav) => (
                                    <li key={nav.text} className="py-1">
                                        <Link href={nav.link} className="hover:text-primary">
                                            {nav.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                    {/* Community */}
                    <li>
                        <details>
                            <summary className="font-bold cursor-pointer">Community</summary>
                            <ul className="ml-4">
                                {navigationCommunity.map((nav) => (
                                    <li key={nav.text} className="py-1">
                                        <Link href={nav.link} className="hover:text-primary">
                                            {nav.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                </ul>
            )}

            {/* Navbar for Larger Screens */}
            <div className="hidden sm:flex w-full items-center justify-between px-4">
                <Link
                    href="/"
                    className="text-xl font-bold text-base-content hover:text-primary-focus"
                >
                    Regent Street Presbyterian
                </Link>
                <div className="flex gap-4">
                    {/* What's On Dropdown */}
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} className="btn">
                            What's On
                        </div>
                        <ul className="dropdown-content menu bg-base-100 p-2 shadow-md rounded-box z-50">
                            {navigationWhatsOn.map((nav) => (
                                <li key={nav.text}>
                                    <Link href={nav.link}>{nav.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Community Dropdown */}
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} className="btn">
                            Community
                        </div>
                        <ul className="dropdown-content menu bg-base-100 p-2 shadow-md rounded-box z-50">
                            {navigationCommunity.map((nav) => (
                                <li key={nav.text}>
                                    <Link href={nav.link}>{nav.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;