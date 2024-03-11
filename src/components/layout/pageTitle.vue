<script setup lang="ts">
    const props = defineProps({
        icon: String,
        title: String
    })

    props.icon
    props.title

</script>

<template>
    <header class="p-4 text-gataticos-light-blue flex flex-row items-center">
        <i :class="icon" class="text-2xl mr-2"></i>
        <span class="text-2xl font-semibold tracking-tighter capitalize">{{ title }}</span>
    </header>
</template>