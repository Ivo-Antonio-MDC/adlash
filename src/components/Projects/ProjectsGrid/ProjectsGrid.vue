<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div
      class="card-head box-shadow bg-white d-lg-flex align-items-center justify-content-between p-20 p-md-25 p-lg-30"
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
        <div class="dropdown mt-10 mt-sm-0 ms-sm-15">
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
  </div>
  <div class="row">
    <div class="col-md-6 col-xxl-6 col-xxxl-4">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing project-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div
            class="mb-12 mb-md-15 mb-lg-20 d-flex justify-content-between align-items-center"
          >
            <div class="title d-flex align-items-center">
              <img
                src="../../../assets/images/projects/project-mini1.jpg"
                class="rounded-1"
                width="60"
                alt="project"
              />
              <div class="ms-15">
                <span class="badge text-outline-primary">In Process</span>
                <h5 class="mb-0 fs-14 fs-md-16 fs-lg-18 fw-bold mt-8 mt-md-10">
                  <router-link
                    to="/project-details"
                    class="text-decoration-none text-black"
                  >
                    Adlash CRM Dashboard Design
                  </router-link>
                </h5>
              </div>
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
          <p
            class="mb-12 mb-md-15 mb-lg-25 text-muted lh-base fs-md-15 fs-lg-16"
          >
            This project combiles all the data and backend information to the
            frontend and also design should be appealing.
          </p>
          <ul class="info ps-0 mb-15 mb-md-20 mb-lg-30 list-unstyled">
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
              Solit IT Solution
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >BUDGET:</span
              >
              $18,500 USD
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold d-flex">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
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
            </li>
          </ul>
          <div class="mb-5 d-flex justify-content-between align-items-center">
            <span class="fs-md-15 text-secondary">Project Progress:</span>
            <span class="text-primary fw-semibold">38%</span>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="38"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 38%"></div>
          </div>
          <div class="mt-15 d-sm-flex justify-content-between">
            <span class="text-muted fs-md-15 d-block">
              <i
                class="flaticon-calendar lh-1 me-5 position-relative top-1"
              ></i>
              Project Deadline:
              <span class="fw-semibold text-paragraph fs-md-14"
                >5th Mar, 2023</span
              >
            </span>
            <span class="text-muted fs-md-15 d-block mt-5 mt-sm-0">
              <i
                class="flaticon-document lh-1 me-1 position-relative top-2"
              ></i>
              <span class="text-black">12</span>/35
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-6 col-xxxl-4">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing project-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div
            class="mb-12 mb-md-15 mb-lg-20 d-flex justify-content-between align-items-center"
          >
            <div class="title d-flex align-items-center">
              <img
                src="../../../assets/images/projects/project-mini2.jpg"
                class="rounded-1"
                width="60"
                alt="project"
              />
              <div class="ms-15">
                <span class="badge text-outline-danger">On Hold</span>
                <h5 class="mb-0 fs-14 fs-md-16 fs-lg-18 fw-bold mt-8 mt-md-10">
                  <router-link
                    to="/project-details"
                    class="text-decoration-none text-black"
                  >
                    Banko CRM Dashboard Design
                  </router-link>
                </h5>
              </div>
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
          <p
            class="mb-12 mb-md-15 mb-lg-25 text-muted lh-base fs-md-15 fs-lg-16"
          >
            This project combiles all the data and backend information to the
            frontend and also design should be appealing.
          </p>
          <ul class="info ps-0 mb-15 mb-md-20 mb-lg-30 list-unstyled">
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
              Medizo Healthcare Center
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >BUDGET:</span
              >
              $20,000 USD
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold d-flex">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
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
            </li>
          </ul>
          <div class="mb-5 d-flex justify-content-between align-items-center">
            <span class="fs-md-15 text-secondary">Project Progress:</span>
            <span class="text-primary fw-semibold">80%</span>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 80%"></div>
          </div>
          <div class="mt-15 d-sm-flex justify-content-between">
            <span class="text-muted fs-md-15 d-block">
              <i
                class="flaticon-calendar lh-1 me-5 position-relative top-1"
              ></i>
              Project Deadline:
              <span class="fw-semibold text-paragraph fs-md-14"
                >15th Dec, 2023</span
              >
            </span>
            <span class="text-muted fs-md-15 d-block mt-5 mt-sm-0">
              <i
                class="flaticon-document lh-1 me-1 position-relative top-2"
              ></i>
              <span class="text-black">80</span>/100
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-6 col-xxxl-4">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing project-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div
            class="mb-12 mb-md-15 mb-lg-20 d-flex justify-content-between align-items-center"
          >
            <div class="title d-flex align-items-center">
              <img
                src="../../../assets/images/projects/project-mini3.jpg"
                class="rounded-1"
                width="60"
                alt="project"
              />
              <div class="ms-15">
                <span class="badge text-outline-success">Completed</span>
                <h5 class="mb-0 fs-14 fs-md-16 fs-lg-18 fw-bold mt-8 mt-md-10">
                  <router-link
                    to="/project-details"
                    class="text-decoration-none text-black"
                  >
                    Adlash Ecommerce Dashboard
                  </router-link>
                </h5>
              </div>
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
          <p
            class="mb-12 mb-md-15 mb-lg-25 text-muted lh-base fs-md-15 fs-lg-16"
          >
            This project combiles all the data and backend information to the
            frontend and also design should be appealing.
          </p>
          <ul class="info ps-0 mb-15 mb-md-20 mb-lg-30 list-unstyled">
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
              Ceve Banking Ltd.
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >BUDGET:</span
              >
              $8,500 USD
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold d-flex">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
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
            </li>
          </ul>
          <div class="mb-5 d-flex justify-content-between align-items-center">
            <span class="fs-md-15 text-secondary">Project Progress:</span>
            <span class="text-primary fw-semibold">40%</span>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 40%"></div>
          </div>
          <div class="mt-15 d-sm-flex justify-content-between">
            <span class="text-muted fs-md-15 d-block">
              <i
                class="flaticon-calendar lh-1 me-5 position-relative top-1"
              ></i>
              Project Deadline:
              <span class="fw-semibold text-paragraph fs-md-14"
                >23th Jul, 2023</span
              >
            </span>
            <span class="text-muted fs-md-15 d-block mt-5 mt-sm-0">
              <i
                class="flaticon-document lh-1 me-1 position-relative top-2"
              ></i>
              <span class="text-black">50</span>/75
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-6 col-xxxl-4">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing project-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div
            class="mb-12 mb-md-15 mb-lg-20 d-flex justify-content-between align-items-center"
          >
            <div class="title d-flex align-items-center">
              <img
                src="../../../assets/images/projects/project-mini4.jpg"
                class="rounded-1"
                width="60"
                alt="project"
              />
              <div class="ms-15">
                <span class="badge text-outline-primary">In Process</span>
                <h5 class="mb-0 fs-14 fs-md-16 fs-lg-18 fw-bold mt-8 mt-md-10">
                  <router-link
                    to="/project-details"
                    class="text-decoration-none text-black"
                  >
                    Jova Ecommerce Dashboard
                  </router-link>
                </h5>
              </div>
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
          <p
            class="mb-12 mb-md-15 mb-lg-25 text-muted lh-base fs-md-15 fs-lg-16"
          >
            This project combiles all the data and backend information to the
            frontend and also design should be appealing.
          </p>
          <ul class="info ps-0 mb-15 mb-md-20 mb-lg-30 list-unstyled">
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
              Jova Ecommerce Site
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >BUDGET:</span
              >
              $18,500 USD
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold d-flex">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
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
            </li>
          </ul>
          <div class="mb-5 d-flex justify-content-between align-items-center">
            <span class="fs-md-15 text-secondary">Project Progress:</span>
            <span class="text-primary fw-semibold">43%</span>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="43"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 43%"></div>
          </div>
          <div class="mt-15 d-sm-flex justify-content-between">
            <span class="text-muted fs-md-15 d-block">
              <i
                class="flaticon-calendar lh-1 me-5 position-relative top-1"
              ></i>
              Project Deadline:
              <span class="fw-semibold text-paragraph fs-md-14"
                >15th Jun, 2023</span
              >
            </span>
            <span class="text-muted fs-md-15 d-block mt-5 mt-sm-0">
              <i
                class="flaticon-document lh-1 me-1 position-relative top-2"
              ></i>
              <span class="text-black">43</span>/100
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-6 col-xxxl-4">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing project-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div
            class="mb-12 mb-md-15 mb-lg-20 d-flex justify-content-between align-items-center"
          >
            <div class="title d-flex align-items-center">
              <img
                src="../../../assets/images/projects/project-mini5.jpg"
                class="rounded-1"
                width="60"
                alt="project"
              />
              <div class="ms-15">
                <span class="badge text-outline-success">Completed</span>
                <h5 class="mb-0 fs-14 fs-md-16 fs-lg-18 fw-bold mt-8 mt-md-10">
                  <router-link
                    to="/project-details"
                    class="text-decoration-none text-black"
                  >
                    Jeel CRM Dashboard Design
                  </router-link>
                </h5>
              </div>
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
          <p
            class="mb-12 mb-md-15 mb-lg-25 text-muted lh-base fs-md-15 fs-lg-16"
          >
            This project combiles all the data and backend information to the
            frontend and also design should be appealing.
          </p>
          <ul class="info ps-0 mb-15 mb-md-20 mb-lg-30 list-unstyled">
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
              Jeel Cosmetics
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >BUDGET:</span
              >
              $1,500 USD
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold d-flex">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
              <div class="users-list d-flex align-items-center">
                <div class="rounded-circle text-center">
                  <img
                    src="../../../assets/images/user/user9.jpg"
                    class="rounded-circle"
                    alt="user"
                  />
                </div>
              </div>
            </li>
          </ul>
          <div class="mb-5 d-flex justify-content-between align-items-center">
            <span class="fs-md-15 text-secondary">Project Progress:</span>
            <span class="text-primary fw-semibold">50%</span>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 50%"></div>
          </div>
          <div class="mt-15 d-sm-flex justify-content-between">
            <span class="text-muted fs-md-15 d-block">
              <i
                class="flaticon-calendar lh-1 me-5 position-relative top-1"
              ></i>
              Project Deadline:
              <span class="fw-semibold text-paragraph fs-md-14"
                >15th Mar, 2023</span
              >
            </span>
            <span class="text-muted fs-md-15 d-block mt-5 mt-sm-0">
              <i
                class="flaticon-document lh-1 me-1 position-relative top-2"
              ></i>
              <span class="text-black">25</span>/50
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-6 col-xxxl-4">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing project-card"
      >
        <div class="card-body p-20 p-md-25 p-lg-30">
          <div
            class="mb-12 mb-md-15 mb-lg-20 d-flex justify-content-between align-items-center"
          >
            <div class="title d-flex align-items-center">
              <img
                src="../../../assets/images/projects/project-mini6.jpg"
                class="rounded-1"
                width="60"
                alt="project"
              />
              <div class="ms-15">
                <span class="badge text-outline-danger">On Hold</span>
                <h5 class="mb-0 fs-14 fs-md-16 fs-lg-18 fw-bold mt-8 mt-md-10">
                  <router-link
                    to="/project-details"
                    class="text-decoration-none text-black"
                  >
                    Xenax CRM Dashboard Design
                  </router-link>
                </h5>
              </div>
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
          <p
            class="mb-12 mb-md-15 mb-lg-25 text-muted lh-base fs-md-15 fs-lg-16"
          >
            This project combiles all the data and backend information to the
            frontend and also design should be appealing.
          </p>
          <ul class="info ps-0 mb-15 mb-md-20 mb-lg-30 list-unstyled">
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
                >CLIENT:</span
              >
              Xenax Ecommerce
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
              >
                BUDGET:
              </span>
              $18,500 USD
            </li>
            <li class="text-secondary fs-md-15 fs-md-16 fw-semibold d-flex">
              <span
                class="text-muted fs-12 fs-md-13 text-uppercase fw-medium d-inline-block"
              >
                CLIENT:
              </span>
              <div class="users-list d-flex align-items-center">
                <div class="rounded-circle text-center">
                  <img
                    src="../../../assets/images/user/user12.jpg"
                    class="rounded-circle"
                    alt="user"
                  />
                </div>
                <div
                  class="rounded-circle bg-primary-emphasis text-center d-flex align-items-center justify-content-center text-white fs-16 fw-semibold"
                >
                  J
                </div>
              </div>
            </li>
          </ul>
          <div class="mb-5 d-flex justify-content-between align-items-center">
            <span class="fs-md-15 text-secondary">Project Progress:</span>
            <span class="text-primary fw-semibold">75%</span>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 75%"></div>
          </div>
          <div class="mt-15 d-sm-flex justify-content-between">
            <span class="text-muted fs-md-15 d-block">
              <i
                class="flaticon-calendar lh-1 me-5 position-relative top-1"
              ></i>
              Project Deadline:
              <span class="fw-semibold text-paragraph fs-md-14">
                11th Mar, 2023
              </span>
            </span>
            <span class="text-muted fs-md-15 d-block mt-5 mt-sm-0">
              <i
                class="flaticon-document lh-1 me-1 position-relative top-2"
              ></i>
              <span class="text-black">75</span>/100
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div
        class="pagination-area d-md-flex mb-25 justify-content-between align-items-center"
      >
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">6</span> out of
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsGrid",
});
</script>