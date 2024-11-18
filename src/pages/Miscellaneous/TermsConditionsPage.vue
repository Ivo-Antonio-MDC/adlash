<template>
  <BreadCrumb PageTitle="Terms & Conditions" />
  <TermsConditions />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TermsConditions from "../../components/Miscellaneous/TermsConditions/TermsConditions.vue";

export default defineComponent({
  name: "TermsConditionsPage",
  components: {
    BreadCrumb,
    TermsConditions,
  },
});
</script>