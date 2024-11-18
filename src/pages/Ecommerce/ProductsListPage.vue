<template>
  <BreadCrumb PageTitle="Products List" />
  <ProductsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ProductsList from "../../components/Ecommerce/ProductsList/ProductsList.vue";

export default defineComponent({
  name: "ProductsListPage",
  components: {
    BreadCrumb,
    ProductsList,
  },
});
</script>