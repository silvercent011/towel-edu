<script setup lang="ts">
import Admin from "~icons/mdi/security";
</script>

<template>
  <main class="container">
    <HeaderPage title="Administração">
      <template #icon>
        <Admin />
      </template>
    </HeaderPage>

    <BTabs justified>
      <BTab title="Ano Letivos">
        <SchoolYearMainTable />
      </BTab>
      <BTab title="Segmentos">
        <SegmentMainTable />
      </BTab>
      <BTab title="Turnos">
        <ShiftMainTable />
      </BTab>
      <BTab title="Séries">
        <GradeMainTable />
      </BTab>
      <BTab title="Matéria">
        <TopicMainTable />
      </BTab>
      <BTab title="Turmas">
        <ClassMainTable />
      </BTab>
      <BTab title="Unidades">
        <!-- <UnitMainTable /> -->
      </BTab>
    </BTabs>
  </main>
</template>
