<template>
  <div class="card mb-25 border-0 rounded-0 bg-white time-duration-box">
    <div class="card-body letter-spacing">
      <div class="icon position-relative lh-1 text-primary">
        <i class="flaticon-copy"></i>
      </div>
      <div class="content">
        <span class="d-block fw-bold text-dark-emphasis mb-1">
          Average Speed Of Answer
        </span>
        <h2 class="mb-0 fw-black">1 min 12s</h2>
      </div>
      <p class="mb-0 fw-medium">
        Measure how quickly support staff answer incoming calls.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AverageSpeedOfAnswer",
});
</script>