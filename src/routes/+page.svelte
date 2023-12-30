<script lang="ts">
	import { Metadata } from '$lib';
	import Search from '$lib/Search.svelte';
	import { Button } from '$lib/components/ui/button';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	$effect(() => {
		gsap.to('.parallax', {
			scrollTrigger: {
				scrub: true,
				invalidateOnRefresh: true,
			},
			y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
			ease: 'none',
		});
	});
</script>

<Metadata title="GreenHaven" description="the best webmaster site" />

<div class="mt-20 flex flex-col">
	<div class=" container flex w-full flex-col items-center">
		<h1
			class="scroll-m-20 font-serif text-4xl font-extrabold tracking-tight lg:text-5xl"
		>
			Search for <span class="text-green-900">green</span> home improvements...
		</h1>
		<div class="my-32 flex flex-row gap-4">
			<Button href="/programs" size="lg" class="px-4">Explore Options</Button>
			<Search shouldFocus />
		</div>
	</div>
	<div class="parallax flex w-full flex-col" data-speed="0.4">
		<div class="flex w-full flex-row justify-between">
			<svg
				viewBox="0 0 900 178"
				width="900"
				height="178"
				preserveAspectRatio="none"
				class="w-full overflow-x-hidden border-b-green-900"
				version="1.1"
				style="transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s;"
			>
				<path
					d="M 0,51 11.5,43.2 C 23,35.3 46,19.7 69,20.7 c 23,1 46,18.6 69.2,19.8 23.1,1.2 46.5,-14.2 69.6,-21.5 23.2,-7.3 46.2,-6.7 69.2,-0.7 23,6 46,17.4 69,17.4 23,0 46,-11.4 69.2,-18.2 23.1,-6.8 46.5,-9.2 69.6,-3.8 C 508,19 531,32 554,41 c 23,9 46,14 69,16.8 23,2.9 46,3.5 69.2,2.7 23.1,-0.8 46.5,-3.2 69.6,-12.2 C 785,39.3 808,23.7 831,14.5 854,5.3 877,2.7 888.5,1.3 L 900,0 v 178 h -11.5 c -11.5,0 -34.5,0 -57.5,0 -23,0 -46,0 -69.2,0 -23.1,0 -46.5,0 -69.6,0 -23.2,0 -46.2,0 -69.2,0 -23,0 -46,0 -69,0 -23,0 -46,0 -69.2,0 -23.1,0 -46.5,0 -69.6,0 -23.2,0 -46.2,0 -69.2,0 -23,0 -46,0 -69,0 -23,0 -46,0 -69.2,0 -23.1,0 -46.5,0 -69.6,0 -23.2,0 -46.2,0 -69.2,0 -23,0 -46,0 -57.5,0 H 0 Z"
					class="fill-green-900"
					stroke-linecap="round"
					stroke-linejoin="miter"
				/>
			</svg>
		</div>
		<div class="-mt-8 bg-green-900 pb-12">
			<div class="container">
				<h2
					class="scroll-m-20 pb-2 font-serif text-5xl font-semibold tracking-tight text-white first:mt-0"
				>
					Programs
				</h2>
				<div class="prose text-lg text-primary-foreground">
					<p>We have a lot of programs blah blah blah</p>
					<p>this text is just to make the page scroll</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam
						esse perferendis illo provident est amet cum qui, incidunt molestiae
						soluta pariatur nisi ipsa, nemo hic suscipit voluptates placeat
						minus.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
						laudantium nihil dolorum dolore dignissimos tenetur voluptatum.
						Ipsum adipisci aliquam minima illum quaerat voluptate ducimus ea
						voluptatem id mollitia, esse molestiae.
					</p>
					<p>
						Est tenetur porro fugiat consectetur assumenda vitae corporis cum
						reiciendis odit debitis at rerum dolore, tempora deleniti dolores
						praesentium asperiores hic totam sapiente ut saepe commodi adipisci!
						Ducimus, illo reiciendis!
					</p>
				</div>

				<Button variant="secondary" class="mt-6" href="/programs">
					Explore programs
				</Button>
			</div>
		</div>
	</div>
</div>
