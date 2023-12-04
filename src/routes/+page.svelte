<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Metadata } from '$lib';

	let count = 0;
</script>

<Metadata title="uh a really good site" description="the best webmaster site" />

<div class="container mt-8 flex flex-col">
	<div class="w-full">
		<Button on:click={() => count++}>Count: {count}</Button>
	</div>
</div>
