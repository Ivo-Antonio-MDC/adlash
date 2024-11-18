<template>
  <BreadCrumb PageTitle="Changelog" />
  <ChangeLog />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import ChangeLog from "../components/ChangeLog/ChangeLog.vue";

export default defineComponent({
  name: "ChangelogPage",
  components: {
    BreadCrumb,
    ChangeLog,
  },
});
</script>