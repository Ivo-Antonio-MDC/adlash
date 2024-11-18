<template>
  <BreadCrumb PageTitle="Flaticons" />
  <FlaticonsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import FlaticonsContent from "../../components/Icons/Flaticons/FlaticonsContent.vue";

export default defineComponent({
  name: "FlaticonsPage",
  components: {
    BreadCrumb,
    FlaticonsContent,
  },
});
</script>