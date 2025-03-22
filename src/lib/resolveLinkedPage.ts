import { getSingleCollectionItem } from './payload';

export async function resolveLinkedPage({
	primaryCollection,
	slug,
}: {
	primaryCollection: string;
	slug: string;
}) {
	// Fetch the main group from the primary collection
	const mainEntry = await getSingleCollectionItem(primaryCollection, slug);

	// If it has a linked page, get that instead
	if (mainEntry?.linkedPage?.relationTo) {
		const linkedEntry = await getSingleCollectionItem(
			mainEntry.linkedPage.relationTo,
			slug
		);
		return linkedEntry || mainEntry;
	}

	return mainEntry;
}
