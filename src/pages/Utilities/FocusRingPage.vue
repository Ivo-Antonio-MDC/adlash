<template>
  <BreadCrumb PageTitle="Focus Ring" />
  <FocusRing />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FocusRing from "../../components/Utilities/FocusRing/FocusRing.vue";

export default defineComponent({
  name: "FocusRingPage",
  components: {
    BreadCrumb,
    FocusRing,
  },
});
</script>