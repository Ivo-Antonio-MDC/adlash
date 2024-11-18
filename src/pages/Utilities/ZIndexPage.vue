<template>
  <BreadCrumb PageTitle="Z-index" />
  <ZIndex />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ZIndex from "../../components/Utilities/ZIndex/ZIndex.vue";

export default defineComponent({
  name: "ZIndexPage",
  components: {
    BreadCrumb,
    ZIndex,
  },
});
</script>