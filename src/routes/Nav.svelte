<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Menu, X } from 'lucide-svelte';
	import MobileLink from './MobileLink.svelte';

	let { navItems } = $props<{
		navItems: { title: string; href: string }[];
	}>();

	let open = $state(false);
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="ghost"
			class="ml-6 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
		>
			<Menu class="size-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right" class="pl-0">
		<div class="my-4 h-[calc(100vh-8rem)] overflow-auto pb-10 pl-6">
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
