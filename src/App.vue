<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useAuthStore } from './store/authStore';
  // import toast from './components/layout/toast.vue';

  const authStore = useAuthStore()

  onMounted(() => {
    authStore.init()
  })

</script>

<template>
  <!-- <div class="flex flex-row justify-center">
    <toast />
  </div> -->
  <RouterView v-slot="{ Component }">
    <transition name="page-slide" mode="out-in">
      <component :is="Component"/>
    </transition>
  </RouterView>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}

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
