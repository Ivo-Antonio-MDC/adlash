<template>
  <BreadCrumb PageTitle="Edit Course" />
  <EditCourse />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import EditCourse from "../../components/ELearning/EditCourse/EditCourse.vue";

export default defineComponent({
  name: "EditCoursePage",
  components: {
    BreadCrumb,
    EditCourse,
  },
});
</script>