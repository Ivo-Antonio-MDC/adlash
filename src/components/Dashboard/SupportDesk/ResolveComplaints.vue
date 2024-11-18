<template>
  <div class="card mb-25 border-0 rounded-0 bg-white time-duration-box">
    <div class="card-body letter-spacing">
      <div class="icon position-relative lh-1 text-info-light">
        <i class="flaticon-clock"></i>
      </div>
      <div class="content">
        <span class="d-block fw-bold text-dark-emphasis mb-1">
          Time To Resolve Complaints
        </span>
        <h2 class="mb-0 fw-black">8 min 30s</h2>
      </div>
      <span class="fw-medium text-secondary d-block mb-5 mb-md-8">
        Goal
        <span class="fw-bold text-black">7 min 10 sec</span>
      </span>
      <div
        class="progress"
        role="progressbar"
        aria-valuenow="42"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar bg-info-light" style="width: 75%"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResolveComplaints",
});
</script>