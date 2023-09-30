<script setup lang="ts">
import Home from "~icons/bi/house";

const UserData = computed(() => usePB().authStore.model);

const links = [
  {
    title: "Início",
    icon: Home,
    href: "/",
  },
  {
    title: "Administração",
    icon: Home,
    href: "/admin",
  },
  {
    title: "Alunos",
    icon: Home,
    href: "/alunos",
  },
  {
    title: "Notas",
    icon: Home,
    href: "/notas",
  },
];
</script>

<template>
  <main class="d-flex flex-nowrap">
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark position-sticky top-0 start-0"
      style="width: 280px; height: 100vh"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span class="fs-4">Towel Edu</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto gap-2">
        <li v-for="link in links" class="nav-item">
          <NuxtLink
            :to="link.href"
            class="nav-link d-flex align-items-center"
            :class="[$route.path === link.href ? 'active' : '']"
          >
            <component :is="link.icon" class="bi pe-none me-2" />
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
      <hr />

      <div>
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none"
          aria-expanded="false"
          v-if="UserData"
        >
          <img
            :src="UserData.avatar"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>{{ UserData.name }}</strong>
        </a>
      </div>
    </div>
    <slot />
  </main>
</template>
