<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="mb-md-10 d-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Average Enrollment Rate</h5>
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
      <div id="averageEnrollmentRateChart" class="chart">
        <apexchart
          type="line"
          height="265"
          :options="averageEnrollmentRateChart"
          :series="average"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AverageEnrollmentRate",
  data: function () {
    return {
      average: [
        {
          name: "On Sale Course",
          data: [80, 110, 50, 100, 70],
        },
        {
          name: "Regular Paid Course",
          data: [60, 90, 20, 60, 40],
        },
      ],
      averageEnrollmentRateChart: {
        chart: {
          height: 265,
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
          show: true,
          offsetY: 15,
          position: "top",
          fontWeight: 500,
          fontSize: "14px",
          horizontalAlign: "right",
          fontFamily: "Red Hat Display, sans-serif",
          labels: {
            colors: "#8E8DA1",
          },
          markers: {
            offsetX: -4,
            height: 12,
            width: 12,
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
        },
        xaxis: {
          categories: ["Launch", "Week_01", "Week_02", "Week_03", "Week_04"],
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
          tickAmount: 4,
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