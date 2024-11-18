<template>
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
                  <router-link
                    to="/product-details"
                    class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                  >
                    <img
                      src="../../../assets/images/products/product17.jpg"
                      class="me-15"
                      width="44"
                      alt="product"
                    />
                    Sanung Airpods 3s Voltage <br />Multifunction
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                Electronics
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                21 Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$125.00</td>
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
                  <router-link
                    to="/product-details"
                    class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                  >
                    <img
                      src="../../../assets/images/products/product18.jpg"
                      class="me-15"
                      width="44"
                      alt="product"
                    />
                    Sanung Smart Watch With More <br />Multifunction
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-paragraph">Games</td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                20 Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$50.00</td>
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
                  <router-link
                    to="/product-details"
                    class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                  >
                    <img
                      src="../../../assets/images/products/product19.jpg"
                      class="me-15"
                      width="44"
                      alt="product"
                    />
                    Gaming Laptop With 32 GB Ram <br />& 1TB SSd
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-paragraph">Sports</td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                19 Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$111.00</td>
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
                  <router-link
                    to="/product-details"
                    class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                  >
                    <img
                      src="../../../assets/images/products/product20.jpg"
                      class="me-15"
                      width="44"
                      alt="product"
                    />
                    VR Box With Advanced <br />Metaverse System
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-paragraph">Office</td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                18 Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$99.00</td>
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
                  <router-link
                    to="/product-details"
                    class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                  >
                    <img
                      src="../../../assets/images/products/product21.jpg"
                      class="me-15"
                      width="44"
                      alt="product"
                    />
                    VR Box With 12th Gen Advanced <br />Metaverse System
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                Supplies
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                17 Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$450.00</td>
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
                  <router-link
                    to="/product-details"
                    class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                  >
                    <img
                      src="../../../assets/images/products/product22.jpg"
                      class="me-15"
                      width="44"
                      alt="product"
                    />
                    Laptop Cover With Laptop <br />Stand
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                Computer
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                16 Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$10.00</td>
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
                  <router-link
                    to="/product-details"
                    class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                  >
                    <img
                      src="../../../assets/images/products/product23.jpg"
                      class="me-15"
                      width="44"
                      alt="product"
                    />
                    Sanung Smart Tablet PC For <br />Office Multifunction
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-paragraph">Video</td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                15 Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$234.00</td>
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
                  <router-link
                    to="/product-details"
                    class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                  >
                    <img
                      src="../../../assets/images/products/product24.jpg"
                      class="me-15"
                      width="44"
                      alt="product"
                    />
                    Walter Gaming Joystick For <br />Better Gaming Performance
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                Electronics
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                14 Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$165.00</td>
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
                  <router-link
                    to="/product-details"
                    class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                  >
                    <img
                      src="../../../assets/images/products/product25.jpg"
                      class="me-15"
                      width="44"
                      alt="product"
                    />
                    Capon Clay Camera Toy Piece
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-paragraph">Games</td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                13 Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$199.00</td>
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
                  <router-link
                    to="/product-details"
                    class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
                  >
                    <img
                      src="../../../assets/images/products/product26.jpg"
                      class="me-15"
                      width="44"
                      alt="product"
                    />
                    Sanung Laptop & Joystick <br />Combo
                  </router-link>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-paragraph">Home</td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                12 Mar, 2023
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$100.00</td>
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
  name: "ProductsList",
};
</script>