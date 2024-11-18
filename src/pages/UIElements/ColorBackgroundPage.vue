<template>
  <BreadCrumb PageTitle="Color & Background" />
  <ColorBackground />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ColorBackground from "../../components/UIElements/ColorBackground/ColorBackground.vue";

export default defineComponent({
  name: "ColorBackgroundPage",
  components: {
    BreadCrumb,
    ColorBackground,
  },
});
</script>