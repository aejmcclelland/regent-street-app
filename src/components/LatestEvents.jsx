"use client";

export default function LatestEvents() {
    return (
        <section className="bg-accent py-12 px-6 text-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-white mb-6">Latest Events</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Example Event 1 */}
                    <div className="p-6 bg-base-100 text-gray-900 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Easter Breakfast</h3>
                        <p className="mt-2">Join us for a community breakfast this Easter Sunday at 9:00 AM.</p>
                    </div>

                    {/* Example Event 2 */}
                    <div className="p-6 bg-base-100 text-gray-900 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Fields of Life Fundraiser</h3>
                        <p className="mt-2">Support our ongoing mission work in Africa. Donations welcome!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}