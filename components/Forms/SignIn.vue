<template>
  <BForm
    @submit="() => {}"
    @reset="() => {}"
    class="p-4 p-md-5 border rounded-3 bg-body-tertiary"
  >
    <BFormGroup label="Email:" label-for="email" class="py-2">
      <BFormInput
        id="email"
        type="email"
        placeholder="someone@domain.com"
        required
      />
    </BFormGroup>
    <BFormGroup label="Senha:" label-for="password" class="py-2">
      <BFormInput
        id="password"
        type="password"
        placeholder="********"
        required
      />
    </BFormGroup>

    <BButton size="md" variant="primary" class="w-100 py-2" type="submit">
      Entrar
    </BButton>
    <hr class="my-4" />
    <small class="text-body-secondary">Towel Edu SAS v1.0.0</small>
  </BForm>
</template>
