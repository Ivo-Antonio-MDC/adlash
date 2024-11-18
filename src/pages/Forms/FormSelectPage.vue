<template>
  <BreadCrumb PageTitle="Select" />
  <FormSelect />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FormSelect from "../../components/Forms/FormSelect/FormSelect.vue";

export default defineComponent({
  name: "FormSelectPage",
  components: {
    BreadCrumb,
    FormSelect,
  },
});
</script>