<template>
  <BreadCrumb PageTitle="Gallery" />
  <GalleryContent />
  <GalleryTwo />
  <GalleryThree />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import GalleryContent from "../../components/PagesInner/Gallery/GalleryContent.vue";
import GalleryTwo from "../../components/PagesInner/Gallery/GalleryTwo.vue";
import GalleryThree from "../../components/PagesInner/Gallery/GalleryThree.vue";

export default defineComponent({
  name: "GalleryPage",
  components: {
    BreadCrumb,
    GalleryContent,
    GalleryTwo,
    GalleryThree,
  },
});
</script>