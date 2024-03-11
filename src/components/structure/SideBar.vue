<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import { appStore } from '../../store/openStore'
    import sideOption from '../layout/sideOption.vue';
    import { useAuthStore } from '../../store/authStore';

    const app = appStore()
    const router = useRouter()
    const authStore = useAuthStore()

    const changeRoute = (payload: any) => {
        router.push(payload)
        app.setOpen()
    }

    const logout = () => {
        authStore.logoff()
    }

</script>

<template>
    <transition name="slide-fade">
        <aside class="w-5/6 bg-gataticos-darkest-blue flex flex-col fixed h-full z-30 shadow-xl" v-if="app.isOpen">
            <header class="p-4 w-full flex flex-row justify-start items-center text-gataticos-light-blue">
                <div class="relative overflow-hidden border-[0.15rem] rounded-full mr-2">
                    <!-- <img src="../../assets/gataticos.svg" alt="" class="w-[3.5rem]"> -->
                    <img :src="authStore.userDetail ? authStore.userDetail.photoURL : '../../assets/gataticos.svg'" alt="" class="w-[3.5rem]">
                </div>
                <div class="flex flex-col">
                    <span class="text-lg font-bold tracking-tighter">Bem Vindo</span>
                    <span class="text-xs tracking-tighter font-semibold">{{ authStore.userDetail ? authStore.userDetail.email : 'Não identificado' }}</span>
                </div>
            </header>
            <div class="flex flex-row items-center justify-center my-6">
                <div class="content-[''] w-11/12 h-[0.05rem] bg-gataticos-grey-blue rounded-md flex justify-center"></div>
            </div>
            <main class="flex flex-col px-2 py-4 gap-6 w-full mb-auto">
                <sideOption icon="fas fa-house" title="início" @click="changeRoute('/')"/>
                <sideOption icon="fas fa-list" title="listas de tarefas" @click="changeRoute('/listas')"/>
                <sideOption icon="fas fa-clipboard-check" title="listas concluídas" @click="changeRoute('/concluidas')"/>
                <sideOption icon="fas fa-filter" title="cadastro de categorias" @click="changeRoute('/categorias')"/>
                <sideOption icon="fas fa-trash-can" title="listas arquivadas" @click="changeRoute('/arquivadas')"/>
            </main>
            <footer class="mt-auto w-full flex items-center justify-center py-4 px-2">
                <button class="w-11/12 rounded-md bg-gataticos-light-blue px-4 py-2 flex flex-row justify-between items-center" @click="logout">
                    <span class="flex-1 font-semibold tracking-tighter text-lg">Sair</span>
                    <i class="fas fa-angle-right"></i>
                </button>
            </footer>
        </aside>
    </transition>

</template>

<style>
    .slide-fade-enter-active {
    transition: all 0.1s ease-in-out;
    }

    .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
    }
</style>