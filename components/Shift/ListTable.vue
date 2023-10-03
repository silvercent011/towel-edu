<script setup lang="ts">
interface Shift {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  title: string;
  updated: string;
}

interface ListTableProps {
  shifts: Shift[];
}

defineProps<ListTableProps>();

function toShiftPage(id: string) {
  navigateTo(`/admin/shift/${id}`);
}
</script>

<template>
  <BTableSimple hover responsive>
    <BThead head-variant="dark">
      <BTr>
        <BTh>ID</BTh>
        <BTh>Turno</BTh>
        <BTh>Criado Em</BTh>
        <BTh>Atualizado Em</BTh>
      </BTr>
    </BThead>
    <BTbody>
      <BTr v-for="shift in shifts" @click="toShiftPage(shift.id)">
        <BTd>{{ shift.id }}</BTd>
        <BTd>{{ shift.title }}</BTd>
        <BTd>{{ shift.created }}</BTd>
        <BTd>{{ shift.updated }}</BTd>
      </BTr>
    </BTbody>
  </BTableSimple>
</template>
