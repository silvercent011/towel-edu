<script setup lang="ts">
const { GetAllStudents } = useStudent();

const students = (await GetAllStudents()) as any[];
</script>

<template>
  <BRow class="w-full">
    <BCol sm="8">
      <StudentSearchBar />
    </BCol>
    <BCol sm="4">
      <BButton to="/alunos/create" class="w-100" variant="primary"
        >Cadastrar Aluno</BButton
      >
    </BCol>
  </BRow>
  <BRow class="row-cols-1 row-cols-md-2 g-2">
    <BCol v-for="student in students" :key="student.id">
      <StudentCard :student="student">
        <BButton>Detalhes</BButton>
      </StudentCard>
    </BCol>
  </BRow>
</template>
