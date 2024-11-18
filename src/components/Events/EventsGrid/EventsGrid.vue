<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div
      class="card-head box-shadow bg-white d-lg-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
    >
      <div class="d-sm-flex align-items-center">
        <form class="search-box position-relative">
          <input
            type="text"
            class="form-control shadow-none text-black rounded-0 border-0"
            placeholder="Search event"
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
        <a
          href="javascript:void(0);"
          class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block d-inline-block text-decoration-none"
        >
          Add New Event
          <i class="flaticon-plus position-relative ms-5 fs-12"></i>
        </a>
        <select
          class="project-select form-select shadow-none fw-semibold rounded-1 mt-10 mt-sm-0 ms-sm-10"
        >
          <option selected>All (32)</option>
          <option value="1">Open</option>
          <option value="2">Closed</option>
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
    <div class="col-md-6 col-xxxl-4">
      <div class="card mb-25 border-0 rounded-0 bg-white event-card">
        <div class="card-body p-10 letter-spacing">
          <router-link to="/event-details" class="d-block image mb-5">
            <img
              src="../../../assets/images/events/event1.jpg"
              alt="event-image"
            />
          </router-link>
          <div class="p-10 p-md-20">
            <div
              class="mb-12 mb-md-20 d-flex align-items-center justify-content-between"
            >
              <div class="d-lg-flex align-items-center">
                <div class="date rounded-1 text-center">
                  <span class="d-block bg-primary text-white fs-md-15 fw-bold">
                    Mar
                  </span>
                  <span class="d-block text-black fw-black">31</span>
                </div>
                <div class="ms-lg-20 mt-15 mt-lg-0">
                  <h5 class="fs-15 fs-md-16 fs-lg-18 mb-8 mb-md-12 fw-bold">
                    <router-link
                      to="/event-details"
                      class="text-black text-decoration-none"
                    >
                      UI/UX Design Sprint 2023
                    </router-link>
                  </h5>
                  <div class="d-flex align-items-center">
                    <span class="d-block text-muted">
                      Organized by
                      <span class="fw-semibold text-primary"> EnvyTheme </span>
                    </span>
                    <span class="badge text-outline-danger ms-10">Closed</span>
                  </div>
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
            <p class="text-paragraph lh-base fs-md-15">
              This event combines all the data and backend information to the
              frontend. Organized by EnvyTheme.
            </p>
            <ul class="info-list ps-0 mb-15 list-unstyled">
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  TIME:
                </span>
                +1 234 4567 5678
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  LOCATION:
                </span>
                795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  SPEAKER:
                </span>
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user14.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div
                    class="rounded-circle bg-primary-emphasis text-center d-flex align-items-center justify-content-center text-white fs-15 fw-semibold"
                  >
                    P
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
            <router-link
              to="/event-details"
              class="link-btn closed p-12 p-sm-15 p-md-20 d-flex align-items-center justify-content-between w-100 text-decoration-none fw-medium text-muted"
            >
              <span class="position-relative">Closed</span>
              <i class="ph ph-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxxl-4">
      <div class="card mb-25 border-0 rounded-0 bg-white event-card">
        <div class="card-body p-10 letter-spacing">
          <router-link to="/event-details" class="d-block image mb-5">
            <img
              src="../../../assets/images/events/event2.jpg"
              alt="event-image"
            />
          </router-link>
          <div class="p-10 p-md-20">
            <div
              class="mb-12 mb-md-20 d-flex align-items-center justify-content-between"
            >
              <div class="d-lg-flex align-items-center">
                <div class="date rounded-1 text-center">
                  <span class="d-block bg-primary text-white fs-md-15 fw-bold">
                    Apr
                  </span>
                  <span class="d-block text-black fw-black">14</span>
                </div>
                <div class="ms-lg-20 mt-15 mt-lg-0">
                  <h5 class="fs-15 fs-md-16 fs-lg-18 mb-8 mb-md-12 fw-bold">
                    <router-link
                      to="/event-details"
                      class="text-black text-decoration-none"
                    >
                      React Developer Programme
                    </router-link>
                  </h5>
                  <div class="d-flex align-items-center">
                    <span class="d-block text-muted">
                      Organized by
                      <span class="fw-semibold text-primary"> EnvyTheme </span>
                    </span>
                    <span class="badge text-outline-success ms-10">Open</span>
                  </div>
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
            <p class="text-paragraph lh-base fs-md-15">
              This event combines all the data and backend information to the
              frontend. Organized by EnvyTheme.
            </p>
            <ul class="info-list ps-0 mb-15 list-unstyled">
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  TIME:
                </span>
                +0 765 6785 0000
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  LOCATION:
                </span>
                385 Tremont Ave, East Orange, NJ 07018, United States
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  SPEAKER:
                </span>
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user1.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div
                    class="rounded-circle bg-warning text-center d-flex align-items-center justify-content-center text-white fs-15 fw-semibold"
                  >
                    P
                  </div>
                </div>
              </li>
            </ul>
            <router-link
              to="/event-details"
              class="link-btn p-12 p-sm-15 p-md-20 d-flex align-items-center justify-content-between w-100 text-decoration-none fw-medium text-primary"
            >
              <span class="position-relative">Join Event</span>
              <i class="ph ph-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxxl-4">
      <div class="card mb-25 border-0 rounded-0 bg-white event-card">
        <div class="card-body p-10 letter-spacing">
          <router-link to="/event-details" class="d-block image mb-5">
            <img
              src="../../../assets/images/events/event3.jpg"
              alt="event-image"
            />
          </router-link>
          <div class="p-10 p-md-20">
            <div
              class="mb-12 mb-md-20 d-flex align-items-center justify-content-between"
            >
              <div class="d-lg-flex align-items-center">
                <div class="date rounded-1 text-center">
                  <span class="d-block bg-primary text-white fs-md-15 fw-bold">
                    Apr
                  </span>
                  <span class="d-block text-black fw-black">21</span>
                </div>
                <div class="ms-lg-20 mt-15 mt-lg-0">
                  <h5 class="fs-15 fs-md-16 fs-lg-18 mb-8 mb-md-12 fw-bold">
                    <router-link
                      to="/event-details"
                      class="text-black text-decoration-none"
                    >
                      Branding Design Sprint 2023
                    </router-link>
                  </h5>
                  <div class="d-flex align-items-center">
                    <span class="d-block text-muted">
                      Organized by
                      <span class="fw-semibold text-primary"> EnvyTheme </span>
                    </span>
                    <span class="badge text-outline-success ms-10">Open</span>
                  </div>
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
            <p class="text-paragraph lh-base fs-md-15">
              This event combines all the data and backend information to the
              frontend. Organized by EnvyTheme.
            </p>
            <ul class="info-list ps-0 mb-15 list-unstyled">
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  TIME:
                </span>
                +3 342 0000 4325
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  LOCATION:
                </span>
                400 High St, City of Orange, NJ 07050, United States
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  SPEAKER:
                </span>
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user4.jpg"
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
            <router-link
              to="/event-details"
              class="link-btn p-12 p-sm-15 p-md-20 d-flex align-items-center justify-content-between w-100 text-decoration-none fw-medium text-primary"
            >
              <span class="position-relative">Join Event</span>
              <i class="ph ph-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxxl-4">
      <div class="card mb-25 border-0 rounded-0 bg-white event-card">
        <div class="card-body p-10 letter-spacing">
          <router-link to="/event-details" class="d-block image mb-5">
            <img
              src="../../../assets/images/events/event4.jpg"
              alt="event-image"
            />
          </router-link>
          <div class="p-10 p-md-20">
            <div
              class="mb-12 mb-md-20 d-flex align-items-center justify-content-between"
            >
              <div class="d-lg-flex align-items-center">
                <div class="date rounded-1 text-center">
                  <span class="d-block bg-primary text-white fs-md-15 fw-bold"
                    >Jan</span
                  >
                  <span class="d-block text-black fw-black">10</span>
                </div>
                <div class="ms-lg-20 mt-15 mt-lg-0">
                  <h5 class="fs-15 fs-md-16 fs-lg-18 mb-8 mb-md-12 fw-bold">
                    <router-link
                      to="/event-details"
                      class="text-black text-decoration-none"
                    >
                      Marketing Management Event
                    </router-link>
                  </h5>
                  <div class="d-flex align-items-center">
                    <span class="d-block text-muted">
                      Organized by
                      <span class="fw-semibold text-primary"> EnvyTheme </span>
                    </span>
                    <span class="badge text-outline-success ms-10">Open</span>
                  </div>
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
            <p class="text-paragraph lh-base fs-md-15">
              This event combines all the data and backend information to the
              frontend. Organized by EnvyTheme.
            </p>
            <ul class="info-list ps-0 mb-15 list-unstyled">
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  TIME:
                </span>
                +1 234 4567 5678
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  LOCATION:
                </span>
                795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  SPEAKER:
                </span>
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user14.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div
                    class="rounded-circle bg-primary-emphasis text-center d-flex align-items-center justify-content-center text-white fs-15 fw-semibold"
                  >
                    P
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
            <router-link
              to="/event-details"
              class="link-btn p-12 p-sm-15 p-md-20 d-flex align-items-center justify-content-between w-100 text-decoration-none fw-medium text-primary"
            >
              <span class="position-relative">Join Event</span>
              <i class="ph ph-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxxl-4">
      <div class="card mb-25 border-0 rounded-0 bg-white event-card">
        <div class="card-body p-10 letter-spacing">
          <router-link to="/event-details" class="d-block image mb-5">
            <img
              src="../../../assets/images/events/event5.jpg"
              alt="event-image"
            />
          </router-link>
          <div class="p-10 p-md-20">
            <div
              class="mb-12 mb-md-20 d-flex align-items-center justify-content-between"
            >
              <div class="d-lg-flex align-items-center">
                <div class="date rounded-1 text-center">
                  <span class="d-block bg-primary text-white fs-md-15 fw-bold">
                    Feb
                  </span>
                  <span class="d-block text-black fw-black">28</span>
                </div>
                <div class="ms-lg-20 mt-15 mt-lg-0">
                  <h5 class="fs-15 fs-md-16 fs-lg-18 mb-8 mb-md-12 fw-bold">
                    <router-link
                      to="/event-details"
                      class="text-black text-decoration-none"
                    >
                      AI Revolution Seminar
                    </router-link>
                  </h5>
                  <div class="d-flex align-items-center">
                    <span class="d-block text-muted">
                      Organized by
                      <span class="fw-semibold text-primary"> EnvyTheme </span>
                    </span>
                    <span class="badge text-outline-danger ms-10">Closed</span>
                  </div>
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
            <p class="text-paragraph lh-base fs-md-15">
              This event combines all the data and backend information to the
              frontend. Organized by EnvyTheme.
            </p>
            <ul class="info-list ps-0 mb-15 list-unstyled">
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  TIME:
                </span>
                +1 234 4567 5678
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  LOCATION:
                </span>
                795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  SPEAKER:
                </span>
                <div class="users-list d-flex align-items-center">
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user1.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div
                    class="rounded-circle bg-success text-center d-flex align-items-center justify-content-center text-white fs-15 fw-semibold"
                  >
                    T
                  </div>
                </div>
              </li>
            </ul>
            <router-link
              to="/event-details"
              class="link-btn p-12 p-sm-15 p-md-20 d-flex align-items-center justify-content-between w-100 text-decoration-none fw-medium text-primary"
            >
              <span class="position-relative">Join Event</span>
              <i class="ph ph-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxxl-4">
      <div class="card mb-25 border-0 rounded-0 bg-white event-card">
        <div class="card-body p-10 letter-spacing">
          <router-link to="/event-details" class="d-block image mb-5">
            <img
              src="../../../assets/images/events/event6.jpg"
              alt="event-image"
            />
          </router-link>
          <div class="p-10 p-md-20">
            <div
              class="mb-12 mb-md-20 d-flex align-items-center justify-content-between"
            >
              <div class="d-lg-flex align-items-center">
                <div class="date rounded-1 text-center">
                  <span class="d-block bg-primary text-white fs-md-15 fw-bold">
                    Dec
                  </span>
                  <span class="d-block text-black fw-black">21</span>
                </div>
                <div class="ms-lg-20 mt-15 mt-lg-0">
                  <h5 class="fs-15 fs-md-16 fs-lg-18 mb-8 mb-md-12 fw-bold">
                    <router-link
                      to="/event-details"
                      class="text-black text-decoration-none"
                    >
                      Desk Job Event
                    </router-link>
                  </h5>
                  <div class="d-flex align-items-center">
                    <span class="d-block text-muted">
                      Organized by
                      <span class="fw-semibold text-primary"> EnvyTheme </span>
                    </span>
                    <span class="badge text-outline-success ms-10">Open</span>
                  </div>
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
            <p class="text-paragraph lh-base fs-md-15">
              This event combines all the data and backend information to the
              frontend. Organized by EnvyTheme.
            </p>
            <ul class="info-list ps-0 mb-15 list-unstyled">
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  TIME:
                </span>
                +1 234 4567 5678
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  LOCATION:
                </span>
                795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States
              </li>
              <li class="text-paragraph fs-md-15 fs-lg-16 position-relative">
                <span class="fw-semibold text-muted fs-12 fs-md-13 fs-lg-14">
                  SPEAKER:
                </span>
                <div class="users-list d-flex align-items-center">
                  <div
                    class="rounded-circle bg-danger text-center d-flex align-items-center justify-content-center text-white fs-15 fw-semibold"
                  >
                    X
                  </div>
                  <div class="rounded-circle text-center">
                    <img
                      src="../../../assets/images/user/user11.jpg"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                </div>
              </li>
            </ul>
            <router-link
              to="/event-details"
              class="link-btn closed p-12 p-sm-15 p-md-20 d-flex align-items-center justify-content-between w-100 text-decoration-none fw-medium text-muted"
            >
              <span class="position-relative">Closed</span>
              <i class="ph ph-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div
        class="pagination-area d-md-flex mb-25 justify-content-between align-items-center"
      >
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">06</span> out of
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
  name: "EventsGrid",
};
</script>