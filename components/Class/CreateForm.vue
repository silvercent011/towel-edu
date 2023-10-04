<script setup lang="ts">
const { handleSubmit, errors } = useForm({
  validationSchema: ClassValidationSchema,
  validateOnMount: true,
  initialValues: {
    active: true,
  },
});

const { value: title } = useField<string>("title");

const { value: school_year } = useField<string>("school_year");
const { GetAllSchoolYears } = useSchoolYear();
const school_years = await GetAllSchoolYears();
const school_years_filtered = computed(() => {
  return school_years.map((school_year) => {
    return {
      value: school_year.id,
      text: school_year.title,
    };
  });
});
watchEffect(() => {
  school_year.value = school_years[0].id;
});

const { value: grade } = useField<string>("grade");
const { GetAllGrades } = useGrade();
const grades = await GetAllGrades();
const grades_filtered = computed(() => {
  return grades.map((grade) => {
    return {
      value: grade.id,
      text: grade.title,
    };
  });
});
watchEffect(() => {
  grade.value = grades[0].id;
});

const { value: shift } = useField<string>("shift");
const { GetAllShifts } = useShift();
const shifts = await GetAllShifts();
const shifts_filtered = computed(() => {
  return shifts.map((shift) => {
    return {
      value: shift.id,
      text: shift.title,
    };
  });
});
watchEffect(() => {
  shift.value = shifts[0].id;
});

const { value: active } = useField<boolean>("active");

const { CreateClass } = useClass();
const onSubmit = handleSubmit(async (values) => {
  await CreateClass(
    values.title,
    values.school_year,
    values.grade,
    values.shift,
    values.active
  );
});
</script>

<template>
  <BForm @submit="onSubmit" novalidate>
    <BFormGroup label="Turma:" label-for="title" class="py-2">
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
    <BFormGroup label="Ano Letivo:" label-for="school_year" class="py-2">
      <BFormSelect
        id="school_year"
        v-model="school_year"
        :options="school_years_filtered"
        required
        :state="!errors.school_year"
      />

      <BFormInvalidFeedback :state="!errors.school_year">
        {{ errors.school_year }}
      </BFormInvalidFeedback>
    </BFormGroup>
    <BFormGroup label="Série:" label-for="grade" class="py-2">
      <BFormSelect
        id="grade"
        v-model="grade"
        :options="grades_filtered"
        required
        :state="!errors.grade"
      />

      <BFormInvalidFeedback :state="!errors.grade">
        {{ errors.grade }}
      </BFormInvalidFeedback>
    </BFormGroup>
    <BFormGroup label="Turno:" label-for="shift" class="py-2">
      <BFormSelect
        id="shift"
        v-model="shift"
        :options="shifts_filtered"
        required
        :state="!errors.shift"
      />

      <BFormInvalidFeedback :state="!errors.shift">
        {{ errors.shift }}
      </BFormInvalidFeedback>
    </BFormGroup>

    <BFormGroup label="Ativo:" label-for="active" class="py-2">
      <BFormCheckbox id="active" v-model="active" />
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
