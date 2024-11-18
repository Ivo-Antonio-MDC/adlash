<template>
  <div class="card mb-25 border-0 rounded-0 bg-white customer-satisfaction-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-25 d-flex align-items-center justify-content-between"
      >
        <h6 class="card-title fw-bold mb-0">Customer Satisfaction</h6>
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
      <div class="chart">
        <apexchart
          type="pie"
          height="240"
          id="customerSatisfactionChart"
          :options="customerSatisfactionChart"
          :series="customer"
        ></apexchart>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled text-center">
        <li class="d-inline-block text-start">
          <div class="d-flex align-items-center mb-10">
            <span class="d-block w-10 h-10 bg-primary rounded-circle"> </span>
            <span
              class="fs-12 fw-medium text-black-emphasis text-uppercase lh-1 ms-8"
            >
              POSITIVE
            </span>
          </div>
          <div class="d-flex align-items-end">
            <h4 class="mb-0 text-black-emphasis lh-1 fw-black">6200</h4>
            <span
              class="fw-bold text-success d-inline-block position-relative top-1 ms-5"
            >
              <i class="flaticon-up-arrow fs-11 lh-1"></i>
              9.3%
            </span>
          </div>
        </li>
        <li class="d-inline-block text-start">
          <div class="d-flex align-items-center mb-10">
            <span class="d-block w-10 h-10 bg-orange rounded-circle"></span>
            <span
              class="fs-12 fw-medium text-black-emphasis text-uppercase lh-1 ms-8"
            >
              NEGETIVE
            </span>
          </div>
          <div class="d-flex align-items-end">
            <h4 class="mb-0 text-black-emphasis lh-1 fw-black">210</h4>
            <span
              class="fw-bold text-danger d-inline-block position-relative top-1 ms-5"
            >
              <i class="flaticon-down-arrow fs-11 lh-1"></i>
              0.5%
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomerSatisfaction",
  data: function () {
    return {
      customer: [90, 10],
      customerSatisfactionChart: {
        chart: {
          height: 240,
          type: "pie",
        },
        labels: ["Positive", "Negative"],
        colors: ["#6560F0", "#F1421B"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },
        legend: {
          show: false,
        },
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