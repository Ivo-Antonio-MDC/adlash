<template>
  <BreadCrumb PageTitle="Gutters" />
  <GuttersContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import GuttersContent from "../../components/Utilities/Gutters/GuttersContent.vue";

export default defineComponent({
  name: "GuttersPage",
  components: {
    BreadCrumb,
    GuttersContent,
  },
});
</script>