<template>
  <div class="row">
    <div class="col-lg-8">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing order-tracking-box"
      >
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <div class="d-sm-flex justify-content-between">
            <div>
              <h2
                class="text-black fw-black mb-10 mb-sm-15 mb-md-20 fs-20 fs-md-25 fs-lg-30"
              >
                Order ID #2435679
              </h2>
              <span class="d-block text-muted fs-md-15 fs-lg-16 mb-1">
                IBAN: EST6049283742809
              </span>
              <span class="d-block text-muted fs-md-15 fs-lg-16">
                Date: 26th Mar, 2023
              </span>
            </div>
            <span class="d-block fs-md-15 fs-lg-16 text-muted mt-1 mt-sm-0">
              Tracking ID-
              <span class="text-primary fw-medium text-decoration-underline">
                #1004216609
              </span>
            </span>
          </div>
          <ul class="track-order-list ps-0 list-unstyled">
            <li class="text-muted position-relative active">
              <div class="dot bg-white rounded-circle mb-10 mb-md-15"></div>
              <span class="d-block fs-md-15 fs-lg-16 fw-semibold mb-5">
                Order Placed
              </span>
              <span class="d-block mb-1">22 Mar, 2023 -</span>
              <span class="d-block">11:35AM</span>
            </li>
            <li class="text-muted position-relative active">
              <div class="dot bg-white rounded-circle mb-10 mb-md-15"></div>
              <span class="d-block fs-md-15 fs-lg-16 fw-semibold mb-5">
                Packed
              </span>
              <span class="d-block mb-1">23 Mar, 2023 -</span>
              <span class="d-block">10:35AM</span>
            </li>
            <li class="text-muted position-relative">
              <div class="dot bg-white rounded-circle mb-10 mb-md-15"></div>
              <span class="d-block fs-md-15 fs-lg-16 fw-bold text-black mb-5">
                Shipped
              </span>
              <span class="d-block mb-1">23 Mar, 2023 -</span>
              <span class="d-block">3:45PM</span>
            </li>
            <li class="text-muted position-relative">
              <div class="dot bg-white rounded-circle mb-10 mb-md-15"></div>
              <span class="d-block fs-md-15 fs-lg-16 fw-bold text-black mb-5">
                Delivered
              </span>
              <span class="d-block mb-1">23 Mar, 2023 -</span>
              <span class="d-block">3:45PM</span>
            </li>
          </ul>
          <h6
            class="text-black fs-14 fs-md-15 fs-lg-16 fw-bold mb-10 mb-sm-15 mb-lg-20"
          >
            View Details:
          </h6>
          <span class="d-block text-muted mb-2">
            20 Oct, 2022 - 09:50 AM :
            <span class="text-paragraph fw-medium">
              Your order is now on warehouse. It’s being ready for shipped.
            </span>
          </span>
          <span class="d-block text-muted">
            20 Oct, 2022 - 10:30 PM :
            <span class="text-paragraph fw-medium">
              Your order is on the way for deliver.
            </span>
          </span>
          <div class="pb-lg-50"></div>
          <div class="pb-lg-50"></div>
          <div class="pb-lg-50"></div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div
        class="card mb-25 border-0 rounded-0 bg-white order-details-box letter-spacing"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderTracking",
};
</script>