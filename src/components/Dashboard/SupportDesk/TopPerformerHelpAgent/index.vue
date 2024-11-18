<template>
  <div class="card mb-25 border-0 rounded-0 bg-white top-performer-box">
    <div
      class="card-body p-15 p-sm-20 p-md-25 pt-lg-30 pb-lg-30 ps-lg-25 pe-lg-25 letter-spacing"
    >
      <div
        class="mb-15 mb-md-20 d-flex align-items-center justify-content-between"
      >
        <h6 class="card-title fw-bold mb-0">Top Performer Help Agent</h6>
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
      <ul class="list ps-0 mb-0 list-unstyled">
        <li
          class="d-flex align-items-center justify-content-between"
          v-for="performer in performers"
          :key="performer.id"
        >
          <div class="d-flex align-items-center">
            <img
              :src="require(`../../../../assets/images/${performer.image}`)"
              class="rounded-circle"
              alt="user"
            />
            <div class="title">
              <h6 class="mb-1 fw-medium text-black-emphasis">
                {{ performer.name }}
              </h6>
              <span class="text-muted d-block">
                Agent ID: {{ performer.AgentId }}
              </span>
            </div>
          </div>
          <span class="fw-medium lh-1 fs-13 text-muted d-block">
            <span class="fw-bold text-primary">
              {{ performer.Average }} /
            </span>
            70
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import topPerformerHelpAgent from "./topPerformerHelpAgent.json";

export default defineComponent({
  name: "TopPerformerHelpAgent",
  data() {
    return {
      performers: topPerformerHelpAgent,
    };
  },
});
</script>