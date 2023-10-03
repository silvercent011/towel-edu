<script setup lang="ts">
const { GetGradeByID } = useGrade();

const { id } = useRoute().params as Record<any, any>;

const data = await GetGradeByID(id);
</script>

<template>
  <BContainer>
    <div class="container my-4">
      <h1>Série - {{ data.title }}</h1>
      <hr />
    </div>

    <GradeCard :grade="data" />
  </BContainer>
</template>
