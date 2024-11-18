<template>
  <BreadCrumb PageTitle="Sizing" />
  <SizingContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import SizingContent from "../../components/Utilities/Sizing/SizingContent.vue";

export default defineComponent({
  name: "SizingPage",
  components: {
    BreadCrumb,
    SizingContent,
  },
});
</script>