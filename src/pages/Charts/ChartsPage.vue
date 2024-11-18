<template>
  <BreadCrumb PageTitle="Charts" />
  <div class="row">
    <div class="col-lg-12">
      <div
        class="card mb-25 border-0 rounded-0 bg-white sales-pos-location-box"
      >
        <WeeklySales />
      </div>
    </div>
    <div class="col-lg-6">
      <SalesByPOSLocation />
      <TaskOverview />
      <NumberOfTickets />
      <CustomerSatisfaction />
      <CampaignsChart />
      <AverageEnrollmentRate />
    </div>
    <div class="col-lg-6">
      <WebsiteVisitors />
      <ProjectDistribution />
      <UnresolvedTickets />
      <PerformanceChart />
      <ClientPaymentStatus />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import WeeklySales from "../../components/Charts/Charts/WeeklySales.vue";
import SalesByPOSLocation from "../../components/Charts/Charts/SalesByPOSLocation.vue";
import TaskOverview from "../../components/Charts/Charts/TaskOverview.vue";
import NumberOfTickets from "../../components/Charts/Charts/NumberOfTickets.vue";
import CustomerSatisfaction from "../../components/Charts/Charts/CustomerSatisfaction.vue";
import CampaignsChart from "../../components/Charts/Charts/CampaignsChart.vue";
import AverageEnrollmentRate from "../../components/Charts/Charts/AverageEnrollmentRate.vue";
import WebsiteVisitors from "../../components/Charts/Charts/WebsiteVisitors.vue";
import ProjectDistribution from "../../components/Charts/Charts/ProjectDistribution.vue";
import UnresolvedTickets from "../../components/Charts/Charts/UnresolvedTickets.vue";
import PerformanceChart from "../../components/Charts/Charts/PerformanceChart.vue";
import ClientPaymentStatus from "../../components/Charts/Charts/ClientPaymentStatus.vue";

export default defineComponent({
  name: "ChartsPage",
  components: {
    BreadCrumb,
    WeeklySales,
    SalesByPOSLocation,
    TaskOverview,
    NumberOfTickets,
    CustomerSatisfaction,
    CampaignsChart,
    AverageEnrollmentRate,
    WebsiteVisitors,
    ProjectDistribution,
    UnresolvedTickets,
    PerformanceChart,
    ClientPaymentStatus,
  },
});
</script>