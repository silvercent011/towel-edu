<script setup lang="ts">
const { GetAllClasses } = useClass();

const classes = (await GetAllClasses()) as any[];
</script>

<template>
  <BContainer gutter-y="5">
    <BRow class="my-3 w-full">
      <BCol sm="8">
        <ClassSearchBar />
      </BCol>
      <BCol sm="4">
        <BButton to="/academico/class/create" class="w-100" variant="primary"
          >Criar Turma</BButton
        >
      </BCol>
    </BRow>
    <BRow>
      <ClassListTable :classes="classes" />
    </BRow>
  </BContainer>
</template>
