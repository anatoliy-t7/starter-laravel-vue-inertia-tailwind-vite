<template>
    <div
        class="items-top dark:bg-slate-900 sm:items-center sm:pt-0 bg-slate-100 relative flex justify-center min-h-screen">
        <div class="sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
            <h1 class="pb-2 text-4xl">{{ title }}</h1>
            <div>{{ description }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        status: Number,
    },
    computed: {
        title() {
            return {
                503: '503: Service Unavailable',
                500: '500: Server Error',
                404: '404: Page Not Found',
                403: '403: Forbidden',
            }[this.status]
        },
        description() {
            return {
                503: 'Sorry, we are doing some maintenance. Please check back soon.',
                500: 'Whoops, something went wrong on our servers.',
                404: 'Sorry, the page you are looking for could not be found.',
                403: 'Sorry, you are forbidden from accessing this page.',
            }[this.status]
        },
    },
}
</script>
