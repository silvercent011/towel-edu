<script setup lang="ts">
interface Class {
  active: boolean;
  collectionId: string;
  collectionName: string;
  created: string;
  expand: Expand;
  grade: string;
  id: string;
  school_year: string;
  shift: string;
  title: string;
  updated: string;
}

interface Expand {
  grade: Grade;
  school_year: SchoolYear;
  shift: Shift;
}

interface Grade {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  segment: string;
  title: string;
  updated: string;
}

interface SchoolYear {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  title: string;
  updated: string;
}

interface Shift {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  title: string;
  updated: string;
}

interface ListTableProps {
  classes: Class[];
}

defineProps<ListTableProps>();
</script>

<template>
  <BTableSimple hover responsive>
    <BThead head-variant="dark">
      <BTr>
        <BTh>ID</BTh>
        <BTh>Turma</BTh>
        <BTh>Série</BTh>
        <BTh>Turno</BTh>
        <BTh>Ano Letivo</BTh>
        <BTh>Criado Em</BTh>
        <BTh>Atualizado Em</BTh>
      </BTr>
    </BThead>
    <BTbody>
      <BTr v-for="year in classes">
        <BTd>{{ year.id }}</BTd>
        <BTd>{{ year.title }}</BTd>
        <BTd>{{ year.expand.grade.title }}</BTd>
        <BTd>{{ year.expand.shift.title }}</BTd>
        <BTd>{{ year.expand.school_year.title }}</BTd>
        <BTd>{{ year.created }}</BTd>
        <BTd>{{ year.updated }}</BTd>
      </BTr>
    </BTbody>
  </BTableSimple>
</template>
