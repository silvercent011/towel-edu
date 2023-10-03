export const TopicValidationSchema = toTypedSchema(
  z.object({
    title: z
      .string({
        invalid_type_error: "A matéria deve ser um texto",
        required_error: "A matéria é obrigatória",
      })
      .min(3, {
        message: "A matéria deve ter no mínimo 3 caracteres",
      }),
  })
);
