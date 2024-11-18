<template>
  <BreadCrumb PageTitle="Alerts" />
  <AlertsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import AlertsContent from "../../components/UIElements/Alerts/AlertsContent.vue";

export default defineComponent({
  name: "AlertsPage",
  components: {
    BreadCrumb,
    AlertsContent,
  },
});
</script>