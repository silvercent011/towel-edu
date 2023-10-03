<script setup lang="ts">
import { RecordModel } from "pocketbase";

defineProps<{ grade: RecordModel }>();
</script>

<template>
  <BCard>
    <BCardBody>
      <BCardTitle> Série: {{ grade.title }} </BCardTitle>
      <span>Criado em: {{ grade.created }}</span>
      <br />
      <span>Atualizado em: {{ grade.updated }}</span>
      <br />
      <span>ID: {{ grade.id }}</span>
      <br />
      <slot />
    </BCardBody>
  </BCard>
</template>
