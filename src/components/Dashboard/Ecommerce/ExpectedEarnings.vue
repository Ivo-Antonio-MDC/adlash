<template>
  <div class="card mb-25 border-0 rounded-0 bg-white expected-earnings-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <span
        class="d-block mb-6 fs-13 text-uppercase fw-medium text-dark-emphasis"
      >
        EXPECTED EARNINGS
      </span>
      <h4 class="fw-black mb-12 lh-1">$32,000</h4>
      <span class="fw-bold text-success text-badge d-inline-block">
        5.5%
        <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"> </i>
      </span>
      <ul class="list ps-0 mb-0 list-unstyled mt-15">
        <li class="text-muted position-relative fw-medium">
          Groceries - <span class="text-black fw-bold">$9,500</span>
        </li>
        <li class="text-muted position-relative fw-medium">
          Electronics - <span class="text-black fw-bold">$11,500</span>
        </li>
        <li class="text-muted position-relative fw-medium">
          Others - <span class="text-black fw-bold">$11,000</span>
        </li>
      </ul>
      <div id="earningChart" class="chart">
        <apexchart
          type="donut"
          height="150"
          :options="earningChart"
          :series="earnings"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExpectedEarnings",
  data: function () {
    return {
      earnings: [50, 35, 45],
      earningChart: {
        dataLabels: {
          enabled: false,
        },
        colors: ["#06B48A", "#6560F0", "#6FD3F7"],
        legend: {
          show: false,
          fontWeight: 500,
          fontSize: "14px",
          fontFamily: "Red Hat Display, sans-serif",
          labels: {
            colors: "#9C9AB6",
          },
          markers: {
            offsetX: -2,
            offsetY: 1,
          },
        },
        stroke: {
          width: 0,
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