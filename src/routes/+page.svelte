<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	let count = 0;
</script>

<div class="container flex flex-col mt-8">
	<div class="w-full">
		<Button on:click={() => count++}>Count: {count}</Button>
	</div>
</div>
