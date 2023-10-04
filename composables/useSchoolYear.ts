const { show } = useToast();

export function useSchoolYear() {
  const CreateSchoolYear = async (year: string) => {
    const data = {
      title: year,
    };

    await usePB()
      .collection("school_year")
      .create(data)
      .then(() => {
        show("Ano Letivo criado com sucesso!", { variant: "success" });
        navigateTo("/");
      })
      .catch((error) => {
        show(error.message, { variant: "danger" });
      });
  };

  const GetSchoolYearByID = async (id: string) => {
    const record = await usePB().collection("school_year").getOne(id, {
      expand: "class(school_year)",
    });

    return record;
  };

  const GetAllSchoolYears = async () =>
    await usePB().collection("school_year").getFullList({
      sort: "-created",
    });

  return { CreateSchoolYear, GetSchoolYearByID, GetAllSchoolYears };
}
