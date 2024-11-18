<template>
  <div class="card mb-25 border-0 rounded-0 bg-white stats-item">
    <div class="card-body p-15 p-sm-20 p-md-25 pt-lg-30 letter-spacing">
      <div class="row justify-content-between">
        <div class="col-lg-5 col-md-5">
          <div
            class="icon position-relative text-info-light rounded-1 text-center"
          >
            <i class="flaticon-sterile-box"></i>
          </div>
        </div>
        <div class="col-lg-7 col-md-7">
          <div class="chart">
            <apexchart
              type="area"
              height="120"
              :options="onHoldTicketsChart"
              :series="hold"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="info d-flex align-items-center justify-content-between mt-15">
        <span class="fs-13 d-block text-uppercase text-dark-emphasis fw-bold">
          ON HOLD TICKETS
        </span>
        <div class="d-flex align-items-center">
          <h4 class="fw-black mb-0 me-10 lh-1">69</h4>
          <span class="fw-bold text-success text-badge d-inline-block">
            <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
            5.5%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OnHoldTicket",

  data: function () {
    return {
      hold: [
        {
          name: "On Hold Tickets",
          data: [7, 8, 9, 9, 8, 9, 8, 9, 11, 9, 8],
        },
      ],
      onHoldTicketsChart: {
        chart: {
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