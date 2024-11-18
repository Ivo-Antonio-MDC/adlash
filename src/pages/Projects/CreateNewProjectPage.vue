<template>
  <BreadCrumb PageTitle="Create New Project" />
  <CreateNewProject />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CreateNewProject from "../../components/Projects/CreateNewProject/CreateNewProject.vue";

export default defineComponent({
  name: "CreateNewProjectPage",
  components: {
    BreadCrumb,
    CreateNewProject,
  },
});
</script>