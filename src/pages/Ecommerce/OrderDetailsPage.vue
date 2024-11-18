<template>
  <BreadCrumb PageTitle="Order Details" />
  <OrderDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import OrderDetails from "../../components/Ecommerce/OrderDetails/OrderDetails.vue";

export default defineComponent({
  name: "OrderDetailsPage",
  components: {
    BreadCrumb,
    OrderDetails,
  },
});
</script>