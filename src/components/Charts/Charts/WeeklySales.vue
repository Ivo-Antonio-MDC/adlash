<template>
  <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
    <div
      class="mb-15 mb-sm-0 d-sm-flex align-items-center justify-content-between"
    >
      <div class="title">
        <span class="fw-medium text-muted fs-13 d-block mb-5 text-uppercase">
          WEEKLY SALES
        </span>
        <h4 class="card-title fw-black mb-0">$25,302</h4>
      </div>
      <div
        class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
      >
        <span class="fw-medium text-muted me-8">Select</span>
        <select
          class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
        >
          <option value="1" class="fw-medium">This Week</option>
          <option value="2" class="fw-medium" selected>This Month</option>
          <option value="3" class="fw-medium">This Year</option>
        </select>
      </div>
    </div>
    <div class="chart">
      <apexchart
        type="line"
        height="374"
        id="weeklySalesChart"
        :options="weeklySalesChart"
        :series="sales"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeeklySales",
  data: function () {
    return {
      sales: [
        {
          name: "This Week",
          data: [80, 110, 50, 100, 70, 100, 140],
        },
        {
          name: "Previous Week",
          data: [60, 90, 20, 60, 40, 40, 100],
        },
      ],
      weeklySalesChart: {
        chart: {
          height: 374,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        colors: ["#6560F0", "#6FD3F7"],
        legend: {
          position: "top",
          fontSize: "14px",
          fontWeight: 500,
          horizontalAlign: "center",
          fontFamily: "Red Hat Display, sans-serif",
          labels: {
            colors: "#8E8DA1",
          },
          markers: {
            offsetY: -1,
            offsetX: -4,
            height: 15,
            width: 15,
          },
          itemMargin: {
            horizontal: 10,
          },
        },
        grid: {
          show: true,
          strokeDashArray: 5,
          borderColor: "#d9e9ef",
        },
        tooltip: {
          style: {
            fontSize: "14px",
            fontFamily: "Red Hat Display, sans-serif",
          },
          y: {
            formatter: function (val) {
              return "$" + val + "K";
            },
          },
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          labels: {
            show: true,
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
          axisBorder: {
            show: false,
          },
          tooltip: {
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: "#2b2a3f",
              fontSize: "14px",
            },
          },
        },
        yaxis: {
          show: true,
          labels: {
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: ["#9C9AB6"],
              fontSize: "14px",
              fontWeight: 500,
            },
          },
        },
      },
    };
  },
});
</script>