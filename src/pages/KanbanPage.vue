<template>
  <BreadCrumb PageTitle="Teams" />
  <KanbanContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import KanbanContent from "../components/Kanban/KanbanContent.vue";

export default defineComponent({
  name: "KanbanPage",
  components: {
    BreadCrumb,
    KanbanContent,
  },
});
</script>