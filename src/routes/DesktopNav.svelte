<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';

	const { navItems } = $props<{
		navItems: { title: string; href: string }[];
	}>();
</script>

<div class="mr-4 hidden lg:flex">
	<nav class="flex items-center space-x-6 text-sm font-medium">
		{#each navItems as navItem}
			<a
				href={navItem.href}
				class={cn(
					'transition-colors hover:text-foreground/80',
					$page.url.pathname === navItem.href
						? 'text-foreground'
						: 'text-foreground/60',
				)}
			>
				{navItem.title}
			</a>
		{/each}
	</nav>
</div>
