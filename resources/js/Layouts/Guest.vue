<template>
	<notifications position="bottom left" />
	<div
		class="sm:justify-center sm:pt-0 bg-slate-100 flex flex-col items-center min-h-screen pt-6">
		<div>
			<Link href="/">
				<BreezeApplicationLogo class="text-slate-500 w-24 h-24" />
			</Link>
		</div>

		<div
			class="sm:max-w-md sm:rounded-lg w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md">
			<slot />
		</div>
	</div>
</template>
<script setup>
	import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';
	import { Link } from '@inertiajs/inertia-vue3';
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
