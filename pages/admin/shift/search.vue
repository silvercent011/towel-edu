<script setup lang="ts">
const route = useRoute();

const filter = route.query.term
  ? `title ~ "${route.query.term}"`
  : `title ~ ""`;

const shifts = await usePB().collection("shift").getList(1, 50, {
  filter,
});
</script>

<template>
  <BContainer>
    <HeaderPage :title="`Pesquisa por ''${route.query.term}'' em Turnos`" />

    <ShiftCard
      v-for="shift in shifts.items"
      :key="shift.id"
      class="my-3"
      :shift="shift"
    >
      <BButton variant="primary" :to="`/admin/shift/${shift.id}`"
        >Detalhes</BButton
      >
    </ShiftCard>
  </BContainer>
</template>
