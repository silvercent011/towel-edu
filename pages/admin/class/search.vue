<script setup lang="ts">
const route = useRoute();

const filter = route.query.term
  ? `title ~ "${route.query.term}"`
  : `title ~ ""`;

const classes = await usePB().collection("class").getList(1, 50, {
  filter,
});
</script>

<template>
  <BContainer>
    <HeaderPage :title="`Pesquisa por ''${route.query.term}'' em Séries`" />

    <ClassCard
      v-for="class_ in classes.items"
      :key="class_.id"
      class="my-3"
      :class_="class_"
    >
      <BButton variant="primary" :to="`/admin/class/${class_.id}`"
        >Detalhes</BButton
      >
    </ClassCard>
  </BContainer>
</template>
