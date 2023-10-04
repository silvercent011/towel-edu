const { show } = useToast();

export function useGrade() {
  const CreateGrade = async (title: string, segment: string) => {
    const data = {
      title,
      segment,
    };

    await usePB()
      .collection("grade")
      .create(data)
      .then(() => {
        show("Série criada com sucesso!", { variant: "success" });
        navigateTo("/");
      })
      .catch((error) => {
        show(error.message, { variant: "danger" });
      });
  };

  const GetGradeByID = async (id: string) => {
    const record = await usePB().collection("grade").getOne(id, {
      expand: "segment",
    });

    return record;
  };

  const GetAllGrades = async () =>
    await usePB().collection("grade").getFullList({
      sort: "-created",
      expand: `segment`,
    });

  return { CreateGrade, GetGradeByID, GetAllGrades };
}
