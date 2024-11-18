<template>
  <div class="card mb-25 border-0 rounded-0 bg-white monthly-revenue-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <span
        class="d-block mb-6 fs-13 text-uppercase fw-medium text-dark-emphasis"
      >
        REVENUE THIS MONTH
      </span>
      <h4 class="fw-black mb-12 lh-1">$16,520</h4>
      <span class="fw-bold text-danger text-badge d-inline-block">
        1.5%
        <i class="flaticon-down-arrow fs-11 lh-1 position-relative top-1"></i>
      </span>
      <div
        class="mt-15 mt-md-25 mb-8 mb-md-12 d-flex justify-content-between align-items-center"
      >
        <span class="fw-medium text-secondary">
          <span class="fw-bold text-black">$9,500</span>
          more to reach goal
        </span>
        <span class="text-primary fw-semibold">68%</span>
      </div>
      <div
        class="progress"
        role="progressbar"
        aria-valuenow="68"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: 68%"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RevenueThisMonth",
});
</script>