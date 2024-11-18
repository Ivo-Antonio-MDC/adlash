<template>
  <BreadCrumb PageTitle="Project Details" />
  <ProjectDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ProjectDetails from "../../components/Projects/ProjectDetails/ProjectDetails.vue";

export default defineComponent({
  name: "ProjectDetailsPage",
  components: {
    BreadCrumb,
    ProjectDetails,
  },
});
</script>