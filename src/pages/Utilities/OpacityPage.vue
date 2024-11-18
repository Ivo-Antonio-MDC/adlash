<template>
  <BreadCrumb PageTitle="Opacity" />
  <OpacityContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import OpacityContent from "../../components/Utilities/Opacity/OpacityContent.vue";

export default defineComponent({
  name: "OpacityPage",
  components: {
    BreadCrumb,
    OpacityContent,
  },
});
</script>