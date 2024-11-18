<template>
  <BreadCrumb PageTitle="Wizard" />
  <FormWizard />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FormWizard from "../../components/Forms/FormWizard/FormWizard.vue";

export default defineComponent({
  name: "FormWizardPage",
  components: {
    BreadCrumb,
    FormWizard,
  },
});
</script>