<template>
  <div
    class="mb-20 d-sm-flex align-items-center justify-content-between letter-spacing"
  >
    <h4 class="mb-5 mb-sm-0 fw-bold">{{ PageTitle }}</h4>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 list-unstyled ps-0">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-decoration-none text-black">
            Dashboard
          </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ PageTitle }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BreadCrumb",
  props: ["PageTitle"],
});
</script>