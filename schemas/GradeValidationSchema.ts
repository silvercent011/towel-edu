export const GradeValidationSchema = toTypedSchema(
  z.object({
    title: z
      .string({
        invalid_type_error: "A série deve ser um texto",
        required_error: "A série é obrigatória",
      })
      .min(3, {
        message: "A série deve ter no mínimo 3 caracteres",
      }),
    segment: z.string({
      invalid_type_error: "O segmento deve ser um texto",
      required_error: "O segmento é obrigatório",
    }),
  })
);

export const GradeSearchValidationSchema = toTypedSchema(
  z.object({
    title: z
      .string({
        invalid_type_error: "A série deve ser um texto",
        required_error: "A série é obrigatória",
      })
      .min(3, {
        message: "O título deve ter no mínimo 3 caracteres",
      }),
  })
);
