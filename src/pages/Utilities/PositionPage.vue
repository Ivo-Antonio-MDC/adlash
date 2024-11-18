<template>
  <BreadCrumb PageTitle="Position" />
  <PositionContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import PositionContent from "../../components/Utilities/Position/PositionContent.vue";

export default defineComponent({
  name: "PositionPage",
  components: {
    BreadCrumb,
    PositionContent,
  },
});
</script>