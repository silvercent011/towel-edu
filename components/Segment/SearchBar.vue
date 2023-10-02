<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: SegmentValidationSchema,
});

const { value: title } = useField<string>("title");

const SearchSegment = (title: string) => {
  navigateTo({
    path: `/admin/segment/search`,
    query: {
      term: title,
    },
  });
};

const onSubmit = handleSubmit(async (values) => {
  SearchSegment(values.title);
});
</script>

<template>
  <BForm @submit.prevent="onSubmit">
    <BInputGroup>
      <BFormInput
        placeholder="Buscar Segmento"
        v-model="title"
        type="search"
        required
        :state="!errors.title"
      />
      <BButton type="submit" :disabled="!!errors.title">Buscar</BButton>
    </BInputGroup>
  </BForm>
</template>
