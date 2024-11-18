<template>
  <BreadCrumb PageTitle="Vertical Alignment" />
  <VerticalAlignment />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import VerticalAlignment from "../../components/Utilities/VerticalAlignment/VerticalAlignment.vue";

export default defineComponent({
  name: "VerticalAlignmentPage",
  components: {
    BreadCrumb,
    VerticalAlignment,
  },
});
</script>