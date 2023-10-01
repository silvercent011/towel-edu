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
      <BTr v-for="year in topics">
        <BTd>{{ year.id }}</BTd>
        <BTd>{{ year.title }}</BTd>
        <BTd>{{ year.created }}</BTd>
        <BTd>{{ year.updated }}</BTd>
      </BTr>
    </BTbody>
  </BTableSimple>
</template>
