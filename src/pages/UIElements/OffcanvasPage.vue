<template>
  <BreadCrumb PageTitle="Offcanvas" />
  <OffcanvasContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import OffcanvasContent from "../../components/UIElements/Offcanvas/OffcanvasContent.vue";

export default defineComponent({
  name: "OffcanvasPage",
  components: {
    BreadCrumb,
    OffcanvasContent,
  },
});
</script>