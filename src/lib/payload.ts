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
		console.log('Fetching collection:', collectionSlug);

		//API URL for collections
		const apiUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/${collectionSlug}?limit=${limit}&depth=1`;

		// Fetch data from Payload REST API
		const req = await fetch(apiUrl, { cache: 'no-store' });

		if (!req.ok) {
			throw new Error(
				`Failed to fetch ${collectionSlug} data: ${req.statusText}`
			);
		}

		const data = await req.json();
		console.log('Fetched data:', data.docs);

		return data?.docs?.length > 0 ? data.docs[0] : null;
	} catch (error) {
		console.error(`Error fetching ${collectionSlug} content:`, error);
		return null;
	}
}

/**
 * Fetch content from a specific Payload CMS global singleton
 * @param globalSlug - The global slug to fetch content from
 */
export async function getGlobalContent(globalSlug: string) {
	try {
		console.log('Fetching global:', globalSlug); // ✅ Debugging

		// ✅ Construct the API URL for globals
		const apiUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/globals/${globalSlug}`;

		// ✅ Fetch data from Payload REST API
		const req = await fetch(apiUrl, { cache: 'no-store' });

		if (!req.ok) {
			throw new Error(`Failed to fetch ${globalSlug} data: ${req.statusText}`);
		}

		const data = await req.json();
		console.log('Fetched global data:', data);

		// ✅ Return data or null
		return data || null;
	} catch (error) {
		console.error(`Error fetching ${globalSlug} content:`, error);
		return null;
	}
}
