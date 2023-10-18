<script setup lang="ts">
import { RecordModel } from "pocketbase";

defineProps<{ student: RecordModel }>();
</script>

<template>
  <BCard no-body class="overflow-hidden">
    <BRow class="g-0">
      <BCol md="4">
        <BCardImg
          :src="usePB().files.getUrl(student, student.photo)"
          :alt="student.name"
          class="rounded-0 img-aluno"
        />
      </BCol>
      <BCol md="8">
        <BCardBody>
          <BCardTitle> Nome: {{ student.name }} </BCardTitle>
          <span>Criado em: {{ student.created }}</span>
          <br />
          <span>Atualizado em: {{ student.updated }}</span>
          <br />
          <span>ID: {{ student.id }}</span>
          <br />
          <slot />
        </BCardBody>
      </BCol>
    </BRow>
  </BCard>
</template>

<style scoped>
.img-aluno {
  height: 100%;
  object-fit: cover;
}
</style>
