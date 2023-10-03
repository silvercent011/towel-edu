<script setup lang="ts">
import { RecordModel } from "pocketbase";

defineProps<{ shift: RecordModel }>();
</script>

<template>
  <BCard>
    <BCardBody>
      <BCardTitle> Turno: {{ shift.title }} </BCardTitle>
      <span>Criado em: {{ shift.created }}</span>
      <br />
      <span>Atualizado em: {{ shift.updated }}</span>
      <br />
      <span>ID: {{ shift.id }}</span>
      <br />
      <slot />
    </BCardBody>
  </BCard>
</template>
