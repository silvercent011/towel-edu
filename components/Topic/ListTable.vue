<script setup lang="ts">
interface Topic {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  title: string;
  updated: string;
}

interface ListTableProps {
  topics: Topic[];
}

defineProps<ListTableProps>();

function toTopicPage(id: string) {
  navigateTo(`/admin/topic/${id}`);
}
</script>

<template>
  <BTableSimple hover responsive>
    <BThead head-variant="dark">
      <BTr>
        <BTh>ID</BTh>
        <BTh>Matéria</BTh>
        <BTh>Criado Em</BTh>
        <BTh>Atualizado Em</BTh>
      </BTr>
    </BThead>
    <BTbody>
      <BTr v-for="topic in topics" @click="toTopicPage(topic.id)">
        <BTd>{{ topic.id }}</BTd>
        <BTd>{{ topic.title }}</BTd>
        <BTd>{{ topic.created }}</BTd>
        <BTd>{{ topic.updated }}</BTd>
      </BTr>
    </BTbody>
  </BTableSimple>
</template>
