<template>
  <BreadCrumb PageTitle="Customers List" />
  <CustomersList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CustomersList from "../../components/CRM/CustomersList/CustomersList.vue";

export default defineComponent({
  name: "CustomersListPage",
  components: {
    BreadCrumb,
    CustomersList,
  },
});
</script>