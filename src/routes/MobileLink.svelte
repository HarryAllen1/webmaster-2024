<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		href,
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
		$page.url.pathname === href ? 'text-foreground' : 'text-foreground/60',
		className,
	)}
	{...rest}
>
	{@render children()}
</a>
