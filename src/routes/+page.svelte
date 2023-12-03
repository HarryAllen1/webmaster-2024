<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	let count = 0;
</script>

<div class="container mt-8 flex flex-col">
	<div class="w-full">
		<Button on:click={() => count++}>Count: {count}</Button>
	</div>
</div>
