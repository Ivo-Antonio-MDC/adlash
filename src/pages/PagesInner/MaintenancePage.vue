<template>
  <BreadCrumb PageTitle="Maintenance" />
  <MaintenanceContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import MaintenanceContent from "../../components/PagesInner/Maintenance/MaintenanceContent.vue";

export default defineComponent({
  name: "MaintenancePage",
  components: {
    BreadCrumb,
    MaintenanceContent,
  },
});
</script>