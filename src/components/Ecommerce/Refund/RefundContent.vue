<template>
  <div class="row">
    <div class="col-lg-8">
      <div
        class="card mb-25 border-0 rounded-0 bg-white shopping-cart-box letter-spacing"
      >
        <div class="card-body">
          <div class="table-responsive">
            <table class="table text-nowrap align-middle mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13"
                  >
                    Total Amount
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 text-end"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="shadow-none fw-medium text-black product-title">
                    <router-link
                      to="/product-details"
                      class="d-flex align-items-center text-decoration-none text-black fs-md-15 fs-lg-16"
                    >
                      <img
                        src="../../../assets/images/products/product17.jpg"
                        class="me-15"
                        width="44"
                        alt="product"
                      />
                      Sanung Airpods 3s Voltage <br />Multifunction
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $125.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">1</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $125.00
                  </td>
                  <td class="shadow-none lh-1">
                    <button
                      type="button"
                      class="bg-transparent p-0 border-0 text-paragraph fs-15 fs-md-16 fs-lg-18"
                    >
                      <i class="ph-duotone ph-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="shadow-none fw-medium text-black product-title">
                    <router-link
                      to="/product-details"
                      class="d-flex align-items-center text-decoration-none text-black fs-md-15 fs-lg-16"
                    >
                      <img
                        src="../../../assets/images/products/product18.jpg"
                        class="me-15"
                        width="44"
                        alt="product"
                      />
                      Sanung Smart Watch With More <br />Multifunction
                    </router-link>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $225.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">2</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $450.00
                  </td>
                  <td class="shadow-none lh-1">
                    <button
                      type="button"
                      class="bg-transparent p-0 border-0 text-paragraph fs-15 fs-md-16 fs-lg-18"
                    >
                      <i class="ph-duotone ph-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="shadow-none fw-medium text-black product-title">
                    <router-link
                      to="/product-details"
                      class="d-flex align-items-center text-decoration-none text-black fs-md-15 fs-lg-16"
                    >
                      <img
                        src="../../../assets/images/products/product19.jpg"
                        class="me-15"
                        width="44"
                        alt="product"
                      />
                      Gaming Laptop With 32 GB Ram <br />& 1TB SSd
                    </router-link>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $205.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">1</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $205.00
                  </td>
                  <td class="shadow-none lh-1">
                    <button
                      type="button"
                      class="bg-transparent p-0 border-0 text-paragraph fs-15 fs-md-16 fs-lg-18"
                    >
                      <i class="ph-duotone ph-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="shadow-none fw-medium text-black product-title">
                    <router-link
                      to="/product-details"
                      class="d-flex align-items-center text-decoration-none text-black fs-md-15 fs-lg-16"
                    >
                      <img
                        src="../../../assets/images/products/product20.jpg"
                        class="me-15"
                        width="44"
                        alt="product"
                      />
                      VR Box With Advanced <br />Metaverse System
                    </router-link>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $25.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">3</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $75.00
                  </td>
                  <td class="shadow-none lh-1">
                    <button
                      type="button"
                      class="bg-transparent p-0 border-0 text-paragraph fs-15 fs-md-16 fs-lg-18"
                    >
                      <i class="ph-duotone ph-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td
                    class="shadow-none fw-bold text-paragraph product-title border-bottom-0 pb-0"
                  >
                    Item Total
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph border-bottom-0 pb-0"
                  ></td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph border-bottom-0 pb-0"
                  ></td>
                  <td
                    class="shadow-none lh-1 fw-medium text-black border-bottom-0 pb-0"
                  >
                    $700.00
                  </td>
                  <td class="shadow-none lh-1 border-bottom-0 pb-0"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <form>
            <div class="form-group">
              <label class="d-block text-black fw-semibold mb-10"
                >Add A Note</label
              >
              <textarea
                cols="30"
                rows="9"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="Write some note here..."
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div
        class="card mb-25 border-0 rounded-0 bg-white order-summary-box letter-spacing"
      >
        <div class="card-head bg-white d-flex align-items-center">
          <i class="flaticon-document text-info"></i>
          <h5 class="mb-0 fw-bold text-black ms-10 ms-md-15">Order Summary</h5>
        </div>
        <div class="card-body">
          <ul class="order-summary-list ps-0 mb-0 list-unstyled">
            <li class="d-flex align-items-center justify-content-between">
              <span class="d-block text-muted text-uppercase fw-medium fs-13">
                DESCRIPTION
              </span>
              <span class="d-block text-muted text-uppercase fw-medium fs-13">
                PRICE
              </span>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <span class="d-block text-paragraph fw-medium">
                Grand Total
              </span>
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium">
                $585.00
              </span>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <span class="d-block text-paragraph fw-medium">
                Shipping Charge
              </span>
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium">
                + $15.00
              </span>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <span class="d-block text-paragraph fw-medium"> Discount </span>
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium">
                - $80.00
              </span>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <span class="d-block text-paragraph fw-medium">
                Estimated Tax
              </span>
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium">
                + $180.00
              </span>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <span class="d-block text-paragraph fw-medium"> Total </span>
              <span class="d-block text-primary fs-md-15 fs-lg-16 fw-bold">
                $700.00
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="card mb-25 border-0 rounded-0 bg-white order-summary-box letter-spacing"
      >
        <div class="card-head bg-white">
          <h5 class="mb-0 fw-bold text-black">Refund Amount</h5>
        </div>
        <div class="card-body pt-15 pt-sm-20 pt-md-20 pt-lg-30">
          <form>
            <div class="form-group mb-15">
              <label class="d-block text-black fw-semibold mb-10">
                Refund Amount
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="eg. 500"
              />
            </div>
            <button
              class="default-btn transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success d-block w-100 text-center"
              type="submit"
            >
              Refund
              <i class="flaticon-right-arrow position-relative ms-5 top-2"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RefundContent",
};
</script>