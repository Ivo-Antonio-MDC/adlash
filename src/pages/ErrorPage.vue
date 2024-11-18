<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white text-center error-404-card"
  >
    <div class="card-body letter-spacing">
      <img src="../assets/images/error-404.png" alt="error-image" />
      <h1 class="fw-bold text-black">OOPS! 404 Page Not Found!</h1>
      <router-link
        class="default-btn transition text-decoration-none border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
        to="/"
      >
        Back To Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>