'use client';

const sectionLinks = [
    { id: 'the-link', label: 'The Link' },
    { id: 'fields-of-life', label: 'Fields of Life' },
    { id: 'street-pastors', label: 'Street Pastors' },
];

export default function LinkNavbar({ links }) {
    return (
        <nav className="w-full border-b border-base-300 bg-base-200 py-3 px-4 mb-8">
            <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
                {sectionLinks.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className="text-sm font-semibold text-primary hover:underline"
                    >
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    );
}

