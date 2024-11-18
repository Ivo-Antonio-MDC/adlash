<template>
  <BreadCrumb PageTitle="Profile Settings" />
  <ProfileSettings />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ProfileSettings from "../../components/Social/ProfileSettings/ProfileSettings.vue";

export default defineComponent({
  name: "ProfileSettingsPage",
  components: {
    BreadCrumb,
    ProfileSettings,
  },
});
</script>