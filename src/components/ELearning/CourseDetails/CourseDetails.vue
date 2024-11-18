<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white letter-spacing course-details-card"
  >
    <div class="card-body p-10">
      <div
        class="bg-gradient ps-15 pe-15 pt-20 pb-20 ps-md-30 pe-md-30 pt-md-35 pb-md-35 ps-lg-40 pe-lg-40 pt-lg-50 pb-lg-50"
      >
        <div class="course-details-header">
          <span
            class="d-inline-block bg-warning fs-12 fw-medium rounded-1 ps-10 pe-10 pt-1 pb-1 mb-10 text-black"
          >
            Best Selling
          </span>
          <h2 class="fw-bold text-white">
            Artificial Intelligence A-Z 2023: Build an AI with ChatGPT4
          </h2>
          <p class="lh-base fs-md-15 fs-lg-16">
            Combine the power of Data Science, Machine Learning and Deep
            Learning to create powerful AI for Real-World applications!
          </p>
          <div class="info d-sm-flex align-items-center">
            <div class="reviews d-flex align-items-center">
              <div class="rating lh-1">
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
              </div>
              <span class="fw-bold fs-13 ms-5 me-8 text-white">4.9</span>
              <span>(21 Reviews)</span>
            </div>
            <div class="d-flex align-items-center mt-10 mt-sm-0 ms-sm-15">
              <img
                src="../../../assets/images/user/user16.jpg"
                class="rounded-circle"
                width="25"
                height="25"
                alt="user"
              />
              <span class="ms-5">Created by <span>J. Ronan</span></span>
            </div>
          </div>
          <div class="buttons-list mt-md-15 mt-lg-20">
            <button
              type="button"
              class="fs-14 fw-medium position-relative rounded-1 transition d-inline-block with-icon"
              data-bs-toggle="modal"
              data-bs-target="#videoModal"
            >
              Watch Preview
              <i class="flaticon-play"></i>
            </button>
            <button
              type="button"
              class="fs-14 fw-medium position-relative rounded-1 transition d-inline-block"
            >
              Enroll Course
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="pe-xxl-25 pe-xxxl-50">
      <div class="row">
        <div class="col-xxl-8 col-xxxl-9">
          <div class="pe-xxxl-10">
            <div class="card-body pt-0 pb-0 ps-10 pe-10">
              <div class="course-info bg-gray">
                <div class="row">
                  <div class="col-sm-6 col-lg-3 col-xl-6 col-xxxl-3">
                    <div class="info-card position-relative">
                      <div
                        class="icon bg-info rounded-circle text-center position-absolute start-0 text-white"
                      >
                        <i class="flaticon-bar-chart-1"></i>
                      </div>
                      <span
                        class="d-block text-black-emphasis fs-md-15 fs-lg-16 fw-bold mb-1"
                      >
                        Course Level:
                      </span>
                      <span class="fw-medium text-paragraph">Beginner</span>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3 col-xl-6 col-xxxl-3">
                    <div class="info-card position-relative">
                      <div
                        class="icon bg-success rounded-circle text-center position-absolute start-0 text-white"
                      >
                        <i class="flaticon-clock"></i>
                      </div>
                      <span
                        class="d-block text-black-emphasis fs-md-15 fs-lg-16 fw-bold mb-1"
                      >
                        Course Duration:
                      </span>
                      <span class="fw-medium text-paragraph">32 Hours</span>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3 col-xl-6 col-xxxl-3">
                    <div class="info-card position-relative">
                      <div
                        class="icon bg-warning rounded-circle text-center position-absolute start-0 text-white"
                      >
                        <i class="flaticon-copy"></i>
                      </div>
                      <span
                        class="d-block text-black-emphasis fs-md-15 fs-lg-16 fw-bold mb-1"
                      >
                        Total Lessons:
                      </span>
                      <span class="fw-medium text-paragraph">24 Lessons</span>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3 col-xl-6 col-xxxl-3">
                    <div class="info-card position-relative">
                      <div
                        class="icon bg-danger rounded-circle text-center position-absolute start-0 text-white"
                      >
                        <i class="flaticon-people"></i>
                      </div>
                      <span
                        class="d-block text-black-emphasis fs-md-15 fs-lg-16 fw-bold mb-1"
                      >
                        Total Students:
                      </span>
                      <span class="fw-medium text-paragraph">204</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
              <div class="mb-15 mb-md-20">
                <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
                  Table Of Content:
                </h5>
              </div>
              <div class="accordion" id="tableOfContentAccordion">
                <div class="accordion-item border-0">
                  <button
                    class="accordion-button d-block w-100 text-start text-black fs-14 fs-md-15 fs-lg-16 fw-medium rounded-0 bg-white border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#TableContentCollapseOne"
                    aria-expanded="true"
                    aria-controls="TableContentCollapseOne"
                  >
                    <div
                      class="d-sm-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="number bg-primary text-center text-white rounded-circle fs-13 fw-semibold"
                        >
                          1
                        </div>
                        Welcome to the course!
                      </div>
                      <ul
                        class="d-flex align-items-center mt-10 mt-sm-0 ps-0 mb-0 list-unstyled"
                      >
                        <li
                          class="position-relative fw-medium fs-14 text-muted"
                        >
                          <i class="flaticon-book"></i>
                          5 lectures
                        </li>
                        <li
                          class="position-relative fw-medium fs-14 text-muted"
                        >
                          <i class="flaticon-clock"></i>
                          11 mins
                        </li>
                      </ul>
                    </div>
                  </button>
                  <div
                    id="TableContentCollapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#tableOfContentAccordion"
                  >
                    <div class="accordion-body">
                      <ul class="ps-0 mb-0 list-unstyled">
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Welcome Challenge!
                          </router-link>
                          <span class="text-muted fw-medium">01:22</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Why AI?
                          </router-link>
                          <span class="text-muted fw-medium">05:10</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Course Structure
                          </router-link>
                          <span class="text-muted fw-medium">00:46</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Installing Anaconda
                          </router-link>
                          <span class="text-muted fw-medium">03:26</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Use ChatGPT to Build AI More Efficiently
                          </router-link>
                          <span class="text-muted fw-medium">00:23</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0">
                  <button
                    class="accordion-button collapsed d-block w-100 text-start text-black fs-14 fs-md-15 fs-lg-16 fw-medium rounded-0 bg-white border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#TableContentCollapseTwo"
                    aria-expanded="true"
                    aria-controls="TableContentCollapseTwo"
                  >
                    <div
                      class="d-sm-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="number bg-primary text-center text-white rounded-circle fs-13 fw-semibold"
                        >
                          2
                        </div>
                        Python Setup
                      </div>
                      <ul
                        class="d-flex align-items-center mt-10 mt-sm-0 ps-0 mb-0 list-unstyled"
                      >
                        <li
                          class="position-relative fw-medium fs-14 text-muted"
                        >
                          <i class="flaticon-book"></i>
                          6 lectures
                        </li>
                        <li
                          class="position-relative fw-medium fs-14 text-muted"
                        >
                          <i class="flaticon-clock"></i>
                          12 mins
                        </li>
                      </ul>
                    </div>
                  </button>
                  <div
                    id="TableContentCollapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#tableOfContentAccordion"
                  >
                    <div class="accordion-body">
                      <ul class="ps-0 mb-0 list-unstyled">
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Welcome Challenge!
                          </router-link>
                          <span class="text-muted fw-medium">01:22</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Why AI?
                          </router-link>
                          <span class="text-muted fw-medium">05:10</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Course Structure
                          </router-link>
                          <span class="text-muted fw-medium">00:46</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Installing Anaconda
                          </router-link>
                          <span class="text-muted fw-medium">03:26</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Use ChatGPT to Build AI More Efficiently
                          </router-link>
                          <span class="text-muted fw-medium">00:23</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0">
                  <button
                    class="accordion-button collapsed d-block w-100 text-start text-black fs-14 fs-md-15 fs-lg-16 fw-medium rounded-0 bg-white border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#TableContentCollapseThree"
                    aria-expanded="true"
                    aria-controls="TableContentCollapseThree"
                  >
                    <div
                      class="d-sm-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="number bg-primary text-center text-white rounded-circle fs-13 fw-semibold"
                        >
                          3
                        </div>
                        Python Objects & Data Structures Basics
                      </div>
                      <ul
                        class="d-flex align-items-center mt-10 mt-sm-0 ps-0 mb-0 list-unstyled"
                      >
                        <li
                          class="position-relative fw-medium fs-14 text-muted"
                        >
                          <i class="flaticon-book"></i>
                          8 lectures
                        </li>
                        <li
                          class="position-relative fw-medium fs-14 text-muted"
                        >
                          <i class="flaticon-clock"></i>
                          43 mins
                        </li>
                      </ul>
                    </div>
                  </button>
                  <div
                    id="TableContentCollapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#tableOfContentAccordion"
                  >
                    <div class="accordion-body">
                      <ul class="ps-0 mb-0 list-unstyled">
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Welcome Challenge!
                          </router-link>
                          <span class="text-muted fw-medium">01:22</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Why AI?
                          </router-link>
                          <span class="text-muted fw-medium">05:10</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Course Structure
                          </router-link>
                          <span class="text-muted fw-medium">00:46</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Installing Anaconda
                          </router-link>
                          <span class="text-muted fw-medium">03:26</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Use ChatGPT to Build AI More Efficiently
                          </router-link>
                          <span class="text-muted fw-medium">00:23</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0">
                  <button
                    class="accordion-button collapsed d-block w-100 text-start text-black fs-14 fs-md-15 fs-lg-16 fw-medium rounded-0 bg-white border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#TableContentCollapseFour"
                    aria-expanded="true"
                    aria-controls="TableContentCollapseFour"
                  >
                    <div
                      class="d-sm-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="number bg-primary text-center text-white rounded-circle fs-13 fw-semibold"
                        >
                          4
                        </div>
                        Python Comparison Operators
                      </div>
                      <ul
                        class="d-flex align-items-center mt-10 mt-sm-0 ps-0 mb-0 list-unstyled"
                      >
                        <li
                          class="position-relative fw-medium fs-14 text-muted"
                        >
                          <i class="flaticon-book"></i>
                          3 lectures
                        </li>
                        <li
                          class="position-relative fw-medium fs-14 text-muted"
                        >
                          <i class="flaticon-clock"></i>
                          33 mins
                        </li>
                      </ul>
                    </div>
                  </button>
                  <div
                    id="TableContentCollapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#tableOfContentAccordion"
                  >
                    <div class="accordion-body">
                      <ul class="ps-0 mb-0 list-unstyled">
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Welcome Challenge!
                          </router-link>
                          <span class="text-muted fw-medium">01:22</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Why AI?
                          </router-link>
                          <span class="text-muted fw-medium">05:10</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Course Structure
                          </router-link>
                          <span class="text-muted fw-medium">00:46</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Installing Anaconda
                          </router-link>
                          <span class="text-muted fw-medium">03:26</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Use ChatGPT to Build AI More Efficiently
                          </router-link>
                          <span class="text-muted fw-medium">00:23</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0">
                  <button
                    class="accordion-button collapsed d-block w-100 text-start text-black fs-14 fs-md-15 fs-lg-16 fw-medium rounded-0 bg-white border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#TableContentCollapseFive"
                    aria-expanded="true"
                    aria-controls="TableContentCollapseFive"
                  >
                    <div
                      class="d-sm-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="number bg-primary text-center text-white rounded-circle fs-13 fw-semibold"
                        >
                          5
                        </div>
                        Python Statements
                      </div>
                      <ul
                        class="d-flex align-items-center mt-10 mt-sm-0 ps-0 mb-0 list-unstyled"
                      >
                        <li
                          class="position-relative fw-medium fs-14 text-muted"
                        >
                          <i class="flaticon-book"></i>
                          10 lectures
                        </li>
                        <li
                          class="position-relative fw-medium fs-14 text-muted"
                        >
                          <i class="flaticon-clock"></i>
                          1 hour
                        </li>
                      </ul>
                    </div>
                  </button>
                  <div
                    id="TableContentCollapseFive"
                    class="accordion-collapse collapse"
                    data-bs-parent="#tableOfContentAccordion"
                  >
                    <div class="accordion-body">
                      <ul class="ps-0 mb-0 list-unstyled">
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Welcome Challenge!
                          </router-link>
                          <span class="text-muted fw-medium">01:22</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Why AI?
                          </router-link>
                          <span class="text-muted fw-medium">05:10</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Course Structure
                          </router-link>
                          <span class="text-muted fw-medium">00:46</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Installing Anaconda
                          </router-link>
                          <span class="text-muted fw-medium">03:26</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <router-link
                            to="/lessons-preview"
                            class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                          >
                            <i class="flaticon-play"></i>
                            Use ChatGPT to Build AI More Efficiently
                          </router-link>
                          <span class="text-muted fw-medium">00:23</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="show-more-btn d-block w-100 fw-medium text-center mt-15 mt-md-20 ps-15 pe-15 pt-12 pb-12 pt-md-15 pb-md-15 pt-lg-20 pb-lg-20 transition"
              >
                View All Sections
              </button>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xxxl-3">
          <div class="ps-10 ps-xxl-0 pe-10">
            <div class="mb-25 course-details-info bg-gray">
              <img
                src="../../../assets/images/courses/course3.jpg"
                alt="course-image"
              />
              <div class="p-15 p-md-25">
                <div class="mb-15 price d-flex align-items-end">
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
                <span class="d-block text-black fs-md-15 fs-lg-16 mb-8"
                  >This Course Includes:</span
                >
                <ul class="ps-0 list-unstyled mb-0">
                  <li class="fs-md-15 fs-lg-16 text-muted position-relative">
                    <i class="flaticon-book"></i>
                    <span class="text-black">15</span> On demand video classes
                  </li>
                  <li class="fs-md-15 fs-lg-16 text-muted position-relative">
                    <i class="flaticon-book"></i>
                    <span class="text-black">Full</span> Lifetime Access
                  </li>
                  <li class="fs-md-15 fs-lg-16 text-muted position-relative">
                    <i class="flaticon-book"></i>
                    <span class="text-black">37</span> Hrs on demand projects
                  </li>
                  <li class="fs-md-15 fs-lg-16 text-muted position-relative">
                    <i class="flaticon-book"></i>
                    <span class="text-black">Certificate</span> On completion
                  </li>
                </ul>
                <button
                  class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 d-block w-100 mt-12 mt-md-20"
                  type="submit"
                >
                  Buy This Course
                </button>
              </div>
            </div>
            <span
              class="d-block fs-15 fs-md-16 fs-lg-18 fw-bold text-black mb-12 mb-md-15"
              >Related Course</span
            >
            <div
              class="card mb-25 border-0 rounded-0 letter-spacing courses-list-box"
            >
              <div class="card-body">
                <div class="title position-relative mb-8 mb-md-10">
                  <div
                    class="icon bg-primary text-center rounded-circle position-relative"
                  >
                    <img
                      src="../../../assets/images/icon/vue.png"
                      class="position-absolute start-0 end-0 ms-auto me-auto"
                      alt="icon"
                    />
                  </div>
                  <h6 class="mb-0 text-black fw-bold">
                    Fundamental Vue 3 JS Framework Course
                  </h6>
                </div>
                <p class="fs-md-15 fs-lg-16 text-black-emphasis mb-15">
                  Solve your coding problems in this course with mentors
                </p>
                <ul class="list ps-0 mb-0 list-unstyled">
                  <li
                    class="d-inline-block bg-white fs-13 text-muted fw-medium"
                  >
                    <span class="fw-bold text-primary">45</span> Lessons
                  </li>
                  <li
                    class="d-inline-block bg-white fs-13 text-muted fw-medium"
                  >
                    <span class="fw-bold text-primary">71</span> Students
                  </li>
                  <li
                    class="d-inline-block bg-white fs-13 text-muted fw-medium"
                  >
                    <span class="fw-bold text-primary">59</span> Mins
                  </li>
                </ul>
              </div>
              <router-link
                to="/course-details"
                class="link-btn d-block text-decoration-none text-primary fw-medium position-relative"
              >
                <span class="d-inline-block position-relative">
                  View Details
                </span>
                <i class="ph ph-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 col-xxxl-6">
      <div class="card mb-25 border-0 rounded-0 bg-white course-details-card">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div class="mb-12 mb-lg-15">
            <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
              About The Course
            </h5>
          </div>
          <p class="text-paragraph fs-md-15 fs-lg-16 text-paragraph lh-base">
            Combine the power of Data Science, Machine Learning and Deep
            Learning to create powerful AI for Real-World applications!
          </p>
          <p class="text-paragraph fs-md-15 fs-lg-16 text-paragraph lh-base">
            We’re fully committed to making this the most accessible and
            results-driven AI course on the planet. This requires us to be there
            when you need our help. That’s why we’ve put together a team of
            professional Data Scientists to support you in your journey, meaning
            you’ll get a response from us within 48 hours maximum.
          </p>
          <p class="text-paragraph fs-md-15 fs-lg-16 text-paragraph lh-base">
            Learn key AI concepts and intuition training to get you quickly up
            to speed with all things AI.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white course-details-card">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div class="mb-15 mb-lg-20">
            <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
              What You Will Learn
            </h5>
          </div>
          <ul class="what-you-will-learn ps-0 mb-0 list-unstyled">
            <li
              class="text-paragraph fs-md-15 fs-lg-16 fw-medium position-relative"
            >
              <i class="flaticon-check-mark-1"></i>
              Complete beginner to expert AI skill
            </li>
            <li
              class="text-paragraph fs-md-15 fs-lg-16 fw-medium position-relative"
            >
              <i class="flaticon-check-mark-1"></i>
              Using ChatGPT for coding
            </li>
            <li
              class="text-paragraph fs-md-15 fs-lg-16 fw-medium position-relative"
            >
              <i class="flaticon-check-mark-1"></i>
              Real world solution
            </li>
            <li
              class="text-paragraph fs-md-15 fs-lg-16 fw-medium position-relative"
            >
              <i class="flaticon-check-mark-1"></i>
              How to optimize your AI
            </li>
            <li
              class="text-paragraph fs-md-15 fs-lg-16 fw-medium position-relative"
            >
              <i class="flaticon-check-mark-1"></i>
              How to start building AI
            </li>
            <li
              class="text-paragraph fs-md-15 fs-lg-16 fw-medium position-relative"
            >
              <i class="flaticon-check-mark-1"></i>
              How to merge AI with OpenAI Gym
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white course-details-card">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div class="mb-15 mb-lg-20">
            <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
              Who This Course Is For
            </h5>
          </div>
          <ul class="what-you-will-learn ps-0 mb-0 list-unstyled">
            <li
              class="text-paragraph fs-md-15 fs-lg-16 fw-medium position-relative"
            >
              <i class="flaticon-check-mark-1"></i>
              Anyone interested in Artificial Intelligence, Machine Learning or
              Deep Learning
            </li>
            <li
              class="text-paragraph fs-md-15 fs-lg-16 fw-medium position-relative"
            >
              <i class="flaticon-check-mark-1"></i>
              Who have high school math skill
            </li>
            <li
              class="text-paragraph fs-md-15 fs-lg-16 fw-medium position-relative"
            >
              <i class="flaticon-check-mark-1"></i>
              Who have basic Python knowledge
            </li>
          </ul>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
    <div class="col-xxl-8">
      <div class="card mb-25 border-0 rounded-0 bg-white course-details-card">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div class="mb-15 mb-md-20">
            <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
              About The Author
            </h5>
          </div>
          <div class="row align-items-center about-the-author">
            <div class="col-lg-3 col-sm-3">
              <img
                src="../../../assets/images/user/user16.jpg"
                class="rounded-circle"
                alt="author"
              />
            </div>
            <div class="col-lg-9 col-sm-9">
              <span
                class="d-block text-black fs-15 fs-md-16 fs-lg-18 fw-semibold mb-5 mt-20 mt-sm-0"
                >Jonathon Ronan</span
              >
              <span class="d-block text-muted fs-md-15 mb-10"
                >Senior AI Advisor & Cybersecurity Engineer</span
              >
              <div class="reviews d-flex align-items-center mb-10 mb-lg-15">
                <div class="rating lh-1">
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                </div>
                <span class="text-black fw-bold fs-13 ms-5 me-8">4.9</span>
                <span class="text-muted">(21 Instructor Ratings)</span>
              </div>
              <p class="text-paragraph fs-md-15 fs-lg-16 lh-base">
                I'm a Senior AI Advisor, AI & Cybersecurity Engineer, and also
                the founder of Global Pioneers & the Threat Intelligence Group.
                My goal is to help provide my experiences and expertise that
                have been obtained through extensive research, many late nights,
                and cups of coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white course-details-card">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div class="mb-15 mb-md-20 mb-lg-25">
            <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
              Students Feedback
            </h5>
          </div>
          <ul class="students-feedback-list ps-0 mb-0 list-unstyled">
            <li class="position-relative">
              <img
                src="../../../assets/images/user/user2.jpg"
                width="40"
                height="40"
                class="rounded-circle"
                alt="user"
              />
              <span
                class="d-block text-black fs-15 fs-md-16 fs-lg-18 fw-semibold mb-5"
                >Angela Carter</span
              >
              <div class="reviews d-flex align-items-center mb-10 mb-lg-15">
                <div class="rating lh-1">
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                </div>
                <span class="text-black fw-bold fs-13 ms-5 me-8">5.0</span>
                <span class="text-muted">2 days ago</span>
              </div>
              <p class="text-paragraph fs-md-15 fs-lg-16 lh-base">
                A great and deep introduction to reinforcement learning (don't
                get baited by the title which tells not much about the content
                of the course). I particularly liked the way of introducing the
                basic concepts/model and progressively add complexity to
                discover more convoluted models.
              </p>
            </li>
            <li class="position-relative">
              <img
                src="../../../assets/images/user/user7.jpg"
                width="40"
                height="40"
                class="rounded-circle"
                alt="user"
              />
              <span
                class="d-block text-black fs-15 fs-md-16 fs-lg-18 fw-semibold mb-5"
                >Victor James</span
              >
              <div class="reviews d-flex align-items-center mb-10 mb-lg-15">
                <div class="rating lh-1">
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star"></i>
                </div>
                <span class="text-black fw-bold fs-13 ms-5 me-8">4.0</span>
                <span class="text-muted">3 days ago</span>
              </div>
              <p class="text-paragraph fs-md-15 fs-lg-16 lh-base">
                A great and deep introduction to reinforcement learning (don't
                get baited by the title which tells not much about the content
                of the course). I particularly liked the way of introducing the
                basic concepts/model and progressively add complexity to
                discover more convoluted models.
              </p>
            </li>
            <li class="position-relative">
              <img
                src="../../../assets/images/user/user1.jpg"
                width="40"
                height="40"
                class="rounded-circle"
                alt="user"
              />
              <span
                class="d-block text-black fs-15 fs-md-16 fs-lg-18 fw-semibold mb-5"
                >Walter White</span
              >
              <div class="reviews d-flex align-items-center mb-10 mb-lg-15">
                <div class="rating lh-1">
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-2"></i>
                </div>
                <span class="text-black fw-bold fs-13 ms-5 me-8">4.5</span>
                <span class="text-muted">4 days ago</span>
              </div>
              <p class="text-paragraph fs-md-15 fs-lg-16 lh-base">
                A great and deep introduction to reinforcement learning (don't
                get baited by the title which tells not much about the content
                of the course). I particularly liked the way of introducing the
                basic concepts/model and progressively add complexity to
                discover more convoluted models.
              </p>
            </li>
          </ul>
          <button
            type="button"
            class="show-more-btn d-block w-100 fw-medium text-center mt-15 mt-sm-20 mt-md-25 mt-lg-30 ps-15 pe-15 pt-12 pb-12 pt-md-15 pb-md-15 pt-lg-20 pb-lg-20 transition"
          >
            Show All Reviews
          </button>
        </div>
      </div>
    </div>
    <div class="col-xxl-4">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing manage-reviews-box"
      >
        <div class="card-body p-15 p-sm-20 p-md-25">
          <div class="mb-15 mb-md-20">
            <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
              Course Rating
            </h5>
          </div>
          <div
            class="box mb-20 mb-md-25 d-flex align-items-center justify-content-between p-12 p-sm-15 p-md-20"
          >
            <div>
              <span class="d-block text-paragraph fs-md-15 fs-lg-16 mb-1"
                >Average Ratings</span
              >
              <span class="d-block text-paragraph fs-md-15 fs-lg-16"
                >Out Of
                <span class="text-black fw-medium">67</span> Ratings</span
              >
            </div>
            <div class="text-primary fw-black fs-20 fs-md-25 fs-lg-30">
              4.86
            </div>
          </div>
          <div class="manage-rating">
            <div class="row mt-15">
              <div class="col-5 col-sm-4 col-xxxl-3">
                <div class="rating">
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                </div>
                <span class="d-block text-paragraph"
                  ><span class="text-black fw-medium">46</span> Reviews</span
                >
              </div>
              <div class="col-7 col-sm-8 col-xxxl-9">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 65%"></div>
                </div>
              </div>
            </div>
            <div class="row mt-15">
              <div class="col-5 col-sm-4 col-xxxl-3">
                <div class="rating">
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star"></i>
                </div>
                <span class="d-block text-paragraph"
                  ><span class="text-black fw-medium">12</span> Reviews</span
                >
              </div>
              <div class="col-7 col-sm-8 col-xxxl-9">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="35"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 35%"></div>
                </div>
              </div>
            </div>
            <div class="row mt-15">
              <div class="col-5 col-sm-4 col-xxxl-3">
                <div class="rating">
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                </div>
                <span class="d-block text-paragraph"
                  ><span class="text-black fw-medium">09</span> Reviews</span
                >
              </div>
              <div class="col-7 col-sm-8 col-xxxl-9">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 20%"></div>
                </div>
              </div>
            </div>
            <div class="row mt-15">
              <div class="col-5 col-sm-4 col-xxxl-3">
                <div class="rating">
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                </div>
                <span class="d-block text-paragraph"
                  ><span class="text-black fw-medium">0</span> Reviews</span
                >
              </div>
              <div class="col-7 col-sm-8 col-xxxl-9">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 0%"></div>
                </div>
              </div>
            </div>
            <div class="row mt-15">
              <div class="col-5 col-sm-4 col-xxxl-3">
                <div class="rating">
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                </div>
                <span class="d-block text-paragraph"
                  ><span class="text-black fw-medium">0</span> Reviews</span
                >
              </div>
              <div class="col-7 col-sm-8 col-xxxl-9">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 0%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseDetails",
};
</script>