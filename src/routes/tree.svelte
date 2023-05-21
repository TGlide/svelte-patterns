<script lang="ts">
	import type { Tree } from '$lib/helpers/tree';

	export let tree: Tree;
	export let root = true;
</script>

<ul class="flex flex-col gap-2" class:pl-2={!root}>
	{#each Object.entries(tree) as [key, entry]}
		<li>
			{#if typeof entry === 'string'}
				<a href={entry} class="text-sm capitalize text-blue-500">{key}</a>
			{:else}
				<span class="text-sm font-semibold uppercase text-zinc-700">{key}</span>
				<div class="mt-1">
					<svelte:self tree={entry} root={false} />
				</div>
			{/if}
		</li>
	{/each}
</ul>
