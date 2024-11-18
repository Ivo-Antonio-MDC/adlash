<template>
  <BreadCrumb PageTitle="Forgot Password" />
  <ForgotPassword />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ForgotPassword from "../../components/Authentication/ForgotPassword/ForgotPassword.vue";

export default defineComponent({
  name: "ForgotPasswordPage",
  components: {
    BreadCrumb,
    ForgotPassword,
  },
});
</script>