"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-neutral py-10 px-6 text-base-content">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Church Info */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full">
                    <h6 className="footer-title text-primary">Regent Street Presbyterian</h6>
                    <p className="text-sm text-gray-400">
                        &copy; {currentYear} Regent Street Presbyterian Church. All rights reserved.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full">
                    <h6 className="footer-title text-primary">Contact Us</h6>
                    <p className="text-sm text-gray-400">48a Regent Street, Newtownards, BT23 4LP</p>
                    <a href="mailto:regent.st@btconnect.com" className="text-primary hover:underline text-sm">
                        regent.st@btconnect.com
                    </a>
                    <p className="text-sm text-primary">Phone: 028 9182 2416</p>
                </div>

                {/* Info */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full">
                    <h6 className="footer-title text-primary">Info</h6>
                    <p className="text-sm text-gray-400">
                        Registered with the Charity Commission for Northern Ireland NIC105068.
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        Regent Street Presbyterian Church is not responsible for the content of external websites nor does it necessarily endorse their sponsoring organizations.
                    </p>
                    <a
                        href="https://www.presbyterianireland.org/getmedia/5ca4e3fe-f368-4d15-b8a7-779e2f3c843a/PCI_Internet_Guidelines.pdf.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm block mt-2"
                    >
                        PCI Internet Use Guidelines
                        
                    </a>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full">
                    <h6 className="footer-title text-primary">Connect with Us</h6>
                    <div className="flex space-x-4 mt-2">
                        <a
                            href="https://www.facebook.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition"
                        >
                            <FaFacebookF className="w-7 h-7" />
                        </a>
                        <a
                            href="https://www.instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition"
                        >
                            <FaInstagram className="w-7 h-7" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}