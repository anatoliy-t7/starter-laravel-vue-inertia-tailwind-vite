import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

import Vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [
		laravel({
			input: ['resources/js/app.js'],
			refresh: true
		}),

		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			imports: ['vue', 'vue/macros'],
			vueTemplate: true,
			dirs: [
				//"@/Components",
				// './composables' // only root modules
				// './composables/**', // all nested modules
				// ...
			]
		}),

		// https://github.com/antfu/unplugin-vue-components
		Components({
			// dirs: ["@/Components"],
			extensions: ['vue'],
			resolvers: [IconsResolver()]
		}),

		// https://github.com/antfu/unplugin-icons
		Icons({
			//scale: 1.2, // Scale of icons against 1em
			defaultClass: 'w-6 h-6', // Class names apply to icons
			compiler: 'vue3' // 'vue2', 'vue3', 'jsx'
		}),

		Vue({
			include: [/\.vue$/],
			reactivityTransform: true
		})
	],
	build: {
		sourcemap: false,
		devSourcemap: true
	},
	css: {
		devSourcemap: true
	},
	resolve: {
		alias: {
			'@': '/resources/js'
		}
	}
});
