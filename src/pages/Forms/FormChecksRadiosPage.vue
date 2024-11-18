<template>
  <BreadCrumb PageTitle="Checks and Radios" />
  <FormChecksRadios />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FormChecksRadios from "../../components/Forms/FormChecksRadios/FormChecksRadios.vue";

export default defineComponent({
  name: "FormChecksRadiosPage",
  components: {
    BreadCrumb,
    FormChecksRadios,
  },
});
</script>