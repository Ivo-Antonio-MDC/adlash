<template>
  <BreadCrumb PageTitle="Add User" />
  <FaqAccordion />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import FaqAccordion from "../components/Faq/FaqAccordion.vue";

export default defineComponent({
  name: "FaqPage",
  components: {
    BreadCrumb,
    FaqAccordion,
  },
});
</script>