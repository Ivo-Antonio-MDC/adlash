<template>
  <BreadCrumb PageTitle="Search Result" />
  <SearchResult />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import SearchResult from "../../components/PagesInner/SearchResult/SearchResult.vue";

export default defineComponent({
  name: "SearchResultPage",
  components: {
    BreadCrumb,
    SearchResult,
  },
});
</script>