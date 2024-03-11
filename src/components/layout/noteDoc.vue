<script setup lang="ts">
    import { defineProps } from 'vue';

    interface Task {
        text: string;
        completed: boolean;
    }

    const props = defineProps({
        title: String,
        tasks: Array as () => Task[] // Informando o tipo de elementos do array como Task
    });
</script>

<template>
    <div class="w-80 my-2 flex flex-col items-center justify-center">
        <header class="bg-gataticos-light-blue w-full px-4 py-2 rounded-t-md font-semibold tracking-tighter flex flex-row justify-center items-center">
            <span>{{ props.title }}</span>
            <button class="ml-auto px-2 py-1 hover:bg-gataticos-grey-blue hover:shadow-md hover:text-gataticos-light-blue rounded-md duration-200">
                <i class="fas fa-pen"></i>
            </button>
        </header>
        <main class="border-[1px] w-full border-gataticos-light-blue border-b-0 px-4 py-2 shadow-md flex flex-col items-center justify-start">
            <div v-for="(task, index) in props.tasks" :key="index" class="flex flex-row w-full items-center justify-between text-gataticos-light-blue tracking-tighter font-semibold text-sm gap-2">
                <input type="checkbox" :id="'task-' + index" class="w-4 h-4 appearance-none bg-gataticos-light-blue duration-200 checked:bg-green-600 rounded-full :bg-slate-400">
                <label :for="'task-' + index" class="flex flex-wrap py-2">{{ task.text }}</label>
            </div>
        </main>
        <footer class="mt-auto w-full">
            <button class="w-full rounded-b-md py-2 bg-green-600 text-gataticos-light-blue">
                <span class="capitalize tracking-tighter font-semibold">salvar alterações</span>
            </button>
        </footer>
    </div>
</template>
