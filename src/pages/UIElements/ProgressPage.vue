<template>
  <BreadCrumb PageTitle="Progress" />
  <ProgressContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ProgressContent from "../../components/UIElements/Progress/ProgressContent.vue";

export default defineComponent({
  name: "ProgressPage",
  components: {
    BreadCrumb,
    ProgressContent,
  },
});
</script>