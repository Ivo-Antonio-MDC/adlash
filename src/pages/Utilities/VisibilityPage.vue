<template>
  <BreadCrumb PageTitle="Visibility" />
  <VisibilityContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import VisibilityContent from "../../components/Utilities/Visibility/VisibilityContent.vue";

export default defineComponent({
  name: "VisibilityPage",
  components: {
    BreadCrumb,
    VisibilityContent,
  },
});
</script>