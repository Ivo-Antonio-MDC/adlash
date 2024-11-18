<template>
  <BreadCrumb PageTitle="Activity" />
  <ActivityContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ActivityContent from "../../components/Social/Activity/ActivityContent.vue";

export default defineComponent({
  name: "ActivityPage",
  components: {
    BreadCrumb,
    ActivityContent,
  },
});
</script>