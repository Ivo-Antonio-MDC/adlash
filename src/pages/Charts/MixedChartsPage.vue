<template>
  <BreadCrumb PageTitle="Mixed Charts" />
  <div class="row">
    <div class="col-lg-4">
      <ExpectedEarnings />
      <DueTicketsToday />
      <NewContact />
    </div>
    <div class="col-lg-4">
      <AverageDailySales />
      <ClosedTickets />
      <NewUsers />
    </div>
    <div class="col-lg-4">
      <OnHoldTicket />
      <AnsweredTickets />
      <NewLeads />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ExpectedEarnings from "../../components/Charts/MixedCharts/ExpectedEarnings.vue";
import DueTicketsToday from "../../components/Charts/MixedCharts/DueTicketsToday.vue";
import NewContact from "../../components/Charts/MixedCharts/NewContact.vue";
import AverageDailySales from "../../components/Charts/MixedCharts/AverageDailySales.vue";
import ClosedTickets from "../../components/Charts/MixedCharts/ClosedTickets.vue";
import NewUsers from "../../components/Charts/MixedCharts/NewUsers.vue";
import OnHoldTicket from "../../components/Charts/MixedCharts/OnHoldTicket.vue";
import AnsweredTickets from "../../components/Charts/MixedCharts/AnsweredTickets.vue";
import NewLeads from "../../components/Charts/MixedCharts/NewLeads.vue";

export default defineComponent({
  name: "MixedChartsPage",
  components: {
    BreadCrumb,
    ExpectedEarnings,
    DueTicketsToday,
    NewContact,
    AverageDailySales,
    ClosedTickets,
    NewUsers,
    OnHoldTicket,
    AnsweredTickets,
    NewLeads,
  },
});
</script>