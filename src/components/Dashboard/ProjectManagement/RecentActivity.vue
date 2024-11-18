<template>
  <div class="card mb-25 border-0 rounded-0 bg-white recent-activity-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-20 mb-xxxl-25 d-flex align-items-center justify-content-between"
      >
        <h5 class="card-title fw-bold mb-0">Recent Activity</h5>
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
                <i class="flaticon-view lh-1 me-8 position-relative top-1"></i>
                View
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i class="flaticon-pen lh-1 me-8 position-relative top-1"></i>
                Edit
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i
                  class="flaticon-delete lh-1 me-8 position-relative top-1"
                ></i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li class="position-relative fw-medium text-dark-emphasis">
          <div
            class="icon position-absolute start-0 rounded-circle text-center"
          >
            <i class="ph-duotone ph-envelope-simple"></i>
          </div>
          <span class="text-black fw-bold">J. Ronan</span> sent an Email
          <span class="d-block fs-13 mt-1">35 mins ago</span>
          <router-link
            to="/project-management"
            class="link-btn text-decoration-none position-absolute end-0"
          >
            <i class="flaticon-chevron"></i>
          </router-link>
        </li>
        <li class="position-relative fw-medium text-dark-emphasis">
          <div
            class="icon position-absolute start-0 rounded-circle text-center"
          >
            <i class="ph-duotone ph-first-aid-kit"></i>
          </div>
          <span class="text-black fw-bold">Victoria</span> archived a
          <span class="text-black fw-bold">Board for Project</span> in team
          <span class="d-block fs-13 mt-1">1 hr ago</span>
          <router-link
            to="/project-management"
            class="link-btn text-decoration-none position-absolute end-0"
          >
            <i class="flaticon-chevron"></i>
          </router-link>
        </li>
        <li class="position-relative fw-medium text-dark-emphasis">
          <div
            class="icon position-absolute start-0 rounded-circle text-center"
          >
            <i class="ph-duotone ph-check-circle"></i>
          </div>
          <span class="text-black fw-bold">Walter White</span> completed the
          project
          <span class="text-black fw-bold">“The Dashboard”</span>
          <span class="d-block fs-13 mt-1">2 hrs ago</span>
          <router-link
            to="/project-management"
            class="link-btn text-decoration-none position-absolute end-0"
          >
            <i class="flaticon-chevron"></i>
          </router-link>
        </li>
        <li class="position-relative fw-medium text-dark-emphasis">
          <div
            class="icon position-absolute start-0 rounded-circle text-center"
          >
            <i class="ph-duotone ph-shield-plus"></i>
          </div>
          <span class="text-black fw-bold">Jennifer</span> added
          <span class="text-black fw-bold">Micheal</span> in the project
          <span class="text-black fw-bold">“The Adlash Design”</span>
          <span class="d-block fs-13 mt-1">3 hrs ago</span>
          <router-link
            to="/project-management"
            class="link-btn text-decoration-none position-absolute end-0"
          >
            <i class="flaticon-chevron"></i>
          </router-link>
        </li>
        <li class="position-relative fw-medium text-dark-emphasis">
          <div
            class="icon position-absolute start-0 rounded-circle text-center"
          >
            <i class="ph-duotone ph-envelope-simple"></i>
          </div>
          <span class="text-black fw-bold">S. Smith</span> sent an Email
          <span class="d-block fs-13 mt-1">1 day ago</span>
          <router-link
            to="/project-management"
            class="link-btn text-decoration-none position-absolute end-0"
          >
            <i class="flaticon-chevron"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecentActivity",
});
</script>