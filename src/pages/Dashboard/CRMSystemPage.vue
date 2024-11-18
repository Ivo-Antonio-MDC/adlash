<template>
  <div class="row">
    <div class="col-xxl-9">
      <div class="row">
        <div class="col-lg-4">
          <NewContact />
        </div>
        <div class="col-lg-4">
          <NewUsers />
        </div>
        <div class="col-lg-4">
          <NewLeads />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <MostLead />
        </div>
        <div class="col-lg-4">
          <ForBetterOutreach />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <TopPerformer />
        </div>
        <div class="col-lg-8">
          <RevenueTargetByCountry />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5">
          <ToDoList />
        </div>
        <div class="col-lg-7">
          <RecentLeads />
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <CallLeads />
      <CampaignsChart />
      <AverageCallDuration />
      <ClientPaymentStatus />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NewContact from "../../components/Dashboard/CRMSystem/NewContact.vue";
import NewUsers from "../../components/Dashboard/CRMSystem/NewUsers.vue";
import NewLeads from "../../components/Dashboard/CRMSystem/NewLeads.vue";
import MostLead from "../../components/Dashboard/CRMSystem/MostLead/index.vue";
import ForBetterOutreach from "../../components/Dashboard/CRMSystem/ForBetterOutreach.vue";
import TopPerformer from "../../components/Dashboard/CRMSystem/TopPerformer/index.vue";
import RevenueTargetByCountry from "../../components/Dashboard/CRMSystem/RevenueTargetByCountry/index.vue";
import ToDoList from "../../components/Dashboard/CRMSystem/ToDoList/index.vue";
import RecentLeads from "../../components/Dashboard/CRMSystem/RecentLeads/index.vue";
import CallLeads from "../../components/Dashboard/CRMSystem/CallLeads.vue";
import CampaignsChart from "../../components/Dashboard/CRMSystem/CampaignsChart.vue";
import AverageCallDuration from "../../components/Dashboard/CRMSystem/AverageCallDuration.vue";
import ClientPaymentStatus from "../../components/Dashboard/CRMSystem/ClientPaymentStatus.vue";

export default defineComponent({
  name: "CRMSystemPage",
  components: {
    NewContact,
    NewUsers,
    NewLeads,
    MostLead,
    ForBetterOutreach,
    TopPerformer,
    RevenueTargetByCountry,
    ToDoList,
    RecentLeads,
    CallLeads,
    CampaignsChart,
    AverageCallDuration,
    ClientPaymentStatus,
  },
});
</script>