<script>
	import CardCollection from '$lib/components/CardCollection.svelte';
	let { data } = $props();
	let problemsKeys = $derived(Object.keys(data.problems));
	let problems = $derived(Object.values(data.problems));
</script>

<div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
	<img
		src="assets/images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg"
		alt="a stethoscope"
		class="absolute inset-0 -z-10 size-full object-cover opacity-10 dark:hidden"
	/>
	<div
		aria-hidden="true"
		class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-15 dark:opacity-20"
		></div>
	</div>
	<div
		aria-hidden="true"
		class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-15 dark:opacity-20"
		></div>
	</div>
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
			PATH
		</h2>
		<p class="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8 dark:text-gray-400">
			Planning and Assessment Tool for Health Literacy
		</p>
	</div>
</div>

<div id="problems" class="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8 sm:mt-12 mt-8">
	<div class="mx-auto max-w-4/5 lg:mx-0 sm:mb-8 mb-6">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
			Problems
		</h2>
		<p class="mt-4 text-gray-500 dark:text-gray-400">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloribus sint perferendis eveniet vel expedita minima aspernatur. Voluptatum in tempore incidunt dignissimos, eligendi, illum similique beatae esse voluptates tenetur architecto.
		</p>
	</div>
	<CardCollection cardItems={problems} />
</div>
