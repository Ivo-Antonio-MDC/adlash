<template>
  <BreadCrumb PageTitle="Social Links" />
  <CoverImage />
  <SocialLinks />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CoverImage from "../../components/Settings/CoverImage.vue";
import SocialLinks from "../../components/Settings/SocialLinks/SocialLinks.vue";

export default defineComponent({
  name: "SocialLinksPage",
  components: {
    BreadCrumb,
    CoverImage,
    SocialLinks,
  },
});
</script>