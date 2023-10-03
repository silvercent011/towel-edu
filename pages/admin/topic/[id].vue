<script setup lang="ts">
const { GetTopicByID } = useTopic();

const { id } = useRoute().params as Record<any, any>;

const data = await GetTopicByID(id);
</script>

<template>
  <BContainer>
    <HeaderPage :title="`Matéria - ${data.title}`" />

    <TopicCard :topic="data" />
  </BContainer>
</template>
