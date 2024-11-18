<template>
  <div class="row">
    <div class="col-xxl-7 col-xxxl-8">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing manage-reviews-box"
      >
        <div
          class="card-head border-bottom bg-white d-lg-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <form class="search-box position-relative">
            <input
              type="text"
              class="form-control shadow-none text-black rounded-0 border-0"
              placeholder="Search here"
            />
            <button
              type="submit"
              class="bg-transparent text-primary transition p-0 border-0"
            >
              <i class="flaticon-search-interface-symbol"></i>
            </button>
          </form>
          <div class="d-md-flex align-items-center">
            <div
              class="reviews-select rounded-1 d-flex align-items-center me-10 mt-10 mt-lg-0"
            >
              <span
                class="text-muted fs-12 position-relative fw-medium text-uppercase"
              >
                Status
              </span>
              <select
                class="form-select shadow-none bg-transparent border-0 fw-semibold rounded-0"
              >
                <option selected>Pending</option>
                <option value="1">Published</option>
              </select>
            </div>
            <button
              class="default-outline-btn position-relative transition fw-medium text-black pt-10 pb-10 ps-25 pe-25 pt-md-10 pb-md-10 rounded-1 bg-transparent fs-md-15 fs-lg-16 d-inline-block mt-10 mt-lg-0"
              type="button"
            >
              Export
              <i class="flaticon-file-1 position-relative ms-5 top-2 fs-15"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table text-nowrap mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-15 ps-sm-20 ps-md-25"
                  >
                    Reviewer
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Review
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-15 pe-sm-20 pe-md-25"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    class="shadow-none fw-normal text-black product-title ps-15 ps-sm-20 ps-md-25"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user14.jpg"
                        width="46"
                        height="46"
                        alt="user"
                      />
                      <div class="ms-12">
                        <h5
                          class="text-black mb-1 fw-semibold fs-14 fs-md-15 fs-lg-16"
                        >
                          Jonathon Ronan
                        </h5>
                        <span class="d-block text-primary">
                          ronanjoh@gmail.com
                        </span>
                      </div>
                    </div>
                  </th>
                  <td
                    class="shadow-none fw-medium text-paragraph product-title"
                  >
                    <div class="rating d-flex align-items-center">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <span class="fs-13 fw-bold">5.0</span>
                    </div>
                    <span class="d-block fs-md-15 lh-base">
                      Adlash support is really more than enough! I really
                      recommend the Adlash admin template
                    </span>
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    21 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Pending</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-15 pe-sm-20 pe-md-25"
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
                    class="shadow-none fw-normal text-black product-title ps-15 ps-sm-20 ps-md-25"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user1.jpg"
                        width="46"
                        height="46"
                        alt="user"
                      />
                      <div class="ms-12">
                        <h5
                          class="text-black mb-1 fw-semibold fs-14 fs-md-15 fs-lg-16"
                        >
                          John Smith
                        </h5>
                        <span class="d-block text-primary"
                          >john321@gmail.com</span
                        >
                      </div>
                    </div>
                  </th>
                  <td
                    class="shadow-none fw-medium text-paragraph product-title"
                  >
                    <div class="rating d-flex align-items-center">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-2"></i>
                      <span class="fs-13 fw-bold">4.5</span>
                    </div>
                    <span class="d-block fs-md-15 lh-base"
                      >Adlash support is really more than enough! I really
                      recommend the Adlash admin template</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    20 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-primary">Published</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-15 pe-sm-20 pe-md-25"
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
                    class="shadow-none fw-normal text-black product-title ps-15 ps-sm-20 ps-md-25"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user3.jpg"
                        width="46"
                        height="46"
                        alt="user"
                      />
                      <div class="ms-12">
                        <h5
                          class="text-black mb-1 fw-semibold fs-14 fs-md-15 fs-lg-16"
                        >
                          Walter White
                        </h5>
                        <span class="d-block text-primary"
                          >john321@gmail.com</span
                        >
                      </div>
                    </div>
                  </th>
                  <td
                    class="shadow-none fw-medium text-paragraph product-title"
                  >
                    <div class="rating d-flex align-items-center">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star"></i>
                      <span class="fs-13 fw-bold">4.0</span>
                    </div>
                    <span class="d-block fs-md-15 lh-base"
                      >Adlash support is really more than enough! I really
                      recommend the Adlash admin template</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    19 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-success">Pending</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-15 pe-sm-20 pe-md-25"
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
                    class="shadow-none fw-normal text-black product-title ps-15 ps-sm-20 ps-md-25"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user4.jpg"
                        width="46"
                        height="46"
                        alt="user"
                      />
                      <div class="ms-12">
                        <h5
                          class="text-black mb-1 fw-semibold fs-14 fs-md-15 fs-lg-16"
                        >
                          Jennifer Watson
                        </h5>
                        <span class="d-block text-primary"
                          >john321@gmail.com</span
                        >
                      </div>
                    </div>
                  </th>
                  <td
                    class="shadow-none fw-medium text-paragraph product-title"
                  >
                    <div class="rating d-flex align-items-center">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-2"></i>
                      <i class="flaticon-star"></i>
                      <span class="fs-13 fw-bold">3.5</span>
                    </div>
                    <span class="d-block fs-md-15 lh-base"
                      >Adlash support is really more than enough! I really
                      recommend the Adlash admin template</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    18 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-primary">Published</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-15 pe-sm-20 pe-md-25"
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
                    class="shadow-none fw-normal text-black product-title ps-15 ps-sm-20 ps-md-25"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user5.jpg"
                        width="46"
                        height="46"
                        alt="user"
                      />
                      <div class="ms-12">
                        <h5
                          class="text-black mb-1 fw-semibold fs-14 fs-md-15 fs-lg-16"
                        >
                          Bradly Loren
                        </h5>
                        <span class="d-block text-primary"
                          >john321@gmail.com</span
                        >
                      </div>
                    </div>
                  </th>
                  <td
                    class="shadow-none fw-medium text-paragraph product-title"
                  >
                    <div class="rating d-flex align-items-center">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span class="fs-13 fw-bold">3.0</span>
                    </div>
                    <span class="d-block fs-md-15 lh-base"
                      >Adlash support is really more than enough! I really
                      recommend the Adlash admin template</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    17 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-primary">Published</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-15 pe-sm-20 pe-md-25"
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
                    class="shadow-none fw-normal text-black product-title ps-15 ps-sm-20 ps-md-25"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user8.jpg"
                        width="46"
                        height="46"
                        alt="user"
                      />
                      <div class="ms-12">
                        <h5
                          class="text-black mb-1 fw-semibold fs-14 fs-md-15 fs-lg-16"
                        >
                          Skyler White
                        </h5>
                        <span class="d-block text-primary"
                          >john321@gmail.com</span
                        >
                      </div>
                    </div>
                  </th>
                  <td
                    class="shadow-none fw-medium text-paragraph product-title"
                  >
                    <div class="rating d-flex align-items-center">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-2"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span class="fs-13 fw-bold">2.5</span>
                    </div>
                    <span class="d-block fs-md-15 lh-base"
                      >Adlash support is really more than enough! I really
                      recommend the Adlash admin template</span
                    >
                  </td>
                  <td class="shadow-none lh-1 fw-medium text-paragraph">
                    16 Mar, 2023
                  </td>
                  <td class="shadow-none lh-1 fw-medium">
                    <span class="badge text-outline-primary">Published</span>
                  </td>
                  <td
                    class="shadow-none lh-1 fw-medium text-paragraph text-end pe-15 pe-sm-20 pe-md-25"
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
            class="pagination-area d-md-flex mt-15 mt-sm-20 mt-md-25 justify-content-between align-items-center ps-15 ps-sm-20 ps-md-25 pe-15 pe-sm-20 pe-md-25"
          >
            <p class="mb-0 text-paragraph">
              Showing <span class="fw-bold">06</span> out of
              <span class="fw-bold">34</span> results
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
    </div>
    <div class="col-xxl-5 col-xxxl-4">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing manage-reviews-box"
      >
        <div class="card-body p-15 p-sm-20 p-md-25">
          <h5
            class="text-black fw-bold fs-15 fs-md-16 fs-lg-18 fs-xl-20 mb-15 mb-sm-20"
          >
            Product
          </h5>
          <div class="row ms-0 me-0 product-box">
            <div class="col-md-6 ps-0 pe-0">
              <div
                class="image"
                :style="{
                  'background-image':
                    'url(' +
                    require(`../../../assets/images/products/review-product.jpg`) +
                    ')',
                }"
              >
                <img
                  src="../../../assets/images/products/review-product.jpg"
                  alt="review-product"
                />
              </div>
            </div>
            <div class="col-md-6 ps-0 pe-0">
              <div class="content">
                <h5 class="fs-15 fs-md-16 fs-xxxl-18 mb-10">
                  <router-link
                    to="/product-details"
                    class="text-black text-decoration-none"
                  >
                    Sanung Clay Camera with 4 gb Ram, 16 gb Rom, 1 tb ssd
                  </router-link>
                </h5>
                <div class="price d-flex align-items-center mb-10 mb-md-20">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                    >$250</span
                  >
                  <span class="text-muted fs-13 fw-medium ms-5 me-8">$350</span>
                  <span class="text-success fw-medium"
                    ><span class="fw-black">60%</span> Off</span
                  >
                </div>
                <span class="d-block text-muted mb-1"
                  >Category: Accessories</span
                >
                <span class="d-block text-muted">SKU: Aw2314</span>
              </div>
            </div>
          </div>
          <div class="mt-25 mt-lg-35"></div>
          <h5
            class="text-black fw-bold fs-15 fs-md-16 fs-lg-18 fs-xl-20 mb-15 mb-sm-20"
          >
            Manage Rating
          </h5>
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
  name: "ManageReviews",
};
</script>