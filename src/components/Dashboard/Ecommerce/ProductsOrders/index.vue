<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-30 d-sm-flex align-items-center justify-content-between"
      >
        <h6 class="card-title fw-bold mb-0">Products Orders</h6>
        <div
          class="card-select mt-10 mt-md-0 mb-10 mb-md-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Status</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option selected class="fw-medium">Show All</option>
            <option value="1" class="fw-medium">In Stock</option>
          </select>
        </div>
        <form>
          <div class="input-group">
            <input
              type="text"
              class="form-control shadow-none fw-medium ps-12 pt-8 pb-8 pe-12 letter-spacing"
              placeholder="Search"
            />
            <button
              class="default-btn position-relative transition border-0 text-white ps-12 pe-12 rounded-1"
              type="button"
            >
              <i class="flaticon-search-interface-symbol position-relative"></i>
            </button>
          </div>
        </form>
      </div>
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
              >
                ORDER ID
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                CREATED
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                CUSTOMER
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                TOTAL
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                PROFIT
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 pe-0"
              >
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <th class="shadow-none lh-1 fw-bold ps-0">
                <router-link
                  to="/product-details"
                  class="text-decoration-none text-black-emphasis"
                >
                  {{ order.orderID }}
                </router-link>
              </th>
              <td class="shadow-none lh-1 fw-medium">
                {{ order.createdTime }}
                <span class="text-body-tertiary"> ago</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                <div class="d-flex align-items-center">
                  <img
                    :src="require(`../../../../assets/images/${order.image}`)"
                    class="rounded-circle me-8"
                    width="24"
                    height="24"
                    alt="user"
                  />
                  {{ order.name }}
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                ${{ order.totalPrice }}
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                ${{ order.profitPrice }}
              </td>
              <td class="shadow-none lh-1 fw-medium pe-0">
                <span :class="['badge', order.class]">{{ order.status }}</span>
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
import productsOrders from "./productsOrders.json";

export default defineComponent({
  name: "ProductsOrders",
  data() {
    return {
      orders: productsOrders,
    };
  },
});
</script>