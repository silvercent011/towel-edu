<script setup lang="ts">
const { GetAllSegments } = useSegment();

const segments = (await GetAllSegments()) as any[];
</script>

<template>
  <BContainer gutter-y="5">
    <BRow class="my-3 w-full">
      <BCol sm="8">
        <SegmentSearchBar />
      </BCol>
      <BCol sm="4">
        <BButton to="/admin/segment/create" class="w-100" variant="primary"
          >Criar Segmento</BButton
        >
      </BCol>
    </BRow>
    <BRow>
      <SegmentListTable :segments="segments" />
    </BRow>
  </BContainer>
</template>
