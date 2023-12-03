<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	let count = 0;
</script>

<Button on:click={() => count++}>Count: {count}</Button>
