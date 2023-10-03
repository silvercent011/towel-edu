<script setup lang="ts">
const route = useRoute();

const filter = route.query.term
  ? `title ~ "${route.query.term}"`
  : `title ~ ""`;

const segments = await usePB().collection("segment").getList(1, 50, {
  filter,
});
</script>

<template>
  <BContainer>
    <HeaderPage :title="`Pesquisa por ''${route.query.term}'' em Segmentos`" />

    <SegmentCard
      v-for="segment in segments.items"
      :key="segment.id"
      class="my-3"
      :segment="segment"
    >
      <BButton variant="primary" :to="`/admin/segment/${segment.id}`"
        >Detalhes</BButton
      >
    </SegmentCard>
  </BContainer>
</template>
