<template>
  <BreadCrumb PageTitle="Shadows" />
  <ShadowsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ShadowsContent from "../../components/Utilities/Shadows/ShadowsContent.vue";

export default defineComponent({
  name: "ShadowsPage",
  components: {
    BreadCrumb,
    ShadowsContent,
  },
});
</script>