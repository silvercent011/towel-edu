<script setup lang="ts">
import Home from "~icons/bi/house";
import Academic from "~icons/mdi/academic-cap";
import Students from "~icons/mdi/account-school";
import Notes from "~icons/mdi/file-document-multiple";
import Admin from "~icons/mdi/security";
import PocketBase from "~icons/simple-icons/pocketbase";
const UserData = computed(() => usePB().authStore.model);

const links = [
  {
    title: "Início",
    icon: Home,
    href: "/",
  },
  {
    title: "Administração",
    icon: Admin,
    href: "/admin",
  },
  {
    title: "Acadêmico",
    icon: Academic,
    href: "/academico",
  },
  {
    title: "Alunos",
    icon: Students,
    href: "/alunos",
  },
  {
    title: "Notas",
    icon: Notes,
    href: "/notas",
  },
];

const config = useRuntimeConfig();
</script>

<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 bg-light position-sticky top-0 start-0"
    style="width: 280px; height: 100vh"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none link-dark"
    >
      <span class="fs-4">{{ config.public.instance.name || `Towel Edu` }}</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto gap-2">
      <li v-for="link in links" class="nav-item">
        <NuxtLink
          :to="link.href"
          class="nav-link d-flex align-items-center"
          :class="[$route.path === link.href ? 'active' : 'link-dark']"
        >
          <component :is="link.icon" class="bi pe-none me-2" />
          {{ link.title }}
        </NuxtLink>
      </li>
      <DevOnly>
        <li class="nav-item">
          <NuxtLink
            class="nav-link d-flex align-items-center link-dark bg-warning"
            to="http://localhost:8090/_/"
            external
            target="_blank"
          >
            <component :is="PocketBase" class="bi pe-none me-2" />
            Acessar PocketBase
          </NuxtLink>
        </li>
      </DevOnly>
    </ul>
    <hr />

    <div>
      <a
        href="#"
        class="d-flex align-items-center link-dark text-decoration-none"
        aria-expanded="false"
        v-if="UserData"
      >
        <img
          :src="UserData.avatar || 'https://source.boringavatars.com/'"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        />
        <strong>{{ UserData.name }}</strong>
      </a>
    </div>
  </div>
</template>
