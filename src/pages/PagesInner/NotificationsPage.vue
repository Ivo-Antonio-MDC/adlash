<template>
  <BreadCrumb PageTitle="Notifications" />
  <NotificationsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import NotificationsContent from "../../components/PagesInner/Notifications/NotificationsContent.vue";

export default defineComponent({
  name: "NotificationsPage",
  components: {
    BreadCrumb,
    NotificationsContent,
  },
});
</script>