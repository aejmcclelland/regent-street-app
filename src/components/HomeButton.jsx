'use client';

import Link from 'next/link';

export default function HomeButton() {
    return (
        <div className="my-4">
            <Link
                href="/"
                className="btn btn-outline btn-primary flex items-center gap-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7m-9-2v12m4 0v-8m4 8h4m-10 0H5m4 0H3"
                    />
                </svg>
                Home
            </Link>
        </div>
    );
};
