<template>
  <BreadCrumb PageTitle="Refund" />
  <RefundContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import RefundContent from "../../components/Ecommerce/Refund/RefundContent.vue";

export default defineComponent({
  name: "RefundPage",
  components: {
    BreadCrumb,
    RefundContent,
  },
});
</script>