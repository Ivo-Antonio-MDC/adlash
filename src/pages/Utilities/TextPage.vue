<template>
  <BreadCrumb PageTitle="Text" />
  <TextContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TextContent from "../../components/Utilities/Text/TextContent.vue";

export default defineComponent({
  name: "TextPage",
  components: {
    BreadCrumb,
    TextContent,
  },
});
</script>