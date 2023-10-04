const { show } = useToast();

export function useClass() {
  const CreateClass = async (
    title: string,
    school_year: string,
    grade: string,
    shift: string,
    active: boolean
  ) => {
    const data = {
      title,
      school_year,
      grade,
      shift,
      active,
    };

    await usePB()
      .collection("class")
      .create(data)
      .then(() => {
        show("Turma criada com sucesso!", { variant: "success" });
        navigateTo("/");
      })
      .catch((error) => {
        show(error.message, { variant: "danger" });
      });
  };

  const GetClassByID = async (id: string) => {
    const record = await usePB().collection("class").getOne(id, {
      expand: "school_year,grade,shift",
    });

    return record;
  };

  const GetAllClasses = async () =>
    await usePB().collection("class").getFullList({
      sort: "-created",
      expand: `school_year,grade,shift`,
    });

  return { CreateClass, GetClassByID, GetAllClasses };
}
