<script setup lang="ts">
    import { appStore } from '../../store/openStore'
    import Title from '../layout/Title.vue';

    const app = appStore()

    const handleSide = () => {
        app.setOpen()
    }

</script>

<template>
    <header class="w-full px-6 py-4 flex flex-row items-center fixed z-20">
        <Title />
        <button class="ml-auto flex flex-col gap-2" @click="handleSide()">
            <div class="content-[''] w-8 h-1 rounded-md bg-gataticos-light-blue duration-200 ease-in" :class="app.isOpen ? 'bg-gataticos-light-green rotate-6' : ''"></div>
            <div class="content-[''] w-8 h-1 rounded-md bg-gataticos-light-blue duration-200 ease-in" :class="app.isOpen ? 'bg-gataticos-light-green' : ''"></div>
            <div class="content-[''] w-8 h-1 rounded-md bg-gataticos-light-blue duration-200 ease-in" :class="app.isOpen ? 'bg-gataticos-light-green -rotate-6' : ''"></div>
        </button>
    </header>
</template>