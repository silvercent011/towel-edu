<script setup lang="ts">
import { RecordModel } from "pocketbase";

defineProps<{ segment: RecordModel }>();
</script>

<template>
  <BCard>
    <BCardBody>
      <BCardTitle> Segmento: {{ segment.title }} </BCardTitle>
      <span>Criado em: {{ segment.created }}</span>
      <br />
      <span>Atualizado em: {{ segment.updated }}</span>
      <br />
      <span>ID: {{ segment.id }}</span>
      <br />
      <slot />
    </BCardBody>
  </BCard>
</template>
