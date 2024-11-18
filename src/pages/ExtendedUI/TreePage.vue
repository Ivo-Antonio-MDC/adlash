<template>
  <BreadCrumb PageTitle="Tree" />
  <TreeContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TreeContent from "../../components/ExtendedUI/Tree/TreeContent.vue";

export default defineComponent({
  name: "TreePage",
  components: {
    BreadCrumb,
    TreeContent,
  },
});
</script>