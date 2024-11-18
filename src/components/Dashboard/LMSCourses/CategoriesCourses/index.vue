<template>
  <div class="card mb-25 border-0 rounded-0 bg-white categories-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between"
      >
        <h5 class="card-title fw-bold mb-0">Categories</h5>
        <router-link
          to="/courses-grid"
          class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5"
        >
          All Courses
        </router-link>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li
          class="d-flex align-items-center justify-content-between"
          v-for="categorie in categories"
          :key="categorie.id"
        >
          <div class="d-flex align-items-center">
            <img
              :src="require(`../../../../assets/images/${categorie.image}`)"
              width="44"
              height="44"
              class="rounded-1"
              alt="course-image"
            />
            <div class="title ms-15">
              <router-link
                to="/course-details"
                class="text-decoration-none text-black-emphasis fw-bold fs-md-15 fs-lg-16"
              >
                {{ categorie.title }}
              </router-link>
              <span class="d-block text-muted fw-bold">
                {{ categorie.quantity }}+
                <span class="fw-normal">Courses</span>
              </span>
            </div>
          </div>
          <router-link
            to="/course-details"
            class="link-btn d-inline-block transition text-center position-relative text-decoration-none"
          >
            <i class="ph ph-arrow-right"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import categoriesCourses from "./categoriesCourses.json";

export default defineComponent({
  name: "CategoriesCourses",
  data() {
    return {
      categories: categoriesCourses,
    };
  },
});
</script>