<template>
  <BreadCrumb PageTitle="Input Group" />
  <FormInputGroup />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FormInputGroup from "../../components/Forms/FormInputGroup/FormInputGroup.vue";

export default defineComponent({
  name: "FormInputGroupPage",
  components: {
    BreadCrumb,
    FormInputGroup,
  },
});
</script>