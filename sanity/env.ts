export const apiVersion = process.env.SANITY_API_VERSION || '2024-08-06';

export const dataset = assertValue(
	process.env.NODE_ENV === 'production'
		? process.env.SANITY_STUDIO_DATASET
		: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
	process.env.NODE_ENV === 'production'
		? 'Missing environment variable: SANITY_STUDIO_DATASET'
		: 'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID'
);

export const projectId = assertValue(
	process.env.NODE_ENV === 'production'
		? process.env.SANITY_STUDIO_PROJECT_ID
		: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
	process.env.NODE_ENV === 'production'
		? 'Missing environment variable: SANITY_STUDIO_PROJECT_ID'
		: 'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
	if (v === undefined) {
		throw new Error(errorMessage);
	}

	return v;
}
