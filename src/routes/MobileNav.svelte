<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { SidebarOpen } from 'lucide-svelte';
	import MobileLink from './MobileLink.svelte';

	export let navItems: { title: string; href: string }[];

	let open = false;
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="ghost"
			class="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
		>
			<SidebarOpen class="h-5 w-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="pr-0">
		<MobileLink href="/" class="flex items-center" {open}>
			<span class="font-bold"> whatvever the name of the site is </span>
		</MobileLink>
		<div class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 overflow-auto">
			<div class="flex flex-col space-y-3">
				{#each navItems as navItem}
					<MobileLink href={navItem.href} bind:open>
						{navItem.title}
					</MobileLink>
				{/each}
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
