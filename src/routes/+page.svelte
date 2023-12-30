<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Metadata } from '$lib';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import Trees from './Trees.svelte';

	gsap.registerPlugin(ScrollTrigger);

	let count = $state(0);
</script>

<Metadata title="uh a really good site" description="the best webmaster site" />

<div class="mt-8 flex flex-col">
	<div class="container max-h-screen w-full">
		<Button onclick={() => count++}>Count: {count}</Button>
	</div>
	<div class="flex w-screen flex-col">
		<div class="flex w-full flex-row justify-between">
			<Trees class="w-full" />
			<Trees class="w-full scale-x-[-1]" />
		</div>
		<div>text</div>
	</div>
</div>
