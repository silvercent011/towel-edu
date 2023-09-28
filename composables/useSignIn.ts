export function useSignIn() {
  const SignInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    await usePB().collection("users").authWithPassword(email, password);
  };

  return { SignInWithEmailAndPassword };
}
