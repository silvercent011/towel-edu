<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: TopicValidationSchema,
});

const { CreateTopic } = useTopic();

const { value: title } = useField<string>("title");

const onSubmit = handleSubmit(async (values) => {
  await CreateTopic(values.title);
});
</script>

<template>
  <BForm @submit="onSubmit" class="p-4 p-md-5" novalidate>
    <BFormGroup label="Matéria:" label-for="title" class="py-2">
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
</template>
