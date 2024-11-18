<template>
  <div class="row">
    <div class="col-lg-4 col-xxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white box-shadow emails-sidebar-box"
      >
        <div class="card-body p-15 p-sm-20 p-md-25 letter-spacing">
          <form class="search-box position-relative mb-15">
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
            type="button"
            class="d-block text-center w-100 bg-primary border-0 box-shadow fw-medium text-white rounded-1 pt-12 pb-12 ps-25 pe-25"
            @click="toggleComposeEmailClass"
          >
            Compose Email
          </button>
          <span
            class="sub-title text-uppercase mt-20 mt-md-30 mb-15 mb-md-20 fw-medium fs-13 text-muted d-block"
          >
            MailBox
          </span>
          <ul class="list ps-0 mb-0 list-unstyled">
            <li>
              <router-link
                to="/emails"
                class="d-block text-decoration-none lh-1 transition active"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-envelope"></i>
                  Inbox
                </div>
                <span
                  class="rounded-circle dot-badge bg-danger text-white d-inline-block text-center fs-12 fw-semibold"
                >
                  12
                </span>
              </router-link>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-snooze"></i>
                  Snoozed
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-draft"></i>
                  Draft
                </div>
                <span
                  class="rounded-circle dot-badge bg-success text-white d-inline-block text-center fs-12 fw-semibold"
                >
                  2
                </span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-status"></i>
                  Sent Email
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-delete"></i>
                  Trash
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-spam"></i>
                  Spam
                </div>
                <span
                  class="rounded-circle dot-badge bg-warning text-white d-inline-block text-center fs-12 fw-semibold"
                >
                  4
                </span>
              </a>
            </li>
          </ul>
          <span
            class="sub-title text-uppercase mt-20 mt-md-30 mb-15 mb-md-20 fw-medium fs-13 text-muted d-block"
          >
            Filters
          </span>
          <ul class="list ps-0 mb-0 list-unstyled">
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-star-3"></i>
                  Starred
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-pin-1"></i>
                  Important
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-xxl-9">
      <div
        class="card mb-25 border-0 rounded-0 bg-white box-shadow emails-list-box letter-spacing"
      >
        <div
          class="card-head box-shadow bg-white d-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <div class="left d-flex align-items-center">
            <div class="form-check mb-0 me-10">
              <input class="form-check-input shadow-none" type="checkbox" />
            </div>
            <button
              type="button"
              class="bg-transparent p-0 border-0 lh-1 text-muted position-relative top-2"
            >
              <i class="flaticon-logout"></i>
            </button>
          </div>
          <div class="right d-flex align-items-center">
            <ul
              class="info-list mb-0 list-unstyled position-relative top-3 me-10"
            >
              <li class="d-inline-block">
                <button
                  type="button"
                  class="bg-transparent border-0 p-0 text-paragraph lh-1"
                >
                  <i class="flaticon-copy"></i>
                </button>
              </li>
              <li class="d-inline-block">
                <button
                  type="button"
                  class="bg-transparent border-0 p-0 text-paragraph lh-1"
                >
                  <i class="flaticon-delete"></i>
                </button>
              </li>
              <li class="d-inline-block">
                <button
                  type="button"
                  class="bg-transparent border-0 p-0 text-paragraph lh-1"
                >
                  <i class="flaticon-star-3"></i>
                </button>
              </li>
              <li class="d-inline-block">
                <button
                  type="button"
                  class="bg-transparent border-0 p-0 text-paragraph lh-1"
                >
                  <i class="flaticon-price-tag-1"></i>
                </button>
              </li>
            </ul>
            <button
              class="dot-btn lh-1 position-relative top-1 bg-transparent border-0 shadow-none p-0 transition mt-10 mt-sm-0"
              type="button"
            >
              <i class="flaticon-dots"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="emails-list ps-0 mb-0 list-unstyled">
            <div class="email-item position-relative">
              <div class="row align-items-center">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-3"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user3.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span class="fs-md-15 fs-xxxl-16 fw-bold ms-7 lh-1">
                          J. Ronan
                        </span>
                      </div>
                    </div>
                    <span class="badge text-outline-success">New</span>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-xxxl-16 fw-medium text-black"
                    >
                      Analyse Dashboard Data -
                      <span class="fw-normal text-muted">
                        How to do the work property
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">9:30 AM</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list ps-0 mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item position-relative">
              <div class="row align-items-center">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-3"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user12.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span class="fs-md-15 fs-xxxl-16 fw-bold ms-7 lh-1"
                          >D. Angela</span
                        >
                      </div>
                    </div>
                    <span class="badge text-outline-success">New</span>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-xxxl-16 fw-medium text-black"
                    >
                      Our Visual Design Can Lead -
                      <span class="fw-normal text-muted"
                        >How to do the work property in a short time</span
                      >
                    </p>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">8:08 AM</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item bg-color position-relative">
              <div class="row align-items-center">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-3"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/icon/facebook.png"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="facebook"
                        />
                        <span
                          class="fs-md-15 fs-lg-16 fw-semibold ms-7 lh-1 text-dark-emphasis"
                          >Facebook</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-lg-16 fw-medium text-paragraph"
                    >
                      Analyse Dashboard Data -
                      <span class="fw-normal text-muted"
                        >How to do the work property</span
                      >
                    </p>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">6:14 AM</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item position-relative">
              <div class="row">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-warning lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-1"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user7.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span class="fs-md-15 fs-xxxl-16 fw-bold ms-7 lh-1"
                          >J. Pinkman, Me (12)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-xxxl-16 fw-medium text-black"
                    >
                      Analyse Dashboard Data -
                      <span class="fw-normal text-muted"
                        >How to do the work property, giving some file of the
                        project</span
                      >
                    </p>
                    <div class="buttons-list">
                      <a
                        href="#"
                        target="_blank"
                        class="d-inline-block text-decoration-none text-black position-relative transition"
                      >
                        <i class="flaticon-gallery-1"></i> Dashboard.jpg
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        class="d-inline-block text-decoration-none text-black position-relative transition"
                      >
                        <i class="flaticon-gallery-1"></i> Structure.png
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">4:13 AM</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item bg-color position-relative">
              <div class="row align-items-center">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-warning lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-1"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user8.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span
                          class="fs-md-15 fs-xxxl-16 fw-semibold ms-7 lh-1 text-paragraph"
                          >Jennilia</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-lg-16 fw-medium text-paragraph"
                    >
                      Hello – Trip home from 🎉 Colombo
                      <span class="fw-normal text-muted"
                        >has been arranged, then Jenna will com...</span
                      >
                    </p>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">19 Mar</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item bg-color position-relative">
              <div class="row align-items-center">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-3"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user1.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span
                          class="fs-md-15 fs-xxxl-16 fw-semibold ms-7 lh-1 text-paragraph"
                          >Robert Bruce</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-lg-16 fw-medium text-paragraph"
                    >
                      New Ticket Reply -
                      <span class="fw-normal text-muted"
                        >eDemy - Michel Valenzuela</span
                      >
                    </p>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">18 Mar</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item position-relative">
              <div class="row align-items-center">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user5.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span
                          class="fs-md-15 fs-xxxl-16 fw-semibold ms-7 lh-1 text-paragraph"
                          >Jenny Anderson</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-lg-16 fw-medium text-paragraph"
                    >
                      New Ticket Reply -
                      <span class="fw-normal text-muted"
                        >Abev - Manos Pappas</span
                      >
                    </p>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">17 Mar</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item bg-color position-relative">
              <div class="row">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user7.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span
                          class="fs-md-15 fs-xxxl-16 fw-semibold ms-7 lh-1 text-paragraph"
                          >Victor, Me (03)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-xxxl-16 fw-medium text-black"
                    >
                      For your records,
                      <span class="fw-normal text-muted"
                        >here is a copy of the information you submitted to
                        us...</span
                      >
                    </p>
                    <div class="buttons-list">
                      <a
                        href="#"
                        target="_blank"
                        class="d-inline-block text-decoration-none text-black position-relative transition"
                      >
                        <i class="flaticon-gallery-1"></i> Task_Management.jpg
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">16 Mar</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item bg-color position-relative">
              <div class="row align-items-center">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-3"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user4.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span
                          class="fs-md-15 fs-xxxl-16 fw-semibold ms-7 lh-1 text-paragraph"
                          >Sandy Smith</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-lg-16 fw-medium text-paragraph"
                    >
                      Weekend on Revibe –
                      <span class="fw-normal text-muted"
                        >Today's Friday and we thought maybe you want so</span
                      >
                    </p>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">15 Mar</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item bg-color position-relative">
              <div class="row align-items-center">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-3"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user2.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span
                          class="fs-md-15 fs-xxxl-16 fw-semibold ms-7 lh-1 text-paragraph"
                          >Britteney</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-lg-16 fw-medium text-paragraph"
                    >
                      Dealing with Technical or Professional |
                      <span class="fw-normal text-muted"
                        >Avoiding 3 Common Pitfalls of Affinity
                        Diagramming</span
                      >
                    </p>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">15 Mar</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item bg-color position-relative">
              <div class="row align-items-center">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-3"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user10.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span
                          class="fs-md-15 fs-xxxl-16 fw-semibold ms-7 lh-1 text-paragraph"
                          >Robert Bruce</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-lg-16 fw-medium text-paragraph"
                    >
                      How to take the headache out of Order -
                      <span class="fw-normal text-muted"
                        >Hello! As I've mentioned before, we have..</span
                      >
                    </p>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">14 Mar</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item position-relative">
              <div class="row">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-warning lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-1"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user6.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span class="fs-md-15 fs-xxxl-16 fw-bold ms-7 lh-1"
                          >D. Warner, Me (10)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-xxxl-16 fw-medium text-black"
                    >
                      Analyse Dashboard Data -
                      <span class="fw-normal text-muted"
                        >How to do the work property, giving some file of the
                        project</span
                      >
                    </p>
                    <div class="buttons-list">
                      <a
                        href="#"
                        target="_blank"
                        class="d-inline-block text-decoration-none text-black position-relative transition"
                      >
                        <i class="flaticon-gallery-1"></i> Dashboard.jpg
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        class="d-inline-block text-decoration-none text-black position-relative transition"
                      >
                        <i class="flaticon-gallery-1"></i> Structure.png
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">13 Mar</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item bg-color position-relative">
              <div class="row align-items-center">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star-3"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/icon/facebook.png"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="facebook"
                        />
                        <span
                          class="fs-md-15 fs-lg-16 fw-semibold ms-7 lh-1 text-dark-emphasis"
                          >Facebook</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-lg-16 fw-medium text-paragraph"
                    >
                      Analyse Dashboard Data -
                      <span class="fw-normal text-muted"
                        >How to do the work property</span
                      >
                    </p>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">12 Mar</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              ></router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="email-item bg-color position-relative">
              <div class="row">
                <div class="col-xxl-4">
                  <div
                    class="email-info d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input shadow-none"
                          type="checkbox"
                        />
                      </div>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                      >
                        <i class="flaticon-star"></i>
                      </button>
                      <div class="d-flex align-items-center user ms-15">
                        <img
                          src="../../../assets/images/user/user7.jpg"
                          width="24"
                          height="24"
                          class="rounded-circle"
                          alt="user"
                        />
                        <span
                          class="fs-md-15 fs-xxxl-16 fw-semibold ms-7 lh-1 text-paragraph"
                          >Victor, Me (03)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7">
                  <div class="email-title">
                    <p
                      class="d-block mb-0 fs-md-15 fs-xxxl-16 fw-medium text-black"
                    >
                      For your records,
                      <span class="fw-normal text-muted"
                        >here is a copy of the information you submitted to
                        us...</span
                      >
                    </p>
                    <div class="buttons-list">
                      <a
                        href="#"
                        target="_blank"
                        class="d-inline-block text-decoration-none text-black position-relative transition"
                      >
                        <i class="flaticon-gallery-1"></i> Task_Management.jpg
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-1 text-xxl-end">
                  <span class="d-block text-black fs-13 time">11 Mar</span>
                </div>
              </div>
              <router-link
                to="/read-email"
                class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
              >
              </router-link>
              <ul class="info-list mb-0 list-unstyled">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-copy"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-delete"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-star-3"></i>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent border-0 p-0 text-paragraph lh-1"
                  >
                    <i class="flaticon-price-tag-1"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="pagination-area d-md-flex ps-15 ps-sm-20 ps-md-25 pe-15 pe-sm-20 pe-md-25 mt-15 mt-sm-20 mb-15 mb-sm-20 justify-content-between align-items-center"
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
    </div>
  </div>

  <div
    :class="['compose-email-modal', { active: isSidebarActive }]"
    id="compose-email-modal"
  >
    <div class="compose-email-modal-dialog">
      <div
        class="compose-email-modal-header d-flex align-items-center justify-content-between p-15 ps-sm-20 p-md-25"
      >
        <h5 class="mb-0 text-black fw-bold">New Message</h5>
        <button
          class="close-btn bg-transparent border-0 p-0"
          type="button"
          @click="toggleComposeEmailClass"
        >
          <i class="flaticon-close"></i>
        </button>
      </div>
      <div class="compose-email-modal-body p-15 ps-sm-20 p-md-25">
        <form>
          <div class="form-group mb-15 mb-md-25">
            <label class="d-block text-black fw-semibold mb-10">To</label>
            <input
              type="email"
              class="form-control shadow-none rounded-0 text-black"
              placeholder="e.g. johny12345@gmail.com"
            />
          </div>
          <div class="form-group mb-15 mb-md-25">
            <label class="d-block text-black fw-semibold mb-10">Subject</label>
            <input
              type="text"
              class="form-control shadow-none rounded-0 text-black"
              placeholder="e.g. Our visual design can lead you"
            />
          </div>
          <div class="form-group mb-15 mb-md-25">
            <label class="d-block text-black fw-semibold mb-10">
              Write Message
            </label>
            <QuillEditor
              theme="snow"
              placeholder="Write your message here"
              toolbar="full"
            />
          </div>
          <button
            class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16"
            type="submit"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlotFormatter from "quill-blot-formatter";
import ImageUploader from "quill-image-uploader";
import axios from "axios";

export default defineComponent({
  name: "EmailsContent",
  data() {
    return {
      isSidebarActive: false,
    };
  },
  methods: {
    toggleComposeEmailClass() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
  setup: () => {
    const modules = {
      module: BlotFormatter,
      ImageUploader,
      options: {
        upload: (file: string | Blob) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("image", file);

            axios
              .post("/upload-image", formData)
              .then((res: { data: { url: unknown } }) => {
                console.log(res);
                resolve(res.data.url);
              })
              .catch((err: unknown) => {
                reject("Upload failed");
                console.error("Error:", err);
              });
          });
        },
      },
    };
    return { modules };
  },
});
</script>