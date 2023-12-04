<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:url" content={$page.url.href} />
	{#if description}
		<meta property="og:description" content={description} />
		<meta name="description" content={description} />
	{/if}
</svelte:head>
