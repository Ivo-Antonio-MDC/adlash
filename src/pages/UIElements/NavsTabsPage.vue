<template>
  <BreadCrumb PageTitle="Navs & Tabs" />
  <NavsTabs />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import NavsTabs from "../../components/UIElements/NavsTabs/NavsTabs.vue";

export default defineComponent({
  name: "NavsTabsPage",
  components: {
    BreadCrumb,
    NavsTabs,
  },
});
</script>