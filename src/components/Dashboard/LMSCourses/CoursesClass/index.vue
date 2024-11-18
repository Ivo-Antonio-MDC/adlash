<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between"
      >
        <h5 class="card-title fw-bold mb-0">Courses</h5>
        <div class="card-buttons">
          <a
            href="javascript:void(0);"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 active"
          >
            All Courses
          </a>
          <a
            href="javascript:void(0);"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Paid
          </a>
          <a
            href="javascript:void(0);"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Free
          </a>
          <a
            href="javascript:void(0);"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Top Rated
          </a>
          <a
            href="javascript:void(0);"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Most Popular
          </a>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
              >
                COURSE TITLE
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                TRAINER
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                PUBLISHED ON
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                ENROLLED
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                PRICE
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course in courses" :key="course.id">
              <th class="shadow-none fw-medium ps-0">
                <span class="mb-10 d-block">
                  <router-link
                    to="/course-details"
                    class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                  >
                    {{ course.title }}
                  </router-link>
                </span>
                <span class="d-flex align-items-center text-muted">
                  <i
                    class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                  ></i>
                  <span class="fw-bold ms-5 me-5">{{ course.classes }}</span>
                  Classes
                </span>
              </th>
              <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                {{ course.trainer }}
              </td>
              <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                {{ course.date }}
              </td>
              <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                {{ course.enrolled }}
              </td>
              <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                ${{ course.price }}
              </td>
              <td
                class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
              >
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
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
                        >
                        </i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import coursesClass from "./coursesClass.json";

export default defineComponent({
  name: "CoursesClass",
  data() {
    return {
      courses: coursesClass,
    };
  },
});
</script>