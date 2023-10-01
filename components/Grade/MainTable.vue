<script setup lang="ts">
const grades = (await usePB().collection("grade").getFullList({
  sort: "-created",
  expand: `segment`,
})) as any[];
</script>

<template>
  <BContainer gutter-y="5">
    <BRow class="my-3 w-full">
      <BCol sm="8">
        <BFormInput placeholder="Buscar Série" type="search" />
      </BCol>
      <BCol sm="4">
        <BButton class="w-100" variant="primary">Criar Série</BButton>
      </BCol>
    </BRow>
    <BRow>
      <GradeListTable :grades="grades" />
    </BRow>
  </BContainer>
</template>
