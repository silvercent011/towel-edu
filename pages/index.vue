<script setup lang="ts">
const UserData = computed(() => usePB().authStore.model);
const config = useRuntimeConfig();
</script>

<template>
  <div class="container py-4">
    <header class="pb-3 mb-4 border-bottom">
      <a
        href="/"
        class="d-flex align-items-center text-body-emphasis text-decoration-none"
      >
        <span class="fs-4">{{
          config.public.instance.name || `Towel Edu`
        }}</span>
      </a>
    </header>

    <div class="p-5 mb-4 bg-primary text-white rounded-3">
      <div class="container-fluid py-5" v-if="UserData">
        <h1 class="display-5 fw-bold">
          Oi, {{ UserData.name.split(" ")[0] }}! :D
        </h1>
        <p class="col-md-8 fs-4">entrou como {{ UserData.email }}</p>
      </div>
    </div>
  </div>
</template>
