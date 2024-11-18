<template>
  <BreadCrumb PageTitle="Customers List" />
  <CustomersList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CustomersList from "../../components/Ecommerce/Customers/CustomersList.vue";

export default defineComponent({
  name: "CustomersPage",
  components: {
    BreadCrumb,
    CustomersList,
  },
});
</script>