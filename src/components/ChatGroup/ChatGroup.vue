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
              class="active text-decoration-none fw-medium transition text-center d-block"
            >
              Group
            </router-link>
            <router-link
              to="/chat-contact"
              class="text-decoration-none fw-medium transition text-center d-block"
            >
              Contact
            </router-link>
          </div>
          <div class="create-new-group-btn">
            <button
              type="button"
              class="d-block fs-md-15 fs-lg-16 fw-medium d-block w-100 text-center bg-info border-0 text-white position-relative"
            >
              Create New Group <i class="flaticon-plus"></i>
            </button>
          </div>
          <div class="chat-users-list">
            <div class="single-user-item active position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/projects/project-mini2.jpg"
                  width="44"
                  height="44"
                  class="rounded-circle"
                  alt="user"
                />
                <div class="ms-12">
                  <span
                    class="title d-block text-black fs-md-15 fs-lg-16 fw-medium"
                  >
                    UI/UX Designer Group
                  </span>
                  <span class="d-block text-black">
                    Divan: Sure I’ll submit the file...
                  </span>
                </div>
              </div>
            </div>
            <div class="single-user-item position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/projects/project-mini1.jpg"
                  width="44"
                  height="44"
                  class="rounded-circle"
                  alt="user"
                />
                <div class="ms-12">
                  <span
                    class="title d-block text-black fs-md-15 fs-lg-16 fw-medium"
                  >
                    Web Development Group
                  </span>
                  <span class="d-block text-muted">
                    Hey Victor! Could you please...
                  </span>
                </div>
              </div>
              <span
                class="dot-badge text-center d-block fs-12 fw-semibold text-white bg-danger rounded-circle"
                >3</span
              >
            </div>
            <div class="single-user-item position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/projects/project-mini3.jpg"
                  width="44"
                  height="44"
                  class="rounded-circle"
                  alt="user"
                />
                <div class="ms-12">
                  <span
                    class="title d-block text-black fs-md-15 fs-lg-16 fw-medium"
                  >
                    Discussion Group
                  </span>
                  <span class="d-block text-muted">
                    How are you Victor? Would you please...
                  </span>
                </div>
              </div>
            </div>
            <div class="single-user-item position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/projects/project-mini4.jpg"
                  width="44"
                  height="44"
                  class="rounded-circle"
                  alt="user"
                />
                <div class="ms-12">
                  <span
                    class="title d-block text-black fs-md-15 fs-lg-16 fw-medium"
                  >
                    Friends
                  </span>
                  <span class="d-block text-muted">
                    Hey Victor! Could you please...
                  </span>
                </div>
              </div>
            </div>
            <div class="single-user-item position-relative">
              <div class="d-flex align-items-center">
                <img
                  src="../../assets/images/projects/project-mini5.jpg"
                  width="44"
                  height="44"
                  class="rounded-circle"
                  alt="user"
                />
                <div class="ms-12">
                  <span
                    class="title d-block text-black fs-md-15 fs-lg-16 fw-medium"
                  >
                    Family
                  </span>
                  <span class="d-block text-muted">
                    How are you Victor? Would you please...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-xxxl-9">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing chat-group-card chat-card"
      >
        <div
          class="card-head box-shadow bg-white d-md-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <div class="d-flex align-items-center">
            <img
              src="../../assets/images/projects/project-mini2.jpg"
              width="44"
              height="44"
              class="rounded-circle"
              alt="user"
            />
            <div class="ms-15">
              <span class="d-block text-black fs-15 fs-md-16 fs-lg-18 fw-bold"
                >UI/UX Designer Group</span
              >
            </div>
          </div>
          <div class="d-flex align-items-center mt-15 mt-md-0">
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
                class="rounded-circle bg-primary-emphasis text-center d-flex align-items-center justify-content-center text-white fs-16 fw-bold"
              >
                P
              </div>
              <div class="rounded-circle text-center">
                <img
                  src="../../assets/images/user/user4.jpg"
                  class="rounded-circle"
                  alt="user"
                />
              </div>
              <div
                class="rounded-circle bg-primary text-center d-flex align-items-center justify-content-center text-white fs-16 fw-bold"
              >
                S
              </div>
              <div class="rounded-circle text-center">
                <img
                  src="../../assets/images/user/user3.jpg"
                  class="rounded-circle"
                  alt="user"
                />
              </div>
              <div
                class="rounded-circle bg-secondary text-center d-flex align-items-center justify-content-center text-white fs-14 fw-bold"
              >
                +24
              </div>
            </div>
            <div class="dropdown ms-8">
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
                    <i class="ph-bold ph-speaker-simple-slash me-8"></i> Mute
                    Chat
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
        </div>
        <div class="card-body p-15 p-sm-20 p-md-25">
          <div class="chat-list">
            <div class="chat-item position-relative">
              <img
                src="../../assets/images/user/user9.jpg"
                width="44"
                height="44"
                class="rounded-circle user"
                alt="user"
              />
              <span
                class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-10"
              >
                Brad Traversy
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
                S. Divan
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
                src="../../assets/images/user/user2.jpg"
                width="44"
                height="44"
                class="rounded-circle user"
                alt="user"
              />
              <span
                class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-10"
              >
                Sarah Taylor
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
  name: "ChatGroup",
};
</script>