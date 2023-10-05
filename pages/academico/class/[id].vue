<script setup lang="ts">
const { GetClassByID } = useClass();

const { id } = useRoute().params as Record<any, any>;

const data = await GetClassByID(id);
</script>

<template>
  <BContainer>
    <HeaderPage :title="`Turma - ${data.title}`" />
    <ClassCard :class_="data" />
  </BContainer>
</template>
