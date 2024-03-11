<script setup lang="ts">
    const props = defineProps({
        title: String,
        icon: String
    })

    props.title
    props.icon
</script>

<template>
    <div class="bg-slate-800 p-4 mx-2 my-1 h-28 w-36 rounded-md shadow-md flex flex-col">
        <i :class="icon" class="text-4xl shadow-sm text-gataticos-light-green"></i>
        <span class="text-gataticos-light-blue capitalize font-semibold tracking-tighter text-xs mt-auto text-center">{{ title }}</span>
    </div>
</template>