<template>
  <BreadCrumb PageTitle="Tooltips" />
  <TooltipsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TooltipsContent from "../../components/UIElements/Tooltips/TooltipsContent.vue";

export default defineComponent({
  name: "TooltipsPage",
  components: {
    BreadCrumb,
    TooltipsContent,
  },
});
</script>