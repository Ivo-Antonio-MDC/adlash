<template>
  <BreadCrumb PageTitle="Course Details" />
  <CourseDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CourseDetails from "../../components/ELearning/CourseDetails/CourseDetails.vue";

export default defineComponent({
  name: "CourseDetailsPage",
  components: {
    BreadCrumb,
    CourseDetails,
  },
});
</script>