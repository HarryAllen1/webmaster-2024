<script lang="ts">
	import { cn } from '$lib/utils';
	import { programs } from './data';
	import { page } from '$app/stores';
	import Metadata from '$lib/Metadata.svelte';
	import { untrack } from 'svelte';

	const { children } = $props();

	let headings = $state<[string, string][]>([]);

	$effect(() => {
		// eslint-disable-next-line svelte/valid-compile
		$page.url.pathname;

		untrack(() => {
			headings = [];
		});

		for (const heading of document.querySelectorAll(
			'#content h2, #content h3, #content h4, #content h5, #content h6',
		)) {
			heading.id =
				heading.textContent?.toLowerCase().replace(/\s+/g, '-') ?? '';
			untrack(() => {
				headings.push([heading.textContent ?? '', heading.id]);
			});
		}
	});
</script>

<div
	class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
>
	<aside
		class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block"
	>
		<div class="h-full py-6 pl-8 pr-6 lg:py-8">
			<div class="w-full">
				{#each programs as program, index (index)}
					<a
						class={cn(
							'group flex w-full items-center whitespace-nowrap rounded-md px-2 py-1 hover:underline',
							// eslint-disable-next-line svelte/valid-compile
							$page.url.pathname === `/programs${program.path}`
								? 'font-medium text-foreground'
								: 'text-muted-foreground',
						)}
						href="/programs{program.path}"
					>
						{program.pageData.title}
					</a>
					{#key $page.url.pathname}
						{#if $page.url.pathname === `/programs${program.path}`}
							<Metadata
								title={program.pageData.title}
								description={program.pageData.description}
							/>
						{/if}
					{/key}
				{/each}
			</div>
		</div>
	</aside>
	<main
		class="relative w-full py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"
	>
		<div
			class="prose mx-auto w-full min-w-0 prose-headings:font-serif"
			id="content"
		>
			{@render children()}
		</div>
		{#if headings.length}
			<div class="hidden text-sm xl:block">
				<div
					class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6"
				>
					<div class="space-y-2">
						<p class="font-medium">On this page</p>
					</div>
					<ul class="m-0 list-none">
						{#each headings as heading, i (i)}
							<li class="mt-0 pt-2">
								<a
									class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
									href="#{heading[1]}"
								>
									{heading[0]}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}
	</main>
</div>
