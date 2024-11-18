<template>
  <BreadCrumb PageTitle="Reset Password" />
  <ResetPassword />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ResetPassword from "../../components/Authentication/ResetPassword/ResetPassword.vue";

export default defineComponent({
  name: "ResetPasswordPage",
  components: {
    BreadCrumb,
    ResetPassword,
  },
});
</script>