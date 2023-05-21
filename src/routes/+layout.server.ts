import { constructTree } from '$lib/helpers/tree';

export async function load() {
	const paths = import.meta.glob('/src/patterns/**/*.md', { eager: true });
	const basePath = '/src/patterns/';
	const tree = constructTree({ paths, basePath });

	return { tree, basePath };
}
