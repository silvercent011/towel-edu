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

  return { SignInWithEmailAndPassword };
}
