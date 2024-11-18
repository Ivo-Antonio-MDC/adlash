<template>
  <BreadCrumb PageTitle="Invoice List" />
  <InvoiceList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import InvoiceList from "../../components/Ecommerce/InvoiceList/InvoiceList.vue";

export default defineComponent({
  name: "InvoiceListPage",
  components: {
    BreadCrumb,
    InvoiceList,
  },
});
</script>