<template>
  <BreadCrumb PageTitle="Invoice Details" />
  <InvoiceDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import InvoiceDetails from "../../components/Ecommerce/InvoiceDetails/index.vue";

export default defineComponent({
  name: "InvoiceDetailsPage",
  components: {
    BreadCrumb,
    InvoiceDetails,
  },
});
</script>