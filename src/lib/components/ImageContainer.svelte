<script>
    import {onMount} from 'svelte';
	let { src, alt, caption } = $props();

    onMount(() => {
        if (!alt || !caption) {
            console.warn("Images should be provided with alt text and a caption for accessibility and context.");
        }
    })
</script>

{#if src}
	<figure class="my-8">
		<img {src} {alt} class="aspect-video rounded-xl bg-gray-50 object-cover dark:bg-gray-800" />
		{#if caption}
			<figcaption class="mt-4 flex gap-x-2 text-sm/6 text-gray-500 dark:text-gray-400">
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					data-slot="icon"
					aria-hidden="true"
					class="mt-0.5 size-5 flex-none text-gray-300 dark:text-gray-600"
				>
					<path
						d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
						clip-rule="evenodd"
						fill-rule="evenodd"
					/>
				</svg>
				{caption}
			</figcaption>
		{/if}
	</figure>
{/if}
