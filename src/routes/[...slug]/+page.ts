import { isInTree } from '$lib/helpers/tree.js';
import { error } from '@sveltejs/kit';

export async function load({ parent, params }) {
	const { tree, basePath } = await parent();
	const { slug } = params;

	if (!isInTree({ path: slug, tree })) throw error(404, 'Not found');

	const component = await import(`${basePath}${slug}.md` /* @vite-ignore */);

	return {
		component: component.default
	};
}
