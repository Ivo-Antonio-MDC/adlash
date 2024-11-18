<template>
  <div class="courses-sidebar-filter bg-white letter-spacing mb-25">
    <div class="title">
      <h5 class="mb-0 fw-semibold text-secondary">Filters</h5>
    </div>
    <div class="sidebar-item">
      <h6 class="text-black fw-bold fs-md-15">Search</h6>
      <form class="search-box position-relative mb-15">
        <input
          type="text"
          class="form-control shadow-none text-black rounded-0 border-0"
          placeholder="Search product"
        />
        <button
          type="submit"
          class="bg-transparent text-primary transition p-0 border-0"
        >
          <i class="flaticon-search-interface-symbol"></i>
        </button>
      </form>
      <span class="d-block fs-13 fw-medium text-black mb-10">
        Previous Searches
      </span>
      <div class="previous-searches-list">
        <div
          class="item d-inline-block fw-medium fs-13 text-primary position-relative"
        >
          Machine Learning
          <button type="button" class="bg-transparent p-0 border-0 transition">
            <i class="flaticon-close"></i>
          </button>
        </div>
        <div
          class="item d-inline-block fw-medium fs-13 text-primary position-relative"
        >
          App
          <button type="button" class="bg-transparent p-0 border-0 transition">
            <i class="flaticon-close"></i>
          </button>
        </div>
        <div
          class="item d-inline-block fw-medium fs-13 text-primary position-relative"
        >
          Design
          <button type="button" class="bg-transparent p-0 border-0 transition">
            <i class="flaticon-close"></i>
          </button>
        </div>
      </div>
      <router-link
        to="/courses-grid"
        class="clear-btn text-decoration-none fs-13 fw-medium text-black position-relative d-inline-block mt-10"
      >
        Clear
      </router-link>
    </div>
    <div class="sidebar-item">
      <h6 class="text-black fw-bold fs-md-15">Categories</h6>
      <ul class="categories-list ps-0 mb-0 list-unstyled">
        <li>
          <router-link
            to="/courses-grid"
            class="d-flex align-items-center justify-content-between text-decoration-none text-paragraph"
          >
            <span class="d-block fs-md-15 fw-medium">All</span>
            <span class="d-block fw-medium text-muted">314</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/courses-grid"
            class="d-flex align-items-center justify-content-between text-decoration-none text-paragraph"
          >
            <span class="d-block fs-md-15 fw-medium">Machine Learning</span>
            <span class="d-block fw-medium text-muted">25</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/courses-grid"
            class="d-flex align-items-center justify-content-between text-decoration-none text-paragraph"
          >
            <span class="d-block fs-md-15 fw-medium">AI</span>
            <span class="d-block fw-medium text-muted">14</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/courses-grid"
            class="d-flex align-items-center justify-content-between text-decoration-none text-paragraph"
          >
            <span class="d-block fs-md-15 fw-medium">Design</span>
            <span class="d-block fw-medium text-muted">5</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/courses-grid"
            class="d-flex align-items-center justify-content-between text-decoration-none text-paragraph"
          >
            <span class="d-block fs-md-15 fw-medium">Development</span>
            <span class="d-block fw-medium text-muted">60</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/courses-grid"
            class="d-flex align-items-center justify-content-between text-decoration-none text-paragraph"
          >
            <span class="d-block fs-md-15 fw-medium">Photography</span>
            <span class="d-block fw-medium text-muted">125</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/courses-grid"
            class="d-flex align-items-center justify-content-between text-decoration-none text-paragraph"
          >
            <span class="d-block fs-md-15 fw-medium">Language</span>
            <span class="d-block fw-medium text-muted">56</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/courses-grid"
            class="d-flex align-items-center justify-content-between text-decoration-none text-paragraph"
          >
            <span class="d-block fs-md-15 fw-medium">Drawing</span>
            <span class="d-block fw-medium text-muted">74</span>
          </router-link>
        </li>
      </ul>
      <button
        type="button"
        class="see-more-btn mt-15 bg-transparent p-0 border-0 position-relative text-uppercase text-primary fw-medium fs-13"
      >
        See More
      </button>
    </div>
    <div class="sidebar-item">
      <h6 class="text-black fw-bold fs-md-15">Proficiency</h6>
      <ul class="proficiency-list ps-0 mb-0 list-unstyled">
        <li
          class="d-flex align-items-center justify-content-between text-paragraph"
        >
          <div class="form-check mb-0">
            <input
              class="form-check-input shadow-none"
              type="checkbox"
              id="allProficiency"
            />
            <label
              class="form-check-label fs-md-15 fw-medium"
              for="allProficiency"
            >
              All
            </label>
          </div>
          <span class="d-block fw-medium text-muted">201</span>
        </li>
        <li
          class="d-flex align-items-center justify-content-between text-paragraph"
        >
          <div class="form-check mb-0">
            <input
              class="form-check-input shadow-none"
              type="checkbox"
              id="beginnerProficiency"
            />
            <label
              class="form-check-label fs-md-15 fw-medium"
              for="beginnerProficiency"
            >
              Beginner
            </label>
          </div>
          <span class="d-block fw-medium text-muted">25</span>
        </li>
        <li
          class="d-flex align-items-center justify-content-between text-paragraph"
        >
          <div class="form-check mb-0">
            <input
              class="form-check-input shadow-none"
              type="checkbox"
              id="intermediateProficiency"
            />
            <label
              class="form-check-label fs-md-15 fw-medium"
              for="intermediateProficiency"
            >
              Intermediate
            </label>
          </div>
          <span class="d-block fw-medium text-muted">14</span>
        </li>
        <li
          class="d-flex align-items-center justify-content-between text-paragraph"
        >
          <div class="form-check mb-0">
            <input
              class="form-check-input shadow-none"
              type="checkbox"
              id="professionalProficiency"
            />
            <label
              class="form-check-label fs-md-15 fw-medium"
              for="professionalProficiency"
            >
              Professional
            </label>
          </div>
          <span class="d-block fw-medium text-muted">5</span>
        </li>
        <li
          class="d-flex align-items-center justify-content-between text-paragraph"
        >
          <div class="form-check mb-0">
            <input
              class="form-check-input shadow-none"
              type="checkbox"
              id="masterProficiency"
            />
            <label
              class="form-check-label fs-md-15 fw-medium"
              for="masterProficiency"
            >
              Master
            </label>
          </div>
          <span class="d-block fw-medium text-muted">60</span>
        </li>
      </ul>
      <button
        type="button"
        class="see-more-btn mt-15 bg-transparent p-0 border-0 position-relative text-uppercase text-primary fw-medium fs-13"
      >
        See More
      </button>
    </div>
    <div class="sidebar-item">
      <h6 class="text-black fw-bold fs-md-15">Pricing</h6>
      <div class="pricing-filter" id="pricing-filter">
        <div class="range-slider">
          <input
            type="range"
            class="min-price"
            min="10"
            v-model="minPrice"
            @change="updateRange"
          />
          <input
            type="range"
            class="max-price"
            max="6000"
            v-model="maxPrice"
            @change="updateRange"
          />
        </div>
        <div
          class="price-content d-flex align-items-center justify-content-between"
        >
          <span id="min-value" class="d-block text-black fw-medium fs-13">
            ${{ minPrice }}
          </span>
          <span id="max-value" class="d-block text-black fw-medium fs-13">
            ${{ maxPrice }}
          </span>
        </div>
      </div>
    </div>
    <div class="sidebar-item">
      <h6 class="text-black fw-bold fs-md-15">Ratings</h6>
      <ul class="ratings-list ps-0 mb-0 list-unstyled">
        <li
          class="d-flex align-items-center justify-content-between text-paragraph"
        >
          <div class="form-check mb-0">
            <input
              class="form-check-input shadow-none"
              type="checkbox"
              id="rating4"
            />
            <label class="form-check-label fw-medium" for="rating4">
              <span>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star"></i>
              </span>
              4.00 & above
            </label>
          </div>
          <span class="d-block fw-medium text-muted">56</span>
        </li>
        <li
          class="d-flex align-items-center justify-content-between text-paragraph"
        >
          <div class="form-check mb-0">
            <input
              class="form-check-input shadow-none"
              type="checkbox"
              id="rating3"
            />
            <label class="form-check-label fw-medium" for="rating3">
              <span>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
              </span>
              3.00 & above
            </label>
          </div>
          <span class="d-block fw-medium text-muted">25</span>
        </li>
        <li
          class="d-flex align-items-center justify-content-between text-paragraph"
        >
          <div class="form-check mb-0">
            <input
              class="form-check-input shadow-none"
              type="checkbox"
              id="rating2"
            />
            <label class="form-check-label fw-medium" for="rating2">
              <span>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
              </span>
              2.00 & above
            </label>
          </div>
          <span class="d-block fw-medium text-muted">14</span>
        </li>
        <li
          class="d-flex align-items-center justify-content-between text-paragraph"
        >
          <div class="form-check mb-0">
            <input
              class="form-check-input shadow-none"
              type="checkbox"
              id="rating1"
            />
            <label class="form-check-label fw-medium" for="rating1">
              <span>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
              </span>
              1.00 & above
            </label>
          </div>
          <span class="d-block fw-medium text-muted">5</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const minPrice = ref(10);
const maxPrice = ref(6000);

function updateRange() {
  if (minPrice.value > maxPrice.value) {
    [minPrice.value, maxPrice.value] = [maxPrice.value, minPrice.value];
  }
}

watch([minPrice, maxPrice], () => {
  updateRange();
});
</script>