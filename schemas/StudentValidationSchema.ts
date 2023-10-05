export const StudentValidationSchema = toTypedSchema(
  z.object({
    name: z
      .string({
        invalid_type_error: "O nome deve ser um texto",
        required_error: "O nome é obrigatório",
      })
      .min(3, {
        message: "O nome deve ter no mínimo 3 caracteres",
      }),
    birthdate: z.string({
      invalid_type_error: "A data de nascimento deve ser um texto",
      required_error: "A data de nascimento é obrigatória",
    }),
    register_number: z.string({
      invalid_type_error: "O número de registro deve ser um texto",
      required_error: "O número de registro é obrigatório",
    }),
    email: z
      .string({
        invalid_type_error: "O e-mail deve ser um texto",
      })
      .optional(),
  })
);

export const StudentSearchValidationSchema = toTypedSchema(
  z.object({
    term: z
      .string({
        invalid_type_error: "O termo de busca deve ser um texto",
        required_error: "O termo de busca é obrigatório",
      })
      .min(3, {
        message: "O termo de busca deve ter no mínimo 3 caracteres",
      }),
  })
);
