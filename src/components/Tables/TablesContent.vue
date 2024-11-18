<template>
  <div class="row">
    <div class="col-xxl-6">
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
                  <i
                    class="flaticon-search-interface-symbol position-relative"
                  ></i>
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
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      #XTD-4629
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    2 <span class="text-body-tertiary">mins ago</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    <div class="d-flex align-items-center">
                      <img
                        src="../../assets/images/user/user3.jpg"
                        class="rounded-circle me-8"
                        width="24"
                        height="24"
                        alt="user"
                      />
                      J. Ronan
                    </div>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $650
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $150
                  </td>
                  <td class="shadow-none lh-1 fw-medium pe-0">
                    <span class="badge text-outline-primary">Pending</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      #SPI-2123
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    5 <span class="text-body-tertiary">mins ago</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    <div class="d-flex align-items-center">
                      <img
                        src="../../assets/images/user/user1.jpg"
                        class="rounded-circle me-8"
                        width="24"
                        height="24"
                        alt="user"
                      />
                      V. James
                    </div>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $720
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $220
                  </td>
                  <td class="shadow-none lh-1 fw-medium pe-0">
                    <span class="badge text-outline-info">Confirmed</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      #XLP-1119
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    10 <span class="text-body-tertiary">mins ago</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    <div class="d-flex align-items-center">
                      <img
                        src="../../assets/images/user/user5.jpg"
                        class="rounded-circle me-8"
                        width="24"
                        height="24"
                        alt="user"
                      />
                      A. Carter
                    </div>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $250
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $50
                  </td>
                  <td class="shadow-none lh-1 fw-medium pe-0">
                    <span class="badge text-outline-success">Shipped</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      #ITS-4126
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    15 <span class="text-body-tertiary">mins ago</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    <div class="d-flex align-items-center">
                      <img
                        src="../../assets/images/user/user4.jpg"
                        class="rounded-circle me-8"
                        width="24"
                        height="24"
                        alt="user"
                      />
                      J. Andy
                    </div>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $1650
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $200
                  </td>
                  <td class="shadow-none lh-1 fw-medium pe-0">
                    <span class="badge text-outline-danger">Rejected</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      #ITL-9036
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    20 <span class="text-body-tertiary">mins ago</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    <div class="d-flex align-items-center">
                      <img
                        src="../../assets/images/user/user6.jpg"
                        class="rounded-circle me-8"
                        width="24"
                        height="24"
                        alt="user"
                      />
                      B. White
                    </div>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $150
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $30
                  </td>
                  <td class="shadow-none lh-1 fw-medium pe-0">
                    <span class="badge text-outline-success">Shipped</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      #TSL-4629
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    40 <span class="text-body-tertiary">mins ago</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    <div class="d-flex align-items-center">
                      <img
                        src="../../assets/images/user/user7.jpg"
                        class="rounded-circle me-8"
                        width="24"
                        height="24"
                        alt="user"
                      />
                      S. Smith
                    </div>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $750
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $75
                  </td>
                  <td class="shadow-none lh-1 fw-medium pe-0">
                    <span class="badge text-outline-success">Shipped</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      #ABC-5432
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    3 <span class="text-body-tertiary">hrs ago</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    <div class="d-flex align-items-center">
                      <img
                        src="../../assets/images/user/user2.jpg"
                        class="rounded-circle me-8"
                        width="24"
                        height="24"
                        alt="user"
                      />
                      A. David
                    </div>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $453
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $99
                  </td>
                  <td class="shadow-none lh-1 fw-medium pe-0">
                    <span class="badge text-outline-danger">Rejected</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      #XYZ-6789
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    6 <span class="text-body-tertiary">hrs ago</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    <div class="d-flex align-items-center">
                      <img
                        src="../../assets/images/user/user8.jpg"
                        class="rounded-circle me-8"
                        width="24"
                        height="24"
                        alt="user"
                      />
                      S. Taylor
                    </div>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $999
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $23
                  </td>
                  <td class="shadow-none lh-1 fw-medium pe-0">
                    <span class="badge text-outline-success">Shipped</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div
            class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between"
          >
            <h6 class="card-title fw-bold mb-0">Unsolved Tickets</h6>
            <div class="d-flex align-items-center mt-12 mt-md-0">
              <form class="me-15">
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
                    <i
                      class="flaticon-search-interface-symbol position-relative"
                    ></i>
                  </button>
                </div>
              </form>
              <div class="dropdown">
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
                      ><i class="flaticon-view lh-1 me-8"></i> View</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-pen lh-1 me-8"></i> Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-delete lh-1 me-8"></i> Delete</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table text-nowrap align-middle mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
                  >
                    CLIENT
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    SUBJECT
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
                    PRIORITY
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
                  >
                    AGENT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user3.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Ronan
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    <router-link
                      to="/ticket-preview"
                      class="text-decoration-none"
                    >
                      Adlash Dashboard Design
                    </router-link>
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Recent</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-danger text-uppercase"
                  >
                    URGENT
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                  >
                    <select
                      class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                    >
                      <option selected>J. Linowiski</option>
                      <option value="1">Z. White</option>
                      <option value="2">C. Benden</option>
                      <option value="3">A. Smith</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th
                    class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user1.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        V. James
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    <router-link
                      to="/ticket-preview"
                      class="text-decoration-none"
                    >
                      Higher Calculus App Design
                    </router-link>
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Overdue</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-primary text-uppercase"
                  >
                    HIGH
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                  >
                    <select
                      class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                    >
                      <option>J. Linowiski</option>
                      <option value="1" selected>Z. White</option>
                      <option value="2">C. Benden</option>
                      <option value="3">A. Smith</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th
                    class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user5.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        A. Carter
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    <router-link
                      to="/ticket-preview"
                      class="text-decoration-none"
                    >
                      Admin Issue
                    </router-link>
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-info">Remaining</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-info-light text-uppercase"
                  >
                    MEDIUM
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                  >
                    <select
                      class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                    >
                      <option>J. Linowiski</option>
                      <option value="1">Z. White</option>
                      <option value="2" selected>C. Benden</option>
                      <option value="3">A. Smith</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th
                    class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user6.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        B. White
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    <router-link
                      to="/ticket-preview"
                      class="text-decoration-none"
                    >
                      Email Submission Issue
                    </router-link>
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-primary">Responded</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-warning text-uppercase"
                  >
                    LOW
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                  >
                    <select
                      class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                    >
                      <option>J. Linowiski</option>
                      <option value="1">Z. White</option>
                      <option value="2">C. Benden</option>
                      <option value="3" selected>A. Smith</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th
                    class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user7.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        S. Smith
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium">
                    <router-link
                      to="/ticket-preview"
                      class="text-decoration-none"
                    >
                      Adlash Design Issue
                    </router-link>
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-muted">Closed</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-danger text-uppercase"
                  >
                    URGENT
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                  >
                    <select
                      class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                    >
                      <option selected>J. Linowiski</option>
                      <option value="1">Z. White</option>
                      <option value="2">C. Benden</option>
                      <option value="3">A. Smith</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div
            class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between"
          >
            <h5 class="card-title fw-bold mb-0">Recent Leads</h5>
            <div
              class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
            >
              <span class="fw-medium text-muted me-8">Last</span>
              <select
                class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
              >
                <option value="1" class="fw-medium" selected>1 Week</option>
                <option value="2" class="fw-medium">2 Week</option>
                <option value="3" class="fw-medium">3 Week</option>
              </select>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table text-nowrap align-middle mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    EMAIL
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    STATUS
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user3.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Ronan
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-primary">
                    ronanjohnny@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Won Lead</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user6.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Pinkman
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-primary">
                    pinky321@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-info">New Lead</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user13.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        A. Carter
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-primary">
                    angela326421@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Cold Lead</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user2.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        V. Loper
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-primary">
                    lopervic@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Won Lead</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user1.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        W. White
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-primary">
                    whitespace@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-info">New Lead</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user4.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        T. Skyler
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-primary">
                    skylertina213@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Cold Lead</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user3.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Ronan
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-primary">
                    ronanjohnny@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Won Lead</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user6.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Pinkman
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-primary">
                    pinky321@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-info">New Lead</span>
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
          <br />
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <div class="card mb-25 border-0 rounded-0 bg-white">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div
            class="mb-15 mb-md-30 d-sm-flex align-items-center justify-content-between"
          >
            <h6 class="card-title fw-bold mb-0">Stock Report</h6>
            <div
              class="card-select mt-10 mt-sm-0 mb-10 mb-sm-0 d-flex align-items-center ps-10 pe-10 pt-5 pb-5"
            >
              <span class="fw-medium text-muted me-8">Status</span>
              <select
                class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
              >
                <option selected class="fw-medium">Show All</option>
                <option value="1" class="fw-medium">In Stock</option>
              </select>
            </div>
            <router-link
              to="/products"
              class="card-btn fw-medium d-inline-block text-decoration-none transition ps-10 pe-10 pt-5 pb-5"
            >
              View Stock
            </router-link>
          </div>
          <div class="table-responsive">
            <table class="table text-nowrap align-middle mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Product ID
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Dated Added
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 pe-0"
                  >
                    Qty
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      Macbook Air - 8gb
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-semibold text-dark">
                    #SPI-2123
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $1650
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    2 Feb, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">In Stock</span>
                  </td>
                  <td class="shadow-none lh-1 fw-bold pe-0">
                    50 <span class="fw-medium text-body-tertiary">Pcs</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      Samsung S23 Ultra
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-semibold text-black-emphasis">
                    #TDZ-1123
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $1850
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    5 Feb, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Out Of Stock</span>
                  </td>
                  <td class="shadow-none lh-1 fw-bold pe-0">
                    0 <span class="fw-medium text-body-tertiary">Pcs</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      Logitech MX 250
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-semibold text-black-emphasis">
                    #LPR-2233
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $150
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    10 Feb, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">In Stock</span>
                  </td>
                  <td class="shadow-none lh-1 fw-bold pe-0">
                    150 <span class="fw-medium text-body-tertiary">Pcs</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      iPhone 14 Pro
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-semibold text-black-emphasis">
                    #NPK-1243
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $1650
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    12 Feb, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">In Stock</span>
                  </td>
                  <td class="shadow-none lh-1 fw-bold pe-0">
                    510 <span class="fw-medium text-body-tertiary">Pcs</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      Macbook Air - 16gb
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-semibold text-black-emphasis">
                    #TIO-3036
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $2150
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    14 Feb, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger-emphasis"
                      >Low Stock</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-bold pe-0">
                    5 <span class="fw-medium text-body-tertiary">Pcs</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      iPhone 14 Pro Max
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-semibold text-black-emphasis">
                    #ZVB-1632
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $1950
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    20 Feb, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">In Stock</span>
                  </td>
                  <td class="shadow-none lh-1 fw-bold pe-0">
                    24 <span class="fw-medium text-body-tertiary">Pcs</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      HP Hyper LTR
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-semibold text-black-emphasis">
                    #DFR-1629
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $1050
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    24 Feb, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Out Of Stock</span>
                  </td>
                  <td class="shadow-none lh-1 fw-bold pe-0">
                    0 <span class="fw-medium text-body-tertiary">Pcs</span>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none lh-1 fw-bold ps-0">
                    <router-link
                      to="/product-details"
                      class="text-decoration-none text-black-emphasis"
                    >
                      Philips Monitor
                    </router-link>
                  </th>
                  <td class="shadow-none lh-1 fw-semibold text-black-emphasis">
                    #TAI-2123
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    $650
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    28 Feb, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">In Stock</span>
                  </td>
                  <td class="shadow-none lh-1 fw-bold pe-0">
                    42 <span class="fw-medium text-body-tertiary">Pcs</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div
            class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between"
          >
            <h5 class="card-title fw-bold mb-0">Courses</h5>
            <div class="card-buttons">
              <a
                href="javascript:void(0);"
                class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 active"
                >All Courses</a
              >
              <a
                href="javascript:void(0);"
                class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
                >Paid</a
              >
              <a
                href="javascript:void(0);"
                class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
                >Free</a
              >
              <a
                href="javascript:void(0);"
                class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
                >Top Rated</a
              >
              <a
                href="javascript:void(0);"
                class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
                >Most Popular</a
              >
            </div>
          </div>
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
                    TRAINER
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    PUBLISHED ON
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
                    PRICE
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="shadow-none fw-medium ps-0">
                    <span class="mb-10 d-block">
                      <router-link
                        to="/course-details"
                        class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                      >
                        Advanced JavaScript Development
                      </router-link>
                    </span>
                    <span class="d-flex align-items-center text-muted">
                      <i
                        class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                      ></i>
                      <span class="fw-bold ms-5 me-5">34</span>
                      Classes
                    </span>
                  </th>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    J. Ronan
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    4th Jan, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    213
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    $19.90
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
                          >
                            <i
                              class="flaticon-delete lh-1 me-8 position-relative top-1"
                            ></i>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="shadow-none fw-medium ps-0">
                    <span class="mb-10 d-block">
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
                      <span class="fw-bold ms-5 me-5">51</span>
                      Classes
                    </span>
                  </th>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    V. James
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    1st Jan, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    115
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    $9.90
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
                  <th class="shadow-none fw-medium ps-0">
                    <span class="mb-10 d-block">
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
                  </th>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    W. White
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    2nd Feb, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    321
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    $15.99
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
                  <th class="shadow-none fw-medium ps-0">
                    <span class="mb-10 d-block">
                      <router-link
                        to="/course-details"
                        class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                      >
                        Advanced App Development
                      </router-link>
                    </span>
                    <span class="d-flex align-items-center text-muted">
                      <i
                        class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                      ></i>
                      <span class="fw-bold ms-5 me-5">24</span>
                      Classes
                    </span>
                  </th>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    J. Ronan
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    4th Jan, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    243
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    $20.90
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
                  <th class="shadow-none fw-medium ps-0">
                    <span class="mb-10 d-block">
                      <router-link
                        to="/course-details"
                        class="text-decoration-none fs-md-15 fs-lg-16 fw-bold text-black-emphasis"
                      >
                        HTML Fundamental Course
                      </router-link>
                    </span>
                    <span class="d-flex align-items-center text-muted">
                      <i
                        class="flaticon-book lh-1 text-primary position-relative top-1 fs-md-15 fs-lg-16"
                      ></i>
                      <span class="fw-bold ms-5 me-5">11</span>
                      Classes
                    </span>
                  </th>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    S. Smith
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    5th Jan, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    43
                  </td>
                  <td class="shadow-none lh-1 fw-bold text-black-emphasis">
                    $10.90
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
                    <div class="form-check d-flex align-items-center mb-0">
                      <input
                        class="form-check-input shadow-none me-8 mt-0"
                        type="checkbox"
                      />
                      J. Ronan
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 6,400,000.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Won Deal</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    ronanjohnny@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
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
                    <div class="form-check d-flex align-items-center mb-0">
                      <input
                        class="form-check-input shadow-none me-8 mt-0"
                        type="checkbox"
                      />
                      J. Pinkman
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 100,000.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-info">New Deal</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    pinky321@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
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
                    <div class="form-check d-flex align-items-center mb-0">
                      <input
                        class="form-check-input shadow-none me-8 mt-0"
                        type="checkbox"
                      />
                      A. Carter
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 1,840,000.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Cancelled</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    ronanjohnny@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
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
                    <div class="form-check d-flex align-items-center mb-0">
                      <input
                        class="form-check-input shadow-none me-8 mt-0"
                        type="checkbox"
                      />
                      V. Loper
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 6,400,000.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Won Deal</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    lopervic@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
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
                    <div class="form-check d-flex align-items-center mb-0">
                      <input
                        class="form-check-input shadow-none me-8 mt-0"
                        type="checkbox"
                      />
                      W. White
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 100,000.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-info">New Deal</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    whitespace@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
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
                    <div class="form-check d-flex align-items-center mb-0">
                      <input
                        class="form-check-input shadow-none me-8 mt-0"
                        type="checkbox"
                      />
                      T. Skyler
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 400,000.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Cancelled</span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    ronanjohnny@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
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
            <router-link
              to="/leads"
              class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block"
              data-bs-toggle="modal"
              data-bs-target="#createNewDealModal"
            >
              Add A New Deal
            </router-link>
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
    <div class="col-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div
          class="card-head box-shadow bg-white d-lg-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <div class="d-sm-flex align-items-center">
            <button
              class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block me-10 mb-10 mb-lg-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#createNewContactModal"
            >
              Add New Contact
              <i class="flaticon-plus position-relative ms-5 fs-12"></i>
            </button>
            <button
              class="default-outline-btn position-relative transition fw-medium text-black pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-transparent fs-md-15 fs-lg-16 d-inline-block mb-10 mb-lg-0"
              type="button"
            >
              Export
              <i class="flaticon-file-1 position-relative ms-5 top-2 fs-15"></i>
            </button>
          </div>
          <div class="d-flex align-items-center">
            <form class="search-box position-relative me-15">
              <input
                type="text"
                class="form-control shadow-none text-black rounded-0 border-0"
                placeholder="Search contact"
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
              data-bs-toggle="modal"
              data-bs-target="#filterContactModal"
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
                    Contact Name
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    EMAIL
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    PHONE
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    COMAPNY
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Join DATE
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Lead Score
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user7.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        K. Hong
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    hong3215@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-134-345-5926
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Rola Pharmaceuticals
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    14 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    35
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user10.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        B. Traversy
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    traversymedia32@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-252-463-6567
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Jeel Cosmetics
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    14 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    14
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user6.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Lopage
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    jennifer321456@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-822-763-6421
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Nata Metaverse Co.
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    13 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    15
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user11.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        D. Jonathon
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    dipperjohnny@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-232-453-5429
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Angel Library
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    13 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    25
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user10.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        D. Gardner
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    gardnerdaddy@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-272-163-6469
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Joxi Limited
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    13 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    76
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user3.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Ronan
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    ronanjohnny@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-222-463-6429
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Solit IT Solution
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    18 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    68
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user12.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Pinkman
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    pinky321@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-329-461-2435
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Anderson Co.
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    17 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    46
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user13.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        A. Carter
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    angela326421@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-112-743-3234
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Medizo Pharmaceuticals
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    17 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    99
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user8.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        V. Loper
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    lopervic@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-232-453-6929
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Ceve Banking Ltd.
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    16 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    21
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user1.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        W. White
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    whitespace@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-721-467-6125
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Guto Corporation
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    15 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    13
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user4.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        T. Skyler
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    skylertina213@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-345-463-1234
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    Hoco Education
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    14 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    52
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
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div
          class="card-head box-shadow bg-white d-lg-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <div class="d-sm-flex align-items-center">
            <button
              class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block me-10 mb-10 mb-lg-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#createNewCustomerModal"
            >
              Add New Customer
              <i class="flaticon-plus position-relative ms-5 fs-12"></i>
            </button>
            <button
              class="default-outline-btn position-relative transition fw-medium text-black pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-transparent fs-md-15 fs-lg-16 d-inline-block mb-10 mb-lg-0"
              type="button"
            >
              Export
              <i class="flaticon-file-1 position-relative ms-5 top-2 fs-15"></i>
            </button>
          </div>
          <div class="d-flex align-items-center">
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
                    Customer Name
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    EMAIL
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    PHONE
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Received
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Due
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Last Login
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    STATUS
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user3.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Ronan
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    ronanjohnny@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-222-463-6429
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 100.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    $ 00.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    18 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Active</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user12.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Pinkman
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    pinky321@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-329-461-2435
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 80.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    $ 00.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    17 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Active</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user13.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        A. Carter
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    angela326421@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-112-743-3234
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 215.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    $ 00.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    17 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Inactive</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user8.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        V. Loper
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    lopervic@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-232-453-6929
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 300.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 100.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    16 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Inactive</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user1.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        W. White
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    whitespace@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-721-467-6125
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 100.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    $ 00.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    15 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Active</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user4.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        T. Skyler
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    skylertina213@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-345-463-1234
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 410.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    $ 00.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    14 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Active</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user7.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        K. Hong
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    hong3215@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-134-345-5926
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 416.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    $ 00.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    14 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Inactive</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user10.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        B. Traversy
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    traversymedia32@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-252-463-6567
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 560.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 160.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    14 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Active</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user6.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        J. Lopage
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    jennifer321456@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-822-763-6421
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 210.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    $ 00.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    13 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Active</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user11.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        D. Jonathon
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    dipperjohnny@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-232-453-5429
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 320.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 120.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    13 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Active</span>
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
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <div
                        class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/user/user10.jpg"
                          class="rounded-circle me-8"
                          width="24"
                          height="24"
                          alt="user"
                        />
                        D. Gardner
                      </div>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    gardnerdaddy@gmail.com
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    +1-272-163-6469
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                    $ 100.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    $ 00.00 USD
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-muted">
                    13 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-danger">Inactive</span>
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
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div
          class="card-head box-shadow bg-white d-md-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <form class="search-box position-relative">
            <input
              type="text"
              class="form-control shadow-none text-black rounded-0 border-0"
              placeholder="Search product"
            />
            <button
              type="submit"
              class="bg-transparent text-primary transition p-0 border-0"
            >
              <i class="flaticon-search-interface-symbol"></i>
            </button>
          </form>
          <div class="d-sm-flex align-items-center">
            <a
              href="#"
              class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block me-10 mt-10 mt-md-0 text-decoration-none"
            >
              Add New Product
              <i class="flaticon-plus position-relative ms-5 fs-12"></i>
            </a>
            <button
              class="default-outline-btn position-relative transition fw-medium text-black pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-transparent fs-md-15 fs-lg-16 d-inline-block mt-10 mt-md-0"
              type="button"
            >
              Export
              <i class="flaticon-file-1 position-relative ms-5 top-2 fs-15"></i>
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
                    Product Name
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Date Added
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Stock
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Rating
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="shadow-none fw-medium text-black title ps-0">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <a
                        href="#"
                        class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/products/product17.jpg"
                          class="me-15"
                          width="44"
                          alt="product"
                        />
                        Sanung Airpods 3s Voltage <br />Multifunction
                      </a>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    Electronics
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    21 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $125.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">50</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">254</td>
                  <td class="shadow-none lh-1 fw-normal text-paragraph">
                    <span class="fw-medium">5.00</span> (21 Reviews)
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0"
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
                  <th class="shadow-none fw-medium text-black title ps-0">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <a
                        href="#"
                        class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/products/product18.jpg"
                          class="me-15"
                          width="44"
                          alt="product"
                        />
                        Sanung Smart Watch With More <br />Multifunction
                      </a>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    Games
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    20 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $50.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">21</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">232</td>
                  <td class="shadow-none lh-1 fw-normal text-paragraph">
                    <span class="fw-medium">4.00</span> (11 Reviews)
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0"
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
                  <th class="shadow-none fw-medium text-black title ps-0">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <a
                        href="#"
                        class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/products/product19.jpg"
                          class="me-15"
                          width="44"
                          alt="product"
                        />
                        Gaming Laptop With 32 GB Ram <br />& 1TB SSd
                      </a>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    Sports
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    19 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $111.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">43</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">100</td>
                  <td class="shadow-none lh-1 fw-normal text-paragraph">
                    <span class="fw-medium">4.50</span> (10 Reviews)
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0"
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
                  <th class="shadow-none fw-medium text-black title ps-0">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <a
                        href="#"
                        class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/products/product20.jpg"
                          class="me-15"
                          width="44"
                          alt="product"
                        />
                        VR Box With Advanced <br />Metaverse System
                      </a>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    Office
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    18 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $99.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">22</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">99</td>
                  <td class="shadow-none lh-1 fw-normal text-paragraph">
                    <span class="fw-medium">1.00</span> (01 Reviews)
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0"
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
                  <th class="shadow-none fw-medium text-black title ps-0">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <a
                        href="#"
                        class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/products/product21.jpg"
                          class="me-15"
                          width="44"
                          alt="product"
                        />
                        VR Box With 12th Gen Advanced <br />Metaverse System
                      </a>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    Supplies
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    17 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $450.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">54</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">123</td>
                  <td class="shadow-none lh-1 fw-normal text-paragraph">
                    <span class="fw-medium">2.00</span> (02 Reviews)
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0"
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
                  <th class="shadow-none fw-medium text-black title ps-0">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <a
                        href="#"
                        class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/products/product22.jpg"
                          class="me-15"
                          width="44"
                          alt="product"
                        />
                        Laptop Cover With Laptop <br />Stand
                      </a>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    Computer
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    16 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $10.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">11</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">432</td>
                  <td class="shadow-none lh-1 fw-normal text-paragraph">
                    <span class="fw-medium">3.00</span> (03 Reviews)
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0"
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
                  <th class="shadow-none fw-medium text-black title ps-0">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <a
                        href="#"
                        class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/products/product23.jpg"
                          class="me-15"
                          width="44"
                          alt="product"
                        />
                        Sanung Smart Tablet PC For <br />Office Multifunction
                      </a>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    Video
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    15 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $234.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">08</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">543</td>
                  <td class="shadow-none lh-1 fw-normal text-paragraph">
                    <span class="fw-medium">5.00</span> (21 Reviews)
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0"
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
                  <th class="shadow-none fw-medium text-black title ps-0">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <a
                        href="#"
                        class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/products/product24.jpg"
                          class="me-15"
                          width="44"
                          alt="product"
                        />
                        Walter Gaming Joystick For <br />Better Gaming
                        Performance
                      </a>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    Electronics
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    14 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $165.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">16</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">213</td>
                  <td class="shadow-none lh-1 fw-normal text-paragraph">
                    <span class="fw-medium">4.00</span> (52 Reviews)
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0"
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
                  <th class="shadow-none fw-medium text-black title ps-0">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <a
                        href="#"
                        class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/products/product25.jpg"
                          class="me-15"
                          width="44"
                          alt="product"
                        />
                        Capon Clay Camera Toy Piece
                      </a>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    Games
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    13 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $199.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">22</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">143</td>
                  <td class="shadow-none lh-1 fw-normal text-paragraph">
                    <span class="fw-medium">5.00</span> (62 Reviews)
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0"
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
                  <th class="shadow-none fw-medium text-black title ps-0">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <a
                        href="#"
                        class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                      >
                        <img
                          src="../../assets/images/products/product26.jpg"
                          class="me-15"
                          width="44"
                          alt="product"
                        />
                        Sanung Laptop & Joystick <br />Combo
                      </a>
                    </div>
                  </th>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    Home
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    12 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    $100.00
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">54</td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">100</td>
                  <td class="shadow-none lh-1 fw-normal text-paragraph">
                    <span class="fw-medium">3.50</span> (32 Reviews)
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0"
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
              Showing <span class="fw-bold">10</span> out of
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
                        src="../../assets/images/projects/project-mini1.jpg"
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
                          src="../../assets/images/user/user1.jpg"
                          class="rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div class="rounded-circle text-center">
                        <img
                          src="../../assets/images/user/user2.jpg"
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
                    <span class="badge text-outline-primary fs-13"
                      >In Process</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    <img
                      src="../../assets/images/chart/chart1.png"
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
                        src="../../assets/images/projects/project-mini2.jpg"
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
                          src="../../assets/images/user/user4.jpg"
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
                      src="../../assets/images/chart/chart2.png"
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
                        src="../../assets/images/projects/project-mini3.jpg"
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
                          src="../../assets/images/user/user7.jpg"
                          class="rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div class="rounded-circle text-center">
                        <img
                          src="../../assets/images/user/user1.jpg"
                          class="rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div class="rounded-circle text-center">
                        <img
                          src="../../assets/images/user/user8.jpg"
                          class="rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div class="rounded-circle text-center">
                        <img
                          src="../../assets/images/user/user3.jpg"
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
                    <span class="badge text-outline-success fs-13"
                      >Completed</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    <img
                      src="../../assets/images/chart/chart3.png"
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
                        src="../../assets/images/projects/project-mini4.jpg"
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
                          src="../../assets/images/user/user1.jpg"
                          class="rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div class="rounded-circle text-center">
                        <img
                          src="../../assets/images/user/user2.jpg"
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
                    <span class="badge text-outline-primary fs-13"
                      >In Process</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    <img
                      src="../../assets/images/chart/chart4.png"
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
                        src="../../assets/images/projects/project-mini5.jpg"
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
                          src="../../assets/images/user/user9.jpg"
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
                    <span class="badge text-outline-success fs-13"
                      >Completed</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    <img
                      src="../../assets/images/chart/chart5.png"
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
                        src="../../assets/images/projects/project-mini1.jpg"
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
                          src="../../assets/images/user/user1.jpg"
                          class="rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div class="rounded-circle text-center">
                        <img
                          src="../../assets/images/user/user2.jpg"
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
                    <span class="badge text-outline-primary fs-13"
                      >In Process</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    <img
                      src="../../assets/images/chart/chart1.png"
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
                        src="../../assets/images/projects/project-mini2.jpg"
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
                          src="../../assets/images/user/user4.jpg"
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
                      src="../../assets/images/chart/chart2.png"
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
                        src="../../assets/images/projects/project-mini3.jpg"
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
                          src="../../assets/images/user/user7.jpg"
                          class="rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div class="rounded-circle text-center">
                        <img
                          src="../../assets/images/user/user1.jpg"
                          class="rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div class="rounded-circle text-center">
                        <img
                          src="../../assets/images/user/user8.jpg"
                          class="rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div class="rounded-circle text-center">
                        <img
                          src="../../assets/images/user/user3.jpg"
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
                    <span class="badge text-outline-success fs-13"
                      >Completed</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    <img
                      src="../../assets/images/chart/chart3.png"
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
                        src="../../assets/images/projects/project-mini4.jpg"
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
                          src="../../assets/images/user/user1.jpg"
                          class="rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div class="rounded-circle text-center">
                        <img
                          src="../../assets/images/user/user2.jpg"
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
                    <span class="badge text-outline-primary fs-13"
                      >In Process</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    <img
                      src="../../assets/images/chart/chart4.png"
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
                        src="../../assets/images/projects/project-mini5.jpg"
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
                          src="../../assets/images/user/user9.jpg"
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
                    <span class="badge text-outline-success fs-13"
                      >Completed</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                    <img
                      src="../../assets/images/chart/chart5.png"
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
      <div class="card mb-25 border-0 rounded-0 bg-white to-do-list-box">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div
            class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between"
          >
            <h5 class="card-title fw-bold mb-0">To Do List</h5>
            <a
              href="#"
              class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block mt-10 mt-sm-0"
              data-bs-toggle="modal"
              data-bs-target="#createNewTaskModal"
              >Add A New Task</a
            >
          </div>
          <ul class="to-do-list ps-0 list-unstyled mb-0">
            <li
              class="to-do-list-item ps-8 pe-5 d-flex align-items-center justify-content-between"
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
                  <span class="fs-14 fw-normal text-muted ms-10 lh-1"
                    >12th March, 2023 - 10:20 AM</span
                  >
                </label>
              </div>
              <div class="dropdown">
                <button
                  class="dropdown-toggle position-relative top-2 lh-1 bg-transparent border-0 shadow-none p-0 transition"
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
                      ><i class="flaticon-view lh-1 me-8"></i> View</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-pen lh-1 me-8"></i> Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-delete lh-1 me-8"></i> Delete</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="to-do-list-item ps-8 pe-5 d-flex align-items-center justify-content-between"
            >
              <div
                class="form-check mb-0 form-check-info mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
              >
                <input
                  class="form-check-input shadow-none"
                  type="checkbox"
                  id="task2"
                />
                <label class="form-check-label" for="task2">
                  Analyze Dashboard Data
                  <span class="fs-14 fw-normal text-muted ms-10 lh-1"
                    >11th March, 2023 - 11:11 AM</span
                  >
                </label>
              </div>
              <div class="dropdown">
                <button
                  class="dropdown-toggle position-relative top-2 lh-1 bg-transparent border-0 shadow-none p-0 transition"
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
                      ><i class="flaticon-view lh-1 me-8"></i> View</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-pen lh-1 me-8"></i> Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-delete lh-1 me-8"></i> Delete</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="to-do-list-item ps-8 pe-5 d-flex align-items-center justify-content-between"
            >
              <div
                class="form-check mb-0 form-check-success mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
              >
                <input
                  class="form-check-input shadow-none"
                  type="checkbox"
                  id="task3"
                />
                <label class="form-check-label" for="task3">
                  Taking Interview
                  <span class="fs-14 fw-normal text-muted ms-10 lh-1"
                    >10th March, 2023 - 10:12 PM</span
                  >
                </label>
              </div>
              <div class="dropdown">
                <button
                  class="dropdown-toggle position-relative top-2 lh-1 bg-transparent border-0 shadow-none p-0 transition"
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
                      ><i class="flaticon-view lh-1 me-8"></i> View</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-pen lh-1 me-8"></i> Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-delete lh-1 me-8"></i> Delete</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="to-do-list-item ps-8 pe-5 d-flex align-items-center justify-content-between"
            >
              <div
                class="form-check mb-0 form-check-danger mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
              >
                <input
                  class="form-check-input shadow-none"
                  type="checkbox"
                  id="task4"
                />
                <label class="form-check-label" for="task4">
                  Stockholder Meeting
                  <span class="fs-14 fw-normal text-muted ms-10 lh-1"
                    >09th March, 2023 - 09:10 AM</span
                  >
                </label>
              </div>
              <div class="dropdown">
                <button
                  class="dropdown-toggle position-relative top-2 lh-1 bg-transparent border-0 shadow-none p-0 transition"
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
                      ><i class="flaticon-view lh-1 me-8"></i> View</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-pen lh-1 me-8"></i> Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-delete lh-1 me-8"></i> Delete</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="to-do-list-item ps-8 pe-5 d-flex align-items-center justify-content-between"
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
                  Design a Instagram Ad
                  <span class="fs-14 fw-normal text-muted ms-10 lh-1"
                    >09th March, 2023 - 08:00 AM</span
                  >
                </label>
              </div>
              <div class="dropdown">
                <button
                  class="dropdown-toggle position-relative top-2 lh-1 bg-transparent border-0 shadow-none p-0 transition"
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
                      ><i class="flaticon-view lh-1 me-8"></i> View</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-pen lh-1 me-8"></i> Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-delete lh-1 me-8"></i> Delete</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="to-do-list-item ps-8 pe-5 d-flex align-items-center justify-content-between"
            >
              <div
                class="form-check mb-0 form-check-danger mb-0 fs-md-15 fs-lg-16 text-black fw-medium"
              >
                <input
                  class="form-check-input shadow-none"
                  type="checkbox"
                  id="task6"
                />
                <label class="form-check-label" for="task6">
                  Adlash Stockholder Meeting
                  <span class="fs-14 fw-normal text-muted ms-10 lh-1"
                    >08th March, 2023 - 07:00 PM</span
                  >
                </label>
              </div>
              <div class="dropdown">
                <button
                  class="dropdown-toggle position-relative top-2 lh-1 bg-transparent border-0 shadow-none p-0 transition"
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
                      ><i class="flaticon-view lh-1 me-8"></i> View</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-pen lh-1 me-8"></i> Edit</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="javascript:void(0);"
                      ><i class="flaticon-delete lh-1 me-8"></i> Delete</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablesContent",
};
</script>