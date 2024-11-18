<template>
  <div class="card mb-25 border-0 rounded-0 welcome-box">
    <div class="card-body pe-15 pe-sm-20 pe-md-0 pb-0 pt-15 pt-sm-20">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <div class="title position-relative">
            <h3 class="fw-semibold mb-8">
              Good Morning, <span class="fw-bold">Victor!</span>
            </h3>
            <span class="d-block text-black-emphasis fs-md-15 fs-lg-16">
              Here’s what happening with your store today
            </span>
          </div>
          <ul class="ps-0 mb-0 list-unstyled">
            <li
              class="d-inline-block text-uppercase fw-medium fs-13 text-black-emphasis position-relative"
            >
              TODAY’S VISIT
              <span class="d-block fw-black lh-1 text-black mt-5 mt-md-10">
                15,209
              </span>
            </li>
            <li
              class="d-inline-block text-uppercase fw-medium fs-13 text-black-emphasis position-relative"
            >
              TODAY’S TOTAL SALES
              <span class="d-block fw-black lh-1 text-black mt-5 mt-md-10">
                $29,115.50
              </span>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6 text-center mt-15 mt-md-0">
          <img
            src="../../../assets/images/welcome/welcome1.png"
            alt="welcome-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WhatHappening",
});
</script>