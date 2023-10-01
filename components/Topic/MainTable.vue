<script setup lang="ts">
const topics = (await usePB().collection("topic").getFullList({
  sort: "-created",
})) as any[];
</script>

<template>
  <BContainer gutter-y="5">
    <BRow class="my-3 w-full">
      <BCol sm="8">
        <BFormInput placeholder="Buscar Matéria" type="search" />
      </BCol>
      <BCol sm="4">
        <BButton class="w-100" variant="primary">Criar Matéria</BButton>
      </BCol>
    </BRow>
    <BRow>
      <TopicListTable :topics="topics" />
    </BRow>
  </BContainer>
</template>
