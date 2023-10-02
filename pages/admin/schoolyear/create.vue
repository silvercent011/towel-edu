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
      .regex(new RegExp(/(?:(?:20)[0-9]{2})/), {
        message: "O ano deve ser um ano válido acima de 2000",
      }),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { CreateSchoolYear } = useSchoolYear();

const { value: title } = useField<string>("title");

const onSubmit = handleSubmit(async (values) => {
  await CreateSchoolYear(values.title);
});
</script>

<template>
  <BContainer>
    <div class="container my-4">
      <h1>Criar Ano Letivo</h1>
      <hr />
    </div>

    <BForm @submit="onSubmit" class="p-4 p-md-5" novalidate>
      <BFormGroup label="Ano:" label-for="title" class="py-2">
        <BFormInput
          id="title"
          type="text"
          placeholder="202X"
          v-model="title"
          required
          :state="!errors.title"
        />
        <BFormInvalidFeedback :state="!errors.title">
          {{ errors.title }}
        </BFormInvalidFeedback>
      </BFormGroup>

      <BButton
        :disabled="!!errors.title"
        variant="primary"
        class="w-100 py-2"
        type="submit"
      >
        Criar
      </BButton>
    </BForm>
  </BContainer>
</template>
