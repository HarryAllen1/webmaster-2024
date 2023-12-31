<script lang="ts">
	import { Metadata } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
			<svg
				id="visual"
				viewBox="0 0 900 600"
				width="900"
				height="600"
				preserveAspectRatio="none"
				class="w-full"
			>
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M0 474L11.5 466.2C23 458.3 46 442.7 69 443.7C92 444.7 115 462.3 138.2 463.5C161.3 464.7 184.7 449.3 207.8 442C231 434.7 254 435.3 277 441.3C300 447.3 323 458.7 346 458.7C369 458.7 392 447.3 415.2 440.5C438.3 433.7 461.7 431.3 484.8 436.7C508 442 531 455 554 464C577 473 600 478 623 480.8C646 483.7 669 484.3 692.2 483.5C715.3 482.7 738.7 480.3 761.8 471.3C785 462.3 808 446.7 831 437.5C854 428.3 877 425.7 888.5 424.3L900 423L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z"
					fill="#14532d"
					stroke-linecap="round"
					stroke-linejoin="miter"
				/>
			</svg>
		</div>
		<div>text</div>
	</div>
</div>
