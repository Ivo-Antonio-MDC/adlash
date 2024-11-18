<template>
  <div class="card mb-25 border-0 rounded-0 bg-white performance-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="mb-15 d-sm-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Performance</h5>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Last</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option value="1" class="fw-medium" selected>1 Week</option>
            <option value="2" class="fw-medium">2 Week</option>
            <option value="3" class="fw-medium">3 Week</option>
          </select>
        </div>
      </div>
      <div id="performanceChart" class="chart">
        <apexchart
          type="donut"
          height="270"
          :options="performanceChart"
          :series="performance"
        ></apexchart>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li class="d-inline-block text-primary position-relative">
          <h5 class="mb-7 text-primary fw-black lh-1">
            2.5 <span class="text-muted fs-14 fw-semibold">hrs</span>
          </h5>
          <span class="d-block text-black-emphasis fs-13 fw-medium lh-1">
            Lesson Discuss
          </span>
        </li>
        <li class="d-inline-block text-info position-relative">
          <h5 class="mb-7 text-info fw-black lh-1">
            1.3 <span class="text-muted fs-14 fw-semibold">hrs</span>
          </h5>
          <span class="d-block text-black-emphasis fs-13 fw-medium lh-1">
            Taking Class
          </span>
        </li>
        <li class="d-inline-block text-success position-relative">
          <h5 class="mb-7 text-success fw-black lh-1">
            45 <span class="text-muted fs-14 fw-semibold">mins</span>
          </h5>
          <span class="d-block text-black-emphasis fs-13 fw-medium lh-1">
            Work In Progress
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PerformanceChart",
  data: function () {
    return {
      performance: [35, 35, 41],
      performanceChart: {
        chart: {
          type: "donut",
          height: 270,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "70%",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 4,
        },
        colors: ["#06B48A", "#6560F0", "#6FD3F7"],
        legend: {
          show: false,
          fontWeight: 500,
          fontSize: "14px",
          position: "bottom",
          horizontalAlign: "center",
          fontFamily: "Red Hat Display, sans-serif",
          labels: {
            colors: "#9C9AB6",
          },
          markers: {
            offsetX: -2,
          },
          itemMargin: {
            horizontal: 8,
            vertical: 5,
          },
        },
        labels: ["Lesson Discuss", "Taking Class", "Work In Progress"],
        tooltip: {
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