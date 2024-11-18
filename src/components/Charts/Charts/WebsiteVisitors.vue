<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div
        class="mb-lg-15 d-sm-flex align-items-center justify-content-between"
      >
        <h6 class="card-title fw-bold mb-0">Website Visitors</h6>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Last</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option value="1" class="fw-medium">1 Month</option>
            <option value="2" class="fw-medium">2 Months</option>
            <option value="3" class="fw-medium">3 Months</option>
            <option value="4" class="fw-medium">4 Months</option>
            <option value="5" class="fw-medium">5 Months</option>
            <option value="6" class="fw-medium">6 Months</option>
            <option value="7" class="fw-medium">7 Months</option>
            <option value="8" class="fw-medium" selected>8 Months</option>
            <option value="9" class="fw-medium">9 Months</option>
          </select>
        </div>
      </div>
      <div id="websiteVisitorsChart" class="chart">
        <apexchart
          type="bar"
          height="385"
          :options="websiteVisitorsChart"
          :series="website"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WebsiteVisitors",
  data: function () {
    return {
      website: [
        {
          name: "Website Visitors",
          data: [65, 20, 95, 125, 40, 75, 30, 150],
        },
      ],
      websiteVisitorsChart: {
        chart: {
          type: "bar",
          height: 385,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            horizontal: false,
            columnWidth: "28%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#6560F0"],
        stroke: {
          show: false,
        },
        xaxis: {
          categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
          labels: {
            show: true,
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: "#9C9AB6",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
        },
        yaxis: {
          show: true,
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
        },
        grid: {
          show: true,
          strokeDashArray: 5,
          borderColor: "#d9e9ef",
        },
      },
    };
  },
});
</script>