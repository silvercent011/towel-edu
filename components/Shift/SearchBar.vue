<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: ShiftValidationSchema,
});

const { value: title } = useField<string>("title");

const SearchShift = (title: string) => {
  navigateTo({
    path: `/admin/shift/search`,
    query: {
      term: title,
    },
  });
};

const onSubmit = handleSubmit(async (values) => {
  SearchShift(values.title);
});
</script>

<template>
  <BForm @submit.prevent="onSubmit">
    <BInputGroup>
      <BFormInput
        placeholder="Buscar Turno"
        v-model="title"
        type="search"
        required
        :state="!errors.title"
      />
      <BButton type="submit" :disabled="!!errors.title">Buscar</BButton>
    </BInputGroup>
  </BForm>
</template>
