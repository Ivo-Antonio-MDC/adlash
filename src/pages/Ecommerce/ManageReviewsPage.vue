<template>
  <BreadCrumb PageTitle="Manage Reviews" />
  <ManageReviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ManageReviews from "../../components/Ecommerce/ManageReviews/ManageReviews.vue";

export default defineComponent({
  name: "ManageReviewsPage",
  components: {
    BreadCrumb,
    ManageReviews,
  },
});
</script>