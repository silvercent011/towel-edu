<script setup lang="ts">
import { RecordModel } from "pocketbase";

defineProps<{ class_: RecordModel }>();
</script>

<template>
  <BCard>
    <BCardBody>
      <BCardTitle> Turma: {{ class_.title }} </BCardTitle>
      <span>Criado em: {{ class_.created }}</span>
      <br />
      <span>Atualizado em: {{ class_.updated }}</span>
      <br />
      <span>ID: {{ class_.id }}</span>
      <br />
      <slot />
    </BCardBody>
  </BCard>
</template>
