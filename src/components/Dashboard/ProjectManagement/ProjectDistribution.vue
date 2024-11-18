<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="mb-15 d-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Project Distribution</h5>
        <div class="dropdown">
          <button
            class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="flaticon-dots"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i class="flaticon-view lh-1 me-8 position-relative top-1"></i>
                View
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i class="flaticon-pen lh-1 me-8 position-relative top-1"></i>
                Edit
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i class="flaticon-delete lh-1 me-8 position-relative top-1">
                </i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="projectDistributionChart" class="chart">
        <apexchart
          type="donut"
          height="382"
          :options="projectDistributionChart"
          :series="distribution"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectDistribution",
  data: function () {
    return {
      distribution: [35, 35, 41, 45],
      projectDistributionChart: {
        chart: {
          type: "donut",
          height: 382,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "75%",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 4,
        },
        colors: ["#F1421B", "#06B48A", "#6560F0", "#6FD3F7"],
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          fontWeight: 500,
          fontSize: "14px",
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
        labels: ["Research", "Design", "Frontend", "Backend"],
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