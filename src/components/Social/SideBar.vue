<template>
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
      <div
        class="user-info d-sm-flex align-items-center justify-content-between"
      >
        <div class="d-flex align-items-center">
          <div class="image">
            <img
              src="../../assets/images/user/user7.jpg"
              class="rounded-circle"
              width="85"
              height="85"
              alt="user"
            />
          </div>
          <div class="ms-15 ms-md-20">
            <h5 class="text-black fw-black mb-1">Victor James</h5>
            <span class="d-block text-muted">@victordynamic</span>
          </div>
        </div>
        <router-link
          to="/profile-settings"
          class="border-0 bg-gray fs-13 fw-medium text-primary ps-8 pe-8 pt-1 pb-1 text-decoration-none d-inline-block mt-12 mt-sm-0"
        >
          Edit Profile
          <i class="ph-bold ph-pencil-simple lh-1 position-relative top-1"></i>
        </router-link>
      </div>
      <div class="content pe-0">
        <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-8">
          About Me
        </span>
        <p class="fs-md-15 mb-0 text-paragraph lh-base">
          This event combines all the data and backend information to the
          frontend. Organized by EnvyTheme.
        </p>
      </div>
      <div class="content pe-0">
        <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-8">
          Work
        </span>
        <p class="fs-md-15 mb-0 text-paragraph lh-base">
          Working as <span class="fw-medium">UI/UX Designer</span>
        </p>
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
  <div class="card mb-25 border-0 rounded-0 bg-white social-friends-card">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="mb-15 mb-md-20 mb-lg-25">
        <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
          Friends <span class="text-muted">(543)</span>
        </h5>
      </div>
      <ul class="ps-0 mb-0 list-unstyled">
        <li class="d-sm-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img
              src="../../assets/images/user/user7.jpg"
              width="50"
              height="50"
              class="rounded-circle"
              alt="user"
            />
            <div class="ms-12">
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-1">
                Victor James
              </span>
              <span class="d-block text-muted">
                Working In
                <span class="fw-semibold">Google</span>
              </span>
            </div>
          </div>
          <router-link
            to="/social-timeline"
            class="border-0 bg-gray fs-13 fw-medium text-primary ps-8 pe-8 pt-1 pb-1 text-decoration-none d-inline-block mt-12 mt-sm-0"
          >
            View Profile
          </router-link>
        </li>
        <li class="d-sm-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img
              src="../../assets/images/user/user1.jpg"
              width="50"
              height="50"
              class="rounded-circle"
              alt="user"
            />
            <div class="ms-12">
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-1">
                Jonathon Ronan
              </span>
              <span class="d-block text-muted">
                Working In
                <span class="fw-semibold">Meta</span>
              </span>
            </div>
          </div>
          <router-link
            to="/social-timeline"
            class="border-0 bg-gray fs-13 fw-medium text-primary ps-8 pe-8 pt-1 pb-1 text-decoration-none d-inline-block mt-12 mt-sm-0"
          >
            View Profile
          </router-link>
        </li>
        <li class="d-sm-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img
              src="../../assets/images/user/user8.jpg"
              width="50"
              height="50"
              class="rounded-circle"
              alt="user"
            />
            <div class="ms-12">
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-1">
                Skyler White
              </span>
              <span class="d-block text-muted">
                Working In
                <span class="fw-semibold">Instagram</span>
              </span>
            </div>
          </div>
          <router-link
            to="/social-timeline"
            class="border-0 bg-gray fs-13 fw-medium text-primary ps-8 pe-8 pt-1 pb-1 text-decoration-none d-inline-block mt-12 mt-sm-0"
          >
            View Profile
          </router-link>
        </li>
        <li class="d-sm-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img
              src="../../assets/images/user/user2.jpg"
              width="50"
              height="50"
              class="rounded-circle"
              alt="user"
            />
            <div class="ms-12">
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-1">
                Angela Carter
              </span>
              <span class="d-block text-muted">
                Working In
                <span class="fw-semibold">YouTube</span>
              </span>
            </div>
          </div>
          <router-link
            to="/social-timeline"
            class="border-0 bg-gray fs-13 fw-medium text-primary ps-8 pe-8 pt-1 pb-1 text-decoration-none d-inline-block mt-12 mt-sm-0"
          >
            View Profile
          </router-link>
        </li>
        <li class="d-sm-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img
              src="../../assets/images/user/user5.jpg"
              width="50"
              height="50"
              class="rounded-circle"
              alt="user"
            />
            <div class="ms-12">
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-1">
                Jane Ronan
              </span>
              <span class="d-block text-muted">
                Working In
                <span class="fw-semibold">Linkedin</span>
              </span>
            </div>
          </div>
          <router-link
            to="/social-timeline"
            class="border-0 bg-gray fs-13 fw-medium text-primary ps-8 pe-8 pt-1 pb-1 text-decoration-none d-inline-block mt-12 mt-sm-0"
          >
            View Profile
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white social-photos-card">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-20 d-flex align-items-center justify-content-between"
      >
        <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">Photos</h5>
        <router-link
          to="/social-timeline"
          class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block mt-10 mt-sm-0"
        >
          View All Photos
        </router-link>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="mb-10">
            <img
              src="../../assets/images/social/social1.jpg"
              alt="social-image"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="mb-10">
            <img
              src="../../assets/images/social/social2.jpg"
              alt="social-image"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="mb-10">
            <img
              src="../../assets/images/social/social3.jpg"
              alt="social-image"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="mb-10">
            <img
              src="../../assets/images/social/social4.jpg"
              alt="social-image"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="mb-10">
            <img
              src="../../assets/images/social/social5.jpg"
              alt="social-image"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="mb-10">
            <img
              src="../../assets/images/social/social6.jpg"
              alt="social-image"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="mb-10">
            <img
              src="../../assets/images/social/social7.jpg"
              alt="social-image"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="mb-10">
            <img
              src="../../assets/images/social/social8.jpg"
              alt="social-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>