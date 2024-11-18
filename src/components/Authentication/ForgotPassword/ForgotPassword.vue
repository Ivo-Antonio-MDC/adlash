<template>
  <div class="row justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-9 col-xxl-8 col-xxxl-6">
      <div class="card mb-25 border-0 rounded-0 bg-white authentication-card">
        <div class="card-body letter-spacing">
          <h4 class="text-black fw-bold mb-0 text-center">Forgot Password?</h4>
          <p class="mb-0 fs-md-15 fs-lg-16 text-paragraph text-center sub-text">
            Enter your email address below and we will send you the recovered
            password
          </p>
          <form>
            <div class="form-group mb-15 mb-sm-20">
              <label class="d-block text-black fw-semibold mb-10">
                Email Address
              </label>
              <input
                type="email"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. adam127704@gmail.com"
              />
            </div>
            <button
              class="default-btn transition border-0 fw-medium text-white rounded-1 fs-md-15 fs-lg-16 d-block w-100"
              type="submit"
            >
              Submit
            </button>
            <div class="text-center mt-15 mt-sm-20 mt-md-25">
              <router-link
                to="/login"
                class="link-btn text-decoration-none text-primary fw-medium fs-md-15 fs-lg-16 position-relative"
              >
                <i class="ph-bold ph-arrow-left"></i>
                Back To Sign In
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
};
</script>