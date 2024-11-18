<template>
  <div class="card mb-25 border-0 rounded-0 bg-white daily-sales-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <span
        class="d-block mb-6 fs-13 text-uppercase fw-medium text-dark-emphasis"
      >
        AVERAGE DAILY SALES
      </span>
      <h4 class="fw-black mb-12 lh-1">$5,302</h4>
      <span class="fw-bold text-success text-badge d-inline-block">
        3.9%
        <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
      </span>
      <div class="chart">
        <apexchart
          type="bar"
          height="150"
          width="220"
          id="averageDailySalesChart"
          :options="averageDailySalesChart"
          :series="sales"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AverageDailySales",
  data: function () {
    return {
      sales: [
        {
          name: "Sales",
          data: [100, 30, 65, 90, 40, 100, 35],
        },
      ],
      averageDailySalesChart: {
        chart: {
          type: "bar",
          height: 150,
          width: 220,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth: "35%",
            borderRadiusApplication: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#6FD3F7"],
        stroke: {
          show: false,
        },
        xaxis: {
          categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          labels: {
            show: false,
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: "#9C9AB6",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          tickAmount: 8,
          labels: {
            show: true,
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: ["#9C9AB6"],
              fontSize: "14px",
              fontWeight: 500,
            },
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          style: {
            fontSize: "14px",
            fontFamily: "Red Hat Display, sans-serif",
          },
          y: {
            formatter: function (val: string) {
              return val + "%";
            },
          },
        },
        grid: {
          show: false,
          strokeDashArray: 5,
          borderColor: "#f0f0f0",
        },
      },
    };
  },
});
</script>