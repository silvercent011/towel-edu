<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<template>
  <div
    class="container col-xl-10 col-xxl-8 px-4 py-5 vh-100 justify-content-center d-flex flex-column"
  >
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
          Towel Edu
        </h1>
        <p class="col-lg-10 fs-4">Sistema Acadêmico Simplificado</p>
        <p class="col-lg-10 fs-4">v1.0.0</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <FormsSignIn />
      </div>
    </div>
  </div>
</template>
