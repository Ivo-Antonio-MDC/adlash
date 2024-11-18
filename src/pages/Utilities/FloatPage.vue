<template>
  <BreadCrumb PageTitle="Float" />
  <FloatContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FloatContent from "../../components/Utilities/Float/FloatContent.vue";

export default defineComponent({
  name: "FloatPage",
  components: {
    BreadCrumb,
    FloatContent,
  },
});
</script>