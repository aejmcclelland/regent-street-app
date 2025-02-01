"use client";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-200 py-6 border-t border-gray-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center sm:text-left">

                    {/* Church Name & Copyright */}
                    <div>
                        <h2 className="text-lg font-bold text-primary">Regent Street Presbyterian</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            &copy; {currentYear} Regent Street Presbyterian Church. All rights reserved.
                        </p>
                    </div>

                    {/* Service Times */}
                    <div>
                        <h3 className="font-semibold text-gray-700">Service Times</h3>
                        <p className="text-sm text-gray-600">Sunday Worship - 11:00 AM</p>
                        <p className="text-sm text-gray-600">Midweek Bible Study - Wednesday 7:30 PM</p>
                    </div>

                    {/* Contact & Location */}
                    <div>
                        <h3 className="font-semibold text-gray-700">Contact Us</h3>
                        <p className="text-sm text-gray-600">48a Regent Street, Newtownards, BT23 4LP</p>
                        <a href="mailto:regent.st@btconnect.com" className="text-primary hover:underline text-sm">
                            regent.st@btconnect.com
                        </a>
                        <p className="text-sm text-gray-600">Phone: 028 9182 2416</p>
                    </div>

                    {/* Notices Section */}
                    <div>
                        <h3 className="font-semibold text-gray-700">Notices</h3>
                        <p className="text-sm text-gray-600">
                            Registered with the Charity Commission for Northern Ireland NIC105068.
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
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

                </div>
            </div>
        </footer>
    );
};

export default Footer;