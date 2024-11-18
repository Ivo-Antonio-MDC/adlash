<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white checkout-box letter-spacing"
  >
    <div class="card-body">
      <ul
        class="nav nav-tabs bg-white border-0 rounded-0"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link fs-14 fs-md-15 fs-lg-16 fw-semibold position-relative border-0 rounded-0 d-block w-100 active"
            id="shipping-details-tab"
            data-bs-toggle="tab"
            data-bs-target="#shipping-details-tab-pane"
            type="button"
            role="tab"
            aria-controls="shipping-details-tab-pane"
            aria-selected="true"
          >
            <i class="flaticon-express-delivery"></i>
            Shipping Details
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link fs-14 fs-md-15 fs-lg-16 fw-semibold position-relative border-0 rounded-0 d-block w-100"
            id="payment-method-tab"
            data-bs-toggle="tab"
            data-bs-target="#payment-method-tab-pane"
            type="button"
            role="tab"
            aria-controls="payment-method-tab-pane"
            aria-selected="false"
          >
            <i class="flaticon-atm"></i>
            Payment Method
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link fs-14 fs-md-15 fs-lg-16 fw-semibold position-relative border-0 rounded-0 d-block w-100"
            id="place-order-tab"
            data-bs-toggle="tab"
            data-bs-target="#place-order-tab-pane"
            type="button"
            role="tab"
            aria-controls="place-order-tab-pane"
            aria-selected="false"
          >
            <i class="flaticon-sterile-box"></i>
            Place Order
          </button>
        </li>
      </ul>
      <div class="tab-content p-15 p-sm-20 p-md-25 p-lg-30" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="shipping-details-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <h5 class="mb-15 mb-md-25 fw-bold text-black">
            Please Fill Your Shipping Details
          </h5>
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <label class="d-block text-black fw-semibold mb-10">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="e.g. Jane"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <label class="d-block text-black fw-semibold mb-10">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="e.g. Ronan"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <label class="d-block text-black fw-semibold mb-10">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="e.g. jane3602@gmail.com"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <label class="d-block text-black fw-semibold mb-10">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="e.g. +1-829-3456"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <label class="d-block text-black fw-semibold mb-10">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="add your location address here"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <label class="d-block text-black fw-semibold mb-10">
                    Town/City
                  </label>
                  <select class="form-select shadow-none fw-semibold rounded-0">
                    <option selected>Western Hill</option>
                    <option value="1">New York</option>
                    <option value="2">London</option>
                    <option value="3">Tokyo</option>
                    <option value="4">Paris</option>
                    <option value="5">İstanbul</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <label class="d-block text-black fw-semibold mb-10">
                    State
                  </label>
                  <select class="form-select shadow-none fw-semibold rounded-0">
                    <option selected>Manitoba</option>
                    <option value="1">Wisconsin</option>
                    <option value="2">Florida</option>
                    <option value="3">Utah</option>
                    <option value="4">Nebraska</option>
                    <option value="5">Virginia</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <label class="d-block text-black fw-semibold mb-10">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="enter zip code here"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <label class="d-block text-black fw-semibold mb-10">
                    Country
                  </label>
                  <select class="form-select shadow-none fw-semibold rounded-0">
                    <option selected>Australia</option>
                    <option value="1">Canada</option>
                    <option value="2">Japan</option>
                    <option value="3">Spain</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <label class="d-block text-black fw-semibold mb-10">
                    Add A Note (Optional)
                  </label>
                  <textarea
                    cols="30"
                    rows="9"
                    class="form-control shadow-none rounded-0 text-black"
                    placeholder="Write some note here..."
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <div class="d-sm-flex align-items-center justify-content-between">
            <span></span>
            <button
              class="default-btn transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
              type="submit"
            >
              Save & Next
              <i class="flaticon-right-arrow position-relative ms-5 top-2"></i>
            </button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="payment-method-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <h5 class="mb-15 mb-md-25 fw-bold text-black">
            Please Select Your Payment Method
          </h5>
          <div class="accordion" id="paymentAccordion">
            <div class="accordion-item rounded-0">
              <button
                class="accordion-button text-black fs-14 fs-md-15 fs-lg-16 fw-semibold shadow-none border-0 rounded-0 bg-white d-flex align-items-center justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#paymentCollapseOne"
                aria-expanded="true"
                aria-controls="paymentCollapseOne"
              >
                <span class="dot"></span>
                Credit/Debit Card
                <div class="payment-types">
                  <img
                    src="../../../assets/images/payment/mastercard.jpg"
                    alt="mastercard"
                  />
                  <img
                    src="../../../assets/images/payment/visa.jpg"
                    alt="visa"
                  />
                  <img
                    src="../../../assets/images/payment/american-express.jpg"
                    alt="american-express.jpg"
                  />
                </div>
              </button>
              <div
                id="paymentCollapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#paymentAccordion"
              >
                <div class="accordion-body p-0">
                  <form>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group mb-15 mb-sm-20 mb-md-25">
                          <label class="d-block text-black fw-semibold mb-10">
                            Card Number
                          </label>
                          <input
                            type="text"
                            class="form-control shadow-none rounded-0 text-black"
                            placeholder="xxxx xxxx xxxx xxxx"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group mb-15 mb-sm-20 mb-md-25">
                          <label class="d-block text-black fw-semibold mb-10">
                            Name On Card
                          </label>
                          <input
                            type="text"
                            class="form-control shadow-none rounded-0 text-black"
                            placeholder="eg. Adam Smith"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group mb-15 mb-sm-20 mb-md-25">
                          <label class="d-block text-black fw-semibold mb-10">
                            Expiration Date
                          </label>
                          <input
                            type="date"
                            class="form-control shadow-none rounded-0 text-black"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group mb-15 mb-sm-20 mb-md-25">
                          <label class="d-block text-black fw-semibold mb-10">
                            CVV Code
                          </label>
                          <input
                            type="text"
                            class="form-control shadow-none rounded-0 text-black"
                            placeholder="xxxx"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div
                          class="form-check mb-0 fs-md-15 fs-lg-16 text-muted"
                        >
                          <input
                            class="form-check-input shadow-none"
                            type="checkbox"
                            id="save-info"
                          />
                          <label
                            class="form-check-label fw-normal"
                            for="save-info"
                          >
                            Save this payment details for future purchases.
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0">
              <button
                class="accordion-button text-black fs-14 fs-md-15 fs-lg-16 fw-semibold shadow-none border-0 rounded-0 bg-white d-flex align-items-center justify-content-between collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#paymentCollapseTwo"
                aria-expanded="false"
                aria-controls="paymentCollapseTwo"
              >
                <span class="dot"></span>
                Pay With Paypal
                <div class="payment-types">
                  <img
                    src="../../../assets/images/payment/paypal.jpg"
                    alt="paypal"
                  />
                </div>
              </button>
              <div
                id="paymentCollapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#paymentAccordion"
              >
                <div class="accordion-body p-0">
                  <form>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group mb-15 mb-sm-20 mb-md-25">
                          <label class="d-block text-black fw-semibold mb-10">
                            Card Number
                          </label>
                          <input
                            type="text"
                            class="form-control shadow-none rounded-0 text-black"
                            placeholder="xxxx xxxx xxxx xxxx"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group mb-15 mb-sm-20 mb-md-25">
                          <label class="d-block text-black fw-semibold mb-10">
                            Name On Card
                          </label>
                          <input
                            type="text"
                            class="form-control shadow-none rounded-0 text-black"
                            placeholder="eg. Adam Smith"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group mb-15 mb-sm-20 mb-md-25">
                          <label class="d-block text-black fw-semibold mb-10">
                            Expiration Date
                          </label>
                          <input
                            type="date"
                            class="form-control shadow-none rounded-0 text-black"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group mb-15 mb-sm-20 mb-md-25">
                          <label class="d-block text-black fw-semibold mb-10">
                            CVV Code
                          </label>
                          <input
                            type="text"
                            class="form-control shadow-none rounded-0 text-black"
                            placeholder="xxxx"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div
                          class="form-check mb-0 fs-md-15 fs-lg-16 text-muted"
                        >
                          <input
                            class="form-check-input shadow-none"
                            type="checkbox"
                            id="save-info1"
                          />
                          <label
                            class="form-check-label fw-normal"
                            for="save-info1"
                          >
                            Save this payment details for future purchases.
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0">
              <button
                class="accordion-button text-black fs-14 fs-md-15 fs-lg-16 fw-semibold shadow-none border-0 rounded-0 bg-white d-flex align-items-center justify-content-between collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#paymentCollapseThree"
                aria-expanded="false"
                aria-controls="paymentCollapseThree"
              >
                <span class="dot"></span>
                Cash On Delivery
              </button>
              <div
                id="paymentCollapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#paymentAccordion"
              >
                <div class="accordion-body p-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
                    Cash on Delivery (COD) is a payment gateway that required no
                    payment be made online. Orders using Cash on Delivery are
                    set to Processing until payment is made upon delivery of the
                    order by you or your shipping method.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="mt-15 mt-sm-20 mt-md-25 d-sm-flex align-items-center justify-content-between"
          >
            <button
              type="button"
              class="d-inline-block fs-14 fs-md-15 fs-lg-16 fw-medium text-decoration-none bg-transparent p-0 border-0 text-primary mb-12 mb-sm-0"
            >
              <i
                class="flaticon-left-arrow lh-1 me-5 position-relative top-2"
              ></i>
              Return To Shipping Details
            </button>
            <button
              class="default-btn transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
              type="submit"
            >
              Save & Next
              <i class="flaticon-right-arrow position-relative ms-5 top-2"></i>
            </button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="place-order-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <h5 class="mb-15 mb-md-25 fw-bold text-black">
            Please Check Your Order
          </h5>
          <div class="box p-15 p-sm-20 p-md-25 mb-15 mb-md-25">
            <div
              class="mb-15 mb-sm-20 mb-md-25 d-flex align-items-center justify-content-between"
            >
              <h6 class="fw-bold text-black-emphasis mb-0">Shipping Details</h6>
              <a
                href="#"
                class="d-inline-block text-decoration-none lh-1 text-muted fw-medium"
                ><i
                  class="ph-duotone ph-pencil text-black position-relative top-1 fs-16 me-1"
                ></i>
                Edit</a
              >
            </div>
            <div class="inner-box p-15 p-sm-20 p-md-25 bg-white">
              <ul class="ps-0 mb-0 list-unstyled">
                <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                  <span>Name:</span>
                  Jane Ronan
                </li>
                <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                  <span>Phone No:</span>
                  +1 234 4567 5678
                </li>
                <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                  <span>Email:</span>
                  jane324506@gmail.com
                </li>
                <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                  <span>Address:</span>
                  795 Folsom Ave, Suite 600 San Francisco, CA 94107 United
                  States
                </li>
              </ul>
            </div>
          </div>
          <div class="box p-15 p-sm-20 p-md-25">
            <div
              class="mb-15 mb-sm-20 mb-md-25 d-flex align-items-center justify-content-between"
            >
              <h6 class="fw-bold text-black-emphasis mb-0">Payment Method</h6>
              <a
                href="#"
                class="d-inline-block text-decoration-none lh-1 text-muted fw-medium"
              >
                <i
                  class="ph-duotone ph-pencil text-black position-relative top-1 fs-16 me-1"
                ></i>
                Edit
              </a>
            </div>
            <div class="d-flex align-items-center payment-method">
              <img src="../../../assets/images/payment/visa.jpg" alt="visa" />
              <div class="title ms-15">
                <span class="d-block fw-semibold text-black">
                  Visacard....9036
                </span>
                <span class="d-block text-paragraph">Expires 12/32</span>
              </div>
            </div>
          </div>
          <div
            class="mt-15 mt-sm-20 mt-md-25 d-sm-flex align-items-center justify-content-between"
          >
            <button
              type="button"
              class="d-inline-block fs-14 fs-md-15 fs-lg-16 fw-medium text-decoration-none bg-transparent p-0 border-0 text-primary mb-8 mb-sm-0"
            >
              <i
                class="flaticon-left-arrow lh-1 me-5 position-relative top-2"
              ></i>
              Return To Payment Method
            </button>
            <button
              class="default-btn transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
              type="submit"
            >
              Place Order
              <i class="flaticon-right-arrow position-relative ms-5 top-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormWizard",
};
</script>