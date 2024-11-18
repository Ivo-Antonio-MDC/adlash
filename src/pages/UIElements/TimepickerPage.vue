<template>
  <BreadCrumb PageTitle="Timepicker" />
  <TimepickerContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TimepickerContent from "../../components/UIElements/Timepicker/TimepickerContent.vue";

export default defineComponent({
  name: "TimepickerPage",
  components: {
    BreadCrumb,
    TimepickerContent,
  },
});
</script>