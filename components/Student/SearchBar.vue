<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: ClassSearchValidationSchema,
});

const { value: title } = useField<string>("title");

const SearchClass = (title: string) => {
  navigateTo({
    path: `/academico/class/search`,
    query: {
      term: title,
    },
  });
};

const onSubmit = handleSubmit(async (values) => {
  SearchClass(values.title);
});
</script>

<template>
  <BForm @submit.prevent="onSubmit">
    <BInputGroup>
      <BFormInput
        placeholder="Buscar Alunos"
        v-model="title"
        type="search"
        required
        :state="!errors.title"
      />
      <BButton type="submit" :disabled="!!errors.title">Buscar</BButton>
    </BInputGroup>
  </BForm>
</template>
