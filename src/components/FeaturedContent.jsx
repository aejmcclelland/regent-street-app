"use client";

export default function FeaturedContent() {
    return (
        <section className="bg-secondary py-12 px-6 text-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-white mb-6">Featured</h2>

                <div className="p-6 bg-base-100 text-gray-900 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">Thought for the Week</h3>
                    <p className="mt-2">"Faith is taking the first step even when you don’t see the whole staircase." – Martin Luther King Jr.</p>
                </div>
            </div>
        </section>
    );
}