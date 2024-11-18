<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white letter-spacing courses-list-card"
  >
    <div
      class="card-head box-shadow bg-white d-lg-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
    >
      <div class="d-sm-flex align-items-center">
        <div class="card-buttons">
          <router-link
            to="/courses-list"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 active"
          >
            All Courses
          </router-link>
          <router-link
            to="/courses-list"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Paid
          </router-link>
          <router-link
            to="/courses-list"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Free
          </router-link>
          <router-link
            to="/courses-list"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Top Rated
          </router-link>
          <router-link
            to="/courses-list"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Most Popular
          </router-link>
        </div>
      </div>
      <div class="d-flex align-items-center mt-12 mt-lg-0">
        <form class="search-box position-relative me-15">
          <input
            type="text"
            class="form-control shadow-none text-black rounded-0 border-0"
            placeholder="Search customer"
          />
          <button
            type="submit"
            class="bg-transparent text-primary transition p-0 border-0"
          >
            <i class="flaticon-search-interface-symbol"></i>
          </button>
        </form>
        <button
          class="dot-btn lh-1 position-relative top-3 bg-transparent border-0 shadow-none p-0 transition d-inline-block"
          type="button"
        >
          <i class="flaticon-dots"></i>
        </button>
      </div>
    </div>
    <div class="card-body p-15 p-sm-20 p-md-25">
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
              >
                COURSE TITLE
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                PRICE
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                PROGRESS
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                MENTORS
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                ENROLLED
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                STARTING DATE
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="shadow-none fw-medium product-title ps-0">
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/courses/course-mini9.jpg"
                    width="50"
                    alt="course-image"
                  />
                  <div class="ms-15">
                    <span class="mb-8 d-block">
                      <router-link
                        to="/course-details"
                        class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                      >
                        Advanced Javascript Development
                      </router-link>
                    </span>
                    <span class="d-flex align-items-center text-muted">
                      <i
                        class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                      ></i>
                      <span class="fw-bold ms-5 me-5">34</span>
                      Classes
                    </span>
                  </div>
                </div>
              </th>
              <td class="shadow-none lh-1 fs-lg-16 fw-bold text-primary">
                $100
              </td>
              <td class="shadow-none lh-1 fw-normal text-black-emphasis">
                <span class="d-block fs-13 mb-5">75%</span>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 75%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                Jonathon Ronan
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                213
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                13 Mar, 2023
              </td>
              <td
                class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
              >
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-view lh-1 me-8 position-relative top-1"
                        ></i>
                        View</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-pen lh-1 me-8 position-relative top-1"
                        ></i>
                        Edit</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-delete lh-1 me-8 position-relative top-1"
                        ></i>
                        Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th class="shadow-none fw-medium product-title ps-0">
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/courses/course-mini10.jpg"
                    width="50"
                    alt="course-image"
                  />
                  <div class="ms-15">
                    <span class="mb-8 d-block">
                      <router-link
                        to="/course-details"
                        class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                      >
                        Portrait Fundamentals For Advance
                      </router-link>
                    </span>
                    <span class="d-flex align-items-center text-muted">
                      <i
                        class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                      ></i>
                      <span class="fw-bold ms-5 me-5">51</span>
                      Classes
                    </span>
                  </div>
                </div>
              </th>
              <td class="shadow-none lh-1 fs-lg-16 fw-bold text-primary">
                $99
              </td>
              <td class="shadow-none lh-1 fw-normal text-black-emphasis">
                <span class="d-block fs-13 mb-5">10%</span>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 10%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                Victor James
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                115
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                2 Feb, 2023
              </td>
              <td
                class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
              >
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-view lh-1 me-8 position-relative top-1"
                        ></i>
                        View</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-pen lh-1 me-8 position-relative top-1"
                        ></i>
                        Edit</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-delete lh-1 me-8 position-relative top-1"
                        ></i>
                        Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th class="shadow-none fw-medium product-title ps-0">
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/courses/course-mini11.jpg"
                    width="50"
                    alt="course-image"
                  />
                  <div class="ms-15">
                    <span class="mb-8 d-block">
                      <router-link
                        to="/course-details"
                        class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                      >
                        Figma Fundamental Course
                      </router-link>
                    </span>
                    <span class="d-flex align-items-center text-muted">
                      <i
                        class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                      ></i>
                      <span class="fw-bold ms-5 me-5">22</span>
                      Classes
                    </span>
                  </div>
                </div>
              </th>
              <td class="shadow-none lh-1 fs-lg-16 fw-bold text-primary">
                $56
              </td>
              <td class="shadow-none lh-1 fw-normal text-black-emphasis">
                <span class="d-block fs-13 mb-5">25%</span>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 25%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                Angela Carter
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">73</td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                1 Mar, 2023
              </td>
              <td
                class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
              >
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-view lh-1 me-8 position-relative top-1"
                        ></i>
                        View</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-pen lh-1 me-8 position-relative top-1"
                        ></i>
                        Edit</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-delete lh-1 me-8 position-relative top-1"
                        ></i>
                        Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th class="shadow-none fw-medium product-title ps-0">
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/courses/course-mini12.jpg"
                    width="50"
                    alt="course-image"
                  />
                  <div class="ms-15">
                    <span class="mb-8 d-block">
                      <router-link
                        to="/course-details"
                        class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                      >
                        Basic Angular 15 Development
                      </router-link>
                    </span>
                    <span class="d-flex align-items-center text-muted">
                      <i
                        class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                      ></i>
                      <span class="fw-bold ms-5 me-5">10</span>
                      Classes
                    </span>
                  </div>
                </div>
              </th>
              <td class="shadow-none lh-1 fs-lg-16 fw-bold text-primary">
                $70
              </td>
              <td class="shadow-none lh-1 fw-normal text-black-emphasis">
                <span class="d-block fs-13 mb-5">5%</span>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="5"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 5%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                Walter White
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">25</td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                7 Mar, 2023
              </td>
              <td
                class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
              >
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-view lh-1 me-8 position-relative top-1"
                        ></i>
                        View</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-pen lh-1 me-8 position-relative top-1"
                        ></i>
                        Edit</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-delete lh-1 me-8 position-relative top-1"
                        ></i>
                        Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th class="shadow-none fw-medium product-title ps-0">
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/courses/course-mini13.jpg"
                    width="50"
                    alt="course-image"
                  />
                  <div class="ms-15">
                    <span class="mb-8 d-block">
                      <router-link
                        to="/course-details"
                        class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                      >
                        Portrait Drawing Fundamentals For Beginners
                      </router-link>
                    </span>
                    <span class="d-flex align-items-center text-muted">
                      <i
                        class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                      ></i>
                      <span class="fw-bold ms-5 me-5">56</span>
                      Classes
                    </span>
                  </div>
                </div>
              </th>
              <td class="shadow-none lh-1 fs-lg-16 fw-bold text-primary">
                $123
              </td>
              <td class="shadow-none lh-1 fw-normal text-black-emphasis">
                <span class="d-block fs-13 mb-5">20%</span>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 20%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                Victor James
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">53</td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                11 Mar, 2023
              </td>
              <td
                class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
              >
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-view lh-1 me-8 position-relative top-1"
                        ></i>
                        View</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-pen lh-1 me-8 position-relative top-1"
                        ></i>
                        Edit</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-delete lh-1 me-8 position-relative top-1"
                        ></i>
                        Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th class="shadow-none fw-medium product-title ps-0">
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/courses/course-mini14.jpg"
                    width="50"
                    alt="course-image"
                  />
                  <div class="ms-15">
                    <span class="mb-8 d-block">
                      <router-link
                        to="/course-details"
                        class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                      >
                        Figma Fundamental Course
                      </router-link>
                    </span>
                    <span class="d-flex align-items-center text-muted">
                      <i
                        class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                      ></i>
                      <span class="fw-bold ms-5 me-5">15</span>
                      Classes
                    </span>
                  </div>
                </div>
              </th>
              <td class="shadow-none lh-1 fs-lg-16 fw-bold text-primary">
                $199
              </td>
              <td class="shadow-none lh-1 fw-normal text-black-emphasis">
                <span class="d-block fs-13 mb-5">75%</span>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 75%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                Skyler Mandy
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">14</td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                14 Mar, 2023
              </td>
              <td
                class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
              >
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-view lh-1 me-8 position-relative top-1"
                        ></i>
                        View</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-pen lh-1 me-8 position-relative top-1"
                        ></i>
                        Edit</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-delete lh-1 me-8 position-relative top-1"
                        ></i>
                        Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th class="shadow-none fw-medium product-title ps-0">
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/courses/course-mini15.jpg"
                    width="50"
                    alt="course-image"
                  />
                  <div class="ms-15">
                    <span class="mb-8 d-block">
                      <router-link
                        to="/course-details"
                        class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                      >
                        Advanced HTML & CSS Development
                      </router-link>
                    </span>
                    <span class="d-flex align-items-center text-muted">
                      <i
                        class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                      ></i>
                      <span class="fw-bold ms-5 me-5">21</span>
                      Classes
                    </span>
                  </div>
                </div>
              </th>
              <td class="shadow-none lh-1 fs-lg-16 fw-bold text-primary">
                $200
              </td>
              <td class="shadow-none lh-1 fw-normal text-black-emphasis">
                <span class="d-block fs-13 mb-5">0%</span>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 0%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                Walter White
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                124
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                27 Mar, 2023
              </td>
              <td
                class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
              >
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-view lh-1 me-8 position-relative top-1"
                        ></i>
                        View</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-pen lh-1 me-8 position-relative top-1"
                        ></i>
                        Edit</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                        ><i
                          class="flaticon-delete lh-1 me-8 position-relative top-1"
                        ></i>
                        Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="pagination-area d-md-flex mt-15 mt-sm-20 mt-md-25 justify-content-between align-items-center"
      >
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">07</span> out of
          <span class="fw-bold">13</span> results
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

<script>
export default {
  name: "CoursesList",
};
</script>