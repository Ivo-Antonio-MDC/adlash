<template>
  <BreadCrumb PageTitle="Link" />
  <LinkContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import LinkContent from "../../components/Utilities/Link/LinkContent.vue";

export default defineComponent({
  name: "LinkPage",
  components: {
    BreadCrumb,
    LinkContent,
  },
});
</script>