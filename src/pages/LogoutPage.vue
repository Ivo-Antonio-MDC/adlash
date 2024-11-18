<template>
  <BreadCrumb PageTitle="Logout" />
  <LogoutContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import LogoutContent from "../components/Logout/LogoutContent.vue";

export default defineComponent({
  name: "LogoutPage",
  components: {
    BreadCrumb,
    LogoutContent,
  },
});
</script>