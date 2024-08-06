import { client } from '@/sanity/lib/client';

export const fetchData = async (query: string) => {
	try {
		const data = await client.fetch(query);
		return data;
	} catch (error) {
		console.error('Sanity fetch error:', error);
		return [];
	}
};
