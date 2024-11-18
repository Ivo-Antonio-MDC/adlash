<template>
  <BreadCrumb PageTitle="Privacy Policy" />
  <CoverImage />
  <PrivacyPolicy />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CoverImage from "../../components/Settings/CoverImage.vue";
import PrivacyPolicy from "../../components/Settings/PrivacyPolicy/PrivacyPolicy.vue";

export default defineComponent({
  name: "SettingsPrivacyPolicyPage",
  components: {
    BreadCrumb,
    CoverImage,
    PrivacyPolicy,
  },
});
</script>