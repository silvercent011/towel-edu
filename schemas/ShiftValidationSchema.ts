export const ShiftValidationSchema = toTypedSchema(
  z.object({
    title: z
      .string({
        invalid_type_error: "O turno deve ser um texto",
        required_error: "O turno é obrigatório",
      })
      .min(3, {
        message: "O turno deve ter no mínimo 3 caracteres",
      }),
  })
);
