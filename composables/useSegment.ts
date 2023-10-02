const { show } = useToast();

export function useSegment() {
  const CreateSegment = async (title: string) => {
    const data = {
      title,
    };

    await usePB()
      .collection("segment")
      .create(data)
      .then(() => {
        show("Segmento criado com sucesso!", { variant: "success" });
        navigateTo("/");
      })
      .catch((error) => {
        show(error.message, { variant: "danger" });
      });
  };

  const GetSegmentByID = async (id: string) => {
    const record = await usePB().collection("segment").getOne(id, {
      expand: "grade(segment)",
    });

    return record;
  };

  return { CreateSegment, GetSegmentByID };
}
