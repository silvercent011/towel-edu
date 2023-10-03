<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: GradeValidationSchema,
  validateOnMount: true,
});

const { GetAllSegments } = useSegment();

const { CreateGrade } = useGrade();

const { value: title } = useField<string>("title");

const { value: segment } = useField<string>("segment");

const segments = await GetAllSegments();

const segmentsThreated = computed(() => {
  return segments.map((segment) => {
    return {
      value: segment.id,
      text: segment.title,
    };
  });
});

watchEffect(() => {
  segment.value = segments[0].id;
});

const onSubmit = handleSubmit(async (values) => {
  await CreateGrade(values.title, values.segment);
});
</script>

<template>
  <BForm @submit="onSubmit" class="p-4 p-md-5" novalidate>
    <BFormGroup label="Série:" label-for="title" class="py-2">
      <BFormInput
        id="title"
        type="text"
        v-model="title"
        required
        :state="!errors.title"
      />
      <BFormInvalidFeedback :state="!errors.title">
        {{ errors.title }}
      </BFormInvalidFeedback>
    </BFormGroup>
    <BFormGroup label="Segmento:" label-for="segment" class="py-2">
      <BFormSelect
        id="segment"
        v-model="segment"
        :options="segmentsThreated"
        required
        :state="!errors.segment"
      />

      <BFormInvalidFeedback :state="!errors.segment">
        {{ errors.segment }}
      </BFormInvalidFeedback>
    </BFormGroup>

    <BButton
      :disabled="!!errors.title || !!errors.segment"
      variant="primary"
      class="w-100 py-2"
      type="submit"
    >
      Criar
    </BButton>
  </BForm>
</template>
