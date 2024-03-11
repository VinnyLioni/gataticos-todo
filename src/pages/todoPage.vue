<script setup lang="ts">
    import MenuStyle from '../components/structure/MenuStyle.vue';
    import noteDoc from '../components/layout/noteDoc.vue';
    import { ref } from 'vue';

    interface Task {
        text: string;
        completed: boolean;
    }

    interface List {
        title: string;
        tasks: Task[];
    }

    const modalOpened = ref<boolean>(false);
    const title = ref<string>('');
    const tasks = ref<Task[]>([]);
    const lists = ref<List[]>([]);

    const addNote = () => {
        modalOpened.value = !modalOpened.value;
    }

    const addTask = () => {
        tasks.value.push({ text: '', completed: false });
    }

    const removeTask = (index: number) => {
        tasks.value.splice(index, 1);
    }

    const saveList = () => {
        lists.value.push({ title: title.value, tasks: tasks.value });
        title.value = '';
        tasks.value = [];
        modalOpened.value = false;
        console.log(lists)
    }
</script>

<template>
    <MenuStyle title="listas" icon="fas fa-list">
        <template #button>
            <button class="bg-gataticos-light-blue px-2 py-1 ml-auto gap-1 mr-4 rounded-md flex flex-row items-center justify-center" @click="addNote">
                <i class="fas fa-plus"></i>
                <span class="capitalize font-semibold tracking-tighter">adicionar</span>
            </button>
        </template>
        <template #any>
            <div class="flex flex-row w-full items-start justify-center flex-wrap h-[35rem] overflow-auto">
                <div v-for="(list, index) in lists" :key="index">
                    <noteDoc :title="list.title" :tasks="list.tasks"/>
                </div>
            </div>
            <Teleport to="body">
                <Transition name="page-slide" mode="out-in">
                    <div v-if="modalOpened" class="flex flex-col items-center justify-center shadow-md border-sm w-full h-full fixed top-0 backdrop-blur-sm z-50">
                        <div class="bg-gataticos-grey-blue shadow-md w-72 h-auto p-4 rounded-sm flex flex-col items-center justify-center">
                            <header class="flex flex-row items-center justify-center w-full">
                                <div class="text-gataticos-light-blue flex flex-row items-center justify-center gap-2 text-lg font-semibold tracking-tighter">
                                    <i class="fas fa-pen-to-square"></i>
                                    <span>Nova Lista</span>
                                </div>
                                <button class="ml-auto px-3 py-1 bg-gataticos-light-red text-gataticos-light-blue text-lg rounded-md" @click="addNote()">
                                    <i class="fas fa-close"></i>
                                </button>
                            </header>
                            <main class="w-full flex flex-col justify-center items-center mt-4">
                                <div class="w-full">
                                    <label for="" class="capitalize text-lg text-gataticos-light-blue tracking-tighter font-semibold">título</label>
                                    <input v-model="title" type="text" class="w-full rounded-md bg-slate-700 px-2 py-1 outline-0 focus:border-gataticos-medium-blue border-[1px] border-slate-700 duration-200 text-gataticos-light-blue font-semibold tracking-tight text-lg">
                                </div>
                                <div class="w-full my-4 flex flex-col items-center justify-center">
                                    <header class="w-full flex flex-row items-center justify-start pb-2">
                                        <label class="capitalize text-lg text-gataticos-light-blue tracking-tight font-semibold">tarefas</label>
                                        <button @click="addTask" class="flex flex-row gap-1 items-center justify-center ml-auto bg-gataticos-light-blue text-gataticos-dark-blue font-semibold tracking-tighter px-2 py-1 rounded-md">
                                            <i class="fas fa-plus"></i>
                                            <span class="capitalize tracking-tighter font-semibold">incluir</span>
                                        </button>
                                    </header>
                                    <div class="w-full h-full bg-slate-700 px-2 py-1 min-h-12 rounded-md shadow-md">
                                        <div v-for="(task, index) in tasks" :key="index" class="flex items-center">
                                            <!-- <input v-model="task.completed" type="checkbox" class="mr-2"> -->
                                            <!-- <div class="px-2 text-gataticos-light-blue text-sm">{{ index + 1 }}</div> -->
                                            <input v-model="task.text" type="text" class="text-sm w-full rounded-md bg-slate-700 px-2 py-3 outline-0 focus:border-gataticos-medium-blue border-[1px] border-slate-700 duration-200 text-gataticos-light-blue font-semibold tracking-tight">
                                            <button @click="removeTask(index)" class="px-2">
                                                <i class="fas fa-trash text-gataticos-light-blue"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <footer class="mt-auto w-full">
                                <button @click="saveList" class="bg-green-600 w-full rounded-md px-2 py-1 text-gataticos-light-blue flex flex-row items-center justify-center">
                                    <span class="capitalize font-semibold text-lg tracking-tighter flex-1">salvar</span>
                                    <i class="ml-auto fas fa-circle-check"></i>
                                </button>
                            </footer>
                        </div>
                    </div>
                </Transition>
            </Teleport>
        </template>
    </MenuStyle>
</template>

<style>
    .page-slide-enter-active,
    .page-slide-leave-active {
        transition: 300ms ease all;
    }

    .page-slide-enter-from,
    .page-slide-leave-to {
        opacity: 0;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
