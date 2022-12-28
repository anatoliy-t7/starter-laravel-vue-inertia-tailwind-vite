<template>
	<notifications position="bottom left" />
	<div>// Starter</div>
</template>
<script setup>
	import { notify } from '@kyvg/vue3-notification';
	import { usePage } from '@inertiajs/inertia-vue3';

	const flash = computed(() => usePage().props.value.flash);

	watch(flash, (newVal) => {
		if (newVal) {
			for (const [key, value] of Object.entries(newVal)) {
				if (value !== null) {
					notify({
						title: value,
						type: key
					});
				}
			}
		}
	});
</script>
