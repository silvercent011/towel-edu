<script setup lang="ts">
import Microsoft from "~icons/mdi/microsoft";

const validationSchema = toTypedSchema(
  z.object({
    email: z
      .string({
        invalid_type_error: "O email deve ser um texto",
        required_error: "O email é obrigatório",
      })
      .email("O email deve ser um endereço de email válido"),
    password: z
      .string({
        invalid_type_error: "A senha deve ser um texto",
        required_error: "A senha é obrigatória",
      })
      .min(8, {
        message: "A senha deve ter no mínimo 8 caracteres",
      }),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { SignInWithEmailAndPassword, SignInWithAzureAD } = useSignIn();

const { value: email } = useField<string>("email");

const { value: password } = useField<string>("password");

const onSubmit = handleSubmit(async (values) => {
  await SignInWithEmailAndPassword(values.email, values.password);
});
</script>

<template>
  <BForm
    @submit="onSubmit"
    class="p-4 p-md-5 border rounded-3 bg-body-tertiary"
    novalidate
  >
    <BFormGroup label="Email:" label-for="email" class="py-2">
      <BFormInput
        id="email"
        type="email"
        placeholder="someone@domain.com"
        v-model="email"
        required
        :state="!errors.email"
      />
      <BFormInvalidFeedback :state="!errors.email">
        {{ errors.email }}
      </BFormInvalidFeedback>
    </BFormGroup>
    <BFormGroup label="Senha:" label-for="password" class="py-2">
      <BFormInput
        id="password"
        type="password"
        placeholder="********"
        v-model="password"
        required
        :state="!errors.password"
      />
      <BFormInvalidFeedback :state="!errors.password">
        {{ errors.password }}
      </BFormInvalidFeedback>
    </BFormGroup>

    <BButton
      :disabled="!!errors.email || !!errors.password"
      size="md"
      variant="primary"
      class="w-100 py-2"
      type="submit"
    >
      Entrar
    </BButton>

    <BButton
      size="md"
      variant="primary"
      class="w-100 py-2 mt-2 d-flex align-items-center justify-content-center gap-3"
      @click="SignInWithAzureAD"
    >
      <Microsoft />
      Entrar com Microsoft
    </BButton>
    <hr class="my-4" />
    <small class="text-body-secondary">Towel Edu SAS v1.0.0</small>
  </BForm>
</template>
