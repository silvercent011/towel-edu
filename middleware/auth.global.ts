export default defineNuxtRouteMiddleware((to) => {
  useNuxtApp().$pb.authStore.isValid;

  console.log(useNuxtApp().$pb.authStore);

  if (to.path === "/signin") {
    return;
  }

  if (!useNuxtApp().$pb.authStore.isValid) {
    console.log("not valid");
    return "/signin";
  }
});
