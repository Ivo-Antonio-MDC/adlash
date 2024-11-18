<template>
  <div class="card mb-25 border-0 rounded-0 bg-white students-progress-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between"
      >
        <h5 class="card-title fw-bold mb-0">Student’s Progress</h5>
        <router-link
          to="/courses-list"
          class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5"
        >
          All Students
        </router-link>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li
          class="d-sm-flex align-items-center justify-content-between"
          v-for="student in students"
          :key="student.id"
        >
          <div class="d-flex align-items-center">
            <img
              :src="require(`../../../../assets/images/${student.image}`)"
              class="rounded-circle"
              width="72"
              height="72"
              alt="user"
            />
            <div class="title ms-15">
              <span class="d-flex align-items-center text-muted">
                <i
                  class="flaticon-book lh-1 text-success position-relative top-1 fs-md-15 fs-lg-16 me-5"
                ></i>
                {{ student.courses }}
              </span>
              <h6 class="fw-medium text-black-emphasis mt-1 mb-5">
                {{ student.name }}
              </h6>
              <span class="d-block text-muted">
                {{ student.designation }}
              </span>
            </div>
          </div>
          <div class="pie mt-12 mt-sm-0">
            <circle-progress
              :percent="student.percent"
              :show-percent="true"
              color="#6560F0"
              empty-color="#F2F1F9"
              style="height: 65px; width: 65px"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import studentsProgress from "./studentsProgress.json";

export default {
  name: "StudentsProgress",
  components: {
    CircleProgress,
  },
  data() {
    return {
      students: studentsProgress,
    };
  },
};
</script>