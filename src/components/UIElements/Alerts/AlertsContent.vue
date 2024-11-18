<template>
  <div class="row">
    <div class="col-lg-6">
      <BasicAlerts />
    </div>
    <div class="col-lg-6">
      <DismissingAlerts />
    </div>
    <div class="col-lg-6">
      <IconsAlerts />
    </div>
    <div class="col-lg-6">
      <AdditionalContentAlerts />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicAlerts from "./BasicAlerts.vue";
import DismissingAlerts from "./DismissingAlerts.vue";
import IconsAlerts from "./IconsAlerts.vue";
import AdditionalContentAlerts from "./AdditionalContentAlerts.vue";

export default defineComponent({
  name: "AlertsContent",
  components: {
    BasicAlerts,
    DismissingAlerts,
    IconsAlerts,
    AdditionalContentAlerts,
  },
});
</script>