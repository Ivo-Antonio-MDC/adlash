<template>
  <BreadCrumb PageTitle="Lead Details" />
  <LeadDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import LeadDetails from "../../components/CRM/LeadDetails/LeadDetails.vue";

export default defineComponent({
  name: "LeadDetailsPage",
  components: {
    BreadCrumb,
    LeadDetails,
  },
});
</script>