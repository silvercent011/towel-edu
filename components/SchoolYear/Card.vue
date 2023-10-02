<script setup lang="ts">
import { RecordModel } from "pocketbase";

defineProps<{ school_year: RecordModel }>();
</script>

<template>
  <BCard>
    <BCardBody>
      <BCardTitle> Ano: {{ school_year.title }} </BCardTitle>
      <span>Criado em: {{ school_year.created }}</span>
      <br />
      <span>Atualizado em: {{ school_year.updated }}</span>
      <br />
      <span>ID: {{ school_year.id }}</span>
      <br />
      <slot />
    </BCardBody>
  </BCard>
</template>
