<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-30 d-sm-flex align-items-center justify-content-between"
      >
        <h6 class="card-title fw-bold mb-0">Stock Report</h6>
        <div
          class="card-select mt-10 mt-sm-0 mb-10 mb-sm-0 d-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Status</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option selected class="fw-medium">Show All</option>
            <option value="1" class="fw-medium">In Stock</option>
          </select>
        </div>
        <router-link
          to="/products-list"
          class="card-btn fw-medium d-inline-block text-decoration-none transition ps-10 pe-10 pt-5 pb-5"
        >
          View Stock
        </router-link>
      </div>
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
              >
                Item
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Product ID
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Price
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Dated Added
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Status
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 pe-0"
              >
                Qty
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stock in stocks" :key="stock.id">
              <th class="shadow-none lh-1 fw-bold ps-0">
                <router-link
                  to="/product-details"
                  class="text-decoration-none text-black-emphasis"
                >
                  {{ stock.item }}
                </router-link>
              </th>
              <td class="shadow-none lh-1 fw-semibold text-black-emphasis">
                {{ stock.productID }}
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                ${{ stock.price }}
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                {{ stock.date }}
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span :class="['badge', stock.class]">{{ stock.status }}</span>
              </td>
              <td class="shadow-none lh-1 fw-bold pe-0">
                {{ stock.quantity }}
                <span class="fw-medium text-body-tertiary">Pcs</span>
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
import stockReport from "./stockReport.json";

export default defineComponent({
  name: "StockReport",
  data() {
    return {
      stocks: stockReport,
    };
  },
});
</script>