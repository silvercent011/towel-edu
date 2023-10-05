const { show } = useToast();

export function useSignIn() {
  const SignInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    await usePB()
      .collection("users")
      .authWithPassword(email, password)
      .then(() => {
        show("You are now logged in!", { variant: "success" });
        navigateTo("/");
      })
      .catch((error) => {
        show(error.message, { variant: "danger" });
      });
  };

  const SignInWithAzureAD = async () => {
    await usePB()
      .collection("users")
      .authWithOAuth2({
        provider: "microsoft",
        createData: {
          role: "USER",
        },
      })
      .then(async (res) => {
        console.log(res);
        await usePB().collection("users").update(res.record.id, {
          name: res.meta?.name,
          avatar: res.meta?.avatarUrl,
        });
        show("You are now logged in!", { variant: "success" });
        navigateTo("/");
      })
      .catch((error) => {
        show(error.message, { variant: "danger" });
      });
  };

  return { SignInWithEmailAndPassword, SignInWithAzureAD };
}
