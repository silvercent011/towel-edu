<script setup lang="ts">
const { GetAllTopics } = useTopic();

const topics = (await GetAllTopics()) as any[];
</script>

<template>
  <BContainer gutter-y="5">
    <BRow class="my-3 w-full">
      <BCol sm="8">
        <TopicSearchBar />
      </BCol>
      <BCol sm="4">
        <BButton to="/admin/topic/create" class="w-100" variant="primary"
          >Criar Matéria</BButton
        >
      </BCol>
    </BRow>
    <BRow>
      <TopicListTable :topics="topics" />
    </BRow>
  </BContainer>
</template>
