<template>
  <BreadCrumb PageTitle="Calendar" />
  <CalendarContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import CalendarContent from "../components/Calendar/CalendarContent.vue";

export default defineComponent({
  name: "CalendarPage",
  components: {
    BreadCrumb,
    CalendarContent,
  },
});
</script>