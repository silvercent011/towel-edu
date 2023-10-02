<script setup lang="ts">
const { GetSegmentByID } = useSegment();

const { id } = useRoute().params as Record<any, any>;

const data = await GetSegmentByID(id);
</script>

<template>
  <BContainer>
    <div class="container my-4">
      <h1>Segmento - {{ data.title }}</h1>
      <hr />
    </div>

    <SegmentCard :segment="data" />
    <BCard class="mt-3" v-if="data.expand && data.expand['grade(segment)']">
      <BCardBody>
        <BCardTitle> Séries </BCardTitle>
        <BTableSimple hover responsive>
          <BThead head-variant="dark">
            <BTr>
              <BTh>ID</BTh>
              <BTh>Segmento</BTh>
              <BTh>Criado Em</BTh>
              <BTh>Atualizado Em</BTh>
            </BTr>
          </BThead>
          <BTbody>
            <BTr v-for="grade in data.expand['grade(segment)']">
              <BTd>{{ grade.id }}</BTd>
              <BTd>{{ grade.title }}</BTd>
              <BTd>{{ grade.created }}</BTd>
              <BTd>{{ grade.updated }}</BTd>
            </BTr>
          </BTbody>
        </BTableSimple>
      </BCardBody>
    </BCard>
  </BContainer>
</template>
