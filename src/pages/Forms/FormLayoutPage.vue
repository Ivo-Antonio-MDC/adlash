<template>
  <BreadCrumb PageTitle="Layout" />
  <FormLayout />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FormLayout from "../../components/Forms/FormLayout/FormLayout.vue";

export default defineComponent({
  name: "FormLayoutPage",
  components: {
    BreadCrumb,
    FormLayout,
  },
});
</script>