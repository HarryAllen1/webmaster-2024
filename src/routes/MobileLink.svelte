<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		href,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		open,
		class: className,
		children,
		...rest
	} = $props<{
		href: string;
		open?: boolean;
		class?: string;
		children: Snippet;
	}>();
</script>

<a
	{href}
	on:click={() => (open = false)}
	class={cn(
		// eslint-disable-next-line svelte/valid-compile
		$page.url.pathname === href ? 'text-foreground' : 'text-foreground/60',
		className,
	)}
	{...rest}
>
	{@render children()}
</a>
