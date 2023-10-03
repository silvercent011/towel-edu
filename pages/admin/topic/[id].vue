<script setup lang="ts">
const { GetTopicByID } = useTopic();

const { id } = useRoute().params as Record<any, any>;

const data = await GetTopicByID(id);
</script>

<template>
  <BContainer>
    <div class="container my-4">
      <h1>Matéria - {{ data.title }}</h1>
      <hr />
    </div>

    <TopicCard :topic="data" />
  </BContainer>
</template>
