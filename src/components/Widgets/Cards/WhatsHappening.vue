<template>
  <div class="card mb-25 border-0 rounded-0 welcome-lms-courses-box">
    <div
      class="card-body ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30 ps-xl-40 pe-xl-40 letter-spacing"
    >
      <div class="row align-items-center">
        <div class="col-xxl-6">
          <div class="content">
            <span class="d-block fw-bold mb-5" id="current-date"></span>
            <h2 class="fw-semibold mb-8 text-white">
              Welcome Back,
              <span class="fw-bold text-white">Angela Carter!</span>
            </h2>
            <p class="fs-md-15 fs-lg-16">
              See What’s happening with your courses and students.
            </p>
            <div class="row list justify-content-center">
              <div class="col-lg-3 col-6 col-sm-3">
                <div class="p-15 bg-f2f1f9 mt-15">
                  <span
                    class="d-block mb-6 fw-medium text-black-emphasis fs-13 text-uppercase"
                    >COURSES</span
                  >
                  <h4 class="mb-0 fw-black text-primary">23</h4>
                </div>
              </div>
              <div class="col-lg-3 col-6 col-sm-3">
                <div class="p-15 bg-faf7f7 mt-15">
                  <span
                    class="d-block mb-6 fw-medium text-black-emphasis fs-13 text-uppercase"
                    >CERTIFICATES</span
                  >
                  <h4 class="mb-0 fw-black text-danger">9</h4>
                </div>
              </div>
              <div class="col-lg-3 col-6 col-sm-3">
                <div class="p-15 bg-ecf3f2 mt-15">
                  <span
                    class="d-block mb-6 fw-medium text-black-emphasis fs-13 text-uppercase"
                    >SCORE</span
                  >
                  <h4 class="mb-0 fw-black text-success">4.8</h4>
                </div>
              </div>
              <div class="col-lg-3 col-6 col-sm-3">
                <div class="p-15 bg-f3f7f9 mt-15">
                  <span
                    class="d-block mb-6 fw-medium text-black-emphasis fs-13 text-uppercase"
                    >HRS LEARNED</span
                  >
                  <h4 class="mb-0 fw-black text-info">822</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 text-center text-xxl-end mt-15 mt-md-0">
          <img
            src="../../../assets/images/welcome/welcome3.png"
            class="main-image"
            alt="welcome-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatsHappening",
};
</script>