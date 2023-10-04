<script setup lang="ts">
interface HeaderPageProps {
  title: string;
}

defineProps<HeaderPageProps>();
</script>

<template>
  <div class="container mt-4">
    <slot />
    <h1 class="d-flex align-items-center gap-3">
      <slot name="icon" />{{ title }}
    </h1>
    <hr />
  </div>
</template>
