<template>
  <BreadCrumb PageTitle="Collapse" />
  <CollapseContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CollapseContent from "../../components/UIElements/Collapse/CollapseContent.vue";

export default defineComponent({
  name: "CollapsePage",
  components: {
    BreadCrumb,
    CollapseContent,
  },
});
</script>