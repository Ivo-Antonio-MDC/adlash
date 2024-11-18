<template>
  <BreadCrumb PageTitle="Range" />
  <FormRange />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FormRange from "../../components/Forms/FormRange/FormRange.vue";

export default defineComponent({
  name: "FormRangePage",
  components: {
    BreadCrumb,
    FormRange,
  },
});
</script>