<script lang="ts">
	import Metadata from '$lib/Metadata.svelte';
</script>

<Metadata title="About - GreenHaven" />

<div class="container mt-4 space-y-2">
	<h1
		class="scroll-m-20 font-serif text-4xl font-extrabold tracking-tight lg:text-5xl"
	>
		About Site
	</h1>

	<h2
		class="scroll-m-20 border-b pb-2 font-serif text-3xl font-semibold tracking-tight transition-colors first:mt-0"
	>
		Technologies Used and Statement of Originality
	</h2>

	<p class="leading-7 [&:not(:first-child)]:mt-6">
		This site was built with <a
			class="underline underline-offset-4"
			href="https://kit.svelte.dev/"
		>
			SvelteKit
		</a>, using
		<a class="underline underline-offset-4" href="https://svelte.dev/">
			Svelte
		</a>
		<a
			class="underline underline-offset-4"
			href="https://svelte-5-preview.vercel.app/"
		>
			v5
		</a>. For the styling, it uses
		<a href="https://tailwindcss.com/"> TailwindCSS </a>, and the components are
		from a heavily modified version of
		<a
			class="underline underline-offset-4"
			href="https://www.shadcn-svelte.com/"
		>
			shadcn-svelte
		</a> to better fit the theme of the site.
	</p>

	<h2
		class="scroll-m-20 border-b pb-2 font-serif text-3xl font-semibold tracking-tight transition-colors first:mt-0"
	>
		Documentation
	</h2>
	<div class="flex flex-col">
		<a href="/licenses.txt" class="font-medium underline underline-offset-4">
			Licenses of all dependencies
		</a>
		<a href="/work-log.pdf" class="font-medium underline underline-offset-4">
			Work log
		</a>
		<a
			href="/student-copyright-checklist.pdf"
			class="font-medium underline underline-offset-4"
		>
			Copyright checklist
		</a>
	</div>

	<h2
		class="scroll-m-20 border-b pb-2 font-serif text-3xl font-semibold tracking-tight transition-colors first:mt-0"
	>
		Sources
	</h2>
</div>
