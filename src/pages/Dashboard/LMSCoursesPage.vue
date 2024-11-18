<template>
  <WhatHappening />

  <div class="row">
    <div class="col-xxl-6">
      <div class="row">
        <div class="col-lg-6">
          <TodaysCourse />
        </div>
        <div class="col-lg-6">
          <TodaysEvent />
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <AverageEnrollmentRate />
    </div>
    <div class="col-xxl-4">
      <CategoriesCourses />

      <StudentsProgress />
    </div>
    <div class="col-xxl-8">
      <CoursesClass />
      <FundamentalCourses />
      <div class="row">
        <div class="col-lg-6 col-xxxl-5">
          <PerformanceProgress />
        </div>
        <div class="col-lg-6 col-xxxl-7">
          <ToDoList />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import WhatHappening from "../../components/Dashboard/LMSCourses/WhatHappening.vue";
import TodaysCourse from "../../components/Dashboard/LMSCourses/TodaysCourse.vue";
import TodaysEvent from "../../components/Dashboard/LMSCourses/TodaysEvent.vue";
import AverageEnrollmentRate from "../../components/Dashboard/LMSCourses/AverageEnrollmentRate.vue";
import CategoriesCourses from "../../components/Dashboard/LMSCourses/CategoriesCourses/index.vue";
import StudentsProgress from "../../components/Dashboard/LMSCourses/StudentsProgress/index.vue";
import CoursesClass from "../../components/Dashboard/LMSCourses/CoursesClass/index.vue";
import FundamentalCourses from "../../components/Dashboard/LMSCourses/FundamentalCourses/index.vue";
import PerformanceProgress from "../../components/Dashboard/LMSCourses/PerformanceProgress.vue";
import ToDoList from "../../components/Dashboard/LMSCourses/ToDoList/index.vue";

export default defineComponent({
  name: "LMSCoursesPage",
  components: {
    WhatHappening,
    TodaysCourse,
    TodaysEvent,
    AverageEnrollmentRate,
    CategoriesCourses,
    StudentsProgress,
    CoursesClass,
    FundamentalCourses,
    PerformanceProgress,
    ToDoList,
  },
});
</script>