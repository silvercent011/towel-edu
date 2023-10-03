<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: GradeSearchValidationSchema,
});

const { value: title } = useField<string>("title");

const SearchGrade = (title: string) => {
  navigateTo({
    path: `/admin/grade/search`,
    query: {
      term: title,
    },
  });
};

const onSubmit = handleSubmit(async (values) => {
  SearchGrade(values.title);
});
</script>

<template>
  <BForm @submit.prevent="onSubmit">
    <BInputGroup>
      <BFormInput
        placeholder="Buscar Série"
        v-model="title"
        type="search"
        required
        :state="!errors.title"
      />
      <BButton type="submit" :disabled="!!errors.title">Buscar</BButton>
    </BInputGroup>
  </BForm>
</template>
