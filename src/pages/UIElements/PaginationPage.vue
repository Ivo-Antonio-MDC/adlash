<template>
  <BreadCrumb PageTitle="Pagination" />
  <PaginationContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import PaginationContent from "../../components/UIElements/Pagination/PaginationContent.vue";

export default defineComponent({
  name: "PaginationPage",
  components: {
    BreadCrumb,
    PaginationContent,
  },
});
</script>