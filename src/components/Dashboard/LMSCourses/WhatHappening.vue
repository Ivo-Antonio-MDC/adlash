<template>
  <div class="card mb-25 border-0 rounded-0 welcome-lms-courses-box">
    <div
      class="card-body ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30 ps-xl-40 pe-xl-40 letter-spacing"
    >
      <div class="row align-items-center">
        <div class="col-xxl-6">
          <div class="content">
            <span class="d-block fw-bold mb-5" id="current-date">
              {{ formattedDate }}
            </span>
            <h2 class="fw-semibold mb-8 text-white">
              Welcome Back,
              <span class="fw-bold text-white">Angela Carter!</span>
            </h2>
            <p class="fs-md-15 fs-lg-16">
              See What’s happening with your courses and students.
            </p>
            <div class="row list justify-content-center">
              <div
                class="col-lg-3 col-6 col-sm-3"
                v-for="update in updates"
                :key="update.id"
              >
                <div :class="['p-15 mt-15', update.bgClass]">
                  <span
                    class="d-block mb-6 fw-medium text-black-emphasis fs-13 text-uppercase"
                  >
                    {{ update.title }}
                  </span>
                  <h4 :class="['mb-0 fw-black', update.class]">
                    {{ update.number }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 text-center text-xxl-end mt-15 mt-md-0">
          <img
            src="../../../assets/images/welcome/welcome3.png"
            class="main-image"
            alt="welcome-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "WhatHappening",
  data() {
    return {
      updates: [
        {
          id: 1,
          bgClass: "bg-f2f1f9",
          title: "COURSES",
          class: "text-primary",
          number: "23",
        },
        {
          id: 2,
          bgClass: "bg-faf7f7",
          title: "CERTIFICATES",
          class: "text-danger",
          number: "9",
        },
        {
          id: 3,
          bgClass: "bg-ecf3f2",
          title: "SCORE",
          class: "text-success",
          number: "4.8",
        },
        {
          id: 4,
          bgClass: "bg-f3f7f9",
          title: "HRS LEARNED",
          class: "text-info",
          number: "822",
        },
      ],
    };
  },
  setup() {
    const formattedDate = ref("");

    onMounted(() => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const currentDate = new Date();
      formattedDate.value = `${
        months[currentDate.getMonth()]
      } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    });

    return {
      formattedDate,
    };
  },
});
</script>