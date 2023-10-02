<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: SchoolYearValidationSchema,
});

const { value: title } = useField<string>("title");

const SearchSchoolYear = (title: string) => {
  navigateTo({
    path: `/admin/schoolyear/search`,
    query: {
      term: title,
    },
  });
};

const onSubmit = handleSubmit(async (values) => {
  SearchSchoolYear(values.title);
});
</script>

<template>
  <BForm @submit.prevent="onSubmit">
    <BInputGroup>
      <BFormInput
        placeholder="Buscar Ano Letivo"
        v-model="title"
        type="search"
        required
        :state="!errors.title"
      />
      <BButton type="submit" :disabled="!!errors.title">Buscar</BButton>
    </BInputGroup>
  </BForm>
</template>
