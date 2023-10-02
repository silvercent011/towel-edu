export const SegmentValidationSchema = toTypedSchema(
  z.object({
    title: z
      .string({
        invalid_type_error: "O segmento deve ser um texto",
        required_error: "O segmento é obrigatório",
      })
      .min(3, {
        message: "O segmento deve ter no mínimo 3 caracteres",
      }),
  })
);
