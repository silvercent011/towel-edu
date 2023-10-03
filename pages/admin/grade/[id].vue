<script setup lang="ts">
const { GetGradeByID } = useGrade();

const { id } = useRoute().params as Record<any, any>;

const data = await GetGradeByID(id);
</script>

<template>
  <BContainer>
    <HeaderPage :title="`Série - ${data.title}`" />
    <GradeCard :grade="data" />
  </BContainer>
</template>
