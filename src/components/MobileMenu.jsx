'use client';
import Link from "next/link";

const MobileMenu = ({ isOpen, navigationWhatsOn, navigationCommunity, navigationWhoWeAre }) => {
    if (!isOpen) return null; // Only render the menu when it's open

    return (
        <ul className="absolute top-full left-0 w-full bg-base-100 shadow-lg p-4 text-base-content z-50 flex flex-col">
            {/* What's On Section */}
            <li className="w-full">
                <details className="w-full">
                    <summary className="font-bold cursor-pointer hover:text-primary w-full">
                        What's On
                    </summary>
                    <ul className="space-y-2 pl-4 w-full">
                        {navigationWhatsOn.map((nav) => (
                            <li key={nav.text} className="w-full">
                                <Link href={nav.link} className="hover:text-primary w-full block">
                                    {nav.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>
            {/* Community Section */}
            <li className="w-full mt-4">
                <details className="w-full">
                    <summary className="font-bold cursor-pointer hover:text-primary w-full">
                        Who We Are
                    </summary>
                    <ul className="space-y-2 pl-4 w-full">
                        {navigationWhoWeAre.map((nav) => (
                            <li key={nav.text} className="w-full">
                                <Link href={nav.link} className="hover:text-primary w-full block">
                                    {nav.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>
            {/* Community Section */}
            <li className="w-full mt-4">
                <details className="w-full">
                    <summary className="font-bold cursor-pointer hover:text-primary w-full">
                        Community
                    </summary>
                    <ul className="space-y-2 pl-4 w-full">
                        {navigationCommunity.map((nav) => (
                            <li key={nav.text} className="w-full">
                                <Link href={nav.link} className="hover:text-primary w-full block">
                                    {nav.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>

        </ul>
    );
};

export default MobileMenu;