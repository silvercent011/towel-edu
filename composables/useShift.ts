const { show } = useToast();

export function useShift() {
  const CreateShift = async (title: string) => {
    const data = {
      title,
    };

    await usePB()
      .collection("shift")
      .create(data)
      .then(() => {
        show("Turno criado com sucesso!", { variant: "success" });
        navigateTo("/");
      })
      .catch((error) => {
        show(error.message, { variant: "danger" });
      });
  };

  const GetShiftByID = async (id: string) => {
    const record = await usePB().collection("shift").getOne(id, {
      //   expand: "grade(segment)",
    });

    return record;
  };

  return { CreateShift, GetShiftByID };
}
