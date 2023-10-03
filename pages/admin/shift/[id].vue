<script setup lang="ts">
const { GetShiftByID } = useShift();

const { id } = useRoute().params as Record<any, any>;

const data = await GetShiftByID(id);
</script>

<template>
  <BContainer>
    <HeaderPage :title="`Turno - ${data.title}`" />

    <ShiftCard :shift="data" />
  </BContainer>
</template>
