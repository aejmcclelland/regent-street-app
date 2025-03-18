
import React, { useEffect, useState } from "react";

export default function ScrollNavbar({ children }) {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`navbar bg-base-100/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-14' : 'h-20'
                }`}>
            {children(isScrolled)}
        </div>
    );
}