<script lang="ts" context="module">
	import type { PageMetadata } from '../data';

	export const pageData: PageMetadata = {
		title: 'Other Example',
		description: 'more stuff',
	};
</script>

<h1>{pageData.title}</h1>

<p>
	For images, make sure you save the image in the same folder as the page and
	use the &lt;enhanced:img&gt; component (this converts the image into faster
	formats and optimizes the size of the image).
</p>

<enhanced:img src="./tree.jpeg" alt="A tree" />
