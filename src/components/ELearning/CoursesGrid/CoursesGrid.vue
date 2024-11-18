<template>
  <div class="row">
    <div class="col-lg-4 col-xxxl-3">
      <SideBar />
    </div>
    <div class="col-lg-8 col-xxxl-9">
      <div class="row">
        <div class="col-sm-6 col-lg-6 col-xxxl-4">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-course-card"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/course-details" class="d-block">
                  <img
                    src="../../../assets/images/courses/course1.jpg"
                    alt="course-image"
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
                  <router-link
                    to="/course-details"
                    class="text-decoration-none text-black"
                  >
                    Artificial Intelligence A-Z 2023: Build an AI with ChatGPT4
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
                  <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
                </div>
                <ul class="mb-0 ps-0 list-unstyled info">
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-book"></i>
                    15 <span class="text-muted">Classes</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-user-3"></i>
                    71 <span class="text-muted">Enrolled</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-clock"></i>
                    37 <span class="text-muted">Hrs</span>
                  </li>
                </ul>
                <div class="mt-12 price d-flex align-items-end">
                  <span
                    class="text-primary lh-1 fw-bold fs-16 fs-md-20 fs-lg-25"
                    >$250</span
                  >
                  <span
                    class="text-muted fs-13 fw-medium ms-5 me-8 text-decoration-line-through"
                    >$350</span
                  >
                  <span class="text-success fw-medium"
                    ><span class="fw-black">60%</span> Off</span
                  >
                </div>
                <div class="mt-15 d-flex align-items-center">
                  <img
                    src="../../../assets/images/user/user3.jpg"
                    width="24"
                    height="24"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span
                    class="d-block text-black ms-8 fs-md-15 fs-lg-16 fw-medium"
                    >J. Ronan</span
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
        <div class="col-sm-6 col-lg-6 col-xxxl-4">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-course-card"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/course-details" class="d-block">
                  <img
                    src="../../../assets/images/courses/course2.jpg"
                    alt="course-image"
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
                  <router-link
                    to="/course-details"
                    class="text-decoration-none text-black"
                  >
                    TensorFlow Developer Certificate in 2023: Zero to Mastery
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
                  <span class="text-muted fw-medium fs-13">(32 Reviews)</span>
                </div>
                <ul class="mb-0 ps-0 list-unstyled info">
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-book"></i>
                    10 <span class="text-muted">Classes</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-user-3"></i>
                    34 <span class="text-muted">Enrolled</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-clock"></i>
                    21 <span class="text-muted">Hrs</span>
                  </li>
                </ul>
                <div class="mt-12 price d-flex align-items-end">
                  <span
                    class="text-primary lh-1 fw-bold fs-16 fs-md-20 fs-lg-25"
                    >$99</span
                  >
                </div>
                <div class="mt-15 d-flex align-items-center">
                  <img
                    src="../../../assets/images/user/user12.jpg"
                    width="24"
                    height="24"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span
                    class="d-block text-black ms-8 fs-md-15 fs-lg-16 fw-medium"
                    >J. Pinkman</span
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
        <div class="col-sm-6 col-lg-6 col-xxxl-4">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-course-card"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/course-details" class="d-block">
                  <img
                    src="../../../assets/images/courses/course3.jpg"
                    alt="course-image"
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
                  <router-link
                    to="/course-details"
                    class="text-decoration-none text-black"
                  >
                    Complete Machine Learning & Data Science Bootcamp 2023
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
                  <span class="text-muted fw-medium fs-13">(12 Reviews)</span>
                </div>
                <ul class="mb-0 ps-0 list-unstyled info">
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-book"></i>
                    20 <span class="text-muted">Classes</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-user-3"></i>
                    99 <span class="text-muted">Enrolled</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-clock"></i>
                    43 <span class="text-muted">Hrs</span>
                  </li>
                </ul>
                <div class="mt-12 price d-flex align-items-end">
                  <span
                    class="text-primary lh-1 fw-bold fs-16 fs-md-20 fs-lg-25"
                    >$140</span
                  >
                  <span
                    class="text-muted fs-13 fw-medium ms-5 me-8 text-decoration-line-through"
                    >$280</span
                  >
                  <span class="text-success fw-medium"
                    ><span class="fw-black">50%</span> Off</span
                  >
                </div>
                <div class="mt-15 d-flex align-items-center">
                  <img
                    src="../../../assets/images/user/user13.jpg"
                    width="24"
                    height="24"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span
                    class="d-block text-black ms-8 fs-md-15 fs-lg-16 fw-medium"
                    >A. Carter</span
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
        <div class="col-sm-6 col-lg-6 col-xxxl-4">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-course-card"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/course-details" class="d-block">
                  <img
                    src="../../../assets/images/courses/course4.jpg"
                    alt="course-image"
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
                  <router-link
                    to="/course-details"
                    class="text-decoration-none text-black"
                  >
                    Photoshop Master Course: From Beginner to Photoshop Pro
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
                  <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
                </div>
                <ul class="mb-0 ps-0 list-unstyled info">
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-book"></i>
                    15 <span class="text-muted">Classes</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-user-3"></i>
                    71 <span class="text-muted">Enrolled</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-clock"></i>
                    37 <span class="text-muted">Hrs</span>
                  </li>
                </ul>
                <div class="mt-12 price d-flex align-items-end">
                  <span
                    class="text-primary lh-1 fw-bold fs-16 fs-md-20 fs-lg-25"
                    >$132</span
                  >
                </div>
                <div class="mt-15 d-flex align-items-center">
                  <img
                    src="../../../assets/images/user/user8.jpg"
                    width="24"
                    height="24"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span
                    class="d-block text-black ms-8 fs-md-15 fs-lg-16 fw-medium"
                    >V. Loper</span
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
        <div class="col-sm-6 col-lg-6 col-xxxl-4">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-course-card"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/course-details" class="d-block">
                  <img
                    src="../../../assets/images/courses/course5.jpg"
                    alt="course-image"
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
                  <router-link
                    to="/course-details"
                    class="text-decoration-none text-black"
                  >
                    User Experience (UX): The Ultimate Guide to Usability and UX
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
                  <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
                </div>
                <ul class="mb-0 ps-0 list-unstyled info">
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-book"></i>
                    15 <span class="text-muted">Classes</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-user-3"></i>
                    71 <span class="text-muted">Enrolled</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-clock"></i>
                    37 <span class="text-muted">Hrs</span>
                  </li>
                </ul>
                <div class="mt-12 price d-flex align-items-end">
                  <span
                    class="text-primary lh-1 fw-bold fs-16 fs-md-20 fs-lg-25"
                    >$45</span
                  >
                  <span
                    class="text-muted fs-13 fw-medium ms-5 me-8 text-decoration-line-through"
                    >$100</span
                  >
                  <span class="text-success fw-medium"
                    ><span class="fw-black">45%</span> Off</span
                  >
                </div>
                <div class="mt-15 d-flex align-items-center">
                  <img
                    src="../../../assets/images/user/user1.jpg"
                    width="24"
                    height="24"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span
                    class="d-block text-black ms-8 fs-md-15 fs-lg-16 fw-medium"
                    >W. White</span
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
        <div class="col-sm-6 col-lg-6 col-xxxl-4">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-course-card"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/course-details" class="d-block">
                  <img
                    src="../../../assets/images/courses/course6.jpg"
                    alt="course-image"
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
                  <router-link
                    to="/course-details"
                    class="text-decoration-none text-black"
                  >
                    Adobe Audition CC Tutorial - Audition Made Easy
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
                  <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
                </div>
                <ul class="mb-0 ps-0 list-unstyled info">
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-book"></i>
                    15 <span class="text-muted">Classes</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-user-3"></i>
                    71 <span class="text-muted">Enrolled</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-clock"></i>
                    37 <span class="text-muted">Hrs</span>
                  </li>
                </ul>
                <div class="mt-12 price d-flex align-items-end">
                  <span
                    class="text-primary lh-1 fw-bold fs-16 fs-md-20 fs-lg-25"
                    >$199</span
                  >
                  <span
                    class="text-muted fs-13 fw-medium ms-5 me-8 text-decoration-line-through"
                    >$300</span
                  >
                  <span class="text-success fw-medium"
                    ><span class="fw-black">60%</span> Off</span
                  >
                </div>
                <div class="mt-15 d-flex align-items-center">
                  <img
                    src="../../../assets/images/user/user5.jpg"
                    width="24"
                    height="24"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span
                    class="d-block text-black ms-8 fs-md-15 fs-lg-16 fw-medium"
                    >T. Skyler</span
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
        <div class="col-sm-6 col-lg-6 col-xxxl-4">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-course-card"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/course-details" class="d-block">
                  <img
                    src="../../../assets/images/courses/course7.jpg"
                    alt="course-image"
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
                  <router-link
                    to="/course-details"
                    class="text-decoration-none text-black"
                  >
                    Web Development Masterclass & Certifications
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
                  <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
                </div>
                <ul class="mb-0 ps-0 list-unstyled info">
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-book"></i>
                    15 <span class="text-muted">Classes</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-user-3"></i>
                    71 <span class="text-muted">Enrolled</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-clock"></i>
                    37 <span class="text-muted">Hrs</span>
                  </li>
                </ul>
                <div class="mt-12 price d-flex align-items-end">
                  <span
                    class="text-primary lh-1 fw-bold fs-16 fs-md-20 fs-lg-25"
                    >$45</span
                  >
                </div>
                <div class="mt-15 d-flex align-items-center">
                  <img
                    src="../../../assets/images/user/user14.jpg"
                    width="24"
                    height="24"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span
                    class="d-block text-black ms-8 fs-md-15 fs-lg-16 fw-medium"
                    >K. Hong</span
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
        <div class="col-sm-6 col-lg-6 col-xxxl-4">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-course-card"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/course-details" class="d-block">
                  <img
                    src="../../../assets/images/courses/course8.jpg"
                    alt="course-image"
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
                  <router-link
                    to="/course-details"
                    class="text-decoration-none text-black"
                  >
                    Create a Complete 2D Survivors Style Game in Godot 4
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
                  <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
                </div>
                <ul class="mb-0 ps-0 list-unstyled info">
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-book"></i>
                    15 <span class="text-muted">Classes</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-user-3"></i>
                    71 <span class="text-muted">Enrolled</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-clock"></i>
                    37 <span class="text-muted">Hrs</span>
                  </li>
                </ul>
                <div class="mt-12 price d-flex align-items-end">
                  <span
                    class="text-primary lh-1 fw-bold fs-16 fs-md-20 fs-lg-25"
                    >$54</span
                  >
                  <span
                    class="text-muted fs-13 fw-medium ms-5 me-8 text-decoration-line-through"
                    >$100</span
                  >
                  <span class="text-success fw-medium"
                    ><span class="fw-black">54%</span> Off</span
                  >
                </div>
                <div class="mt-15 d-flex align-items-center">
                  <img
                    src="../../../assets/images/user/user10.jpg"
                    width="24"
                    height="24"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span
                    class="d-block text-black ms-8 fs-md-15 fs-lg-16 fw-medium"
                    >B. Traversy</span
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
        <div class="col-sm-6 col-lg-6 col-xxxl-4">
          <div
            class="card mb-25 border-0 rounded-0 bg-white single-course-card"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/course-details" class="d-block">
                  <img
                    src="../../../assets/images/courses/course9.jpg"
                    alt="course-image"
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
                  <router-link
                    to="/course-details"
                    class="text-decoration-none text-black"
                  >
                    The Complete Python Bootcamp From Zero to Hero in Python
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
                  <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
                </div>
                <ul class="mb-0 ps-0 list-unstyled info">
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-book"></i>
                    15 <span class="text-muted">Classes</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-user-3"></i>
                    71 <span class="text-muted">Enrolled</span>
                  </li>
                  <li class="d-inline-block text-black position-relative">
                    <i class="flaticon-clock"></i>
                    37 <span class="text-muted">Hrs</span>
                  </li>
                </ul>
                <div class="mt-12 price d-flex align-items-end">
                  <span
                    class="text-primary lh-1 fw-bold fs-16 fs-md-20 fs-lg-25"
                    >$29</span
                  >
                </div>
                <div class="mt-15 d-flex align-items-center">
                  <img
                    src="../../../assets/images/user/user3.jpg"
                    width="24"
                    height="24"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span
                    class="d-block text-black ms-8 fs-md-15 fs-lg-16 fw-medium"
                    >J. Ronan</span
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
          Showing <span class="fw-bold">09</span> out of
          <span class="fw-bold">134</span> results
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
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
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

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./SideBar.vue";

export default defineComponent({
  name: "CoursesGrid",
  components: {
    SideBar,
  },
});
</script>