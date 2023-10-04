<script setup lang="ts">
const { GetAllShifts } = useShift();

const shifts = (await GetAllShifts()) as any[];
</script>

<template>
  <BContainer gutter-y="5">
    <BRow class="my-3 w-full">
      <BCol sm="8">
        <ShiftSearchBar />
      </BCol>
      <BCol sm="4">
        <BButton to="/admin/shift/create" class="w-100" variant="primary"
          >Criar Turno</BButton
        >
      </BCol>
    </BRow>
    <BRow>
      <ShiftListTable :shifts="shifts" />
    </BRow>
  </BContainer>
</template>
