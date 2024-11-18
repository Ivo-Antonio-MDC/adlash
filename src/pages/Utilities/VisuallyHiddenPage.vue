<template>
  <BreadCrumb PageTitle="Visually Hidden" />
  <VisuallyHidden />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import VisuallyHidden from "../../components/Utilities/VisuallyHidden/VisuallyHidden.vue";

export default defineComponent({
  name: "VisuallyHiddenPage",
  components: {
    BreadCrumb,
    VisuallyHidden,
  },
});
</script>