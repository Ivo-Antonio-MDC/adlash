<template>
  <BreadCrumb PageTitle="Projects List" />
  <ProjectsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ProjectsList from "../../components/Projects/ProjectsList/ProjectsList.vue";

export default defineComponent({
  name: "ProjectsListPage",
  components: {
    BreadCrumb,
    ProjectsList,
  },
});
</script>