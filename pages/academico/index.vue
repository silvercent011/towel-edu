<script setup lang="ts">
import Academic from "~icons/mdi/academic-cap";
</script>

<template>
  <main class="container">
    <HeaderPage title="Acadêmico">
      <template #icon>
        <Academic />
      </template>
    </HeaderPage>

    <BTabs justified>
      <BTab title="Turmas">
        <ClassMainTable />
      </BTab>
      <BTab title="Unidades">
        <!-- <UnitMainTable /> -->
      </BTab>
      <BTab title="Avaliações">
        <!-- <UnitMainTable /> -->
      </BTab>
      <BTab title="Disciplinas">
        <!-- <UnitMainTable /> -->
      </BTab>
    </BTabs>
  </main>
</template>
