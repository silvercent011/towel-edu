<script setup lang="ts">
interface HeaderPageProps {
  title: string;
}

defineProps<HeaderPageProps>();
</script>

<template>
  <div class="container my-4">
    <h1>{{ title }}</h1>
    <hr />
  </div>
</template>
