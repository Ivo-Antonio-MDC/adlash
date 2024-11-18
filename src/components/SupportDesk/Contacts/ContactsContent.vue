<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div
      class="card-head box-shadow bg-white d-lg-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
    >
      <form class="search-box position-relative">
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
      <div class="d-sm-flex align-items-center">
        <button
          class="default-btn position-relative transition border-0 fw-medium text-white pt-12 pb-12 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block me-10 mt-10 mt-lg-0 text-decoration-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#createNewContactModal"
        >
          Add New Contact
          <i class="flaticon-plus position-relative ms-5 fs-12"></i>
        </button>
        <button
          class="default-outline-btn position-relative transition fw-medium text-black pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-transparent fs-md-15 fs-lg-16 d-inline-block mt-10 mt-lg-0"
          type="button"
        >
          Export
          <i class="flaticon-file-1 position-relative ms-5 top-2 fs-15"></i>
        </button>
        <button
          class="dot-btn lh-1 position-relative top-3 bg-transparent border-0 shadow-none p-0 transition d-inline-block ms-15 mt-10 mt-lg-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#filterContactModal"
        >
          <i class="flaticon-dots"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div
        class="mb-25 text-black fs-18 fs-md-25 fw-bold ps-15 ps-sm-20 ps-md-25 ps-lg-30"
      >
        A
      </div>
    </div>
    <div class="col-md-6 col-xxl-4 col-xxxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-md-20 mb-lg-25 d-flex justify-content-between">
            <div class="position-relative rounded-circle">
              <img
                src="../../../assets/images//user/user3.jpg"
                class="rounded-circle"
                width="95"
                height="95"
                alt="user"
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
          <h5 class="fs-15 fs-md-18 fw-bold text-black mb-0">Anderson Harry</h5>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >PHONE:</span
              >
              +1 234 4567 5678
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >EMAIL:</span
              >
              andersonharry@gmail.com
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >ADDRESS:</span
              >
              795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-4 col-xxxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-md-20 mb-lg-25 d-flex justify-content-between">
            <div class="position-relative rounded-circle">
              <img
                src="../../../assets/images//user/user10.jpg"
                class="rounded-circle"
                width="95"
                height="95"
                alt="user"
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
          <h5 class="fs-15 fs-md-18 fw-bold text-black mb-0">Angela Carter</h5>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >PHONE:</span
              >
              +1 234 4567 5678
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >EMAIL:</span
              >
              angelacarter@gmail.com
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >ADDRESS:</span
              >
              795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-4 col-xxxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-md-20 mb-lg-25 d-flex justify-content-between">
            <div class="position-relative rounded-circle">
              <img
                src="../../../assets/images//user/user13.jpg"
                class="rounded-circle"
                width="95"
                height="95"
                alt="user"
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
          <h5 class="fs-15 fs-md-18 fw-bold text-black mb-0">Ander Smith</h5>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >PHONE:</span
              >
              +1 234 4567 5678
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >EMAIL:</span
              >
              andersmith@gmail.com
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >ADDRESS:</span
              >
              795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div
        class="mb-25 text-black fs-18 fs-md-25 fw-bold ps-15 ps-sm-20 ps-md-25 ps-lg-30"
      >
        B
      </div>
    </div>
    <div class="col-md-6 col-xxl-4 col-xxxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-md-20 mb-lg-25 d-flex justify-content-between">
            <div class="position-relative rounded-circle">
              <img
                src="../../../assets/images//user/user12.jpg"
                class="rounded-circle"
                width="95"
                height="95"
                alt="user"
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
          <h5 class="fs-15 fs-md-18 fw-bold text-black mb-0">Bonny Loren</h5>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >PHONE:</span
              >
              +1 234 4567 5678
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >EMAIL:</span
              >
              bonnyloren@gmail.com
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >ADDRESS:</span
              >
              795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-4 col-xxxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-md-20 mb-lg-25 d-flex justify-content-between">
            <div class="position-relative rounded-circle">
              <img
                src="../../../assets/images//user/user1.jpg"
                class="rounded-circle"
                width="95"
                height="95"
                alt="user"
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
          <h5 class="fs-15 fs-md-18 fw-bold text-black mb-0">Bradly Smith</h5>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >PHONE:</span
              >
              +1 234 4567 5678
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >EMAIL:</span
              >
              bradlysmith@gmail.com
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >ADDRESS:</span
              >
              795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-4 col-xxxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-md-20 mb-lg-25 d-flex justify-content-between">
            <div class="position-relative rounded-circle">
              <img
                src="../../../assets/images//user/user4.jpg"
                class="rounded-circle"
                width="95"
                height="95"
                alt="user"
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
          <h5 class="fs-15 fs-md-18 fw-bold text-black mb-0">Brewen Jesica</h5>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >PHONE:</span
              >
              +1 234 4567 5678
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >EMAIL:</span
              >
              brewenjasica@gmail.com
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >ADDRESS:</span
              >
              795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-4 col-xxxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-md-20 mb-lg-25 d-flex justify-content-between">
            <div class="position-relative rounded-circle">
              <img
                src="../../../assets/images//user/user5.jpg"
                class="rounded-circle"
                width="95"
                height="95"
                alt="user"
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
          <h5 class="fs-15 fs-md-18 fw-bold text-black mb-0">Bury Tarte</h5>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >PHONE:</span
              >
              +1 234 4567 5678
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >EMAIL:</span
              >
              burytarte@gmail.com
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >ADDRESS:</span
              >
              795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div
        class="mb-25 text-black fs-18 fs-md-25 fw-bold ps-15 ps-sm-20 ps-md-25 ps-lg-30"
      >
        C
      </div>
    </div>
    <div class="col-md-6 col-xxl-4 col-xxxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-md-20 mb-lg-25 d-flex justify-content-between">
            <div class="position-relative rounded-circle">
              <img
                src="../../../assets/images//user/user2.jpg"
                class="rounded-circle"
                width="95"
                height="95"
                alt="user"
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
          <h5 class="fs-15 fs-md-18 fw-bold text-black mb-0">Crown Warrent</h5>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >PHONE:</span
              >
              +1 234 4567 5678
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >EMAIL:</span
              >
              crownwarrent@gmail.com
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >ADDRESS:</span
              >
              795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-4 col-xxxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-md-20 mb-lg-25 d-flex justify-content-between">
            <div class="position-relative rounded-circle">
              <img
                src="../../../assets/images//user/user6.jpg"
                class="rounded-circle"
                width="95"
                height="95"
                alt="user"
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
          <h5 class="fs-15 fs-md-18 fw-bold text-black mb-0">Candy Watson</h5>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >PHONE:</span
              >
              +1 234 4567 5678
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >EMAIL:</span
              >
              candywatson@gmail.com
            </li>
            <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
              <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14"
                >ADDRESS:</span
              >
              795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
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
          Showing <span class="fw-bold">09</span> out of
          <span class="fw-bold">50</span> results
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
export default {
  name: "ContactsContent",
};
</script>