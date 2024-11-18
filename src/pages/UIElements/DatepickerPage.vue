<template>
  <BreadCrumb PageTitle="Datepicker" />
  <DatepickerContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import DatepickerContent from "../../components/UIElements/Datepicker/DatepickerContent.vue";

export default defineComponent({
  name: "DatepickerPage",
  components: {
    BreadCrumb,
    DatepickerContent,
  },
});
</script>