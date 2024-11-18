<template>
  <BreadCrumb PageTitle="Object Fit" />
  <ObjectFit />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ObjectFit from "../../components/Utilities/ObjectFit/ObjectFit.vue";

export default defineComponent({
  name: "ObjectFitPage",
  components: {
    BreadCrumb,
    ObjectFit,
  },
});
</script>