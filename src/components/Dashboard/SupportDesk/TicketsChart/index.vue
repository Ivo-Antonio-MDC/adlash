<template>
  <div class="row">
    <div class="col-lg-6 col-sm-6">
      <OnHoldTicket />
    </div>
    <div class="col-lg-6 col-sm-6">
      <DueTicketsToday />
    </div>
    <div class="col-lg-6 col-sm-6">
      <ClosedTickets />
    </div>
    <div class="col-lg-6 col-sm-6">
      <AnsweredTickets />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OnHoldTicket from "./OnHoldTicket.vue";
import DueTicketsToday from "./DueTicketsToday.vue";
import ClosedTickets from "./ClosedTickets.vue";
import AnsweredTickets from "./AnsweredTickets.vue";

export default defineComponent({
  name: "TicketsChart",
  components: {
    OnHoldTicket,
    DueTicketsToday,
    ClosedTickets,
    AnsweredTickets,
  },
  data: function () {
    return {
      hold: [
        {
          name: "On Hold Tickets",
          data: [8, 9, 11, 9, 9, 8, 9, 8, 9, 8, 7],
        },
      ],
      onHoldTicketsChart: {
        chart: {
          height: 135,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        colors: ["#6FD3F7"],
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          show: false,
        },
        grid: {
          show: false,
          strokeDashArray: 5,
          borderColor: "#f0f0f0",
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: "14px",
            fontFamily: "Red Hat Display, sans-serif",
          },
        },
      },
    };
  },
});
</script>