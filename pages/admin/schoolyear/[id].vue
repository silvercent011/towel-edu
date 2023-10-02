<script setup lang="ts">
const { GetSchoolYearByID } = useSchoolYear();

const { id } = useRoute().params as Record<any, any>;

const data = await GetSchoolYearByID(id);
</script>

<template>
  <BContainer>
    <div class="container my-4">
      <h1>Ano Letivo - {{ data.title }}</h1>
      <hr />
    </div>

    <SchoolYearCard :school_year="data" />
    <BCard class="mt-3" v-if="data.expand && data.expand['class(school_year)']">
      <BCardBody>
        <BCardTitle> Turmas </BCardTitle>
        <BTableSimple hover responsive>
          <BThead head-variant="dark">
            <BTr>
              <BTh>ID</BTh>
              <BTh>Turma</BTh>
              <BTh>Criado Em</BTh>
              <BTh>Atualizado Em</BTh>
            </BTr>
          </BThead>
          <BTbody>
            <BTr v-for="shift in data.expand['class(school_year)']">
              <BTd>{{ shift.id }}</BTd>
              <BTd>{{ shift.title }}</BTd>
              <BTd>{{ shift.created }}</BTd>
              <BTd>{{ shift.updated }}</BTd>
            </BTr>
          </BTbody>
        </BTableSimple>
      </BCardBody>
    </BCard>
  </BContainer>
</template>
