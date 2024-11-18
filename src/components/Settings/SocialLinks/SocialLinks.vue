<template>
  <div class="row">
    <div class="col-xxl-8 order-2 order-xl-1">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-10">
          <ul class="settings-tabs ps-0 mb-0 list-unstyled">
            <li>
              <router-link
                to="/account-settings"
                class="fs-md-15 fs-lg-16 fw-medium text-decoration-none d-block w-100 rounded-1 text-center transition"
              >
                Account Settings
              </router-link>
            </li>
            <li>
              <router-link
                to="/settings-change-password"
                class="fs-md-15 fs-lg-16 fw-medium text-decoration-none d-block w-100 rounded-1 text-center transition"
              >
                Change Password
              </router-link>
            </li>
            <li>
              <router-link
                to="/settings-social-links"
                class="fs-md-15 fs-lg-16 fw-medium text-decoration-none d-block w-100 rounded-1 text-center transition"
                >Social Link
              </router-link>
            </li>
            <li>
              <router-link
                to="/settings-privacy-policy"
                class="fs-md-15 fs-lg-16 fw-medium text-decoration-none d-block w-100 rounded-1 text-center transition"
              >
                Privacy Policy
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing settings-card"
      >
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <form>
            <label class="d-block text-black fw-semibold mb-10"
              >Add Social Media Link</label
            >
            <div class="row">
              <div class="col-md-6">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <div class="input-group">
                    <span
                      class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                    >
                      <i class="ph-bold ph-facebook-logo lh-1 fs-md-18"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="facebook@example.com"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <div class="input-group">
                    <span
                      class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                    >
                      <i class="ph-fill ph-twitter-logo lh-1 fs-md-18"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="twitter@example.com"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <div class="input-group">
                    <span
                      class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                    >
                      <i class="ph-bold ph-linkedin-logo lh-1 fs-md-18"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="linkedin@example.com"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <div class="input-group">
                    <span
                      class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                    >
                      <i class="ph-bold ph-instagram-logo lh-1 fs-md-18"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="instagram@example.com"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <div class="input-group">
                    <span
                      class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                    >
                      <i class="ph-bold ph-dribbble-logo lh-1 fs-md-18"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="dribbble@example.com"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-15 mb-sm-20 mb-md-25">
                  <div class="input-group">
                    <span
                      class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                    >
                      <i class="ph-bold ph-behance-logo lh-1 fs-md-18"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="behance@example.com"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-sm-flex align-items-center justify-content-between">
              <button
                class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
                type="submit"
              >
                Save Changes
              </button>
              <button
                type="button"
                class="bg-transparent p-0 border-0 text-danger lh-1 fw-medium mt-15 mt-sm-0"
              >
                <i
                  class="flaticon-delete lh-1 me-1 position-relative top-2"
                ></i>
                <span class="position-relative">Cancel</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 order-1 order-xl-2">
      <div class="card mb-25 border-0 rounded-0 bg-white profile-intro-card">
        <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
          <div
            class="mb-15 mb-md-20 d-flex align-items-center justify-content-between"
          >
            <h5 class="card-title fw-bold mb-0 fs-lg-18">Profile Intro</h5>
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
          <div class="user-info d-flex align-items-center">
            <div class="image position-relative">
              <img
                src="../../../assets/images/user/user7.jpg"
                class="rounded-circle"
                width="85"
                height="85"
                alt="user"
              />
              <div
                class="file-upload text-center bg-white rounded-circle text-primary"
              >
                <i class="flaticon-add-photo"></i>
                <input type="file" />
              </div>
            </div>
            <div class="ms-20">
              <h5 class="text-black fw-black mb-1">Victor James</h5>
              <span class="d-block text-muted">@victordynamic</span>
            </div>
          </div>
          <div class="content position-relative">
            <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-8">
              About Me
            </span>
            <p class="fs-md-15 mb-0 text-paragraph lh-base">
              This event combines all the data and backend information to the
              frontend.
            </p>
            <button
              type="button"
              class="border-0 d-inline-block p-0 rounded-circle text-center transition"
            >
              <i class="ph-duotone ph-pencil-simple"></i>
            </button>
          </div>
          <div class="content position-relative">
            <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-8">
              Work
            </span>
            <p class="fs-md-15 mb-0 text-paragraph lh-base">
              Working as <span class="fw-medium">UI/UX Designer</span>
            </p>
            <button
              type="button"
              class="border-0 d-inline-block p-0 rounded-circle text-center transition"
            >
              <i class="ph-duotone ph-pencil-simple"></i>
            </button>
          </div>
          <div class="row info-card">
            <div class="col-6 col-sm-4 col-xxl-6 col-xxxl-4">
              <div class="info p-10 p-sm-15 p-md-20">
                <span class="d-block text-black-emphasis mb-1">Follower</span>
                <h4 class="d-block text-primary fw-black mb-0">2325</h4>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-xxl-6 col-xxxl-4">
              <div class="info p-10 p-sm-15 p-md-20">
                <span class="d-block text-black-emphasis mb-1">Following</span>
                <h4 class="d-block text-success fw-black mb-0">1506</h4>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-xxl-6 col-xxxl-4">
              <div class="info p-10 p-sm-15 p-md-20">
                <span class="d-block text-black-emphasis mb-1">Likes</span>
                <h4 class="d-block text-info fw-black mb-0">10300</h4>
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
  name: "SocialLinks",
};
</script>