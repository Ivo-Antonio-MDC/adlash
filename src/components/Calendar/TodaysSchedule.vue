<template>
  <div class="card mb-25 border-0 rounded-0 bg-white working-schedule-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <h6 class="card-title fw-bold mb-12">Todays Schedule</h6>
      <ul class="info-list ps-0 mb-0 list-unstyled">
        <li class="d-inline-block">
          <div class="d-flex align-items-center">
            <span
              class="d-block w-10 h-10 bg-primary rounded-circle me-8"
            ></span>
            <span class="fw-bold">
              2
              <span class="text-muted fw-semibold">Meetings</span>
            </span>
          </div>
        </li>
        <li class="d-inline-block">
          <div class="d-flex align-items-center">
            <span
              class="d-block w-10 h-10 bg-success rounded-circle me-8"
            ></span>
            <span class="fw-bold">
              2
              <span class="text-muted fw-semibold">Discussion</span>
            </span>
          </div>
        </li>
        <li class="d-inline-block">
          <div class="d-flex align-items-center">
            <span class="d-block w-10 h-10 bg-info rounded-circle me-8"></span>
            <span class="fw-bold">
              1
              <span class="text-muted fw-semibold">Reviews</span>
            </span>
          </div>
        </li>
      </ul>
      <div class="schedule-list mt-15 mt-md-20">
        <div
          class="list-item pt-15 pb-15 pt-md-20 pb-md-20 ps-20 pe-15 position-relative bg-f2f1f9"
        >
          <div class="content">
            <div class="d-flex align-items-center mb-5">
              <h6 class="fw-medium mb-0">
                10:00 - 11:00
                <span class="text-muted fs-12">AM</span>
              </h6>
              <div
                class="ms-10 icon rounded-circle bg-primary text-center text-white position-relative"
              >
                <i class="flaticon-bell-2"></i>
              </div>
            </div>
            <span class="d-block text-black fw-semibold fs-md-15 mb-1">
              Adlash Project Estimation Meeting
            </span>
            <span class="d-block text-muted fs-12 fw-medium"
              >Lead by <span class="text-primary">John Harry</span></span
            >
          </div>
        </div>
        <div
          class="list-item pt-15 pb-15 pt-md-20 pb-md-20 ps-20 pe-15 position-relative bg-f3f7f9"
        >
          <div class="content">
            <div class="d-flex align-items-center mb-5">
              <h6 class="fw-medium mb-0">
                11:00 - 11:30
                <span class="text-muted fs-12">AM</span>
              </h6>
              <div
                class="ms-10 icon rounded-circle bg-white text-center text-info-light position-relative"
              >
                <i class="flaticon-bell-2"></i>
              </div>
            </div>
            <span class="d-block text-black fw-semibold fs-md-15 mb-1"
              >Dashboard HTML Design Review</span
            >
            <span class="d-block text-muted fs-12 fw-medium"
              >Lead by <span class="text-info-light">Jonathon Andy</span></span
            >
          </div>
        </div>
        <div
          class="list-item pt-15 pb-15 pt-md-20 pb-md-20 ps-20 pe-15 position-relative bg-ecf3f2"
        >
          <div class="content">
            <div class="d-flex align-items-center mb-5">
              <h6 class="fw-medium mb-0">
                12:00 - 1:30
                <span class="text-muted fs-12">PM</span>
              </h6>
              <div
                class="ms-10 icon rounded-circle bg-white text-center text-success position-relative"
              >
                <i class="flaticon-bell-2"></i>
              </div>
            </div>
            <span class="d-block text-black fw-semibold fs-md-15 mb-1"
              >Dashboard UI/UX Design Review</span
            >
            <span class="d-block text-muted fs-12 fw-medium"
              >Lead by <span class="text-success">Jonathon Andy</span></span
            >
          </div>
        </div>
        <div
          class="list-item pt-15 pb-15 pt-md-20 pb-md-20 ps-20 pe-15 position-relative bg-f2f1f9"
        >
          <div class="content">
            <div class="d-flex align-items-center mb-5">
              <h6 class="fw-medium mb-0">
                10:00 - 11:00
                <span class="text-muted fs-12">AM</span>
              </h6>
              <div
                class="ms-10 icon rounded-circle bg-white text-center text-primary position-relative"
              >
                <i class="flaticon-bell-2"></i>
              </div>
            </div>
            <span class="d-block text-black fw-semibold fs-md-15 mb-1"
              >Adlash Project Estimation Meeting</span
            >
            <span class="d-block text-muted fs-12 fw-medium"
              >Lead by <span class="text-primary">John Harry</span></span
            >
          </div>
        </div>
        <div
          class="list-item pt-15 pb-15 pt-md-20 pb-md-20 ps-20 pe-15 position-relative bg-ecf3f2"
        >
          <div class="content">
            <div class="d-flex align-items-center mb-5">
              <h6 class="fw-medium mb-0">
                12:00 - 1:30
                <span class="text-muted fs-12">PM</span>
              </h6>
              <div
                class="ms-10 icon rounded-circle bg-white text-center text-success position-relative"
              >
                <i class="flaticon-bell-2"></i>
              </div>
            </div>
            <span class="d-block text-black fw-semibold fs-md-15 mb-1"
              >Dashboard UI/UX Design Review</span
            >
            <span class="d-block text-muted fs-12 fw-medium"
              >Lead by <span class="text-success">Jonathon Andy</span></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodaysSchedule",
};
</script>