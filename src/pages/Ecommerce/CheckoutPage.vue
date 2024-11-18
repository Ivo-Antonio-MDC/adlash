<template>
  <BreadCrumb PageTitle="Checkout" />
  <CheckoutContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CheckoutContent from "../../components/Ecommerce/Checkout/CheckoutContent.vue";

export default defineComponent({
  name: "CheckoutPage",
  components: {
    BreadCrumb,
    CheckoutContent,
  },
});
</script>