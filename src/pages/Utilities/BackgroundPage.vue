<template>
  <BreadCrumb PageTitle="Background" />
  <BackgroundColors />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import BackgroundColors from "../../components/Utilities/Background/BackgroundColors.vue";

export default defineComponent({
  name: "BackgroundPage",
  components: {
    BreadCrumb,
    BackgroundColors,
  },
});
</script>