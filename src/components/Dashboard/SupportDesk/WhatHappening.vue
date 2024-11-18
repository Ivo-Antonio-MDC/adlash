<template>
  <div class="card mb-25 border-0 rounded-0 bg-white welcome-support-desk-box">
    <div
      class="card-body p-15 p-sm-20 p-md-25 p-lg-30 pt-xl-50 pb-xl-50 ps-xl-40 ps-xl-40 letter-spacing"
    >
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-8">
          <div class="content">
            <span class="d-block fw-bold text-primary mb-5" id="current-date">
              {{ formattedDate }}
            </span>
            <h2 class="fw-semibold mb-8">
              Welcome To Adlash,
              <span class="fw-bold">Support Desk!</span>
            </h2>
            <p class="text-black-emphasis fs-md-15 fs-lg-16">
              Here’s what happening in your desk today. Stay updated.
            </p>
            <div class="row list justify-content-center">
              <div
                class="col-lg-4 col-sm-4"
                v-for="update in updates"
                :key="update.id"
              >
                <div :class="['p-15', update.bgClass]">
                  <span
                    class="d-block mb-6 fw-medium text-black-emphasis fs-13 text-uppercase"
                  >
                    {{ update.title }}
                  </span>
                  <h4 :class="['mb-0 fw-black', update.class]">
                    {{ update.number }}+
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 text-center mt-15 mt-md-0">
          <img
            src="../../../assets/images/welcome/welcome2.png"
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
          title: "UNRESOLVED",
          class: "text-primary",
          number: "523",
        },
        {
          id: 2,
          bgClass: "bg-faf7f7",
          title: "OVER DUE",
          class: "text-danger",
          number: "209",
        },
        {
          id: 3,
          bgClass: "bg-ecf3f2",
          title: "RESOLVED",
          class: "text-success",
          number: "1836",
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