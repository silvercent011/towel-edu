<script setup lang="ts">
const route = useRoute();

const filter = route.query.term ? `title ~ ${route.query.term}` : `title ~ ""`;

const schoolYears = await usePB().collection("school_year").getList(1, 50, {
  filter,
});
</script>

<template>
  <BContainer>
    <HeaderPage
      :title="`Pesquisa por ''${route.query.term}'' em Anos Letivos`"
    />

    <SchoolYearCard
      v-for="school_year in schoolYears.items"
      :key="school_year.id"
      class="my-3"
      :school_year="school_year"
    >
      <BButton variant="primary" :to="`/admin/schoolyear/${school_year.id}`"
        >Detalhes</BButton
      >
    </SchoolYearCard>
  </BContainer>
</template>
