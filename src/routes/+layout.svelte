<script>
	import { dev } from '$app/environment';
	import { TailwindIndicator } from '$lib';
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<div class="flex flex-col">
	<Navbar />
	<slot />
</div>

{#if dev}
	<TailwindIndicator />
{/if}
