<template>
  <BreadCrumb PageTitle="About Me" />
  <AboutContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import AboutContent from "../../components/Social/About/AboutContent.vue";

export default defineComponent({
  name: "AboutPage",
  components: {
    BreadCrumb,
    AboutContent,
  },
});
</script>