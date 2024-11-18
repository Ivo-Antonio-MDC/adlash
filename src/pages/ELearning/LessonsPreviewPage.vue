<template>
  <BreadCrumb PageTitle="Lessons Preview" />
  <LessonsPreview />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import LessonsPreview from "../../components/ELearning/LessonsPreview/LessonsPreview.vue";

export default defineComponent({
  name: "LessonsPreviewPage",
  components: {
    BreadCrumb,
    LessonsPreview,
  },
});
</script>