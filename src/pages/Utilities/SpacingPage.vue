<template>
  <BreadCrumb PageTitle="Spacing" />
  <SpacingContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import SpacingContent from "../../components/Utilities/Spacing/SpacingContent.vue";

export default defineComponent({
  name: "SpacingPage",
  components: {
    BreadCrumb,
    SpacingContent,
  },
});
</script>