<script setup lang="ts">
    import menuOption from '../components/layout/menuOption.vue';
    import MenuStyle from '../components/structure/MenuStyle.vue';
</script>

<template>
    <MenuStyle title="listas concluídas" icon="fas fa-clipboard-check">
            <template #options>
                <menuOption title="listas de tarefas" icon="fas fa-list"/>
            </template>
    </MenuStyle>
</template>