<template>
  <BreadCrumb PageTitle="Sellers List" />
  <SellersList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import SellersList from "../../components/Ecommerce/SellersList/SellersList.vue";

export default defineComponent({
  name: "SellersListPage",
  components: {
    BreadCrumb,
    SellersList,
  },
});
</script>