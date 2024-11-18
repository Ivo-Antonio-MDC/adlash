<template>
  <BreadCrumb PageTitle="Events" />
  <KanbanContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import KanbanContent from "../../components/Events/EventsGrid/EventsGrid.vue";

export default defineComponent({
  name: "EventsGridPage",
  components: {
    BreadCrumb,
    KanbanContent,
  },
});
</script>