<script setup lang="ts">
const classes = (await usePB().collection("class").getFullList({
  sort: "-created",
  expand: `grade,school_year,shift`,
})) as any[];
</script>

<template>
  <BContainer gutter-y="5">
    <BRow class="my-3 w-full">
      <BCol sm="8">
        <BFormInput placeholder="Buscar Turma" type="search" />
      </BCol>
      <BCol sm="4">
        <BButton class="w-100" variant="primary">Criar Turma</BButton>
      </BCol>
    </BRow>
    <BRow>
      <ClassListTable :classes="classes" />
    </BRow>
  </BContainer>
</template>
