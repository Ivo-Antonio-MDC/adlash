<template>
  <BreadCrumb PageTitle="Timeline" />
  <TimelineContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TimelineContent from "../../components/Social/Timeline/TimelineContent.vue";

export default defineComponent({
  name: "TimelinePage",
  components: {
    BreadCrumb,
    TimelineContent,
  },
});
</script>