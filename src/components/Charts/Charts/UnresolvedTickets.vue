<template>
  <div class="card mb-25 border-0 rounded-0 bg-white unresolved-tickets-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="mb-md-10 d-flex align-items-center justify-content-between">
        <h6 class="card-title fw-bold mb-0">Unresolved Tickets By Priority</h6>
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
                <i class="flaticon-view lh-1 me-8"></i>
                View
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i class="flaticon-pen lh-1 me-8"></i>
                Edit
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i class="flaticon-delete lh-1 me-8"></i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-9 col-xxxl-10 col-md-10">
          <div id="unresolvedTicketsChart" class="chart">
            <apexchart
              type="bar"
              height="325"
              :options="unresolvedTicketsChart"
              :series="unresolved"
            ></apexchart>
          </div>
        </div>
        <div class="col-lg-3 col-xxxl-2 col-md-2">
          <ul class="list ps-0 mb-0 mt-15 mt-md-25 list-unstyled">
            <li>
              <div class="d-flex align-items-center mb-5">
                <span
                  class="d-block w-10 h-10 bg-primary rounded-circle"
                ></span>
                <span
                  class="fs-12 fw-medium text-black-emphasis text-uppercase lh-1 ms-8"
                >
                  URGENT
                </span>
              </div>
              <h4 class="mb-0 fw-black">14</h4>
            </li>
            <li>
              <div class="d-flex align-items-center mb-5">
                <span
                  class="d-block w-10 h-10 bg-primary rounded-circle opacity-75"
                ></span>
                <span
                  class="fs-12 fw-medium text-black-emphasis text-uppercase lh-1 ms-8"
                >
                  HIGH
                </span>
              </div>
              <h4 class="mb-0 fw-black">112</h4>
            </li>
            <li>
              <div class="d-flex align-items-center mb-5">
                <span
                  class="d-block w-10 h-10 bg-primary rounded-circle opacity-50"
                ></span>
                <span
                  class="fs-12 fw-medium text-black-emphasis text-uppercase lh-1 ms-8"
                >
                  MEDIUM
                </span>
              </div>
              <h4 class="mb-0 fw-black">24</h4>
            </li>
            <li>
              <div class="d-flex align-items-center mb-5">
                <span
                  class="d-block w-10 h-10 bg-primary rounded-circle opacity-25"
                ></span>
                <span
                  class="fs-12 fw-medium text-black-emphasis text-uppercase lh-1 ms-8"
                >
                  LOW
                </span>
              </div>
              <h4 class="mb-0 fw-black">32</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UnresolvedTickets",
  data: function () {
    return {
      unresolved: [
        {
          name: "Urgent",
          data: [20, 30, 15, 8, 20, 5, 18],
        },
        {
          name: "High",
          data: [20, 20, 10, 40, 20, 10, 15],
        },
        {
          name: "Medium",
          data: [16, 20, 18, 10, 15, 10, 15],
        },
        {
          name: "Low",
          data: [10, 20, 10, 18, 10, 8, 8],
        },
      ],
      unresolvedTicketsChart: {
        chart: {
          type: "bar",
          height: 337,
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: ["#6560F0", "#847ff3", "#9290f5", "#a4a0f7"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "14%",
            dataLabels: {
              total: {
                enabled: false,
              },
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        },
        fill: {
          opacity: 1,
        },
        yaxis: {
          show: true,
          tickAmount: 5,
          labels: {
            show: true,
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: ["#9C9AB6"],
              fontSize: "14px",
              fontWeight: 500,
            },
          },
          axisBorder: {
            show: true,
            color: "#eeeeee",
          },
        },
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