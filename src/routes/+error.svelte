<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container my-4">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
		{$page.status}
	</h1>
	<p class="text-lg text-muted-foreground">
		{$page.error?.message}
	</p>
</div>
