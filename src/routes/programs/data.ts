export interface PageMetadata {
	title: string;
	description: string;
}

export const programs = (
	await Promise.all(
		Object.entries(import.meta.glob('./**/+page.svelte')).map(
			async ([path, page]) => {
				const data = (await page()) as { pageData: PageMetadata };
				return {
					path: path.replace('./', '/').replace('/+page.svelte', ''),
					...data,
				};
			},
		),
	)
).filter((p) => p.path !== '');
