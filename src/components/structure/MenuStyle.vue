<script setup lang="ts">
    import pageTitle from '../layout/pageTitle.vue';

    const props = defineProps({
        icon: String,
        title: String
    })

    props.icon
    props.title
</script>

<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-row w-full items-center">
            <pageTitle :icon="icon" :title="title"/>
            <slot name="button"></slot>
        </div>
        <div class="flex flex-row flex-wrap justify-center items-center">
            <slot name="options"></slot>
        </div>
        <slot name="any"></slot>
    </div>
</template>