<script setup lang="ts">
    import inputLogin from '../components/layout/inputLogin.vue'

    import { useAuthStore } from '../store/authStore'

    const authStore = useAuthStore()

    const loginGoogle = () => {
        authStore.loginGoogle()
    }
</script>

<template>
    <div class="flex flex-row h-full">
        <div class="hidden sm:flex relative shadow-md bg-gataticos-light-blue bg-slate h-screen w-8/12 p-10 overflow-hidden">
            <img src="../assets/Checklist-bro.svg" alt="" class="z-30">
            <img src="../assets/rainbow-vortex.svg" alt="" class="z-10 absolute inset-0 w-full h-full object-cover -scale-x-[1]">
        </div>
        <div class="bg-slate-900 h-screen w-full sm:w-7/12 p-10 relative overflow-hidden flex flex-col items-center justify-center">
            <header class="relative flex justify-center items-center">
                <div class="flex flex-col text-end text-gataticos-light-blue">
                    <span class="capitalize text-3xl font-bold tracking-tighter sm:text-5xl">gataticos<span class="text-gataticos-light-green">ToDo</span></span>
                    <span class="capitalize text-[0.8rem] sm:text-lg">A sua lista de tarefas.</span>
                </div>
                <img src="../assets/gataticos.svg" alt="" class="w-16 sm:w-32">
            </header>
            <main class="w-full flex flex-col items-center gap-2 h-full">
                <button class="bg-gataticos-light-blue px-4 py-2 w-full rounded-sm mt-6 flex flex-row justify-between items-center sm:w-8/12" @click="loginGoogle">
                    <span class="flex-1 capitalize text-gataticos-dark-blue font-medium tracking-tighter">login com google</span>
                    <i class="fab fa-google"></i>
                </button>
                <div class="flex flex-row justify-center items-center w-full gap-2 my-6">
                    <div class="content-[''] w-3/12 h-[0.05rem] rounded-sm bg-gataticos-light-blue"></div>
                    <span class="text-[0.5rem] text-center text-gataticos-light-blue">ou preencha as credenciais</span>
                    <div class="content-[''] w-3/12 h-[0.05rem] rounded-sm bg-gataticos-light-blue"></div>
                </div>
                <form action="" class="w-full flex flex-col gap-4 items-center">
                    <inputLogin title="Preencha seu E-mail" customType="email" customPlaceholder="email@email.com"/>
                    <inputLogin title="Preencha sua senha" customType="password" customPlaceholder="senha"/>
                    <span class="capitalize text-xs text-gataticos-light-blue text-center my-2">esqueceu a senha?</span>
                    <button class="bg-green-600 w-full sm:w-8/12 rounded-sm px-4 py-2 flex flex-row justify-between items-center">
                        <span class="flex-1 text-gataticos-light-blue text-lg tracking-tighter font-medium">Entrar</span>
                        <i class="fas fa-angle-right text-gataticos-light-blue ml-auto"></i>
                    </button>
                </form>
                <div class="my-6">
                    <span class="text-xs text-gataticos-light-blue">Não possui conta? Cadastre-se</span>
                </div>
            </main>
            <footer class="mt-auto">
                <span></span>
            </footer>
        </div>
    </div>
</template>