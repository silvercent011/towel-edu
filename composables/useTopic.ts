const { show } = useToast();

export function useTopic() {
  const CreateTopic = async (title: string) => {
    const data = {
      title,
    };

    await usePB()
      .collection("topic")
      .create(data)
      .then(() => {
        show("Matéria criada com sucesso!", { variant: "success" });
        navigateTo("/");
      })
      .catch((error) => {
        show(error.message, { variant: "danger" });
      });
  };

  const GetTopicByID = async (id: string) => {
    const record = await usePB().collection("topic").getOne(id, {
      //   expand: "grade(segment)",
    });

    return record;
  };

  return { CreateTopic, GetTopicByID };
}
