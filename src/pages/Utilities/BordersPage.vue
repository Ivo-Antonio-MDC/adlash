<template>
  <BreadCrumb PageTitle="Borders" />
  <BordersContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import BordersContent from "../../components/Utilities/Borders/BordersContent.vue";

export default defineComponent({
  name: "BordersPage",
  components: {
    BreadCrumb,
    BordersContent,
  },
});
</script>