<template>
  <BreadCrumb PageTitle="Add User" />
  <AddUser />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import AddUser from "../components/Pricing/PricingContent.vue";

export default defineComponent({
  name: "PricingPage",
  components: {
    BreadCrumb,
    AddUser,
  },
});
</script>