'use client';

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md relative z-50">
            {/* Navbar Start */}
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Navbar Center */}
            <div className="flex-1">
                <Link
                    href="/"
                    className="text-xl font-bold text-base-content hover:text-primary-focus"
                >
                    Regent Street Presbyterian Church
                </Link>
            </div>

            {/* Navbar Dropdowns */}
            <div className="navbar-center">
                {/* What's On Dropdown */}
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">
                        What's On
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 text-base-content rounded-box z-[1] p-2 shadow"
                    >
                        <li>
                            <Link href="/sundays">Sundays</Link>
                        </li>
                        <li>
                            <Link href="/kids">Kids</Link>
                        </li>
                        <li>
                            <Link href="/youth">Youth</Link>
                        </li>
                        <li>
                            <Link href="/adult">Adult</Link>
                        </li>
                        <li>
                            <Link href="/events">Events</Link>
                        </li>
                    </ul>
                </div>

                {/* Community Dropdown */}
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Community
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 text-base-content rounded-box z-[1] p-2 shadow"
                    >
                        <li>
                            <Link href="/the-link">The Link</Link>
                        </li>
                        <li>
                            <Link href="/fields-of-life">Fields of Life</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Navbar End */}

        </div>
    );
};

export default Navbar;