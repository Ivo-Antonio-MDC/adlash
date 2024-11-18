<template>
  <BreadCrumb PageTitle="Shopping Cart" />
  <ShoppingCart />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ShoppingCart from "../../components/Ecommerce/ShoppingCart/ShoppingCart.vue";

export default defineComponent({
  name: "ShoppingCartPage",
  components: {
    BreadCrumb,
    ShoppingCart,
  },
});
</script>