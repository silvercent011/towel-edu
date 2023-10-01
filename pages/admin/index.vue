<template>
  <main class="container">
    <div class="container my-4">
      <h1>Administração</h1>
      <hr />
    </div>
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
