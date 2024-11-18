<template>
  <div class="row">
    <div class="col-lg-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing contact-information-card"
      >
        <div class="card-head">
          <h5 class="card-title lh-1 fw-semibold mb-0 text-muted">Filters</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group mb-15 mb-md-20">
              <label class="d-block text-black fw-semibold mb-10">
                Priority
              </label>
              <select class="form-select shadow-none fw-semibold rounded-0">
                <option selected>Urgent</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
              </select>
            </div>
            <div class="form-group mb-15 mb-md-20">
              <label class="d-block text-black fw-semibold mb-10">Source</label>
              <select class="form-select shadow-none fw-semibold rounded-0">
                <option selected>Instagram</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
              </select>
            </div>
            <div class="form-group mb-15 mb-md-20">
              <label class="d-block text-black fw-semibold mb-10">Status</label>
              <select class="form-select shadow-none fw-semibold rounded-0">
                <option selected>Recent</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
              </select>
            </div>
            <div class="form-group mb-15 mb-md-20">
              <label class="d-block text-black fw-semibold mb-10">Group</label>
              <select class="form-select shadow-none fw-semibold rounded-0">
                <option selected>Billing</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
              </select>
            </div>
            <div class="form-group mb-15 mb-md-20">
              <label class="d-block text-black fw-semibold mb-10">Agent</label>
              <select class="form-select shadow-none fw-semibold rounded-0">
                <option selected>Jonathon Ronan</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
              </select>
            </div>
            <div class="form-group">
              <label class="d-block text-black fw-semibold mb-10">
                Category
              </label>
              <select class="form-select shadow-none fw-semibold rounded-0">
                <option selected>None</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-9">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing ticket-grid-box"
      >
        <div
          class="card-head box-shadow bg-white d-md-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <form class="search-box position-relative">
            <input
              type="text"
              class="form-control shadow-none text-black rounded-0 border-0"
              placeholder="Search ticket"
            />
            <button
              type="submit"
              class="bg-transparent text-primary transition p-0 border-0"
            >
              <i class="flaticon-search-interface-symbol"></i>
            </button>
          </form>
          <div class="d-sm-flex align-items-center">
            <a
              href="javascript:void(0);"
              class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block me-10 mt-10 mt-md-0 text-decoration-none"
            >
              Add New Ticket
              <i class="flaticon-plus position-relative ms-5 fs-12"></i>
            </a>
            <button
              class="default-outline-btn position-relative transition fw-medium text-black pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-transparent fs-md-15 fs-lg-16 d-inline-block mt-10 mt-md-0"
              type="button"
            >
              Export
              <i class="flaticon-file-1 position-relative ms-5 top-2 fs-15"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-15 p-sm-20 p-md-25">
          <div class="item transition">
            <div class="d-md-flex align-items-center justify-content-between">
              <div class="d-sm-flex">
                <div class="form-check mb-0">
                  <input class="form-check-input shadow-none" type="checkbox" />
                </div>
                <div class="mt-10 mt-sm-0 ms-sm-8">
                  <div class="d-sm-flex mb-8">
                    <router-link
                      to="/ticket-preview"
                      class="d-block text-decoration-none fw-medium fs-md-16 fs-lg-16"
                    >
                      Adlash Dashboard Design #Ticket 1436
                    </router-link>
                    <span
                      class="badge text-outline-success mt-10 mt-sm-0 ms-sm-10"
                      >Recent</span
                    >
                  </div>
                  <div class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16">
                    <img
                      src="../../../assets/images/user/user3.jpg"
                      class="rounded-circle me-8"
                      width="24"
                      height="24"
                      alt="user"
                    />
                    Jacky Ronan
                    <span class="fs-12 text-muted fw-medium ms-8"
                      >2 days ago</span
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mt-10 mt-md-0">
                <span
                  class="lh-1 fw-medium text-danger me-15 me-sm-20 me-md-25 me-lg-30"
                  >Urgent</span
                >
                <select
                  class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                >
                  <option selected>J. Linowiski</option>
                  <option value="1">Z. White</option>
                  <option value="2">C. Benden</option>
                  <option value="3">A. Smith</option>
                </select>
              </div>
            </div>
          </div>
          <div class="item transition">
            <div class="d-md-flex align-items-center justify-content-between">
              <div class="d-sm-flex">
                <div class="form-check mb-0">
                  <input class="form-check-input shadow-none" type="checkbox" />
                </div>
                <div class="mt-10 mt-sm-0 ms-sm-8">
                  <div class="d-sm-flex mb-8">
                    <router-link
                      to="/ticket-previewl"
                      class="d-block text-decoration-none fw-medium fs-md-16 fs-lg-16"
                    >
                      Higher Calculus App Design #Ticket 2098
                    </router-link>
                    <span
                      class="badge text-outline-danger mt-10 mt-sm-0 ms-sm-10"
                      >Overdue</span
                    >
                  </div>
                  <div class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16">
                    <img
                      src="../../../assets/images/user/user1.jpg"
                      class="rounded-circle me-8"
                      width="24"
                      height="24"
                      alt="user"
                    />
                    Victor James
                    <span class="fs-12 text-muted fw-medium ms-8"
                      >3 days ago</span
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mt-10 mt-md-0">
                <span
                  class="lh-1 fw-medium text-primary me-15 me-sm-20 me-md-25 me-lg-30"
                  >High</span
                >
                <select
                  class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                >
                  <option>J. Linowiski</option>
                  <option value="1" selected>Z. White</option>
                  <option value="2">C. Benden</option>
                  <option value="3">A. Smith</option>
                </select>
              </div>
            </div>
          </div>
          <div class="item transition">
            <div class="d-md-flex align-items-center justify-content-between">
              <div class="d-sm-flex">
                <div class="form-check mb-0">
                  <input class="form-check-input shadow-none" type="checkbox" />
                </div>
                <div class="mt-10 mt-sm-0 ms-sm-8">
                  <div class="d-sm-flex mb-8">
                    <router-link
                      to="/ticket-previewl"
                      class="d-block text-decoration-none fw-medium fs-md-16 fs-lg-16"
                    >
                      Adlash Admin Issue #Ticket 3465
                    </router-link>
                    <span
                      class="badge text-outline-info mt-10 mt-sm-0 ms-sm-10"
                    >
                      Remaining
                    </span>
                  </div>
                  <div class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16">
                    <img
                      src="../../../assets/images/user/user4.jpg"
                      class="rounded-circle me-8"
                      width="24"
                      height="24"
                      alt="user"
                    />
                    Angela Carter
                    <span class="fs-12 text-muted fw-medium ms-8"
                      >4 days ago</span
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mt-10 mt-md-0">
                <span
                  class="lh-1 fw-medium text-info me-15 me-sm-20 me-md-25 me-lg-30"
                  >Medium</span
                >
                <select
                  class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                >
                  <option>J. Linowiski</option>
                  <option value="1">Z. White</option>
                  <option value="2" selected>C. Benden</option>
                  <option value="3">A. Smith</option>
                </select>
              </div>
            </div>
          </div>
          <div class="item transition">
            <div class="d-md-flex align-items-center justify-content-between">
              <div class="d-sm-flex">
                <div class="form-check mb-0">
                  <input class="form-check-input shadow-none" type="checkbox" />
                </div>
                <div class="mt-10 mt-sm-0 ms-sm-8">
                  <div class="d-sm-flex mb-8">
                    <router-link
                      to="/ticket-previewl"
                      class="d-block text-decoration-none fw-medium fs-md-16 fs-lg-16"
                    >
                      Email Submission Issue #Ticket 2345
                    </router-link>
                    <span
                      class="badge text-outline-primary mt-10 mt-sm-0 ms-sm-10"
                      >Responded</span
                    >
                  </div>
                  <div class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16">
                    <img
                      src="../../../assets/images/user/user6.jpg"
                      class="rounded-circle me-8"
                      width="24"
                      height="24"
                      alt="user"
                    />
                    Bretlon White
                    <span class="fs-12 text-muted fw-medium ms-8"
                      >2 days ago</span
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mt-10 mt-md-0">
                <span
                  class="lh-1 fw-medium text-danger me-15 me-sm-20 me-md-25 me-lg-30"
                  >Urgent</span
                >
                <select
                  class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                >
                  <option>J. Linowiski</option>
                  <option value="1">Z. White</option>
                  <option value="2">C. Benden</option>
                  <option value="3" selected>A. Smith</option>
                </select>
              </div>
            </div>
          </div>
          <div class="item transition">
            <div class="d-md-flex align-items-center justify-content-between">
              <div class="d-sm-flex">
                <div class="form-check mb-0">
                  <input class="form-check-input shadow-none" type="checkbox" />
                </div>
                <div class="mt-10 mt-sm-0 ms-sm-8">
                  <div class="d-sm-flex mb-8">
                    <router-link
                      to="/ticket-previewl"
                      class="d-block text-decoration-none fw-medium fs-md-16 fs-lg-16"
                    >
                      Adlash Dashboard Design #Ticket 1436
                    </router-link>
                    <span
                      class="badge text-outline-muted mt-10 mt-sm-0 ms-sm-10"
                      >Closed</span
                    >
                  </div>
                  <div class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16">
                    <img
                      src="../../../assets/images/user/user7.jpg"
                      class="rounded-circle me-8"
                      width="24"
                      height="24"
                      alt="user"
                    />
                    Sam Smith
                    <span class="fs-12 text-muted fw-medium ms-8"
                      >3 days ago</span
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mt-10 mt-md-0">
                <span
                  class="lh-1 fw-medium text-warning me-15 me-sm-20 me-md-25 me-lg-30"
                  >Low</span
                >
                <select
                  class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                >
                  <option selected>J. Linowiski</option>
                  <option value="1">Z. White</option>
                  <option value="2">C. Benden</option>
                  <option value="3">A. Smith</option>
                </select>
              </div>
            </div>
          </div>
          <div class="item transition">
            <div class="d-md-flex align-items-center justify-content-between">
              <div class="d-sm-flex">
                <div class="form-check mb-0">
                  <input class="form-check-input shadow-none" type="checkbox" />
                </div>
                <div class="mt-10 mt-sm-0 ms-sm-8">
                  <div class="d-sm-flex mb-8">
                    <router-link
                      to="/ticket-previewl"
                      class="d-block text-decoration-none fw-medium fs-md-16 fs-lg-16"
                    >
                      Email Submission Issue #Ticket 2345
                    </router-link>
                    <span
                      class="badge text-outline-success mt-10 mt-sm-0 ms-sm-10"
                    >
                      Recent
                    </span>
                  </div>
                  <div class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16">
                    <img
                      src="../../../assets/images/user/user2.jpg"
                      class="rounded-circle me-8"
                      width="24"
                      height="24"
                      alt="user"
                    />
                    Victoria Carter
                    <span class="fs-12 text-muted fw-medium ms-8"
                      >3 days ago</span
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mt-10 mt-md-0">
                <span
                  class="lh-1 fw-medium text-danger me-15 me-sm-20 me-md-25 me-lg-30"
                  >Urgent</span
                >
                <select
                  class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium"
                >
                  <option>J. Linowiski</option>
                  <option value="1">Z. White</option>
                  <option value="2">C. Benden</option>
                  <option value="3" selected>A. Smith</option>
                </select>
              </div>
            </div>
          </div>
          <div
            class="pagination-area d-md-flex mt-15 mt-sm-20 mt-md-25 justify-content-between align-items-center"
          >
            <p class="mb-0 text-paragraph">
              Showing <span class="fw-bold">06</span> out of
              <span class="fw-bold">13</span> results
            </p>
            <nav class="mt-15 mt-md-0">
              <ul class="pagination mb-0">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <i class="flaticon-chevron-1"></i>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <i class="flaticon-chevron"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardView",
});
</script>

<style>
.normal-class {
  color: red;
}

.special-class {
  color: #00ff2a;
}

.high-class {
  color: red;
}
.highlight-class {
  color: green;
}
</style>