<template>
  <BreadCrumb PageTitle="Validation" />
  <FormValidation />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FormValidation from "../../components/Forms/FormValidation/FormValidation.vue";

export default defineComponent({
  name: "FormValidationPage",
  components: {
    BreadCrumb,
    FormValidation,
  },
});
</script>