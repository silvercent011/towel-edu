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

function toClassPage(id: string) {
  navigateTo(`/admin/class/${id}`);
}
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
      <BTr v-for="class_ in classes" @click="toClassPage(class_.id)">
        <BTd>{{ class_.id }}</BTd>
        <BTd>{{ class_.title }}</BTd>
        <BTd>{{ class_.expand.grade.title }}</BTd>
        <BTd>{{ class_.expand.shift.title }}</BTd>
        <BTd>{{ class_.expand.school_year.title }}</BTd>
        <BTd>{{ class_.created }}</BTd>
        <BTd>{{ class_.updated }}</BTd>
      </BTr>
    </BTbody>
  </BTableSimple>
</template>
