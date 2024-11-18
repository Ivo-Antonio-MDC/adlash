<template>
  <BreadCrumb PageTitle="Courses List" />
  <CoursesList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CoursesList from "../../components/ELearning/CoursesList/CoursesList.vue";

export default defineComponent({
  name: "CoursesListPage",
  components: {
    BreadCrumb,
    CoursesList,
  },
});
</script>