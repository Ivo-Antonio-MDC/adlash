<template>
  <MainHeader />
  <MainSidebar />
  <div class="main-content d-flex flex-column transition overflow-hidden">
    <router-view />
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import stateStore from "./utils/store";

import MainHeader from "./components/Layouts/MainHeader.vue";
import MainSidebar from "./components/Layouts/MainSidebar.vue";
import MainFooter from "./components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    MainHeader,
    MainSidebar,
    MainFooter,
  },
  mounted() {
    document.body.classList.add("bg-body-secondary");
  },
  setup() {
    const stateStoreInstance = stateStore;
    watchEffect(() => {
      if (stateStoreInstance.open) {
        document.body.classList.remove("sidebar-show");
        document.body.classList.add("sidebar-hide");
        console.log("show");
      } else {
        document.body.classList.remove("sidebar-hide");
        document.body.classList.add("sidebar-show");

        console.log("hide");
      }
    });
    return {};
  },
});
</script>