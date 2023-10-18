<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: StudentValidationSchema,
  validateOnMount: true,
});
//name,register_number,birthdate,email,
const { value: name } = useField<string>("name");
const { value: register_number } = useField<string>("register_number");
const { value: birthdate } = useField<string>("birthdate");
const { value: email } = useField<string>("email");

const { CreateStudent } = useStudent();
const onSubmit = handleSubmit(async (values) => {
  await CreateStudent({
    name: values.name,
    register_number: values.register_number,
    birthdate: values.birthdate,
    email: values.email,
  });
});
</script>

<template>
  <BForm @submit="onSubmit" novalidate>
    <BFormGroup label="Nome:" label-for="name" class="py-2">
      <BFormInput
        id="name"
        type="text"
        placeholder=""
        v-model="name"
        required
        :state="!errors.name"
      />
      <BFormInvalidFeedback :state="!errors.name">
        {{ errors.name }}
      </BFormInvalidFeedback>
    </BFormGroup>
    <BFormGroup label="Matricula:" label-for="register_number" class="py-2">
      <BFormInput
        id="register_number"
        type="text"
        placeholder=""
        v-model="register_number"
        required
        :state="!errors.register_number"
      />
      <BFormInvalidFeedback :state="!errors.register_number">
        {{ errors.register_number }}
      </BFormInvalidFeedback>
    </BFormGroup>
    <BFormGroup label="Data de Nascimento:" label-for="birthdate" class="py-2">
      <BFormInput
        id="birthdate"
        type="date"
        placeholder=""
        v-model="birthdate"
        :state="!errors.birthdate"
      />
      <BFormInvalidFeedback :state="!errors.birthdate">
        {{ errors.birthdate }}
      </BFormInvalidFeedback>
    </BFormGroup>

    <BFormGroup label="Email:" label-for="email" class="py-2">
      <BFormInput
        id="email"
        type="email"
        placeholder=""
        v-model="email"
        :state="!errors.email"
      />
      <BFormInvalidFeedback :state="!errors.email">
        {{ errors.email }}
      </BFormInvalidFeedback>
    </BFormGroup>

    <BButton
      :disabled="Object.keys(errors).length !== 0"
      variant="primary"
      class="w-100 py-2"
      type="submit"
    >
      Criar
    </BButton>
  </BForm>
</template>
