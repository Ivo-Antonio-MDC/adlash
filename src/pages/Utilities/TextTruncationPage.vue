<template>
  <BreadCrumb PageTitle="Text Truncation" />
  <TextTruncation />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TextTruncation from "../../components/Utilities/TextTruncation/TextTruncation.vue";

export default defineComponent({
  name: "TextTruncationPage",
  components: {
    BreadCrumb,
    TextTruncation,
  },
});
</script>