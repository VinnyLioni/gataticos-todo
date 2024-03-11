<script setup lang="ts">
    import menuOption from '../components/layout/menuOption.vue';
    import MenuStyle from '../components/structure/MenuStyle.vue';
</script>

<template>
    <MenuStyle title="listas arquivadas" icon="fas fa-trash-can">
            <template #options>
                <menuOption title="listas de tarefas" icon="fas fa-list"/>
            </template>
    </MenuStyle>
</template>