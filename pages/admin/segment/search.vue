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
    <div class="container my-4">
      <h1>Pesquisa por "{{ route.query.term }}" em Segmentos</h1>
      <hr />
    </div>

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
