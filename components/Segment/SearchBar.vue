<script setup lang="ts">
const validationSchema = toTypedSchema(
  z.object({
    title: z
      .string({
        invalid_type_error: "O segmento deve ser um texto",
        required_error: "O segmento é obrigatório",
      })
      .min(3, {
        message: "O segmento deve ter no mínimo 3 caracteres",
      }),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
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
