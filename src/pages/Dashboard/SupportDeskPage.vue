<template>
  <div class="row">
    <div class="col-xxl-7">
      <WhatHappening />
    </div>
    <div class="col-xxl-5">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <ResolveComplaints />
        </div>
        <div class="col-lg-6 col-md-6">
          <AverageSpeedOfAnswer />
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <TicketsChart />
    </div>
    <div class="col-xxl-6">
      <NumberOfTickets />
    </div>
    <div class="col-xxl-3">
      <TopPerformerHelpAgent />
    </div>
    <div class="col-xxl-6">
      <UnresolvedTicketsByPriority />
    </div>
    <div class="col-xxl-3">
      <CustomerSatisfaction />
    </div>
    <div class="col-xxl-8">
      <UnsolvedTickets />
    </div>
    <div class="col-xxl-4">
      <ToDoList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import WhatHappening from "../../components/Dashboard/SupportDesk/WhatHappening.vue";
import ResolveComplaints from "../../components/Dashboard/SupportDesk/ResolveComplaints.vue";
import AverageSpeedOfAnswer from "../../components/Dashboard/SupportDesk/AverageSpeedOfAnswer.vue";
import TicketsChart from "../../components/Dashboard/SupportDesk/TicketsChart/index.vue";
import NumberOfTickets from "../../components/Dashboard/SupportDesk/NumberOfTickets.vue";
import TopPerformerHelpAgent from "../../components/Dashboard/SupportDesk/TopPerformerHelpAgent/index.vue";
import UnresolvedTicketsByPriority from "../../components/Dashboard/SupportDesk/UnresolvedTicketsByPriority.vue";
import CustomerSatisfaction from "../../components/Dashboard/SupportDesk/CustomerSatisfaction.vue";
import UnsolvedTickets from "../../components/Dashboard/SupportDesk/UnsolvedTickets.vue";
import ToDoList from "../../components/Dashboard/SupportDesk/ToDoList/index.vue";

export default defineComponent({
  name: "SupportDeskPage",
  components: {
    WhatHappening,
    ResolveComplaints,
    AverageSpeedOfAnswer,
    TicketsChart,
    NumberOfTickets,
    TopPerformerHelpAgent,
    UnresolvedTicketsByPriority,
    CustomerSatisfaction,
    UnsolvedTickets,
    ToDoList,
  },
});
</script>