<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: TopicValidationSchema,
});

const { value: title } = useField<string>("title");

const SearchTopic = (title: string) => {
  navigateTo({
    path: `/admin/topic/search`,
    query: {
      term: title,
    },
  });
};

const onSubmit = handleSubmit(async (values) => {
  SearchTopic(values.title);
});
</script>

<template>
  <BForm @submit.prevent="onSubmit">
    <BInputGroup>
      <BFormInput
        placeholder="Buscar Matéria"
        v-model="title"
        type="search"
        required
        :state="!errors.title"
      />
      <BButton type="submit" :disabled="!!errors.title">Buscar</BButton>
    </BInputGroup>
  </BForm>
</template>
