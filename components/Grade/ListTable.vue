<script setup lang="ts">
interface Grade {
  collectionId: string;
  collectionName: string;
  created: string;
  expand: Expand;
  id: string;
  segment: string;
  title: string;
  updated: string;
}

interface Expand {
  segment: Segment;
}

interface Segment {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  title: string;
  updated: string;
}

interface ListTableProps {
  grades: Grade[];
}

defineProps<ListTableProps>();
</script>

<template>
  <BTableSimple hover responsive>
    <BThead head-variant="dark">
      <BTr>
        <BTh>ID</BTh>
        <BTh>Série</BTh>
        <BTh>Segmento</BTh>
        <BTh>Criado Em</BTh>
        <BTh>Atualizado Em</BTh>
      </BTr>
    </BThead>
    <BTbody>
      <BTr v-for="grade in grades">
        <BTd>{{ grade.id }}</BTd>
        <BTd>{{ grade.title }}</BTd>
        <BTd>{{ grade.expand.segment.title }}</BTd>
        <BTd>{{ grade.created }}</BTd>
        <BTd>{{ grade.updated }}</BTd>
      </BTr>
    </BTbody>
  </BTableSimple>
</template>
