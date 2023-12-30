<script lang="ts">
	import * as Command from '$lib/components/ui/command';
	import { tick } from 'svelte';
	import { programs } from '../routes/programs/data';
	import { goto } from '$app/navigation';

	const { shouldFocus = false } = $props();

	$effect(() => {
		if (shouldFocus) {
			tick().then(() => {
				(document.querySelector('#search') as HTMLInputElement).focus();
			});
		}
	});
</script>

<Command.Root class="max-w-[450px] rounded-lg border">
	<Command.Input id="search" placeholder="solar panels" />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Programs">
			{#each programs as program}
				<Command.Item
					onSelect={() => {
						goto('/programs' + program.path);
					}}
					class="flex flex-col items-start"
				>
					<span class="font-semibold">{program.pageData.title}</span>
					<span class="text-sm">{program.pageData.description}</span>
				</Command.Item>
			{/each}
		</Command.Group>
	</Command.List>
</Command.Root>
