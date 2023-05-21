<script lang="ts">
	import '../app.postcss';
	import Tree from './tree.svelte';
	export let data;
</script>

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
