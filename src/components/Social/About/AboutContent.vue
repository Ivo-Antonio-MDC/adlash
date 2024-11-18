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
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-md-20 mb-lg-25 d-flex justify-content-between">
            <div class="position-relative rounded-circle">
              <img
                src="../../../assets/images/user/user1.jpg"
                class="rounded-circle"
                width="95"
                height="95"
                alt="user"
              />
            </div>
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
                    <i
                      class="flaticon-view lh-1 me-8 position-relative top-1"
                    ></i>
                    View
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                  >
                    <i
                      class="flaticon-pen lh-1 me-8 position-relative top-1"
                    ></i>
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
          <h5 class="fs-15 fs-md-18 fw-bold text-black mb-0">Anderson Harry</h5>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                PHONE:
              </span>
              +1 234 4567 5678
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                EMAIL:
              </span>
              andersonharry@gmail.com
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                ADDRESS:
              </span>
              795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
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
  name: "AboutContent",
  components: {
    SideBar,
  },
});
</script>