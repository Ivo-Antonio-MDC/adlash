<template>
  <StatsItem />
  <div class="row">
    <div class="col-xxl-7 col-xxxl-8">
      <TaskOverview />

      <div class="row">
        <div class="col-lg-6 col-md-12">
          <ProjectDistribution />
        </div>
        <div class="col-lg-6 col-md-12">
          <RecentActivity />
        </div>
      </div>
    </div>
    <div class="col-xxl-5 col-xxxl-4">
      <WorkingSchedule />
    </div>
  </div>
  <ProjectStats />
  <div class="row">
    <div class="col-lg-5 col-xxl-4">
      <ToDoList />
    </div>
    <div class="col-lg-7 col-xxl-8">
      <ActiveTasks />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import StatsItem from "../../components/Dashboard/ProjectManagement/StatsItem.vue";

import TaskOverview from "../../components/Dashboard/ProjectManagement/TaskOverview.vue";

import ProjectDistribution from "../../components/Dashboard/ProjectManagement/ProjectDistribution.vue";

import RecentActivity from "../../components/Dashboard/ProjectManagement/RecentActivity.vue";

import WorkingSchedule from "../../components/Dashboard/ProjectManagement/WorkingSchedule/index.vue";

import ProjectStats from "../../components/Dashboard/ProjectManagement/ProjectStats/index.vue";

import ToDoList from "../../components/Dashboard/ProjectManagement/ToDoList/index.vue";

import ActiveTasks from "../../components/Dashboard/ProjectManagement/ActiveTasks/index.vue";

export default defineComponent({
  name: "ProjectManagementPage",
  components: {
    StatsItem,
    TaskOverview,
    ProjectDistribution,
    RecentActivity,
    WorkingSchedule,
    ProjectStats,
    ToDoList,
    ActiveTasks,
  },
});
</script>