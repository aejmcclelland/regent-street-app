/**
 * Fetch content from a specific Payload CMS collection
 * @param collectionSlug - The collection slug to fetch content from
 * @param limit - Number of documents to fetch (default 1)
 */
interface Document {
	id: string;
	name: string;
	role?: string;
	email?: string;
	bio?: any; // You can refine this type if needed
	image?:
		| {
				id: string;
				url?: string;
				alt?: string;
		  }
		| string
		| null;
	createdAt: string;
	updatedAt: string;
	positionOrder: number;
}

interface CollectionResponse {
	docs: Document[];
}

export async function getCollectionContent(
	collectionSlug: string,
	limit: number = 10
): Promise<Document[]> {
	try {
		console.log('Fetching collection:', collectionSlug);

		const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${collectionSlug}?limit=${limit}&depth=3&sort=positionOrder`;

		const req = await fetch(apiUrl, { cache: 'no-store' });

		if (!req.ok) {
			throw new Error(
				`Failed to fetch ${collectionSlug} data: ${req.statusText}`
			);
		}

		const data = await req.json();

		return data?.docs || [];
	} catch (error) {
		console.error(`Error fetching ${collectionSlug} content:`, error);
		return [];
	}
}
/**
 * Fetch content from a specific Payload CMS global singleton
 * @param globalSlug - The global slug to fetch content from
 */
export async function getGlobalContent(globalSlug: string) {
	try {
		// Construct the API URL for globals
		const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/${globalSlug}`;

		// Fetch data from Payload REST API
		const req = await fetch(apiUrl, { cache: 'no-store' });

		if (!req.ok) {
			throw new Error(`Failed to fetch ${globalSlug} data: ${req.statusText}`);
		}
		const data = await req.json();
		console.log('Fetched global data:', data);
		// Return data or null
		return data || null;
	} catch (error) {
		console.error(`Error fetching ${globalSlug} content:`, error);
		return null;
	}
}
