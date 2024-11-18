<template>
  <BreadCrumb PageTitle="Starter" />
  <div class="card mb-25 border-0 rounded-0 bg-white text-center starter-card">
    <div class="card-body letter-spacing">
      <img src="../assets/images/starter.png" alt="starter-image" />
      <h1 class="fw-bold text-black">
        Welcome To The Adlash Admin Template. Let’s Create Your Own Admin Panel.
      </h1>
      <button
        class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
        type="submit"
      >
        Get Started
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";

export default defineComponent({
  name: "StarterPage",
  components: {
    BreadCrumb,
  },
});
</script>