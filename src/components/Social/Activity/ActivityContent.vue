<template>
  <div class="row">
    <div class="col-xxl-7 col-xxxl-8">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing cover-image-card"
      >
        <div class="card-body p-10">
          <img
            src="../../../assets/images/social-timeline.jpg"
            alt="social-timeline-image"
          />
          <ul class="settings-tabs mt-10 ps-0 mb-0 list-unstyled">
            <li>
              <router-link
                to="/social-timeline"
                class="fs-md-15 fs-lg-16 fw-medium text-decoration-none d-block w-100 rounded-1 text-center transition"
              >
                Timeline
              </router-link>
            </li>
            <li>
              <router-link
                to="/social-about"
                class="fs-md-15 fs-lg-16 fw-medium text-decoration-none d-block w-100 rounded-1 text-center transition"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link
                to="/social-activity"
                class="fs-md-15 fs-lg-16 fw-medium text-decoration-none d-block w-100 rounded-1 text-center transition"
              >
                Activity
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white recent-activity-box">
        <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
          <ul class="list ps-0 mb-0 list-unstyled">
            <li class="position-relative fw-medium text-dark-emphasis">
              <div
                class="icon position-absolute start-0 rounded-circle text-center"
              >
                <i class="ph-duotone ph-envelope-simple"></i>
              </div>
              <span class="text-black fw-bold">J. Ronan</span> sent an Email
              <span class="d-block fs-13 mt-1">35 mins ago</span>
              <a
                href="#"
                class="link-btn text-decoration-none position-absolute end-0"
              >
                <i class="flaticon-chevron"></i>
              </a>
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
              <a
                href="#"
                class="link-btn text-decoration-none position-absolute end-0"
              >
                <i class="flaticon-chevron"></i>
              </a>
            </li>
            <li class="position-relative fw-medium text-dark-emphasis">
              <div
                class="icon position-absolute start-0 rounded-circle text-center"
              >
                <i class="ph-duotone ph-check-circle"></i>
              </div>
              <span class="text-black fw-bold">Walter White</span>
              completed the project
              <span class="text-black fw-bold">“The Dashboard”</span>
              <span class="d-block fs-13 mt-1">2 hrs ago</span>
              <a
                href="#"
                class="link-btn text-decoration-none position-absolute end-0"
              >
                <i class="flaticon-chevron"></i>
              </a>
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
              <a
                href="#"
                class="link-btn text-decoration-none position-absolute end-0"
              >
                <i class="flaticon-chevron"></i>
              </a>
            </li>
            <li class="position-relative fw-medium text-dark-emphasis">
              <div
                class="icon position-absolute start-0 rounded-circle text-center"
              >
                <i class="ph-duotone ph-envelope-simple"></i>
              </div>
              <span class="text-black fw-bold">S. Smith</span> sent an Email
              <span class="d-block fs-13 mt-1">1 day ago</span>
              <a
                href="#"
                class="link-btn text-decoration-none position-absolute end-0"
              >
                <i class="flaticon-chevron"></i>
              </a>
            </li>
            <li class="position-relative fw-medium text-dark-emphasis">
              <div
                class="icon position-absolute start-0 rounded-circle text-center"
              >
                <i class="ph-duotone ph-envelope-simple"></i>
              </div>
              <span class="text-black fw-bold">J. Ronan</span> sent an Email
              <span class="d-block fs-13 mt-1">35 mins ago</span>
              <a
                href="#"
                class="link-btn text-decoration-none position-absolute end-0"
              >
                <i class="flaticon-chevron"></i>
              </a>
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
              <a
                href="#"
                class="link-btn text-decoration-none position-absolute end-0"
                ><i class="flaticon-chevron"></i
              ></a>
            </li>
            <li class="position-relative fw-medium text-dark-emphasis">
              <div
                class="icon position-absolute start-0 rounded-circle text-center"
              >
                <i class="ph-duotone ph-check-circle"></i>
              </div>
              <span class="text-black fw-bold">Walter White</span> completed the
              project <span class="text-black fw-bold">“The Dashboard”</span>
              <span class="d-block fs-13 mt-1">2 hrs ago</span>
              <a
                href="#"
                class="link-btn text-decoration-none position-absolute end-0"
              >
                <i class="flaticon-chevron"></i>
              </a>
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
              <a
                href="#"
                class="link-btn text-decoration-none position-absolute end-0"
              >
                <i class="flaticon-chevron"></i>
              </a>
            </li>
            <li class="position-relative fw-medium text-dark-emphasis">
              <div
                class="icon position-absolute start-0 rounded-circle text-center"
              >
                <i class="ph-duotone ph-envelope-simple"></i>
              </div>
              <span class="text-black fw-bold">S. Smith</span> sent an Email
              <span class="d-block fs-13 mt-1">1 day ago</span>
              <a
                href="#"
                class="link-btn text-decoration-none position-absolute end-0"
              >
                <i class="flaticon-chevron"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-5 col-xxxl-4">
      <SideBar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "../SideBar.vue";

export default defineComponent({
  name: "ActivityContent",
  components: {
    SideBar,
  },
});
</script>