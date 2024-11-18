<template>
  <BreadCrumb PageTitle="Overflow" />
  <OverflowContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import OverflowContent from "../../components/Utilities/Overflow/OverflowContent.vue";

export default defineComponent({
  name: "OverflowPage",
  components: {
    BreadCrumb,
    OverflowContent,
  },
});
</script>