
'use client';
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navigationWhatsOn = [
        { link: "/whats-on/sundays", text: "Sundays" },
        { link: "/whats-on/kids", text: "Kids" },
        { link: "/whats-on/youth", text: "Youth" },
        { link: "/whats-on/adults", text: "Adults" },
        { link: "/whats-on/latest", text: "Latest" },
        { link: "/whats-on/giving", text: "Giving" },
    ];

    const navigationCommunity = [
        { link: "/community/the-link", text: "The Link" },
        { link: "/community/fields-of-life", text: "Fields of Life" },
    ];

    return (
        <div className="navbar bg-base-100 shadow-md relative z-50">
            {/* Mobile Navbar */}
            <div className="navbar-start sm:hidden flex items-center w-full relative">
                <button
                    onClick={toggleMenu}
                    className="btn btn-square btn-ghost hover:bg-transparent"
                >
                    {isMenuOpen ? (
                        // X Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-6 w-6 text-primary stroke-current"
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
                            className="inline-block h-6 w-6 text-primary stroke-current"
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
                <Link
                    href="/"
                    className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-base-content hover:text-primary-focus"
                >
                    Regent Street Presbyterian
                </Link>
            </div>

            {/* Dropdown Menu for Mobile */}
            {isMenuOpen && (
                <ul className="absolute top-full left-0 w-full bg-base-100 shadow-lg p-4 text-base-content z-50 space-y-4">
                    {/* What's On */}
                    <li>
                        <details open>
                            <summary className="font-bold cursor-pointer hover:text-primary">What's On</summary>
                            <ul className="space-y-2 pl-4">
                                {navigationWhatsOn.map((nav) => (
                                    <li key={nav.text}>
                                        <Link href={nav.link} className="hover:text-primary">
                                            {nav.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>

                    {/* Community */}
                    <li className="mt-4"> {/* Ensure spacing between sections */}
                        <details>
                            <summary className="font-bold cursor-pointer hover:text-primary">Community</summary>
                            <ul className="space-y-2 pl-4">
                                {navigationCommunity.map((nav) => (
                                    <li key={nav.text}>
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
            <div className="hidden sm:flex w-full items-center justify-center px-4">
                <Link
                    href="/"
                    className="text-xl font-bold text-base-content hover:text-primary-focus"
                >
                    Regent Street Presbyterian
                </Link>
                <ul className="menu menu-horizontal gap-4 text-base-content">
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={0} className="btn btn-ghost">
                            What's On
                        </div>
                        <ul className="dropdown-content bg-base-100 shadow-md p-2 rounded-box">
                            {navigationWhatsOn.map((nav) => (
                                <li key={nav.text}>
                                    <Link href={nav.link}>{nav.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={0} className="btn btn-ghost">
                            Community
                        </div>
                        <ul className="dropdown-content bg-base-100 shadow-md p-2 rounded-box">
                            {navigationCommunity.map((nav) => (
                                <li key={nav.text}>
                                    <Link href={nav.link}>{nav.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;