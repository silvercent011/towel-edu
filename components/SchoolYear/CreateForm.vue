<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: SchoolYearValidationSchema,
});

const { CreateSchoolYear } = useSchoolYear();

const { value: title } = useField<string>("title");

const onSubmit = handleSubmit(async (values) => {
  await CreateSchoolYear(values.title);
});
</script>

<template>
  <BForm @submit="onSubmit" novalidate>
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
</template>
