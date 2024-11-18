<template>
  <div class="card mb-25 border-0 rounded-0 bg-white top-selling-products-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-20 mb-lg-25 d-sm-flex align-items-center justify-content-between"
      >
        <h6 class="card-title fw-bold mb-0">Top Selling Products</h6>
        <router-link
          to="/products-list"
          class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5"
        >
          Export
          <i class="flaticon-logout lh-1 position-relative ms-5 top-2"></i>
        </router-link>
      </div>
      <div class="d-flex mb-12 justify-content-between align-items-center">
        <span class="fs-13 d-block fw-medium text-dark-emphasis">PRODUCTS</span>
        <span class="fs-13 d-block fw-medium text-dark-emphasis">STOCK</span>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li
          class="d-flex align-items-center justify-content-between"
          v-for="product in products"
          :key="product.id"
        >
          <div class="d-flex align-items-center">
            <span class="d-block fw-bold text-black-emphasis me-15">
              {{ product.id }}.
            </span>
            <img
              :src="require(`../../../../assets/images/${product.image}`)"
              width="44"
              height="44"
              class="rounded-circle"
              alt="product-image"
            />
            <div class="title ms-10 ms-md-15">
              <router-link
                to="/product-details"
                class="fs-md-15 fs-lg-16 text-black-emphasis text-decoration-none fw-semibold"
              >
                {{ product.title }}
              </router-link>
              <span class="d-block fw-medium text-muted">
                {{ product.itemSold }}
                Item Sold
              </span>
            </div>
          </div>
          <span class="d-block fw-medium text-black-emphasis">
            {{ product.stock }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import topSellingProducts from "./topSellingProducts.json";

export default defineComponent({
  name: "TopSellingProducts",
  data() {
    return {
      products: topSellingProducts,
    };
  },
});
</script>