<script setup lang="ts">
const schoolYears = (await usePB().collection("school_year").getFullList({
  sort: "-created",
})) as any[];
</script>

<template>
  <BContainer gutter-y="5">
    <BRow class="my-3 w-full">
      <BCol sm="8">
        <SchoolYearSearchBar />
      </BCol>
      <BCol sm="4">
        <BButton to="/admin/schoolyear/create" class="w-100" variant="primary"
          >Criar Ano Letivo</BButton
        >
      </BCol>
    </BRow>
    <BRow>
      <SchoolYearListTable :school-years="schoolYears" />
    </BRow>
  </BContainer>
</template>
