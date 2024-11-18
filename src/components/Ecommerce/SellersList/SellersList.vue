<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div
      class="card-head box-shadow bg-white d-lg-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
    >
      <div class="d-sm-flex align-items-center">
        <button
          class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block me-10 mb-10 mb-lg-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#createNewSellerModal"
        >
          Add New Seller
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
            placeholder="Search seller"
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
  </div>
  <div class="row">
    <div class="col-sm-6 col-lg-4 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white seller-card">
        <div class="card-body letter-spacing">
          <div
            class="mb-15 mb-md-20 mb-lg-25 d-flex align-items-center justify-content-between"
          >
            <div class="icon position-relative text-center rounded-circle">
              <img
                src="../../../assets/images/sellers/seller1.png"
                class="position-absolute start-0 end-0 ms-auto me-auto"
                alt="seller"
              />
            </div>
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
                  >
                    <i
                      class="flaticon-view lh-1 me-8 position-relative top-1"
                    ></i>
                    View
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                  >
                    <i
                      class="flaticon-pen lh-1 me-8 position-relative top-1"
                    ></i>
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
          <h5 class="fs-18 fw-semibold text-black mb-5 mb-md-8">Brand Smith</h5>
          <span class="text-paragraph d-block">
            Store:
            <span class="text-primary fw-semibold">Oxitech</span>
          </span>
          <ul
            class="list mt-15 mt-lg-25 ps-0 mb-0 list-unstyled d-flex justify-content-between"
          >
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
              >
                BALANCE
              </span>
              <span class="d-block text-dark fw-medium">$ 4100.00</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
              >
                REVENUE
              </span>
              <span class="d-block text-dark fw-medium">$ 3570.05</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
              >
                PRODUCTS
              </span>
              <span class="d-block text-dark fw-medium">141</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white seller-card">
        <div class="card-body letter-spacing">
          <div
            class="mb-15 mb-md-20 mb-lg-25 d-flex align-items-center justify-content-between"
          >
            <div class="icon position-relative text-center rounded-circle">
              <img
                src="../../../assets/images/sellers/seller2.png"
                class="position-absolute start-0 end-0 ms-auto me-auto"
                alt="seller"
              />
            </div>
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
                  >
                    <i
                      class="flaticon-view lh-1 me-8 position-relative top-1"
                    ></i>
                    View
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                  >
                    <i
                      class="flaticon-pen lh-1 me-8 position-relative top-1"
                    ></i>
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
          <h5 class="fs-18 fw-semibold text-black mb-5 mb-md-8">Johny Kuber</h5>
          <span class="text-paragraph d-block">
            Store:
            <span class="text-primary fw-semibold">Arrowtech</span>
          </span>
          <ul
            class="list mt-15 mt-lg-25 ps-0 mb-0 list-unstyled d-flex justify-content-between"
          >
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
              >
                BALANCE
              </span>
              <span class="d-block text-dark fw-medium">$ 3421.00</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
              >
                REVENUE
              </span>
              <span class="d-block text-dark fw-medium">$ 4312.05</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
              >
                PRODUCTS
              </span>
              <span class="d-block text-dark fw-medium">100</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white seller-card">
        <div class="card-body letter-spacing">
          <div
            class="mb-15 mb-md-20 mb-lg-25 d-flex align-items-center justify-content-between"
          >
            <div class="icon position-relative text-center rounded-circle">
              <img
                src="../../../assets/images/sellers/seller3.png"
                class="position-absolute start-0 end-0 ms-auto me-auto"
                alt="seller"
              />
            </div>
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
          <h5 class="fs-18 fw-semibold text-black mb-5 mb-md-8">
            Bradley Loren
          </h5>
          <span class="text-paragraph d-block"
            >Store: <span class="text-primary fw-semibold">Meditech</span></span
          >
          <ul
            class="list mt-15 mt-lg-25 ps-0 mb-0 list-unstyled d-flex justify-content-between"
          >
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >BALANCE</span
              >
              <span class="d-block text-dark fw-medium">$ 4321.00</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >REVENUE</span
              >
              <span class="d-block text-dark fw-medium">$ 4321.05</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >PRODUCTS</span
              >
              <span class="d-block text-dark fw-medium">321</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white seller-card">
        <div class="card-body letter-spacing">
          <div
            class="mb-15 mb-md-20 mb-lg-25 d-flex align-items-center justify-content-between"
          >
            <div class="icon position-relative text-center rounded-circle">
              <img
                src="../../../assets/images/sellers/seller4.png"
                class="position-absolute start-0 end-0 ms-auto me-auto"
                alt="seller"
              />
            </div>
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
          <h5 class="fs-18 fw-semibold text-black mb-5 mb-md-8">
            Jennyfer Watson
          </h5>
          <span class="text-paragraph d-block"
            >Store: <span class="text-primary fw-semibold">Brengal</span></span
          >
          <ul
            class="list mt-15 mt-lg-25 ps-0 mb-0 list-unstyled d-flex justify-content-between"
          >
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >BALANCE</span
              >
              <span class="d-block text-dark fw-medium">$ 5432.00</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >REVENUE</span
              >
              <span class="d-block text-dark fw-medium">$ 5432.05</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >PRODUCTS</span
              >
              <span class="d-block text-dark fw-medium">99</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white seller-card">
        <div class="card-body letter-spacing">
          <div
            class="mb-15 mb-md-20 mb-lg-25 d-flex align-items-center justify-content-between"
          >
            <div class="icon position-relative text-center rounded-circle">
              <img
                src="../../../assets/images/sellers/seller5.png"
                class="position-absolute start-0 end-0 ms-auto me-auto"
                alt="seller"
              />
            </div>
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
          <h5 class="fs-18 fw-semibold text-black mb-5 mb-md-8">
            Jonathon Ronan
          </h5>
          <span class="text-paragraph d-block"
            >Store: <span class="text-primary fw-semibold">Jofer</span></span
          >
          <ul
            class="list mt-15 mt-lg-25 ps-0 mb-0 list-unstyled d-flex justify-content-between"
          >
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >BALANCE</span
              >
              <span class="d-block text-dark fw-medium">$ 1234.00</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >REVENUE</span
              >
              <span class="d-block text-dark fw-medium">$ 12345.05</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >PRODUCTS</span
              >
              <span class="d-block text-dark fw-medium">150</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white seller-card">
        <div class="card-body letter-spacing">
          <div
            class="mb-15 mb-md-20 mb-lg-25 d-flex align-items-center justify-content-between"
          >
            <div class="icon position-relative text-center rounded-circle">
              <img
                src="../../../assets/images/sellers/seller6.png"
                class="position-absolute start-0 end-0 ms-auto me-auto"
                alt="seller"
              />
            </div>
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
          <h5 class="fs-18 fw-semibold text-black mb-5 mb-md-8">
            Walter White
          </h5>
          <span class="text-paragraph d-block"
            >Store:
            <span class="text-primary fw-semibold">WhiteSnow</span></span
          >
          <ul
            class="list mt-15 mt-lg-25 ps-0 mb-0 list-unstyled d-flex justify-content-between"
          >
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >BALANCE</span
              >
              <span class="d-block text-dark fw-medium">$ 6542.00</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >REVENUE</span
              >
              <span class="d-block text-dark fw-medium">$ 6543.05</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >PRODUCTS</span
              >
              <span class="d-block text-dark fw-medium">154</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white seller-card">
        <div class="card-body letter-spacing">
          <div
            class="mb-15 mb-md-20 mb-lg-25 d-flex align-items-center justify-content-between"
          >
            <div class="icon position-relative text-center rounded-circle">
              <img
                src="../../../assets/images/sellers/seller7.png"
                class="position-absolute start-0 end-0 ms-auto me-auto"
                alt="seller"
              />
            </div>
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
          <h5 class="fs-18 fw-semibold text-black mb-5 mb-md-8">
            Bravery Hill
          </h5>
          <span class="text-paragraph d-block"
            >Store:
            <span class="text-primary fw-semibold">HillyScope</span></span
          >
          <ul
            class="list mt-15 mt-lg-25 ps-0 mb-0 list-unstyled d-flex justify-content-between"
          >
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >BALANCE</span
              >
              <span class="d-block text-dark fw-medium">$ 7658.00</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >REVENUE</span
              >
              <span class="d-block text-dark fw-medium">$ 4354.05</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >PRODUCTS</span
              >
              <span class="d-block text-dark fw-medium">109</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white seller-card">
        <div class="card-body letter-spacing">
          <div
            class="mb-15 mb-md-20 mb-lg-25 d-flex align-items-center justify-content-between"
          >
            <div class="icon position-relative text-center rounded-circle">
              <img
                src="../../../assets/images/sellers/seller8.png"
                class="position-absolute start-0 end-0 ms-auto me-auto"
                alt="seller"
              />
            </div>
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
          <h5 class="fs-18 fw-semibold text-black mb-5 mb-md-8">Jane Ronan</h5>
          <span class="text-paragraph d-block"
            >Store: <span class="text-primary fw-semibold">Ronany</span></span
          >
          <ul
            class="list mt-15 mt-lg-25 ps-0 mb-0 list-unstyled d-flex justify-content-between"
          >
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >BALANCE</span
              >
              <span class="d-block text-dark fw-medium">$ 1000.00</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >REVENUE</span
              >
              <span class="d-block text-dark fw-medium">$ 3214.05</span>
            </li>
            <li>
              <span
                class="d-block text-dark-emphasis text-uppercase fw-medium fs-12 mb-5 mb-md-8"
                >PRODUCTS</span
              >
              <span class="d-block text-dark fw-medium">111</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div
        class="pagination-area d-md-flex mb-25 justify-content-between align-items-center"
      >
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">08</span> out of
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
</template>

<script>
export default {
  name: "SellersList",
};
</script>