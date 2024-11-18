<template>
  <div class="card mb-25 border-0 rounded-0 bg-white revenue-country-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 md-lg-25 d-sm-flex align-items-center justify-content-between"
      >
        <h5 class="card-title fw-bold mb-0">Revenue Target By Country</h5>
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
      <div class="row align-items-center">
        <div class="col-lg-4">
          <ul class="list ps-0 mb-0 list-unstyled">
            <li v-for="revenue in revenues" :key="revenue.id">
              <span
                class="d-block text-black-emphasis fw-medium fs-md-15 fs-lg-16 mb-1"
              >
                {{ revenue.country }}
              </span>
              <div class="d-flex align-items-center justify-content-between">
                <span :class="['fw-medium', revenue.progressColor]">
                  {{ revenue.progress }}%
                </span>
                <span class="fw-medium text-black-emphasis">
                  <span class="text-muted">Target -</span>
                  {{ revenue.target }}
                </span>
              </div>
              <div
                class="progress"
                role="progressbar"
                :aria-valuenow="revenue.progress"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  :class="['progress-bar', revenue.bgColor]"
                  :style="{ width: revenue.progress + '%' }"
                ></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-8">
          <img src="../../../../assets/images/map.png" alt="map" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import revenueTargetByCountry from "./revenueTargetByCountry.json";

export default defineComponent({
  name: "RevenueTargetByCountry",
  data() {
    return {
      revenues: revenueTargetByCountry,
    };
  },
});
</script>