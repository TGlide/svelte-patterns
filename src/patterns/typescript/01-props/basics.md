## Component

```html
<!-- you need to set the `lang` of the `script` tag to `ts` -->
<!-- <script lang="typescript">
</script> -->

<script lang="ts">
	// if nothing gets specified, it's treated as `any`
	export let untyped;

	// define the type like you would in a normal `.ts` file
	export let typedAsString: string;
</script>

{untyped} {typedAsString}
```

## Usage

```html
<script>
	import Component from './Component.svelte';
</script>

<!-- we forgot to set props and get an Error -->
<Component />

<Component untyped={undefined} typedAsString={'Svelte'} />
```
