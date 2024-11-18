<template>
  <BreadCrumb PageTitle="Toasts" />
  <ToastsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ToastsContent from "../../components/UIElements/Toasts/ToastsContent.vue";

export default defineComponent({
  name: "ToastsPage",
  components: {
    BreadCrumb,
    ToastsContent,
  },
});
</script>