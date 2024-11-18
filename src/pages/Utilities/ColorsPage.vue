<template>
  <BreadCrumb PageTitle="Colors" />
  <ColorsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ColorsContent from "../../components/Utilities/Colors/ColorsContent.vue";

export default defineComponent({
  name: "ColorsPage",
  components: {
    BreadCrumb,
    ColorsContent,
  },
});
</script>