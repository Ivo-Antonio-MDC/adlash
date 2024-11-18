<template>
  <BreadCrumb PageTitle="Form Controls" />
  <FormControl />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FormControl from "../../components/Forms/FormControl/FormControl.vue";

export default defineComponent({
  name: "FormControlPage",
  components: {
    BreadCrumb,
    FormControl,
  },
});
</script>