<template>
  <BreadCrumb PageTitle="Product Details" />
  <ProductDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ProductDetails from "../../components/Ecommerce/ProductDetails/ProductDetails.vue";

export default defineComponent({
  name: "ProductDetailsPage",
  components: {
    BreadCrumb,
    ProductDetails,
  },
});
</script>