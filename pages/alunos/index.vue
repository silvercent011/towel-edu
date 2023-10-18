<script setup lang="ts">
import Students from "~icons/mdi/account-school";
</script>

<template>
  <main class="container">
    <HeaderPage title="Alunos">
      <template #icon>
        <Students />
      </template>
    </HeaderPage>
    <BContainer>
      <BRow>
        <StudentMainTable />
      </BRow>
    </BContainer>
  </main>
</template>
