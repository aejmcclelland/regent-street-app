"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Dropdown from "../components/Dropdown";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navigationWhatsOn = [
        { link: "/whats-on/sundays", text: "Sundays" },
        { link: "/whats-on/children", text: "Children" },
        { link: "/whats-on/youth", text: "Youth" },
        { link: "/whats-on/adults", text: "Adults" },
        { link: "/whats-on/latest", text: "Latest" },
        { link: "/whats-on/giving", text: "Giving" },
    ];

    const navigationCommunity = [
        { link: "/community/the-link", text: "The Link" },
        { link: "/community/fields-of-life", text: "Fields of Life" },
    ];

    const navigationWhoWeAre = [
        { link: "/who-we-are/vision", text: "Our Vision" },
        { link: "/who-we-are/team", text: "Our Team" },
        { link: "/who-we-are/our-history", text: "Our History" },
        { link: "/who-we-are/beliefs", text: "Our Beliefs" },
    ];

    return (
        <div className="navbar bg-base-100 shadow-md relative z-50">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Left Side: Title and Logo */}
                <div className="flex items-center space-x-2">
                    <Image
                        src="/images/rs-logo.png"
                        alt="Regent Street Presbyterian Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                    />
                    <Link
                        href="/"
                        className="text-xl font-bold text-base-content hover:text-primary-focus"
                    >
                        Regent Street Presbyterian
                    </Link>
                </div>

                {/* Center Links */}
                <ul className="hidden sm:flex menu menu-horizontal gap-4 text-base-content">
                    <Dropdown title="Who We Are" items={navigationWhoWeAre} />
                    <Dropdown title="What's On" items={navigationWhatsOn} />
                    <Dropdown title="Community" items={navigationCommunity} />

                    {/* Social Media Icons (DESKTOP) */}
                    <div className="flex items-center space-x-4 ml-6">
                        <a
                            href="https://www.facebook.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition"
                        >
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </div>
                </ul>

                {/* Mobile Menu Button & Social Icons (Mobile) */}
                <div className="sm:hidden flex items-center space-x-4">
                    {/* Social Media Icons (MOBILE) */}
                    <a
                        href="https://www.facebook.com/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition"
                    >
                        <FaFacebookF className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition"
                    >
                        <FaInstagram className="w-6 h-6" />
                    </a>

                    {/* Close Menu X Button (Moved to the Right) */}
                    <button
                        onClick={toggleMenu}
                        className="btn btn-square btn-ghost hover:bg-transparent"
                    >
                        {isMenuOpen ? (
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
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-base-100 shadow-md p-4">
                    <MobileMenu
                        isOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                        navigationWhatsOn={navigationWhatsOn}
                        navigationCommunity={navigationCommunity}
                        navigationWhoWeAre={navigationWhoWeAre}
                    />
                </div>
            )}
        </div>
    );
};