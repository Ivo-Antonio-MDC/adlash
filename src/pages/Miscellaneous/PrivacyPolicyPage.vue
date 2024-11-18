<template>
  <BreadCrumb PageTitle="Privacy Policy" />
  <PrivacyPolicy />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import PrivacyPolicy from "../../components/Miscellaneous/PrivacyPolicy/PrivacyPolicy.vue";

export default defineComponent({
  name: "PrivacyPolicyPage",
  components: {
    BreadCrumb,
    PrivacyPolicy,
  },
});
</script>