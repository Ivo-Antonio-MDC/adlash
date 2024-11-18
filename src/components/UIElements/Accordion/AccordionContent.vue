<template>
  <div class="row">
    <div class="col-lg-6">
      <BasicAccordion />
    </div>
    <div class="col-lg-6">
      <FlushAccordion />
    </div>
    <div class="col-lg-6">
      <AlwaysOpenAccordion />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicAccordion from "./BasicAccordion.vue";
import FlushAccordion from "./FlushAccordion.vue";
import AlwaysOpenAccordion from "./AlwaysOpenAccordion.vue";

export default defineComponent({
  name: "AccordionContent",
  components: {
    BasicAccordion,
    FlushAccordion,
    AlwaysOpenAccordion,
  },
});
</script>