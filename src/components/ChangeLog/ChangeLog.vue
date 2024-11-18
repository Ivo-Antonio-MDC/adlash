<template>
  <div class="row">
    <div class="col-md-8">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-sm-20 mb-md-25">
            <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
              Version 1.0 - May 15, 2023
            </h5>
          </div>
          <div
            class="border-top border-success mb-15 mb-sm-20 mb-md-25 border-opacity-10"
          ></div>
          <span class="badge text-bg-primary fs-13">Updated</span>
          <span
            class="d-flex align-items-center fs-md-15 fs-lg-16 fw-medium text-black mt-12"
          >
            <span
              class="w-6 h-6 rounded-circle me-10 bg-danger d-inline-block"
            ></span>
            Added New Demos
          </span>
          <div
            class="border-top border-success mb-15 mb-20 mt-15 mt-lg-20 border-opacity-10"
          ></div>
          <span class="badge text-bg-danger fs-13">Fixed</span>
          <span
            class="d-flex align-items-center fs-md-15 fs-lg-16 fw-medium text-black mt-12"
          >
            <span
              class="w-6 h-6 rounded-circle me-10 bg-primary d-inline-block"
            ></span>
            Added New Demos
          </span>
          <div
            class="border-top border-success mb-15 mb-20 mt-15 mt-lg-20 border-opacity-10"
          ></div>
          <span class="badge text-bg-success fs-13">Added</span>
          <span
            class="d-flex align-items-center fs-md-15 fs-lg-16 fw-medium text-black mt-12"
          >
            <span
              class="w-6 h-6 rounded-circle me-10 bg-warning d-inline-block"
            ></span>
            New Pages
          </span>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
            Version History
          </h5>
          <div
            class="border-top border-success mb-15 mb-sm-20 mb-md-25 mt-5 mt-sm-10 mt-md-15 border-opacity-10"
          ></div>
          <div class="d-flex align-items-center justify-content-between mt-10">
            <span class="d-block fs-md-15 text-black fw-medium">
              Version 1.0
            </span>
            <span class="d-block fs-md-15 text-paragraph fw-medium">
              May 15, 2023
            </span>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-10">
            <span class="d-block fs-md-15 text-black fw-medium">
              Version 0.9
            </span>
            <span class="d-block fs-md-15 text-paragraph fw-medium">
              May 10, 2023
            </span>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-10">
            <span class="d-block fs-md-15 text-black fw-medium">
              Version 0.8
            </span>
            <span class="d-block fs-md-15 text-paragraph fw-medium">
              May 05, 2023
            </span>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-10">
            <span class="d-block fs-md-15 text-black fw-medium">
              Version 0.7
            </span>
            <span class="d-block fs-md-15 text-paragraph fw-medium">
              May 01, 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChangeLog",
});
</script>