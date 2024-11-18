<template>
  <div class="row">
    <div class="col-lg-5 col-xl-4">
      <LeadsInformation />
    </div>
    <div class="col-lg-7 col-xl-8">
      <div class="leads-details-tabs">
        <ul class="nav nav-tabs border-0 mb-25" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fs-md-15 fs-lg-16 fw-medium border-0 rounded-0 d-block text-center w-100 active"
              id="tasks-tab"
              data-bs-toggle="tab"
              data-bs-target="#tasks-tab-pane"
              type="button"
              role="tab"
              aria-controls="tasks-tab-pane"
              aria-selected="true"
            >
              Tasks
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fs-md-15 fs-lg-16 fw-medium border-0 rounded-0 d-block text-center w-100"
              id="deals-tab"
              data-bs-toggle="tab"
              data-bs-target="#deals-tab-pane"
              type="button"
              role="tab"
              aria-controls="deals-tab-pane"
              aria-selected="false"
            >
              Deals
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fs-md-15 fs-lg-16 fw-medium border-0 rounded-0 d-block text-center w-100"
              id="emails-tab"
              data-bs-toggle="tab"
              data-bs-target="#emails-tab-pane"
              type="button"
              role="tab"
              aria-controls="emails-tab-pane"
              aria-selected="false"
            >
              Emails
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fs-md-15 fs-lg-16 fw-medium border-0 rounded-0 d-block text-center w-100"
              id="attachments-tab"
              data-bs-toggle="tab"
              data-bs-target="#attachments-tab-pane"
              type="button"
              role="tab"
              aria-controls="attachments-tab-pane"
              aria-selected="false"
            >
              Attachments
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="tasks-tab-pane"
            role="tabpanel"
            tabindex="0"
          >
            <div
              class="card mb-25 border-0 rounded-0 bg-white to-do-list-box letter-spacing"
            >
              <div
                class="card-head bg-white d-md-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <h5 class="card-title fw-bold mb-0">Tasks</h5>
                <div class="d-flex align-items-center mt-10 mt-md-0">
                  <form class="search-box position-relative me-15">
                    <input
                      type="text"
                      class="form-control shadow-none text-black rounded-0 border-0"
                      placeholder="Search task"
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
              <div
                class="card-body pt-0 pb-15 pb-sm-20 pb-md-25 pb-lg-30 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <ul class="to-do-list ps-0 list-unstyled mb-0">
                  <li
                    class="to-do-list-item d-sm-flex align-items-center justify-content-between"
                  >
                    <div
                      class="form-check form-check-primary mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
                    >
                      <input
                        class="form-check-input shadow-none"
                        type="checkbox"
                        id="task1"
                      />
                      <label class="form-check-label" for="task1">
                        Design a Facebook Ad
                      </label>
                      <span class="fs-12 text-muted fw-normal ms-5">
                        19 Mar, 2023
                      </span>
                    </div>
                    <div
                      class="action-buttons mt-10 mt-sm-0 d-flex align-items-center"
                    >
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1"
                      >
                        <i class="ph-duotone ph-pen"></i>
                      </button>
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1 ms-10 ms-md-20"
                      >
                        <i class="ph-duotone ph-trash"></i>
                      </button>
                    </div>
                  </li>
                  <li
                    class="to-do-list-item d-sm-flex align-items-center justify-content-between"
                  >
                    <div
                      class="form-check form-check-primary mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
                    >
                      <input
                        class="form-check-input shadow-none"
                        type="checkbox"
                        id="task2"
                      />
                      <label class="form-check-label" for="task2">
                        Analyze Dashboard Data
                      </label>
                      <span class="fs-12 text-muted fw-normal ms-5"
                        >18 Mar, 2023</span
                      >
                    </div>
                    <div
                      class="action-buttons mt-10 mt-sm-0 d-flex align-items-center"
                    >
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1"
                      >
                        <i class="ph-duotone ph-pen"></i>
                      </button>
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1 ms-10 ms-md-20"
                      >
                        <i class="ph-duotone ph-trash"></i>
                      </button>
                    </div>
                  </li>
                  <li
                    class="to-do-list-item d-sm-flex align-items-center justify-content-between"
                  >
                    <div
                      class="form-check form-check-primary mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
                    >
                      <input
                        class="form-check-input shadow-none"
                        type="checkbox"
                        id="task3"
                      />
                      <label class="form-check-label" for="task3">
                        Market And Consumer Insights
                      </label>
                      <span class="fs-12 text-muted fw-normal ms-5"
                        >17 Mar, 2023</span
                      >
                    </div>
                    <div
                      class="action-buttons mt-10 mt-sm-0 d-flex align-items-center"
                    >
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1"
                      >
                        <i class="ph-duotone ph-pen"></i>
                      </button>
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1 ms-10 ms-md-20"
                      >
                        <i class="ph-duotone ph-trash"></i>
                      </button>
                    </div>
                  </li>
                  <li
                    class="to-do-list-item d-sm-flex align-items-center justify-content-between"
                  >
                    <div
                      class="form-check form-check-primary mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
                    >
                      <input
                        class="form-check-input shadow-none"
                        type="checkbox"
                        id="task4"
                      />
                      <label class="form-check-label" for="task4">
                        Review Dashboard Design
                      </label>
                      <span class="fs-12 text-muted fw-normal ms-5"
                        >16 Mar, 2023</span
                      >
                    </div>
                    <div
                      class="action-buttons mt-10 mt-sm-0 d-flex align-items-center"
                    >
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1"
                      >
                        <i class="ph-duotone ph-pen"></i>
                      </button>
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1 ms-10 ms-md-20"
                      >
                        <i class="ph-duotone ph-trash"></i>
                      </button>
                    </div>
                  </li>
                  <li
                    class="to-do-list-item d-sm-flex align-items-center justify-content-between"
                  >
                    <div
                      class="form-check form-check-primary mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
                    >
                      <input
                        class="form-check-input shadow-none"
                        type="checkbox"
                        id="task5"
                      />
                      <label class="form-check-label" for="task5">
                        Stockholder Meeting
                      </label>
                      <span class="fs-12 text-muted fw-normal ms-5"
                        >15 Mar, 2023</span
                      >
                    </div>
                    <div
                      class="action-buttons mt-10 mt-sm-0 d-flex align-items-center"
                    >
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1"
                      >
                        <i class="ph-duotone ph-pen"></i>
                      </button>
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1 ms-10 ms-md-20"
                      >
                        <i class="ph-duotone ph-trash"></i>
                      </button>
                    </div>
                  </li>
                  <li
                    class="to-do-list-item d-sm-flex align-items-center justify-content-between"
                  >
                    <div
                      class="form-check form-check-primary mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
                    >
                      <input
                        class="form-check-input shadow-none"
                        type="checkbox"
                        id="task6"
                      />
                      <label class="form-check-label" for="task6">
                        Taking Interview
                      </label>
                      <span class="fs-12 text-muted fw-normal ms-5"
                        >14 Mar, 2023</span
                      >
                    </div>
                    <div
                      class="action-buttons mt-10 mt-sm-0 d-flex align-items-center"
                    >
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1"
                      >
                        <i class="ph-duotone ph-pen"></i>
                      </button>
                      <button
                        class="bg-transparent p-0 border-0 text-black transition lh-1 ms-10 ms-md-20"
                      >
                        <i class="ph-duotone ph-trash"></i>
                      </button>
                    </div>
                  </li>
                </ul>
                <a
                  href="#"
                  class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block mt-10 mt-sm-25"
                  data-bs-toggle="modal"
                  data-bs-target="#createNewTaskModal"
                  >Add A New Task</a
                >
              </div>
            </div>
            <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
              <div
                class="card-head bg-white d-md-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <h5 class="card-title fw-bold mb-0">Deals</h5>
                <div class="d-flex align-items-center mt-10 mt-md-0">
                  <form class="search-box position-relative me-15">
                    <input
                      type="text"
                      class="form-control shadow-none text-black rounded-0 border-0"
                      placeholder="Search task"
                    />
                    <button
                      type="submit"
                      class="bg-transparent text-primary transition p-0 border-0"
                    >
                      <i class="flaticon-search-interface-symbol"></i>
                    </button>
                  </form>
                  <button
                    class="dot-btn lh-1 position-relative top-3 bg-transparent border-0 shadow-none p-0 transition d-inline-block mt-10 mt-sm-0"
                    type="button"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                </div>
              </div>
              <div
                class="card-body pt-0 pb-15 pb-sm-20 pb-md-25 pb-lg-30 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <div class="table-responsive">
                  <table class="table text-nowrap align-middle mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
                        >
                          Deal Name
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Amout
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Probability
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Closing Date
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            J. Ronan
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 6,400,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-success"
                            >Won Deal</span
                          >
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          ronanjohnny@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          13 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            J. Pinkman
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 100,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-info">New Deal</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          pinky321@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          12 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            A. Carter
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 1,840,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-danger"
                            >Cancelled</span
                          >
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          ronanjohnny@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          13 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            V. Loper
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 6,400,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-success"
                            >Won Deal</span
                          >
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          lopervic@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          13 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            W. White
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 100,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-info">New Deal</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          whitespace@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          10 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            T. Skyler
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 400,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-danger"
                            >Cancelled</span
                          >
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          ronanjohnny@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          13 Apr, 2023
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
                  class="d-md-flex mt-15 mt-md-25 mb-0 justify-content-between align-items-center"
                >
                  <a
                    href="#"
                    class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block"
                    data-bs-toggle="modal"
                    data-bs-target="#createNewDealModal"
                    >Add A New Deal</a
                  >
                  <div
                    class="pagination-area d-md-flex align-items-center mt-10 mt-md-0"
                  >
                    <p class="mb-0 text-paragraph">
                      Showing <span class="fw-bold">11</span> out of
                      <span class="fw-bold">134</span> results
                    </p>
                    <nav class="mt-12 mt-md-0 ms-md-20">
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
            </div>
            <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
              <div
                class="card-head bg-white d-md-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <h5 class="card-title fw-bold mb-0">Emails</h5>
                <div class="d-flex align-items-center mt-10 mt-md-0">
                  <form class="search-box position-relative me-15">
                    <input
                      type="text"
                      class="form-control shadow-none text-black rounded-0 border-0"
                      placeholder="Search email"
                    />
                    <button
                      type="submit"
                      class="bg-transparent text-primary transition p-0 border-0"
                    >
                      <i class="flaticon-search-interface-symbol"></i>
                    </button>
                  </form>
                  <button
                    class="dot-btn lh-1 position-relative top-3 bg-transparent border-0 shadow-none p-0 transition d-inline-block mt-10 mt-sm-0"
                    type="button"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                </div>
              </div>
              <div
                class="card-body pt-0 pb-15 pb-sm-20 pb-md-25 pb-lg-30 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <div class="table-responsive">
                  <table class="table text-nowrap align-middle mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
                        >
                          Subject
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Sent By
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Date
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
                        >
                          Design a Facebook Ad
                          <span class="d-block fs-13 mt-10 text-muted fw-normal"
                            >ronanjohnny@gmail.com</span
                          >
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          J. Ronan
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-warning">Bounce</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          13 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
                        >
                          Analyze Dashboard Data
                          <span class="d-block fs-13 mt-10 text-muted fw-normal"
                            >ronanjohnny@gmail.com</span
                          >
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          W. White
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-info">Draft</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          12 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
                        >
                          Review Dashboard Design
                          <span class="d-block fs-13 mt-10 text-muted fw-normal"
                            >ronanjohnny@gmail.com</span
                          >
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          V. Loper
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-danger">Spam</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          11 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
                        >
                          Taking Interview
                          <span class="d-block fs-13 mt-10 text-muted fw-normal"
                            >ronanjohnny@gmail.com</span
                          >
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          A. Carter
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-success">Sent</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          10 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
                        >
                          Stockholder Meeting
                          <span class="d-block fs-13 mt-10 text-muted fw-normal"
                            >ronanjohnny@gmail.com</span
                          >
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          J. Pinkman
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-primary"
                            >Delivered</span
                          >
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          09 Apr, 2023
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
              </div>
            </div>
            <div class="card mb-25 border-0 rounded-0 bg-white attachments-box">
              <div
                class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing"
              >
                <div
                  class="mb-15 mb-md-20 mb-lg-25 d-sm-flex align-items-center justify-content-between"
                >
                  <h5 class="card-title fw-bold mb-0">Attachments</h5>
                </div>
                <ul class="list ps-0 mb-0 list-unstyled">
                  <li>
                    <span class="fw-medium d-block fs-md-15 fs-lg-16">
                      <i
                        class="flaticon-image lh-1 position-relative text-primary top-2 me-5"
                      ></i>
                      Adlash_1.png
                    </span>
                    <div class="d-flex align-items-center text-muted mt-5">
                      <span class="d-block">555kb</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">J. Ronan</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">13 Apr, 2023</span>
                    </div>
                    <img
                      src="../../../assets/images/admin.jpg"
                      alt="admin"
                      width="100"
                      class="mt-10"
                    />
                  </li>
                  <li>
                    <span class="fw-medium d-block fs-md-15 fs-lg-16">
                      <i
                        class="flaticon-image lh-1 position-relative text-primary top-2 me-5"
                      ></i>
                      Adlash_2.png
                    </span>
                    <div class="d-flex align-items-center text-muted mt-5">
                      <span class="d-block">1MB</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">J. Pinkman</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">12 Apr, 2023</span>
                    </div>
                  </li>
                  <li>
                    <span class="fw-medium d-block fs-md-15 fs-lg-16">
                      <i
                        class="flaticon-image lh-1 position-relative text-primary top-2 me-5"
                      ></i>
                      Adlash_3.png
                    </span>
                    <div class="d-flex align-items-center text-muted mt-5">
                      <span class="d-block">472kb</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">A. Carter</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">11 Apr, 2023</span>
                    </div>
                  </li>
                  <li>
                    <span class="fw-medium d-block fs-md-15 fs-lg-16">
                      <i
                        class="flaticon-document lh-1 position-relative text-primary top-2 me-5"
                      ></i>
                      Adlash_4.txt
                    </span>
                    <div class="d-flex align-items-center text-muted mt-5">
                      <span class="d-block">433kb</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">V. Loper</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">10 Apr, 2023</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="deals-tab-pane"
            role="tabpanel"
            tabindex="0"
          >
            <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
              <div
                class="card-head bg-white d-md-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <h5 class="card-title fw-bold mb-0">Deals</h5>
                <div class="d-flex align-items-center mt-10 mt-md-0">
                  <form class="search-box position-relative me-15">
                    <input
                      type="text"
                      class="form-control shadow-none text-black rounded-0 border-0"
                      placeholder="Search task"
                    />
                    <button
                      type="submit"
                      class="bg-transparent text-primary transition p-0 border-0"
                    >
                      <i class="flaticon-search-interface-symbol"></i>
                    </button>
                  </form>
                  <button
                    class="dot-btn lh-1 position-relative top-3 bg-transparent border-0 shadow-none p-0 transition d-inline-block mt-10 mt-sm-0"
                    type="button"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                </div>
              </div>
              <div
                class="card-body pt-0 pb-15 pb-sm-20 pb-md-25 pb-lg-30 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <div class="table-responsive">
                  <table class="table text-nowrap align-middle mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
                        >
                          Deal Name
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Amout
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Probability
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Closing Date
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            J. Ronan
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 6,400,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-success"
                            >Won Deal</span
                          >
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          ronanjohnny@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          13 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            J. Pinkman
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 100,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-info">New Deal</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          pinky321@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          12 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            A. Carter
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 1,840,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-danger"
                            >Cancelled</span
                          >
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          ronanjohnny@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          13 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            V. Loper
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 6,400,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-success"
                            >Won Deal</span
                          >
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          lopervic@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          13 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            W. White
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 100,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-info">New Deal</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          whitespace@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          10 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                        >
                          <div
                            class="form-check d-flex align-items-center mb-0"
                          >
                            <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                            />
                            T. Skyler
                          </div>
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          $ 400,000.00
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-danger"
                            >Cancelled</span
                          >
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          ronanjohnny@gmail.com
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          13 Apr, 2023
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
                  class="d-md-flex mt-15 mt-md-25 mb-0 justify-content-between align-items-center"
                >
                  <a
                    href="#"
                    class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block"
                    data-bs-toggle="modal"
                    data-bs-target="#createNewDealModal"
                    >Add A New Deal</a
                  >
                  <div
                    class="pagination-area d-md-flex align-items-center mt-10 mt-md-0"
                  >
                    <p class="mb-0 text-paragraph">
                      Showing <span class="fw-bold">11</span> out of
                      <span class="fw-bold">134</span> results
                    </p>
                    <nav class="mt-12 mt-md-0 ms-md-20">
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
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="emails-tab-pane"
            role="tabpanel"
            tabindex="0"
          >
            <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
              <div
                class="card-head bg-white d-md-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <h5 class="card-title fw-bold mb-0">Emails</h5>
                <div class="d-flex align-items-center mt-10 mt-md-0">
                  <form class="search-box position-relative me-15">
                    <input
                      type="text"
                      class="form-control shadow-none text-black rounded-0 border-0"
                      placeholder="Search email"
                    />
                    <button
                      type="submit"
                      class="bg-transparent text-primary transition p-0 border-0"
                    >
                      <i class="flaticon-search-interface-symbol"></i>
                    </button>
                  </form>
                  <button
                    class="dot-btn lh-1 position-relative top-3 bg-transparent border-0 shadow-none p-0 transition d-inline-block mt-10 mt-sm-0"
                    type="button"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                </div>
              </div>
              <div
                class="card-body pt-0 pb-15 pb-sm-20 pb-md-25 pb-lg-30 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <div class="table-responsive">
                  <table class="table text-nowrap align-middle mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
                        >
                          Subject
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Sent By
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                        >
                          Date
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
                        >
                          Design a Facebook Ad
                          <span class="d-block fs-13 mt-10 text-muted fw-normal"
                            >ronanjohnny@gmail.com</span
                          >
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          J. Ronan
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-warning">Bounce</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          13 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
                        >
                          Analyze Dashboard Data
                          <span class="d-block fs-13 mt-10 text-muted fw-normal"
                            >ronanjohnny@gmail.com</span
                          >
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          W. White
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-info">Draft</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          12 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
                        >
                          Review Dashboard Design
                          <span class="d-block fs-13 mt-10 text-muted fw-normal"
                            >ronanjohnny@gmail.com</span
                          >
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          V. Loper
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-danger">Spam</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          11 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
                        >
                          Taking Interview
                          <span class="d-block fs-13 mt-10 text-muted fw-normal"
                            >ronanjohnny@gmail.com</span
                          >
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          A. Carter
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-success">Sent</span>
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          10 Apr, 2023
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
                          class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
                        >
                          Stockholder Meeting
                          <span class="d-block fs-13 mt-10 text-muted fw-normal"
                            >ronanjohnny@gmail.com</span
                          >
                        </th>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          J. Pinkman
                        </td>
                        <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-primary"
                            >Delivered</span
                          >
                        </td>
                        <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                        >
                          09 Apr, 2023
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
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="attachments-tab-pane"
            role="tabpanel"
            tabindex="0"
          >
            <div class="card mb-25 border-0 rounded-0 bg-white attachments-box">
              <div
                class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing"
              >
                <div
                  class="mb-15 mb-md-20 mb-lg-25 d-sm-flex align-items-center justify-content-between"
                >
                  <h5 class="card-title fw-bold mb-0">Attachments</h5>
                </div>
                <ul class="list ps-0 mb-0 list-unstyled">
                  <li>
                    <span class="fw-medium d-block fs-md-15 fs-lg-16">
                      <i
                        class="flaticon-image lh-1 position-relative text-primary top-2 me-5"
                      ></i>
                      Adlash_1.png
                    </span>
                    <div class="d-flex align-items-center text-muted mt-5">
                      <span class="d-block">555kb</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">J. Ronan</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">13 Apr, 2023</span>
                    </div>
                    <img
                      src="../../../assets/images/admin.jpg"
                      alt="admin"
                      width="100"
                      class="mt-10"
                    />
                  </li>
                  <li>
                    <span class="fw-medium d-block fs-md-15 fs-lg-16">
                      <i
                        class="flaticon-image lh-1 position-relative text-primary top-2 me-5"
                      ></i>
                      Adlash_2.png
                    </span>
                    <div class="d-flex align-items-center text-muted mt-5">
                      <span class="d-block">1MB</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">J. Pinkman</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">12 Apr, 2023</span>
                    </div>
                  </li>
                  <li>
                    <span class="fw-medium d-block fs-md-15 fs-lg-16">
                      <i
                        class="flaticon-image lh-1 position-relative text-primary top-2 me-5"
                      ></i>
                      Adlash_3.png
                    </span>
                    <div class="d-flex align-items-center text-muted mt-5">
                      <span class="d-block">472kb</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">A. Carter</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">11 Apr, 2023</span>
                    </div>
                  </li>
                  <li>
                    <span class="fw-medium d-block fs-md-15 fs-lg-16">
                      <i
                        class="flaticon-document lh-1 position-relative text-primary top-2 me-5"
                      ></i>
                      Adlash_4.txt
                    </span>
                    <div class="d-flex align-items-center text-muted mt-5">
                      <span class="d-block">433kb</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">V. Loper</span>
                      <span
                        class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"
                      ></span>
                      <span class="d-block">10 Apr, 2023</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeadsInformation from "./LeadsInformation.vue";

export default defineComponent({
  name: "LeadDetails",
  components: {
    LeadsInformation,
  },
});
</script>