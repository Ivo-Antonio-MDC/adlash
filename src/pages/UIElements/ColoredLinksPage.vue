<template>
  <BreadCrumb PageTitle="Colored Links" />
  <ColoredLinks />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ColoredLinks from "../../components/UIElements/ColoredLinks/ColoredLinks.vue";

export default defineComponent({
  name: "ColoredLinksPage",
  components: {
    BreadCrumb,
    ColoredLinks,
  },
});
</script>