<template>
  <BreadCrumb PageTitle="Floating Labels" />
  <FormFloatingLabels />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FormFloatingLabels from "../../components/Forms/FormFloatingLabels/FormFloatingLabels.vue";

export default defineComponent({
  name: "FormFloatingLabelsPage",
  components: {
    BreadCrumb,
    FormFloatingLabels,
  },
});
</script>