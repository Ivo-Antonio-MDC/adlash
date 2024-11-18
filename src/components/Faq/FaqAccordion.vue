<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white letter-spacing faq-accordion-card"
  >
    <div
      class="card-head box-shadow bg-white d-flex align-items-center justify-content-between p-15 p-sm-20"
    >
      <form class="search-box position-relative">
        <input
          type="text"
          class="form-control shadow-none text-black rounded-0 border-0"
          placeholder="Search your answer here"
        />
        <button
          type="submit"
          class="bg-transparent text-primary transition p-0 border-0"
        >
          <i class="flaticon-search-interface-symbol"></i>
        </button>
      </form>
      <div class="dropdown ms-10">
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
              <i class="flaticon-delete lh-1 me-8 position-relative top-1"></i>
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-body p-15 p-sm-20">
      <div class="accordion" id="faqAccordion">
        <div class="row">
          <div class="col-lg-6">
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseOne"
                aria-expanded="true"
                aria-controls="faqCollapseOne"
              >
                How to integrate WordPress with your website?
              </button>
              <div
                id="faqCollapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseTwo"
                aria-expanded="true"
                aria-controls="faqCollapseTwo"
              >
                How do WordPress site maintenance?
              </button>
              <div
                id="faqCollapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseThree"
                aria-expanded="true"
                aria-controls="faqCollapseThree"
              >
                How to use Meta Tags in WordPress?
              </button>
              <div
                id="faqCollapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseFour"
                aria-expanded="true"
                aria-controls="faqCollapseFour"
              >
                How to change Language in WordPress?
              </button>
              <div
                id="faqCollapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseFive"
                aria-expanded="true"
                aria-controls="faqCollapseFive"
              >
                How to submit WordPress?
              </button>
              <div
                id="faqCollapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseSix"
                aria-expanded="true"
                aria-controls="faqCollapseSix"
              >
                How to install blogging WordPress site?
              </button>
              <div
                id="faqCollapseSix"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseSeven"
                aria-expanded="true"
                aria-controls="faqCollapseSeven"
              >
                How do WordPress site maintenance in a creative way so that your
                site can be created by a AI machine and support all users?
              </button>
              <div
                id="faqCollapseSeven"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseEight"
                aria-expanded="true"
                aria-controls="faqCollapseEight"
              >
                How to use Meta Tags in WordPress?
              </button>
              <div
                id="faqCollapseEight"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseNine"
                aria-expanded="true"
                aria-controls="faqCollapseNine"
              >
                How to change Language in WordPress?
              </button>
              <div
                id="faqCollapseNine"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseTen"
                aria-expanded="true"
                aria-controls="faqCollapseTen"
              >
                How to submit WordPress?
              </button>
              <div
                id="faqCollapseTen"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseEleven"
                aria-expanded="true"
                aria-controls="faqCollapseEleven"
              >
                How to install blogging WordPress site?
              </button>
              <div
                id="faqCollapseEleven"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseTwelve"
                aria-expanded="true"
                aria-controls="faqCollapseTwelve"
              >
                How to change Language in WordPress?
              </button>
              <div
                id="faqCollapseTwelve"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item rounded-0 border-0">
              <button
                class="accordion-button collapsed shadow-none border-0 rounded-0 fs-14 fs-md-15 fs-lg-16 text-black fw-medium d-block w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseThirteen"
                aria-expanded="true"
                aria-controls="faqCollapseThirteen"
              >
                How to submit WordPress?
              </button>
              <div
                id="faqCollapseThirteen"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body pb-0">
                  <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                    We’re fully committed to making this the most accessible and
                    results-driven AI course on the planet. This requires us to
                    be there when you need our help. That’s why we’ve put
                    together a team of professional Data Scientists to support
                    you in your journey, meaning you’ll get a response from us
                    within 48 hours maximum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="pagination-area d-md-flex justify-content-between align-items-center"
        >
          <p class="mb-0 text-paragraph">
            Showing <span class="fw-bold">11</span> out of
            <span class="fw-bold">135</span> results
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
</template>

<script>
export default {
  name: "FaqAccordion",
};
</script>