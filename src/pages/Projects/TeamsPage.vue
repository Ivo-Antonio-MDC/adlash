<template>
  <BreadCrumb PageTitle="Teams" />
  <TeamsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TeamsContent from "../../components/Projects/Teams/TeamsContent.vue";

export default defineComponent({
  name: "TeamsPage",
  components: {
    BreadCrumb,
    TeamsContent,
  },
});
</script>