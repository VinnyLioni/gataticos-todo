<script setup lang="ts">
    import { defineProps } from 'vue'

    const props = defineProps({
        title: String,
        customType: String,
        customPlaceholder: String
    })

    props.title
    props.customType
    props.customPlaceholder

</script>

<template>
    <div class="flex flex-col w-full sm:w-8/12">
        <span class="capitalize tracking-tighter text-xs text-gataticos-light-blue">{{ title }}</span>
        <input 
            :type="customType" 
            :placeholder="customPlaceholder" 
            class="text-sm h-10 rounded-sm px-4 py-2 text-gataticos-dark-blue tracking-tight font-medium ease-in duration-100 outline-0 focus:outline-0 border-[1px] border-gataticos-light-blue focus:border-gataticos-medium-blue shadow-sm focus:shadow-gataticos-medium-blue"
        >
    </div>
</template>