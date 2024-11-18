<template>
  <div class="card mb-25 border-0 rounded-0 bg-white monthly-new-customers-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="title">
        <span
          class="d-block mb-6 fs-13 text-uppercase fw-medium text-dark-emphasis"
        >
          NEW CUSTOMERS THIS MONTH
        </span>
        <h4 class="fw-black mb-12 lh-1">4.5 K</h4>
        <span class="fw-bold text-success text-badge d-inline-block">
          4.3%
          <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
        </span>
      </div>
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
          class="rounded-circle bg-primary-emphasis text-center d-flex align-items-center justify-content-center text-white fs-16 fw-bold"
        >
          P
        </div>
        <div class="rounded-circle text-center">
          <img
            src="../../../assets/images/user/user4.jpg"
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
            src="../../../assets/images/user/user3.jpg"
            class="rounded-circle"
            alt="user"
          />
        </div>
        <div
          class="rounded-circle bg-secondary text-center d-flex align-items-center justify-content-center text-white fs-14 fw-bold"
        >
          +24
        </div>
        <span class="text-black fw-bold ms-25 ms-md-30">Joined Today</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewCustomersThisMonth",
};
</script>