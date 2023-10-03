<script setup lang="ts">
const route = useRoute();

const filter = route.query.term
  ? `title ~ "${route.query.term}"`
  : `title ~ ""`;

const grades = await usePB().collection("grade").getList(1, 50, {
  filter,
});
</script>

<template>
  <BContainer>
    <HeaderPage :title="`Pesquisa por ''${route.query.term}'' em Séries`" />

    <GradeCard
      v-for="grade in grades.items"
      :key="grade.id"
      class="my-3"
      :grade="grade"
    >
      <BButton variant="primary" :to="`/admin/grade/${grade.id}`"
        >Detalhes</BButton
      >
    </GradeCard>
  </BContainer>
</template>
