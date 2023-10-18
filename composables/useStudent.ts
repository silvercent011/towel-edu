const { show } = useToast();
import { z } from "zod";
type InputProps = z.infer<typeof StudentZodSchema>;

export function useStudent() {
  const CreateStudent = async ({
    name,
    register_number,
    birthdate,
    email,
  }: InputProps) => {
    const data = {
      name,
      register_number,
      birthdate,
      email,
    };

    await usePB()
      .collection("student")
      .create(data)
      .then((data) => {
        show("Aluno cadastrado com sucesso!", { variant: "success" });
        navigateTo(`/alunos/${data.id}`);
      })
      .catch((error) => {
        show(error.message, { variant: "danger" });
      });
  };

  const GetStudentByID = async (id: string) => {
    const record = await usePB().collection("student").getOne(id, {
      //   expand: "grade(segment)",
    });

    return record;
  };

  const GetAllStudents = async () =>
    await usePB().collection("student").getFullList({
      sort: "-created",
    });

  return { CreateStudent, GetStudentByID, GetAllStudents };
}
