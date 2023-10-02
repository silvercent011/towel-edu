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

const { CreateSegment } = useSegment();

const { value: title } = useField<string>("title");

const onSubmit = handleSubmit(async (values) => {
  await CreateSegment(values.title);
});
</script>

<template>
  <BContainer>
    <div class="container my-4">
      <h1>Criar Segmento</h1>
      <hr />
    </div>

    <BForm @submit="onSubmit" class="p-4 p-md-5" novalidate>
      <BFormGroup label="Segmento:" label-for="title" class="py-2">
        <BFormInput
          id="title"
          type="text"
          placeholder=""
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
