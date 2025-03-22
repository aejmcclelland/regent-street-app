import { getSingleCollectionItem } from './payload';

export async function resolveLinkedPage({
	primaryCollection,
	slug,
}: {
	primaryCollection: string;
	slug: string;
}) {
	// Step 1: Try to find the group in the primary collection
	const mainEntry = await getSingleCollectionItem(primaryCollection, slug);

	// ✅ If a match is found and there's a linked page, fetch the linked content
	if (mainEntry?.linkedPage?.relationTo) {
		const linkedEntry = await getSingleCollectionItem(
			mainEntry.linkedPage.relationTo,
			slug
		);
		return linkedEntry || mainEntry;
	}

	// ✅ If not found in children, attempt to fetch directly from other known collections
	const fallbackCollections = [
		'squirrels',
		'cubs',
		'beavers',
		'scouts',
		'guides',
	];
	for (const fallbackCollection of fallbackCollections) {
		const fallbackEntry = await getSingleCollectionItem(
			fallbackCollection,
			slug
		);
		if (fallbackEntry) return fallbackEntry;
	}

	// Not found anywhere
	return null;
}
