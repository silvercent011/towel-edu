export const SchoolYearValidationSchema = toTypedSchema(
  z.object({
    title: z
      .string({
        invalid_type_error: "O ano deve ser um texto",
        required_error: "O ano é obrigatório",
      })
      .min(3, {
        message: "O ano deve ter no mínimo 3 caracteres",
      })
      .regex(new RegExp(/(?:(?:20)[0-9]{1})/), {
        message: "O ano deve ser válido acima de 2000",
      }),
  })
);
