<template>
  <div class="row">
    <div class="col-xl-3 col-sm-6" v-for="stat in stats" :key="stat.id">
      <div class="card mb-25 border-0 rounded-0 bg-white stats-box">
        <div class="card-body pe-20 ps-20 pe-md-25 ps-md-25 pe-lg-15 ps-lg-15">
          <div class="d-flex align-items-center">
            <div
              :class="[
                'icon position-relative rounded-circle text-center',
                stat.class,
              ]"
            >
              <i :class="stat.icon"></i>
            </div>
            <div class="title ms-15">
              <span
                class="d-block mb-7 fs-13 text-uppercase fw-medium text-dark-emphasis"
              >
                {{ stat.title }}
              </span>
              <h4 class="fw-black mb-8 lh-1">
                {{ stat.sign }}{{ stat.currentValue }}
              </h4>
              <span class="fw-medium text-dark-emphasis">
                {{ stat.sign }}{{ stat.previousValue }}
              </span>
              <span :class="['fw-bold text-success ms-8', stat.classTwo]">
                {{ stat.percent }}%
                <i
                  :class="[
                    stat.iconUpDown,
                    'fs-12 lh-1 position-relative top-1',
                  ]"
                >
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import statsBoxes from "./statsBoxes.json";

export default defineComponent({
  name: "StatsBoxes",
  data() {
    return {
      stats: statsBoxes,
    };
  },
});
</script>