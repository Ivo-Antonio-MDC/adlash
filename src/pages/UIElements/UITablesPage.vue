<template>
  <BreadCrumb PageTitle="Tables" />
  <TablesContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TablesContent from "../../components/UIElements/Tables/TablesContent.vue";

export default defineComponent({
  name: "UITablesPage",
  components: {
    BreadCrumb,
    TablesContent,
  },
});
</script>