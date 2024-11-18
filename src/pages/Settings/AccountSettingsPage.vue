<template>
  <BreadCrumb PageTitle="Account Settings" />
  <CoverImage />
  <AccountSettings />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CoverImage from "../../components/Settings/CoverImage.vue";
import AccountSettings from "../../components/Settings/AccountSettings/AccountSettings.vue";

export default defineComponent({
  name: "AccountSettingsPage",
  components: {
    BreadCrumb,
    CoverImage,
    AccountSettings,
  },
});
</script>