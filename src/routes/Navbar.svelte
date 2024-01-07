<script lang="ts">
	import Nav from './Nav.svelte';

	const navItems: { title: string; href: string }[] = [
		{
			title: 'Programs',
			href: '/programs',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Playground',
			href: '/playground',
		},
	];
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 items-center">
		<a href="/" class="mr-6 flex items-center space-x-2 text-xl">
			<span class="inline-block font-serif">
				<span class="font-bold text-green-900">Green</span>Haven
			</span>
		</a>

		<div class="flex flex-1 items-center justify-end">
			<nav class="flex items-center">
				<Nav {navItems} />
			</nav>
		</div>
	</div>
</header>
