<script>
    let { problem } = $props();
</script>

<div class="p-4 border border-gray-200 rounded flex flex-col gap-2 max-w-md">
<h2 class="text-lg font-bold">{problem['short-title']}</h2>
<h3 class="text-md">{problem['long-title']}</h3>
<button class="bg-blue-500 text-white py-2 px-4 rounded">Learn more</button>
</div>