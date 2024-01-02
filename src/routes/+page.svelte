<script lang="ts">
	import { Metadata } from '$lib';
	import Search from '$lib/Search.svelte';
	import { Button } from '$lib/components/ui/button';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);
</script>

<Metadata title="GreenHaven" description="the best webmaster site" />

<div class="mt-8 flex flex-col">
	<div class="container flex w-full flex-col items-center">
		<h1
			class="scroll-m-20 font-serif text-4xl font-extrabold tracking-tight lg:text-5xl"
		>
			Search for <span class="text-green-900">green</span> home improvements...
		</h1>
		<div class="mt-4 flex flex-row gap-4">
			<Button size="lg" class="px-4">Explore Options</Button>
			<Search />
		</div>
	</div>
	<div class="flex w-full flex-col">
		<div class="flex w-full flex-row justify-between">
			<svg
				viewBox="0 0 900 178"
				width="900"
				height="178"
				preserveAspectRatio="none"
				class="w-full overflow-x-hidden"
				version="1.1"
			>
				<path
					d="M 0,51 11.5,43.2 C 23,35.3 46,19.7 69,20.7 c 23,1 46,18.6 69.2,19.8 23.1,1.2 46.5,-14.2 69.6,-21.5 23.2,-7.3 46.2,-6.7 69.2,-0.7 23,6 46,17.4 69,17.4 23,0 46,-11.4 69.2,-18.2 23.1,-6.8 46.5,-9.2 69.6,-3.8 C 508,19 531,32 554,41 c 23,9 46,14 69,16.8 23,2.9 46,3.5 69.2,2.7 23.1,-0.8 46.5,-3.2 69.6,-12.2 C 785,39.3 808,23.7 831,14.5 854,5.3 877,2.7 888.5,1.3 L 900,0 v 178 h -11.5 c -11.5,0 -34.5,0 -57.5,0 -23,0 -46,0 -69.2,0 -23.1,0 -46.5,0 -69.6,0 -23.2,0 -46.2,0 -69.2,0 -23,0 -46,0 -69,0 -23,0 -46,0 -69.2,0 -23.1,0 -46.5,0 -69.6,0 -23.2,0 -46.2,0 -69.2,0 -23,0 -46,0 -69,0 -23,0 -46,0 -69.2,0 -23.1,0 -46.5,0 -69.6,0 -23.2,0 -46.2,0 -69.2,0 -23,0 -46,0 -57.5,0 H 0 Z"
					fill="#14532d"
					stroke-linecap="round"
					stroke-linejoin="miter"
				/>
			</svg>
		</div>
		<div>text</div>
	</div>
</div>
