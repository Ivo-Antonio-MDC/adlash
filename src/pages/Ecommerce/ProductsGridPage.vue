<template>
  <BreadCrumb PageTitle="Products" />
  <ProductsGrid />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ProductsGrid from "../../components/Ecommerce/ProductsGrid/ProductsGrid.vue";

export default defineComponent({
  name: "ProductsGridPage",
  components: {
    BreadCrumb,
    ProductsGrid,
  },
});
</script>