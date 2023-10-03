<script setup lang="ts">
import { RecordModel } from "pocketbase";

defineProps<{ topic: RecordModel }>();
</script>

<template>
  <BCard>
    <BCardBody>
      <BCardTitle> Matéria: {{ topic.title }} </BCardTitle>
      <span>Criado em: {{ topic.created }}</span>
      <br />
      <span>Atualizado em: {{ topic.updated }}</span>
      <br />
      <span>ID: {{ topic.id }}</span>
      <br />
      <slot />
    </BCardBody>
  </BCard>
</template>
