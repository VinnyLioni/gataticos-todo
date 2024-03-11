<script setup lang="ts">
    import { onMounted, onUnmounted } from 'vue';
    import Header from '../components/structure/Header.vue';
    import Sidebar from '../components/structure/SideBar.vue';
    import { appStore } from '../store/openStore';
    import { RouterView } from 'vue-router';

    const app = appStore()

    const clickOutNav = (event: MouseEvent) => {
        const navBarElement = document.querySelector('aside')
        const buttonElement = document.querySelector('button')

        if (navBarElement && !navBarElement.contains(event.target as Node) && buttonElement && !buttonElement.contains(event.target as Node)) {
            app.setOpen
        }
    }

    onMounted(() => {
        document.addEventListener('click', clickOutNav)
    })

    onUnmounted(() => {
        document.removeEventListener('click', clickOutNav)
    })
</script>

<template>
    <div class="flex flex-col">
        <Header />
        <Sidebar />
        <RouterView v-slot="{ Component }" class="mt-20">
            <transition name="page-slide" mode="out-in">
                <component :is="Component"></component>
            </transition>
        </RouterView>
    </div>
</template>

<style>
    .page-opacity-enter-active,
    .page-opacity-leave-active {
        transition: 300ms ease all;
    } 

    .page-opacity-enter-from,
    .page-opacity-leave-to {
        opacity: 0;
    }

    .page-slide-enter-active,
    .page-slide-leave-active {
        transition: 300ms ease all;
    }

    .page-slide-enter-from,
    .page-slide-leave-to {
        opacity: 0;
        transform: translateX(-10px);
    }
</style>