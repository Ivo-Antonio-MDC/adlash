<template>
  <BreadCrumb PageTitle="Flex" />
  <FlexContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FlexContent from "../../components/Utilities/Flex/FlexContent.vue";

export default defineComponent({
  name: "FlexPage",
  components: {
    BreadCrumb,
    FlexContent,
  },
});
</script>