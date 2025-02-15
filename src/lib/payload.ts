/**
 * Fetch content from a specific Payload CMS collection
 * @param collectionSlug - The collection slug to fetch content from
 * @param limit - Number of documents to fetch (default 1)
 */
export async function getCollectionContent(
	collectionSlug: string,
	limit: number = 1
) {
	try {
		console.log('Fetching collection:', collectionSlug); // ✅ Debugging

		// ✅ Construct the API URL
		const apiUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/${collectionSlug}?limit=${limit}&depth=1`;

		// ✅ Fetch data from Payload REST API
		const req = await fetch(apiUrl, { cache: 'no-store' });

		if (!req.ok) {
			throw new Error(
				`Failed to fetch ${collectionSlug} data: ${req.statusText}`
			);
		}

		const data = await req.json();
		console.log('Fetched data:', data.docs);

		// ✅ Return first document or null
		return data?.docs?.length > 0 ? data.docs[0] : null;
	} catch (error) {
		console.error(`Error fetching ${collectionSlug} content:`, error);
		return null;
	}
}
