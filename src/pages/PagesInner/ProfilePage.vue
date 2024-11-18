<template>
  <BreadCrumb PageTitle="Profile" />
  <div class="row">
    <div class="col-xxl-7">
      <WhatHappening />
      <ProfileContent />
      <ToDoList />
    </div>
    <div class="col-xxl-5">
      <RecentActivity />
      <WorkingSchedule />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import WhatHappening from "../../components/PagesInner/Profile/WhatHappening.vue";
import ProfileContent from "../../components/PagesInner/Profile/ProfileContent.vue";
import ToDoList from "../../components/PagesInner/Profile/ToDoList.vue";
import RecentActivity from "../../components/PagesInner/Profile/RecentActivity.vue";
import WorkingSchedule from "../../components/PagesInner/Profile/WorkingSchedule.vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    BreadCrumb,
    WhatHappening,
    ProfileContent,
    ToDoList,
    RecentActivity,
    WorkingSchedule,
  },
});
</script>