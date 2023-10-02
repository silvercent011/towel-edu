<script setup lang="ts">
const validationSchema = toTypedSchema(
  z.object({
    title: z
      .string({
        invalid_type_error: "O ano deve ser um texto",
        required_error: "O ano é obrigatório",
      })
      .min(3, {
        message: "O ano deve ter no mínimo 3 caracteres",
      })
      .regex(new RegExp(/(?:(?:20)[0-9]{1})/), {
        message: "O ano deve ser válido acima de 2000",
      }),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
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
