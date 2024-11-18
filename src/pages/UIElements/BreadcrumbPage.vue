<template>
  <BreadCrumb PageTitle="Breadcrumb" />
  <BreadcrumbContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import BreadcrumbContent from "../../components/UIElements/Breadcrumb/BreadcrumbContent.vue";

export default defineComponent({
  name: "BreadcrumbPage",
  components: {
    BreadCrumb,
    BreadcrumbContent,
  },
});
</script>