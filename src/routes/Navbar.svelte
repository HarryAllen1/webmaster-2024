<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import DesktopNav from './DesktopNav.svelte';
	import MobileNav from './MobileNav.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	const navItems: { title: string; href: string }[] = [
		{
			title: 'About',
			href: '/about',
		},
	];
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 items-center">
		<DesktopNav {navItems} />
		<MobileNav {navItems} />
		<div
			class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end"
		>
			<nav class="flex items-center">
				<ThemeToggle />
				<ModeWatcher />
			</nav>
		</div>
	</div>
</header>
