<script setup lang="ts">
const { GetShiftByID } = useShift();

const { id } = useRoute().params as Record<any, any>;

const data = await GetShiftByID(id);
</script>

<template>
  <BContainer>
    <div class="container my-4">
      <h1>Turno - {{ data.title }}</h1>
      <hr />
    </div>

    <ShiftCard :shift="data" />
  </BContainer>
</template>
