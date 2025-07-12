'use client';

export default function LinkNavbar({ links }) {
    return (
        <nav className="w-full border-b border-base-300 bg-base-200 py-3 px-4 mb-8">
            <div className="max-w-4xl mx-auto flex flex-wrap gap-6 justify-center">
                {links.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className="text-lg font-semibold text-primary hover:bg-primary/10 px-3 py-1 rounded-md transition"
                    >
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
