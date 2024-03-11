<script setup lang="ts">
    import menuOption from '../components/layout/menuOption.vue';
    import MenuStyle from '../components/structure/MenuStyle.vue';
</script>

<template>
    <MenuStyle title="cadastro de categorias" icon="fas fa-filter">
            <template #options>
                <menuOption title="listas de tarefas" icon="fas fa-list"/>
            </template>
    </MenuStyle>
</template>