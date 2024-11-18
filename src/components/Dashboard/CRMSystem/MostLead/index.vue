<template>
  <div class="card mb-25 border-0 rounded-0 bg-white most-lead-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div
        class="mb-20 d-sm-flex align-items-center justify-content-between letter-spacing"
      >
        <h5 class="card-title fw-bold mb-0">Most Lead</h5>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Last</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option value="1" class="fw-medium" selected>1 Week</option>
            <option value="2" class="fw-medium">2 Week</option>
            <option value="3" class="fw-medium">3 Week</option>
          </select>
        </div>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li
          v-for="lead in leads"
          :key="lead.id"
          data-bs-toggle="tooltip"
          :data-bs-title="lead.progress + '%'"
        >
          <div class="row align-items-center">
            <div class="col-md-4 col-lg-4">
              <div class="title d-flex align-items-center">
                <div
                  :class="[
                    'icon text-center position-relative rounded-circle',
                    lead.iconColor,
                  ]"
                >
                  <i
                    :class="['position-absolute start-0 end-0 lh-1', lead.icon]"
                  ></i>
                </div>
                <span
                  class="d-block fw-bold text-black-emphasis ms-15 fs-md-15 fs-lg-16"
                >
                  {{ lead.title }}
                </span>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="lead-progress me-md-15">
                <div
                  class="progress"
                  role="progressbar"
                  :aria-valuenow="lead.progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    :class="['progress-bar', lead.class]"
                    :style="{ width: lead.progress + '%' }"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-lg-2 text-md-end">
              <span class="d-block fw-medium text-black-emphasis">
                {{ lead.count }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mostLead from "./mostLead.json";
import { Tooltip } from "bootstrap";

export default defineComponent({
  name: "MostLead",
  data() {
    return {
      leads: mostLead,
    };
  },
  mounted() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  },
});
</script>