<template>
  <BreadCrumb PageTitle="Change Password" />
  <CoverImage />
  <ChangePassword />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CoverImage from "../../components/Settings/CoverImage.vue";
import ChangePassword from "../../components/Settings/ChangePassword/ChangePassword.vue";

export default defineComponent({
  name: "ChangePasswordPage",
  components: {
    BreadCrumb,
    CoverImage,
    ChangePassword,
  },
});
</script>