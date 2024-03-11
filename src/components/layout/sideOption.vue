<script setup lang="ts">

    const props = defineProps({
        title: String,
        icon: String,
    })

    props.title
    props.icon
</script>

<template>
    <div class="flex flex-row gap-2  items-center w-full justify-start">
        <i :class="icon" class="w-1/5 text-start text-gataticos-light-green"></i>
        <span class="ml-2 text-lg font-semibold tracking-tighter capitalize w-full text-gataticos-light-blue">{{ title }}</span>
    </div>
</template>