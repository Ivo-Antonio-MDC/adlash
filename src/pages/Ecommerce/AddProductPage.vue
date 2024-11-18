<template>
  <BreadCrumb PageTitle="Add Product" />
  <AddProduct />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import AddProduct from "../../components/Ecommerce/AddProduct/AddProduct.vue";

export default defineComponent({
  name: "AddProductPage",
  components: {
    BreadCrumb,
    AddProduct,
  },
});
</script>