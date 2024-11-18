<template>
  <BreadCrumb PageTitle="Display" />
  <DisplayContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import DisplayContent from "../../components/Utilities/Display/DisplayContent.vue";

export default defineComponent({
  name: "DisplayPage",
  components: {
    BreadCrumb,
    DisplayContent,
  },
});
</script>