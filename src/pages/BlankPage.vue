<template>
  <BreadCrumb PageTitle="Blank Page" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";

export default defineComponent({
  name: "BlankPage",
  components: {
    BreadCrumb,
  },
});
</script>