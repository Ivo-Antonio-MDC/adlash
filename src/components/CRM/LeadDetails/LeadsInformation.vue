<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white letter-spacing lead-info-box"
  >
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <div class="profile-info d-sm-flex align-items-center">
        <img
          src="../../../assets/images/user/user14.jpg"
          class="rounded"
          alt="user"
        />
        <div class="title mt-12 mt-sm-0">
          <h5 class="text-black fw-medium mb-8">Jonathon Ronan</h5>
          <span class="d-block fs-md-15 fs-lg-16 text-dark-emphasis mb-8">
            Chief Software Developer
          </span>
          <span class="d-block fw-bold text-primary"> Solit IT Solution </span>
        </div>
      </div>
      <div
        class="border-top mt-15 mb-15 mt-sm-20 mb-sm-20 mt-md-25 mb-md-25 mt-lg-30 mb-lg-30"
      ></div>
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="fw-medium text-black-emphasis mb-0">Lead’s Information</h5>
        <router-link
          to="/lead-details"
          class="d-inline-block text-decoration-none lh-1 text-muted fw-medium"
        >
          <i
            class="ph-duotone ph-pencil text-black position-relative top-1 fs-16 me-1"
          ></i>
          Edit
        </router-link>
      </div>
      <ul class="info mt-25 ps-0 mb-0 list-unstyled">
        <li class="position-relative">
          <div class="icon text-success rounded-circle text-center">
            <i class="flaticon-mail-inbox-app"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">Email</span>
          <a
            href="mailto:johnathon23@gmail.com"
            class="d-inline-block fs-md-15 fs-lg-16 text-primary text-decoration-none"
          >
            johnathon23@gmail.com
          </a>
        </li>
        <li class="position-relative">
          <div class="icon text-info rounded-circle text-center">
            <i class="flaticon-telephone-call"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">Phone No</span>
          <a
            href="tel:+1-321-456-8756"
            class="d-inline-block fs-md-15 fs-lg-16 text-muted text-decoration-none"
          >
            +1-321-456-8756
          </a>
        </li>
        <li class="position-relative">
          <div class="icon text-primary rounded-circle text-center">
            <i class="flaticon-web"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">Website</span>
          <a
            href="#"
            target="_blank"
            class="d-inline-block fs-md-15 fs-lg-16 text-muted text-decoration-none"
          >
            Johnydev.com
          </a>
        </li>
        <li class="position-relative">
          <div class="icon text-warning rounded-circle text-center">
            <i class="flaticon-industry"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">Industry</span>
          <span class="d-inline-block fs-md-15 fs-lg-16 text-muted">
            Medium
          </span>
        </li>
        <li class="position-relative">
          <div class="icon text-info rounded-circle text-center">
            <i class="flaticon-employee"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">
            No Of Employees
          </span>
          <span class="d-inline-block fs-md-15 fs-lg-16 text-muted"> 125 </span>
        </li>
        <li class="position-relative">
          <div class="icon text-success rounded-circle text-center">
            <i class="flaticon-money"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">
            Annual Revenue
          </span>
          <span class="d-inline-block fs-md-15 fs-lg-16 text-muted">
            $ 24000 USD
          </span>
        </li>
        <li class="position-relative">
          <div class="icon text-info rounded-circle text-center">
            <i class="flaticon-date-1"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">
            Last Contacted
          </span>
          <span class="d-inline-block fs-md-15 fs-lg-16 text-muted">
            12 March 2023, 10:54 AM
          </span>
        </li>
        <li class="position-relative">
          <div class="icon text-primary rounded-circle text-center">
            <i class="flaticon-search-1"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold"> Lead Source </span>
          <span class="d-inline-block fs-md-15 fs-lg-16 text-muted">
            Social media advertisement
          </span>
        </li>
        <li class="position-relative">
          <div class="icon text-warning rounded-circle text-center">
            <i class="flaticon-status"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold"> Lead Status </span>
          <span class="badge text-outline-info">New Lead</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeadsInformation",
};
</script>