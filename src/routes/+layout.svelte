<script lang="ts">
	import '../app.postcss';
	import Tree from './tree.svelte';

	// TODO: use variable fonts
	import '@fontsource/overpass/100.css';
	import '@fontsource/overpass/100-italic.css';
	import '@fontsource/overpass/200.css';
	import '@fontsource/overpass/200-italic.css';
	import '@fontsource/overpass/300.css';
	import '@fontsource/overpass/300-italic.css';
	import '@fontsource/overpass/400.css';
	import '@fontsource/overpass/400-italic.css';
	import '@fontsource/overpass/500.css';
	import '@fontsource/overpass/500-italic.css';
	import '@fontsource/overpass/600.css';
	import '@fontsource/overpass/600-italic.css';
	import '@fontsource/overpass/700.css';
	import '@fontsource/overpass/700-italic.css';
	import '@fontsource/overpass/800.css';
	import '@fontsource/overpass/800-italic.css';
	import '@fontsource/overpass/900.css';
	import '@fontsource/overpass/900-italic.css';

	export let data;
</script>

<svelte:head>
	<title>Svelte Patterns</title>
</svelte:head>

<main class="flex min-h-screen flex-col">
	<nav class="border border-b-zinc-400 px-4 py-2">
		<div class="container mx-auto flex">
			<a href="/" class="text-lg font-bold hover:underline">Svelte Patterns</a>
		</div>
	</nav>

	<div class="container mx-auto flex grow gap-8 py-4">
		<aside class="max-w-[200px] grow border-r border-r-zinc-400">
			<Tree tree={data.tree} />
		</aside>
		<div>
			<slot />
		</div>
	</div>
</main>
