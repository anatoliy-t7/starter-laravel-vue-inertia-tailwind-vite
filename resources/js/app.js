import '/resources/css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { InertiaProgress } from '@inertiajs/progress';
import Notifications from '@kyvg/vue3-notification';
import Authenticated from '@/Layouts/Authenticated.vue';

const appName =
	window.document.getElementsByTagName('title')[0]?.innerText || 'App';

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.vue`,
			import.meta.glob('./Pages/**/*.vue')
		),
	setup({ el, app, props, plugin }) {
		createApp({ render: () => h(app, props) })
			.use(plugin)
			.use(Notifications)
			.component('Link', Link)
			.component('Head', Head)
			.component('Authenticated', Authenticated)
			.mixin({ methods: { route } })
			.mount(el);
	}
});

InertiaProgress.init({ color: '#6366f1' });
