<template>
  <div class="row">
    <div class="col-lg-4 col-xxxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing chat-sidebar"
      >
        <div class="card-body">
          <form class="search-box position-relative">
            <input
              type="text"
              class="form-control shadow-none text-black rounded-0 border-0"
              placeholder="Search message"
            />
            <button
              type="submit"
              class="bg-transparent text-primary transition p-0 border-0"
            >
              <i class="flaticon-search-interface-symbol"></i>
            </button>
          </form>
          <div class="chat-tabs">
            <router-link
              to="/chat"
              class="text-decoration-none fw-medium transition text-center d-block"
            >
              Private
            </router-link>
            <router-link
              to="/chat-group"
              class="text-decoration-none fw-medium transition text-center d-block"
            >
              Group
            </router-link>
            <router-link
              to="/chat-contact"
              class="active text-decoration-none fw-medium transition text-center d-block"
            >
              Contact
            </router-link>
          </div>
          <div class="chat-users-list">
            <div class="box">
              <span
                class="d-inline-block rounded-circle text-center text-primary fw-bold"
              >
                A
              </span>
            </div>
            <div class="single-user-item pt-15 pb-15 active position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/user/user6.jpg"
                  width="30"
                  height="30"
                  class="rounded-circle"
                  alt="user"
                />
                <span
                  class="d-block text-black fs-md-15 fs-lg-16 fw-medium ms-12"
                >
                  Adam Smith
                </span>
              </div>
            </div>
            <div class="single-user-item pt-15 pb-15 position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/user/user1.jpg"
                  width="30"
                  height="30"
                  class="rounded-circle"
                  alt="user"
                />
                <span
                  class="d-block text-black fs-md-15 fs-lg-16 fw-medium ms-12"
                >
                  Andrew Carter
                </span>
              </div>
            </div>
            <div class="single-user-item pt-15 pb-15 position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/user/user5.jpg"
                  width="30"
                  height="30"
                  class="rounded-circle"
                  alt="user"
                />
                <span
                  class="d-block text-black fs-md-15 fs-lg-16 fw-medium ms-12"
                >
                  Angela Warren
                </span>
              </div>
            </div>
            <div class="box">
              <span
                class="d-inline-block rounded-circle text-center text-primary fw-bold"
              >
                B
              </span>
            </div>
            <div class="single-user-item pt-15 pb-15 position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/user/user4.jpg"
                  width="30"
                  height="30"
                  class="rounded-circle"
                  alt="user"
                />
                <span
                  class="d-block text-black fs-md-15 fs-lg-16 fw-medium ms-12"
                >
                  Battle Hard
                </span>
              </div>
            </div>
            <div class="single-user-item pt-15 pb-15 position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/user/user7.jpg"
                  width="30"
                  height="30"
                  class="rounded-circle"
                  alt="user"
                />
                <span
                  class="d-block text-black fs-md-15 fs-lg-16 fw-medium ms-12"
                >
                  Bohnny Watson
                </span>
              </div>
            </div>
            <div class="single-user-item pt-15 pb-15 position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/user/user10.jpg"
                  width="30"
                  height="30"
                  class="rounded-circle"
                  alt="user"
                />
                <span
                  class="d-block text-black fs-md-15 fs-lg-16 fw-medium ms-12"
                >
                  Berry Smith
                </span>
              </div>
            </div>
            <div class="single-user-item pt-15 pb-15 position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/user/user3.jpg"
                  width="30"
                  height="30"
                  class="rounded-circle"
                  alt="user"
                />
                <span
                  class="d-block text-black fs-md-15 fs-lg-16 fw-medium ms-12"
                  >Bendra Julian</span
                >
              </div>
            </div>
            <div class="box">
              <span
                class="d-inline-block rounded-circle text-center text-primary fw-bold"
              >
                C
              </span>
            </div>
            <div class="single-user-item pt-15 pb-15 position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/user/user12.jpg"
                  width="30"
                  height="30"
                  class="rounded-circle"
                  alt="user"
                />
                <span
                  class="d-block text-black fs-md-15 fs-lg-16 fw-medium ms-12"
                >
                  Cindrella Watson
                </span>
              </div>
            </div>
            <div class="single-user-item pt-15 pb-15 position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/user/user11.jpg"
                  width="30"
                  height="30"
                  class="rounded-circle"
                  alt="user"
                />
                <span
                  class="d-block text-black fs-md-15 fs-lg-16 fw-medium ms-12"
                >
                  Cyber Lorret
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-xxxl-9">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing chat-card"
      >
        <div
          class="card-head box-shadow bg-white d-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <div class="d-flex align-items-center">
            <img
              src="../../assets/images/user/user6.jpg"
              width="44"
              height="44"
              class="rounded-circle"
              alt="user"
            />
            <div class="ms-15">
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium">
                Adam Smith
              </span>
              <span class="d-block text-success">Active Now</span>
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
                  <i class="ph-bold ph-speaker-simple-slash me-8"></i> Mute Chat
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="javascript:void(0);"
                >
                  <i class="ph-bold ph-trash me-8"></i> Delete
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="javascript:void(0);"
                >
                  <i class="ph-bold ph-warning-circle me-8"></i> Block
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body p-15 p-sm-20 p-md-25">
          <div class="chat-list">
            <div class="chat-item position-relative">
              <img
                src="../../assets/images/user/user6.jpg"
                width="44"
                height="44"
                class="rounded-circle user"
                alt="user"
              />
              <span
                class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-10"
              >
                Adam Smith
                <span class="fs-12 text-muted fw-noarmal ms-5">12th Mar</span>
              </span>
              <div class="message position-relative">
                <div class="inner">
                  <p class="fs-md-15 fs-lg-16 lh-base">
                    Hey Victor! Could you please give me the transaction number
                    that we provide yesterday? We need this for the invoice.
                    After that I will give you the full invoice with payment.
                  </p>
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
                        <i class="ph-bold ph-speaker-simple-slash me-8"></i>
                        Mute Chat
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-trash me-8"></i> Delete
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-warning-circle me-8"></i> Block
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="emoji">
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 transition"
                  >
                    <i class="ph ph-smiley"></i>
                  </button>
                </div>
              </div>
              <div class="message position-relative">
                <div class="inner">
                  <p class="fs-md-15 fs-lg-16 lh-base">
                    Okay. Thanks for your support.
                  </p>
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
                        <i class="ph-bold ph-speaker-simple-slash me-8"></i>
                        Mute Chat
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-trash me-8"></i> Delete
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-warning-circle me-8"></i> Block
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="emoji">
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 transition"
                  >
                    <i class="ph ph-smiley"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="chat-item position-relative right">
              <span class="fs-12 text-muted fw-noarmal d-block mb-10"
                >12th Mar</span
              >
              <div class="message position-relative">
                <div class="inner">
                  <p class="fs-md-15 fs-lg-16 lh-base">
                    Oh Sure! Here’s the transaction number: 32x43l56uvtrc5T
                  </p>
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
                        <i class="ph-bold ph-speaker-simple-slash me-8"></i>
                        Mute Chat
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-trash me-8"></i> Delete
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-warning-circle me-8"></i> Block
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="emoji">
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 transition"
                  >
                    <i class="ph ph-smiley"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="chat-item info text-center position-relative">
              <span
                class="d-inline-block fs-12 text-muted bg-white ps-12 pe-12 lh-1"
                >Today</span
              >
            </div>
            <div class="chat-item position-relative">
              <img
                src="../../assets/images/user/user6.jpg"
                width="44"
                height="44"
                class="rounded-circle user"
                alt="user"
              />
              <span
                class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-10"
              >
                Adam Smith
                <span class="fs-12 text-muted fw-noarmal ms-5"
                  >35 mins ago</span
                >
              </span>
              <div class="message position-relative">
                <div class="inner">
                  <p class="fs-md-15 fs-lg-16 lh-base">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using lorem Ipsum is that it has a
                    more-or-less.
                  </p>
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
                        <i class="ph-bold ph-speaker-simple-slash me-8"></i>
                        Mute Chat
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-trash me-8"></i> Delete
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-warning-circle me-8"></i> Block
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="emoji">
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 transition"
                  >
                    <i class="ph ph-smiley"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="chat-item position-relative right">
              <span class="fs-12 text-muted fw-noarmal d-block mb-10"
                >20 mins ago</span
              >
              <div class="message position-relative">
                <div class="inner">
                  <p class="fs-md-15 fs-lg-16 lh-base">
                    Okay I’m checking the details.
                  </p>
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
                        <i class="ph-bold ph-speaker-simple-slash me-8"></i>
                        Mute Chat
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-trash me-8"></i> Delete
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-warning-circle me-8"></i> Block
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="emoji">
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 transition"
                  >
                    <i class="ph ph-smiley"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="chat-item position-relative">
              <img
                src="../../assets/images/user/user6.jpg"
                width="44"
                height="44"
                class="rounded-circle user"
                alt="user"
              />
              <span
                class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-10"
              >
                Adam Smith
                <span class="fs-12 text-muted fw-noarmal ms-5"
                  >10 mins ago</span
                >
              </span>
              <div class="message position-relative">
                <div class="inner">
                  <p class="fs-md-15 fs-lg-16 lh-base">
                    Okay. Thanks for your support.
                  </p>
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
                        <i class="ph-bold ph-speaker-simple-slash me-8"></i>
                        Mute Chat
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-trash me-8"></i> Delete
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <i class="ph-bold ph-warning-circle me-8"></i> Block
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="emoji">
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 transition"
                  >
                    <i class="ph ph-smiley"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div class="write-your-message position-relative">
              <div class="write-message position-relative">
                <input
                  type="text"
                  class="input-message d-block w-100 text-black fs-14"
                  placeholder="Type your message here"
                />
                <button
                  type="button"
                  class="bg-transparent p-0 border-0 transition"
                >
                  <i class="ph ph-smiley"></i>
                </button>
              </div>
              <div class="buttons-list">
                <button
                  type="button"
                  class="border-0 d-inline-block position-relative text-center transition"
                >
                  <i class="flaticon-gallery-1"></i>
                </button>
                <button
                  type="button"
                  class="border-0 d-inline-block position-relative text-center transition"
                >
                  <i class="flaticon-link-1"></i>
                </button>
                <button
                  type="button"
                  class="border-0 d-inline-block position-relative text-center transition active"
                >
                  <i class="flaticon-airplane"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatContact",
};
</script>