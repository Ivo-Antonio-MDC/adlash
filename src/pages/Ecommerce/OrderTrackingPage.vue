<template>
  <BreadCrumb PageTitle="Order Tracking" />
  <OrderTracking />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import OrderTracking from "../../components/Ecommerce/OrderTracking/OrderTracking.vue";

export default defineComponent({
  name: "OrderTrackingPage",
  components: {
    BreadCrumb,
    OrderTracking,
  },
});
</script>