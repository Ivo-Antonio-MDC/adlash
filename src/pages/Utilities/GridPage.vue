<template>
  <BreadCrumb PageTitle="Grid" />
  <GridContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import GridContent from "../../components/Utilities/Grid/GridContent.vue";

export default defineComponent({
  name: "GridPage",
  components: {
    BreadCrumb,
    GridContent,
  },
});
</script>