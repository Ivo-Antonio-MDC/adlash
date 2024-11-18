<template>
  <BreadCrumb PageTitle="Tables" />
  <TablesContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import TablesContent from "../components/Tables/TablesContent.vue";

export default defineComponent({
  name: "TablesPage",
  components: {
    BreadCrumb,
    TablesContent,
  },
});
</script>