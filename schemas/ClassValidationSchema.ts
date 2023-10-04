export const ClassValidationSchema = toTypedSchema(
  z.object({
    title: z
      .string({
        invalid_type_error: "A turma deve ser um texto",
        required_error: "A turma é obrigatória",
      })
      .min(3, {
        message: "A turma deve ter no mínimo 3 caracteres",
      }),
    school_year: z.string({
      invalid_type_error: "O ano letivo deve ser um texto",
      required_error: "O ano letivo é obrigatório",
    }),
    grade: z.string({
      invalid_type_error: "A série deve ser um texto",
      required_error: "A série é obrigatória",
    }),
    shift: z.string({
      invalid_type_error: "O turno deve ser um texto",
      required_error: "O turno é obrigatório",
    }),
    active: z.boolean({
      invalid_type_error: "O status deve ser um valor booleano",
      required_error: "O status é obrigatório",
    }),
  })
);

export const ClassSearchValidationSchema = toTypedSchema(
  z.object({
    title: z
      .string({
        invalid_type_error: "A turma deve ser um texto",
        required_error: "A turma é obrigatória",
      })
      .min(3, {
        message: "O título deve ter no mínimo 3 caracteres",
      }),
  })
);
