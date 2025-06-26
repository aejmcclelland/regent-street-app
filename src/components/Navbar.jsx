"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Dropdown from "../components/Dropdown";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import ScrollNavbar from "../components/ScrollNavbar";
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
        { link: "/whats-on/events", text: "Events" },
        { link: "/whats-on/giving", text: "Giving" },
    ];

    const navigationMission = [
        { link: "/mission/the-link", text: "The Link" },
        { link: "/mission/fields-of-life", text: "Fields of Life" },
        { link: "/mission/street-pastors", text: "Street Pastors" },
    ];

    const navigationWhoWeAre = [
        { link: "/who-we-are/values", text: "Our Values" },
        { link: "/who-we-are/team", text: "Our Team" },
        { link: "/who-we-are/our-history", text: "Our History" },
    ];

    const socialLinks = [
        {
            href: "https://www.facebook.com/regentstreetpresbyteriannewtownards/?locale=en_GB",
            icon: <FaFacebookF className="w-5 h-5" />,
            ariaLabel: "Facebook Page"
        },
        {
            href: "https://www.instagram.com/yourprofile",
            icon: <FaInstagram className="w-5 h-5" />,
            ariaLabel: "Instagram Profile"
        }
    ];

    return (
        <ScrollNavbar className="relative z-50">
            {(isScrolled) => (
                <>
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between w-full">
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
                            <ul className="hidden lg:flex gap-6 items-center text-base-content relative z-50 mt-0">
                                <Dropdown title="Who We Are" items={navigationWhoWeAre} isScrolled={isScrolled} />
                                <Dropdown title="What's On" items={navigationWhatsOn} isScrolled={isScrolled} />
                                <Dropdown title="Mission" items={navigationMission} isScrolled={isScrolled} />

                                {/* Social Media Icons (DESKTOP) */}
                                <div className="flex items-center space-x-4 ml-9">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.ariaLabel}
                                            className="text-gray-600 hover:text-primary transition"
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </ul>

                            {/* Hamburger Button - Fixed Position */}
                            <div className="lg:hidden flex justify-end w-10 flex-shrink-0">
                                <button
                                    onClick={toggleMenu}
                                    className="btn btn-square btn-ghost hover:bg-transparent w-10 h-10 flex items-center justify-center"
                                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                >
                                    {isMenuOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6 text-primary stroke-current"
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
                                            className="h-6 w-6 text-primary stroke-current"
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
                    </div>

                    {/* Mobile Menu - Separate from navbar structure */}
                    {isMenuOpen && (
                        <div className={`lg:hidden absolute top-full left-0 right-0 z-40 p-4 transition-all duration-300 ${isScrolled ? 'bg-base-100/70 backdrop-blur-md' : 'bg-base-100'
                            }`}>
                            {/* Mobile menu content */}
                            <MobileMenu
                                isOpen={isMenuOpen}
                                toggleMenu={toggleMenu}
                                navigationWhatsOn={navigationWhatsOn}
                                navigationMission={navigationMission}
                                navigationWhoWeAre={navigationWhoWeAre}
                                isScrolled={isScrolled}
                                socialLinks={socialLinks}
                            />
                        </div>
                    )}
                </>
            )}
        </ScrollNavbar>
    );
};