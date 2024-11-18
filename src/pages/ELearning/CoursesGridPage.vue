<template>
  <BreadCrumb PageTitle="Courses Grid" />
  <CoursesGrid />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CoursesGrid from "../../components/ELearning/CoursesGrid/CoursesGrid.vue";

export default defineComponent({
  name: "CoursesGridPage",
  components: {
    BreadCrumb,
    CoursesGrid,
  },
});
</script>