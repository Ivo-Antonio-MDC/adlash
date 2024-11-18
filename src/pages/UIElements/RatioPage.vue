<template>
  <BreadCrumb PageTitle="Ratio" />
  <RatioContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import RatioContent from "../../components/UIElements/Ratio/RatioContent.vue";

export default defineComponent({
  name: "RatioPage",
  components: {
    BreadCrumb,
    RatioContent,
  },
});
</script>