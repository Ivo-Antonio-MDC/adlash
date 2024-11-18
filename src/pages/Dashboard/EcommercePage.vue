<template>
  <div class="row">
    <div class="col-xxl-7 col-xxxl-6">
      <WhatHappening />

      <div class="row">
        <div class="col-lg-6 col-xxxl-6 col-md-6">
          <ExpectedEarnings />
        </div>
        <div class="col-lg-6 col-xxxl-6 col-md-6">
          <AverageDailySales />
        </div>
        <div class="col-xl-12 col-lg-6 col-xxxl-6 col-md-12">
          <RevenueThisMonth />
        </div>
        <div class="col-xl-12 col-lg-6 col-xxxl-6 col-md-12">
          <NewCustomersThisMonth />
        </div>
      </div>
    </div>
    <div class="col-xxl-5 col-xxxl-6">
      <StatsBoxes />

      <WeeklySales />
    </div>
    <div class="col-xxl-4">
      <SalesByPOSLocation />
    </div>
    <div class="col-xxl-4">
      <TopSellingProducts />
    </div>
    <div class="col-xxl-4">
      <WebsiteVisitors />
    </div>
    <div class="col-xxl-6">
      <ProductsOrders />
    </div>
    <div class="col-xxl-6">
      <StockReport />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import WhatHappening from "../../components/Dashboard/Ecommerce/WhatHappening.vue";

import ExpectedEarnings from "../../components/Dashboard/Ecommerce/ExpectedEarnings.vue";

import AverageDailySales from "../../components/Dashboard/Ecommerce/AverageDailySales.vue";

import RevenueThisMonth from "../../components/Dashboard/Ecommerce/RevenueThisMonth.vue";

import NewCustomersThisMonth from "../../components/Dashboard/Ecommerce/NewCustomersThisMonth.vue";

import StatsBoxes from "../../components/Dashboard/Ecommerce/StatsBoxes/index.vue";

import WeeklySales from "../../components/Dashboard/Ecommerce/WeeklySales.vue";

import SalesByPOSLocation from "../../components/Dashboard/Ecommerce/SalesByPOSLocation.vue";

import TopSellingProducts from "../../components/Dashboard/Ecommerce/TopSellingProducts/index.vue";

import WebsiteVisitors from "../../components/Dashboard/Ecommerce/WebsiteVisitors.vue";

import ProductsOrders from "../../components/Dashboard/Ecommerce/ProductsOrders/index.vue";

import StockReport from "../../components/Dashboard/Ecommerce/StockReport/index.vue";

export default defineComponent({
  name: "EcommercePage",
  components: {
    WhatHappening,
    ExpectedEarnings,
    AverageDailySales,
    RevenueThisMonth,
    NewCustomersThisMonth,
    StatsBoxes,
    WeeklySales,
    SalesByPOSLocation,
    TopSellingProducts,
    WebsiteVisitors,
    ProductsOrders,
    StockReport,
  },
});
</script>