<template>
  <div class="card mb-25 border-0 rounded-0 bg-white time-duration-box">
    <div class="card-body position-relative letter-spacing">
      <div class="icon position-relative lh-1 text-success">
        <i class="flaticon-clock"></i>
      </div>
      <div class="content mb-0">
        <span class="d-block fw-bold text-dark-emphasis mb-1">
          Average Call Duration
        </span>
        <h2 class="mb-0 fw-black">8 min 30s</h2>
      </div>
      <div class="chart">
        <div id="averageCallDurationChart">
          <apexchart
            type="area"
            height="110"
            id="averageCallDurationChart"
            :options="averageCallDurationChart"
            :series="average"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AverageCallDuration",
  data: function () {
    return {
      average: [
        {
          data: [7, 8, 9, 9, 8, 9, 8, 9, 11, 9, 8],
        },
      ],
      averageCallDurationChart: {
        chart: {
          height: 110,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        colors: ["#06B48A"],
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