<template>
  <BreadCrumb PageTitle="List View" />
  <ListView />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ListView from "../../components/SupportDesk/ListView/ListView.vue";

export default defineComponent({
  name: "ListViewPage",
  components: {
    BreadCrumb,
    ListView,
  },
});
</script>