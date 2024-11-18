<template>
  <div class="card mb-25 border-0 rounded-0 call-stats-box">
    <div class="card-body letter-spacing position-relative">
      <div class="icon text-center rounded-circle position-absolute">
        <img
          src="../../../assets/images/icon/call.png"
          class="position-absolute start-0 end-0 ms-auto me-auto"
          alt="icon"
        />
      </div>
      <span class="d-block text-paragraph fw-medium">OUTGOING CALL</span>
      <h3 class="fw-black text-primary">
        10
        <span class="text-black">Leads Today</span>
      </h3>
      <div class="d-flex align-items-center">
        <span class="fw-bold text-success text-badge d-inline-block">
          <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
          5.5%
        </span>
        <span class="text-paragraph d-inline-block ms-8">Than yesterday</span>
      </div>
    </div>
    <hr />
    <div class="card-body letter-spacing position-relative">
      <div class="icon text-center rounded-circle position-absolute">
        <img
          src="../../../assets/images/icon/calendar.png"
          class="position-absolute start-0 end-0 ms-auto me-auto"
          alt="icon"
        />
      </div>
      <span class="d-block text-paragraph fw-medium">SUPPORT CALL</span>
      <h3 class="fw-black text-primary">
        23 <span class="text-black">Leads This Week</span>
      </h3>
      <div class="d-flex align-items-center">
        <span class="fw-bold text-danger text-badge d-inline-block">
          <i class="flaticon-down-arrow fs-11 lh-1 position-relative top-1">
          </i>
          3.3%
        </span>
        <span class="text-paragraph d-inline-block ms-8">Than last week</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CallLeads",
});
</script>