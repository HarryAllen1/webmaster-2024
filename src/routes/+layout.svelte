<script lang="ts">
	import { dev } from '$app/environment';
	import { TailwindIndicator } from '$lib';
	import '../app.css';
	import Navbar from './Navbar.svelte';

	const { children } = $props();
</script>

<div class="flex flex-col">
	<Navbar />
	{@render children()}
</div>

{#if dev}
	<TailwindIndicator />
{/if}
