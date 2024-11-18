<template>
  <BreadCrumb PageTitle="Orders List" />
  <OrdersList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import OrdersList from "../../components/Ecommerce/OrdersList/OrdersList.vue";

export default defineComponent({
  name: "OrdersListPage",
  components: {
    BreadCrumb,
    OrdersList,
  },
});
</script>