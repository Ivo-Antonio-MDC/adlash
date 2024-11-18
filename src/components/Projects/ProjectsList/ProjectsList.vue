<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div
      class="card-head box-shadow bg-white d-lg-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
    >
      <div class="d-sm-flex align-items-center">
        <form class="search-box position-relative">
          <input
            type="text"
            class="form-control shadow-none text-black rounded-0 border-0"
            placeholder="Search project"
          />
          <button
            type="submit"
            class="bg-transparent text-primary transition p-0 border-0"
          >
            <i class="flaticon-search-interface-symbol"></i>
          </button>
        </form>
      </div>
      <div class="d-sm-flex align-items-center mt-10 mt-lg-0">
        <router-link
          to="/create-new-project"
          class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block d-inline-block text-decoration-none"
        >
          Add New Project
          <i class="flaticon-plus position-relative ms-5 fs-12"></i>
        </router-link>
        <select
          class="project-select form-select shadow-none fw-semibold rounded-1 mt-10 mt-sm-0 ms-sm-10"
        >
          <option selected>All (32)</option>
          <option value="1">In Process</option>
          <option value="2">On Hold</option>
          <option value="3">Completed</option>
        </select>
        <div class="dropdown mt-10 mt-sm-0 ms-sm-10">
          <button
            class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
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
              >
                <i class="flaticon-view lh-1 me-8 position-relative top-1"></i>
                View
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i class="flaticon-pen lh-1 me-8 position-relative top-1"></i>
                Edit
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i
                  class="flaticon-delete lh-1 me-8 position-relative top-1"
                ></i>
                Delete
              </a>
            </li>
          </ul>
        </div>
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
                PROJECT
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                TEAM MEMBERS
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                BUDGET
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                DUE DATE
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
                STATUS
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                CHART
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/projects/project-mini1.jpg"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <router-link
                    class="d-block text-decoration-none text-black"
                    to="/project-details"
                  >
                    Adlash Dashboard Design
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user1.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user2.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div
                    class="rounded-circle bg-primary-emphasis text-center d-flex align-items-center justify-content-center text-white fs-16 fw-semibold"
                  >
                    P
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                $18,500
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                5th Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 80%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge text-outline-primary fs-13">In Process</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img
                  src="../../../assets/images/chart/chart1.png"
                  alt="chart"
                />
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
              <th
                class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/projects/project-mini2.jpg"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <router-link
                    class="d-block text-decoration-none text-black"
                    to="/project-details"
                  >
                    Banko CRM Dashboard Design
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user4.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div
                    class="rounded-circle bg-primary-emphasis text-center d-flex align-items-center justify-content-center text-white fs-16 fw-semibold"
                  >
                    T
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                $50,00
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                7th Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
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
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge text-outline-danger fs-13">On Hold</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img
                  src="../../../assets/images/chart/chart2.png"
                  alt="chart"
                />
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
              <th
                class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/projects/project-mini3.jpg"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <router-link
                    class="d-block text-decoration-none text-black"
                    to="/project-details"
                  >
                    Adlash Agency Design
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user7.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user1.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user8.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user3.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                $108,500
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                10th Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 100%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge text-outline-success fs-13">Completed</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img
                  src="../../../assets/images/chart/chart3.png"
                  alt="chart"
                />
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
              <th
                class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/projects/project-mini4.jpg"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <router-link
                    class="d-block text-decoration-none text-black"
                    to="/project-details"
                  >
                    Adlash Dashboard Design
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user1.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user2.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                $8,500
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                15th Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 40%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge text-outline-primary fs-13">In Process</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img
                  src="../../../assets/images/chart/chart4.png"
                  alt="chart"
                />
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
              <th
                class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/projects/project-mini5.jpg"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <router-link
                    class="d-block text-decoration-none text-black"
                    to="/project-details"
                  >
                    Adlash App Design
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user9.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                $1,500
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                20th Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 55%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge text-outline-success fs-13">Completed</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img
                  src="../../../assets/images/chart/chart5.png"
                  alt="chart"
                />
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
              <th
                class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/projects/project-mini1.jpg"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <router-link
                    class="d-block text-decoration-none text-black"
                    to="/project-details"
                  >
                    Adlash Dashboard Design
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user1.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user2.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div
                    class="rounded-circle bg-primary-emphasis text-center d-flex align-items-center justify-content-center text-white fs-16 fw-semibold"
                  >
                    P
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                $18,500
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                5th Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 80%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge text-outline-primary fs-13">In Process</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img
                  src="../../../assets/images/chart/chart1.png"
                  alt="chart"
                />
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
              <th
                class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/projects/project-mini2.jpg"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <router-link
                    class="d-block text-decoration-none text-black"
                    to="/project-details"
                  >
                    Banko CRM Dashboard Design
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user4.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div
                    class="rounded-circle bg-primary-emphasis text-center d-flex align-items-center justify-content-center text-white fs-16 fw-semibold"
                  >
                    T
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                $50,00
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                7th Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
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
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge text-outline-danger fs-13">On Hold</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img
                  src="../../../assets/images/chart/chart2.png"
                  alt="chart"
                />
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
              <th
                class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/projects/project-mini3.jpg"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <router-link
                    class="d-block text-decoration-none text-black"
                    to="/project-details"
                  >
                    Adlash Agency Design
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user7.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user1.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user8.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user3.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                $108,500
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                10th Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 100%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge text-outline-success fs-13">Completed</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img
                  src="../../../assets/images/chart/chart3.png"
                  alt="chart"
                />
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
              <th
                class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/projects/project-mini4.jpg"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <router-link
                    class="d-block text-decoration-none text-black"
                    to="/project-details"
                  >
                    Adlash Dashboard Design
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user1.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user2.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                $8,500
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                15th Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 40%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge text-outline-primary fs-13">In Process</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img
                  src="../../../assets/images/chart/chart4.png"
                  alt="chart"
                />
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
              <th
                class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../../../assets/images/projects/project-mini5.jpg"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <router-link
                    class="d-block text-decoration-none text-black"
                    to="/project-details"
                  >
                    Adlash App Design
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user9.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                $1,500
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                20th Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 55%"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge text-outline-success fs-13">Completed</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img
                  src="../../../assets/images/chart/chart5.png"
                  alt="chart"
                />
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
        class="pagination-area d-md-flex mt-15 mt-md-25 mb-0 justify-content-between align-items-center"
      >
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">11</span> out of
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

<script>
export default {
  name: "ProjectsList",
};
</script>