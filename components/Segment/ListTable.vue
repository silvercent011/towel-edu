<script setup lang="ts">
interface Segment {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  title: string;
  updated: string;
}

interface ListTableProps {
  segments: Segment[];
}

defineProps<ListTableProps>();

function toSegmentPage(id: string) {
  navigateTo(`/admin/segment/${id}`);
}
</script>

<template>
  <BTableSimple hover responsive>
    <BThead head-variant="dark">
      <BTr>
        <BTh>ID</BTh>
        <BTh>Segmento</BTh>
        <BTh>Criado Em</BTh>
        <BTh>Atualizado Em</BTh>
      </BTr>
    </BThead>
    <BTbody>
      <BTr v-for="year in segments" @click="toSegmentPage(year.id)">
        <BTd>{{ year.id }}</BTd>
        <BTd>{{ year.title }}</BTd>
        <BTd>{{ year.created }}</BTd>
        <BTd>{{ year.updated }}</BTd>
      </BTr>
    </BTbody>
  </BTableSimple>
</template>
