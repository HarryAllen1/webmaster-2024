<script lang="ts">
	import { page } from '$app/stores';

	let { title, description = '' } = $props<{
		title: string;
		description?: string;
	}>();
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<!-- eslint-disable-next-line svelte/valid-compile -->
	<meta property="og:url" content={$page.url.href} />
	{#if description}
		<meta property="og:description" content={description} />
		<meta name="description" content={description} />
	{/if}
</svelte:head>
