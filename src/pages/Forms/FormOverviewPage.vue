<template>
  <BreadCrumb PageTitle="Forms" />
  <FormOverview />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FormOverview from "../../components/Forms/FormOverview/FormOverview.vue";

export default defineComponent({
  name: "FormOverviewPage",
  components: {
    BreadCrumb,
    FormOverview,
  },
});
</script>