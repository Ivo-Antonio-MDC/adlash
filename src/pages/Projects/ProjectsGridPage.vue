<template>
  <BreadCrumb PageTitle="Projects Grid" />
  <ProjectsGrid />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ProjectsGrid from "../../components/Projects/ProjectsGrid/ProjectsGrid.vue";

export default defineComponent({
  name: "ProjectsGridPage",
  components: {
    BreadCrumb,
    ProjectsGrid,
  },
});
</script>