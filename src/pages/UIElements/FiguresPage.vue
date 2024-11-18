<template>
  <BreadCrumb PageTitle="Figures" />
  <FiguresContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FiguresContent from "../../components/UIElements/Figures/FiguresContent.vue";

export default defineComponent({
  name: "FiguresPage",
  components: {
    BreadCrumb,
    FiguresContent,
  },
});
</script>