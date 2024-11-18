<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between"
      >
        <h5 class="card-title fw-bold mb-0">Client Payment Status</h5>
      </div>
      <div id="clientPaymentStatusChart" class="chart">
        <apexchart
          type="polarArea"
          height="430"
          :options="clientPaymentStatusChart"
          :series="client"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClientPaymentStatus",
  data: function () {
    return {
      client: [14, 23, 21, 17, 15],
      clientPaymentStatusChart: {
        chart: {
          height: 430,
          type: "polarArea",
        },
        stroke: {
          colors: ["#ffffff"],
        },
        labels: ["Started", "Cancel", "Success", "InProgress", "Completed"],
        plotOptions: {
          polarArea: {
            rings: {
              strokeColor: "#E9E8EE",
            },
          },
        },
        tooltip: {
          style: {
            fontSize: "14px",
            fontFamily: "Red Hat Display, sans-serif",
          },
        },
        fill: {
          opacity: 1,
        },
        colors: ["#06B48A", "#6FD3F7", "#F1421B", "#6560F0", "#F3C44C"],
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
          fontWeight: 500,
          fontSize: "14px",
          position: "bottom",
          horizontalAlign: "left",
          fontFamily: "Red Hat Display, sans-serif",
          labels: {
            colors: "#8E8DA1",
          },
          markers: {
            offsetX: -4,
            height: 10,
            width: 10,
          },
          itemMargin: {
            horizontal: 10,
            vertical: 5,
          },
        },
      },
    };
  },
});
</script>