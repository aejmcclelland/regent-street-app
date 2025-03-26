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

/**
 * Fetch a single document from a specific Payload CMS collection using its slug
 * @param collectionSlug - The collection slug to fetch from
 * @param slug - The slug of the document to fetch
 */
export async function getSingleCollectionItem(
	collectionSlug: string,
	slug: string
) {
	try {
		console.log(
			`Fetching single item from collection: ${collectionSlug}, slug: ${slug}`
		);

		// Construct the API URL for fetching a single document
		const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${collectionSlug}?where[slug][equals]=${slug}&depth=3`;

		// Fetch data from Payload REST API
		const req = await fetch(apiUrl, {
			next: { revalidate: 60 }, // Cache for 1 minute
		});

		if (!req.ok) {
			throw new Error(
				`Failed to fetch ${collectionSlug} item: ${req.statusText}`
			);
		}

		const data = await req.json();

		return data?.docs?.[0] || null;
	} catch (error) {
		console.error(
			`Error fetching ${collectionSlug} item with slug "${slug}":`,
			error
		);
		return null;
	}
}

export async function getCollectionContent(
	collectionSlug: string,
	limit: number = 10
): Promise<Document[]> {
	try {
		console.log('Fetching collection:', collectionSlug);

		const params = new URLSearchParams({
			limit: limit.toString(),
			depth: '4',
			sort: 'positionOrder',
		});

		const apiUrl = `${
			process.env.NEXT_PUBLIC_SERVER_URL
		}/api/${collectionSlug}?${params.toString()}`;

		const req = await fetch(apiUrl, {
			next: { revalidate: 60 }, // Cache for 1 minute
		});

		if (!req.ok) {
			throw new Error(
				`Failed to fetch ${collectionSlug} data: ${req.statusText}`
			);
		}

		const data = await req.json();

		// Move external groups to the end (e.g., Scouts and Guides)
		const sortedDocs = data?.docs?.sort((a: any, b: any) => {
			const aIsExternal = ['scouting', 'guides'].includes(a.slug);
			const bIsExternal = ['scouting', 'guides'].includes(b.slug);

			if (aIsExternal && !bIsExternal) return 1;
			if (!aIsExternal && bIsExternal) return -1;
			return 0;
		});

		return sortedDocs || [];
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
		const req = await fetch(apiUrl, {
			next: { revalidate: 60 }, // Cache for 1 minute
		});

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
