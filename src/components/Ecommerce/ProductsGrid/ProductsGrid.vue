<template>
  <div class="row">
    <div class="col-lg-4 col-xxxl-3">
      <SideBar />
    </div>
    <div class="col-lg-8 col-xxxl-9">
      <div class="row">
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product1.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-16 fs-lg-18">
                  <a href="#" class="text-decoration-none text-black">
                    Sanung Smart Tablet
                  </a>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">4.0</span>
                  <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$250</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$350</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">60%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product2.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart-1"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    E-Phone 14 Pro Max
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-2"></i>
                    <i class="flaticon-star"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">3.5</span>
                  <span class="text-muted fw-medium fs-13">(07 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$1250</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8"
                    >$1350</span
                  >
                  <span class="text-success fw-medium"
                    ><span class="fw-black">25%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product3.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Smart Wifi Router
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">5.0</span>
                  <span class="text-muted fw-medium fs-13">(20 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$850</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product4.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Sanung Smart Phone Case
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-2"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">4.5</span>
                  <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$150</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$100</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">20%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product5.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Philings 24” 8K Monitor
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">4.0</span>
                  <span class="text-muted fw-medium fs-13">(13 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$1000</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product6.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Naumi Gaming Phone
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">5.0</span>
                  <span class="text-muted fw-medium fs-13">(10 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$550</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product7.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart-1"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Sanung Phone Case
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-2"></i>
                    <i class="flaticon-star"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">3.5</span>
                  <span class="text-muted fw-medium fs-13">(05 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$250</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$350</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">60%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product8.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Sanung Smart Tablet
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-2"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">4.5</span>
                  <span class="text-muted fw-medium fs-13">(22 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$400</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$800</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">50%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product9.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart-1"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Sanung Smart Watch
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star"></i>
                    <i class="flaticon-star"></i>
                    <i class="flaticon-star"></i>
                    <i class="flaticon-star"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">1.0</span>
                  <span class="text-muted fw-medium fs-13">(03 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$250</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$350</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">60%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product10.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    MDH Drone
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star"></i>
                    <i class="flaticon-star"></i>
                    <i class="flaticon-star"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">2.0</span>
                  <span class="text-muted fw-medium fs-13">(01 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$400</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$750</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">45%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product11.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Clay Camera Toy
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">5.0</span>
                  <span class="text-muted fw-medium fs-13">(17 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$50</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$75</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">10%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product12.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Sanung Smart Phone
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star"></i>
                    <i class="flaticon-star"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">3.0</span>
                  <span class="text-muted fw-medium fs-13">(10 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$250</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$350</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">60%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product13.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Sanung Laptop, 8gb, 16gb
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-2"></i>
                    <i class="flaticon-star"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">3.5</span>
                  <span class="text-muted fw-medium fs-13">(18 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$1000</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product14.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Sanung Smart Pencil
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">5.0</span>
                  <span class="text-muted fw-medium fs-13">(08 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$50</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$100</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">50%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product15.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Sanung Smart Watch
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">4.0</span>
                  <span class="text-muted fw-medium fs-13">(11 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$100</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$180</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">40%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6 col-xxxl-3">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                    src="../../../assets/images/products/product16.jpg"
                    alt="product"
                  />
                </router-link>
                <button
                  class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                  type="button"
                >
                  <i class="flaticon-heart-1"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
                  <router-link
                    to="/product-details"
                    class="text-decoration-none text-black"
                  >
                    Sanung Gaming Monitor
                  </router-link>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                  </div>
                  <span class="text-black fw-bold fs-13 ms-5 me-5">5.0</span>
                  <span class="text-muted fw-medium fs-13">(15 Reviews)</span>
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$177</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$200</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">10%</span> Off</span
                  >
                </div>
                <button
                  type="button"
                  class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  Add To Cart
                  <i class="flaticon-shopping-cart-2 transition"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pagination-area d-md-flex mb-25 justify-content-between align-items-center"
      >
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">16</span> out of
          <span class="fw-bold">1354</span> results
        </p>
        <nav class="mt-15 mt-md-0">
          <ul class="pagination mb-0">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <i class="flaticon-chevron-1"></i>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link active" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <i class="flaticon-chevron"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SideBar from "./SideBar.vue";

export default defineComponent({
  name: "ProductsGrid",
  components: {
    SideBar,
  },
});
</script>