<script setup lang="ts">
const route = useRoute();

const filter = route.query.term
  ? `title ~ "${route.query.term}"`
  : `title ~ ""`;

const topics = await usePB().collection("topic").getList(1, 50, {
  filter,
});
</script>

<template>
  <BContainer>
    <HeaderPage :title="`Pesquisa por ''${route.query.term}'' em Matérias`" />

    <TopicCard
      v-for="topic in topics.items"
      :key="topic.id"
      class="my-3"
      :topic="topic"
    >
      <BButton variant="primary" :to="`/admin/topic/${topic.id}`"
        >Detalhes</BButton
      >
    </TopicCard>
  </BContainer>
</template>
