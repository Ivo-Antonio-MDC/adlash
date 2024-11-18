<template>
  <div class="card mb-25 border-0 rounded-0 bg-white most-lead-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div
        class="mb-20 d-sm-flex align-items-center justify-content-between letter-spacing"
      >
        <h5 class="card-title fw-bold mb-0">Most Lead</h5>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Last</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option value="1" class="fw-medium" selected>1 Week</option>
            <option value="2" class="fw-medium">2 Week</option>
            <option value="3" class="fw-medium">3 Week</option>
          </select>
        </div>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li data-bs-toggle="tooltip" data-bs-title="52%">
          <div class="row align-items-center">
            <div class="col-md-4 col-lg-4">
              <div class="title d-flex align-items-center">
                <div
                  class="icon text-center position-relative text-primary rounded-circle"
                >
                  <i
                    class="flaticon-share position-absolute start-0 end-0 lh-1"
                  ></i>
                </div>
                <span
                  class="d-block fw-bold text-black-emphasis ms-15 fs-md-15 fs-lg-16"
                  >Social Media</span
                >
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="lead-progress me-md-15">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="52"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 52%"></div>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-lg-2 text-md-end">
              <span class="d-block fw-medium text-black-emphasis">12,302</span>
            </div>
          </div>
        </li>
        <li data-bs-toggle="tooltip" data-bs-title="75%">
          <div class="row align-items-center">
            <div class="col-md-4 col-lg-4">
              <div class="title d-flex align-items-center">
                <div
                  class="icon text-center position-relative text-info rounded-circle"
                >
                  <i
                    class="flaticon-envelope position-absolute start-0 end-0 lh-1"
                  ></i>
                </div>
                <span
                  class="d-block fw-bold text-black-emphasis ms-15 fs-md-15 fs-lg-16"
                  >Email</span
                >
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="lead-progress me-md-15">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-info" style="width: 75%"></div>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-lg-2 text-md-end">
              <span class="d-block fw-medium text-black-emphasis">15,210</span>
            </div>
          </div>
        </li>
        <li data-bs-toggle="tooltip" data-bs-title="62%">
          <div class="row align-items-center">
            <div class="col-md-4 col-lg-4">
              <div class="title d-flex align-items-center">
                <div
                  class="icon text-center position-relative text-success rounded-circle"
                >
                  <i
                    class="flaticon-phone-call position-absolute start-0 end-0 lh-1"
                  ></i>
                </div>
                <span
                  class="d-block fw-bold text-black-emphasis ms-15 fs-md-15 fs-lg-16"
                  >Call</span
                >
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="lead-progress me-md-15">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="62"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-success" style="width: 62%"></div>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-lg-2 text-md-end">
              <span class="d-block fw-medium text-black-emphasis">13,312</span>
            </div>
          </div>
        </li>
        <li data-bs-toggle="tooltip" data-bs-title="17%">
          <div class="row align-items-center">
            <div class="col-md-4 col-lg-4">
              <div class="title d-flex align-items-center">
                <div
                  class="icon text-center position-relative text-danger rounded-circle"
                >
                  <i
                    class="flaticon-copy position-absolute start-0 end-0 lh-1"
                  ></i>
                </div>
                <span
                  class="d-block fw-bold text-black-emphasis ms-15 fs-md-15 fs-lg-16"
                  >Others</span
                >
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="lead-progress me-md-15">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="17"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-danger" style="width: 17%"></div>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-lg-2 text-md-end">
              <span class="d-block fw-medium text-black-emphasis">1,421</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MostLead",
};
</script>