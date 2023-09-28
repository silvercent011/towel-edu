export default defineNuxtRouteMiddleware((to) => {
  const pb = usePB();

  if (to.path === "/signin") {
    return;
  }

  if (!pb.authStore.isValid) {
    return "/signin";
  }
});
