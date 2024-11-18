<template>
  <div class="row">
    <div class="col-lg-6 col-xl-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Base Pagination
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="basePaginationPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#basePaginationPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="basePaginationPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="basePaginationCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#basePaginationCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="basePaginationCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="basePaginationPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <nav>
                <ul class="pagination mb-0">
                  <li class="page-item">
                    <a
                      class="page-link transition fw-medium shadow-none text-primary"
                      href="#"
                      >Previous</a
                    >
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link transition fw-medium shadow-none text-primary"
                      href="#"
                      >1</a
                    >
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link transition fw-medium shadow-none text-primary"
                      href="#"
                      >2</a
                    >
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link transition fw-medium shadow-none text-primary"
                      href="#"
                      >3</a
                    >
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link transition fw-medium shadow-none text-primary"
                      href="#"
                      >Next</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="basePaginationCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#basePaginationCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basePaginationCode">
<div>&lt;nav&gt;</div>
    <div>&lt;ul class="pagination mb-0"&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link transition fw-medium shadow-none text-primary" href="#"&gt;Previous&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link transition fw-medium shadow-none text-primary" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link transition fw-medium shadow-none text-primary" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link transition fw-medium shadow-none text-primary" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link transition fw-medium shadow-none text-primary" href="#"&gt;Next&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-xl-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Working with Icons Pagination
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="workingWithIconsPaginationPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#workingWithIconsPaginationPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="workingWithIconsPaginationPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="workingWithIconsPaginationCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#workingWithIconsPaginationCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="workingWithIconsPaginationCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="workingWithIconsPaginationPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <nav>
                <ul class="pagination mb-0">
                  <li class="page-item">
                    <a
                      class="page-link shadow-none fw-medium"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link shadow-none fw-medium" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link shadow-none fw-medium" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link shadow-none fw-medium" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link shadow-none fw-medium"
                      href="#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="workingWithIconsPaginationCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#workingWithIconsPaginationCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="workingWithIconsPaginationCode">
<div>&lt;nav&gt;</div>
    <div>&lt;ul class="pagination mb-0"&gt;</div>
        <div>&lt;li class="page-item"&gt;</div>
            <div>&lt;a class="page-link shadow-none fw-medium" href="#" aria-label="Previous"&gt;</div>
                <div>&lt;span aria-hidden="true"&gt;&amp;laquo;&lt;/span&gt;</div>
            <div>&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;</div>
            <div>&lt;a class="page-link shadow-none fw-medium" href="#" aria-label="Next"&gt;</div>
                <div>&lt;span aria-hidden="true"&gt;&amp;raquo;&lt;/span&gt;</div>
            <div>&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-xl-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Disabled & Active Pagination
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="disabledPaginationPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabledPaginationPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabledPaginationPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="disabledPaginationCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabledPaginationCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabledPaginationCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="disabledPaginationPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <nav>
                <ul class="pagination mb-0">
                  <li class="page-item disabled">
                    <a class="page-link shadow-none fw-medium">Previous</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link shadow-none fw-medium" href="#">1</a>
                  </li>
                  <li class="page-item active" aria-current="page">
                    <a class="page-link shadow-none fw-medium" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link shadow-none fw-medium" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link shadow-none fw-medium" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="disabledPaginationCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#disabledPaginationCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledPaginationCode">
<div>&lt;nav&gt;</div>
    <div>&lt;ul class="pagination mb-0"&gt;</div>
        <div>&lt;li class="page-item disabled"&gt;</div>
            <div>&lt;a class="page-link shadow-none fw-medium"&gt;Previous&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item active" aria-current="page"&gt;</div>
            <div>&lt;a class="page-link shadow-none fw-medium" href="#"&gt;2&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;</div>
            <div>&lt;a class="page-link shadow-none fw-medium" href="#"&gt;Next&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Sizing Pagination</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-15 mb-md-20">
            Fancy larger or smaller pagination? Add
            <code>.pagination-lg</code> or <code>.pagination-sm</code> for
            additional sizes.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="lgSizingPaginationPreview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#lgSizingPaginationPreview-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="lgSizingPaginationPreview-tab-pane"
                    aria-selected="true"
                  >
                    Preview
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="lgSizingPaginationCode-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#lgSizingPaginationCode-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="lgSizingPaginationCode-tab-pane"
                    aria-selected="false"
                  >
                    Code
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="lgSizingPaginationPreview-tab-pane"
                  role="tabpanel"
                  tabindex="0"
                >
                  <nav>
                    <ul class="pagination pagination-lg mb-0">
                      <li class="page-item active" aria-current="page">
                        <span
                          class="page-link shadow-none fw-medium fs-15 fs-md-16 fs-lg-18"
                          >1</span
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link shadow-none fw-medium fs-15 fs-md-16 fs-lg-18"
                          href="#"
                          >2</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link shadow-none fw-medium fs-15 fs-md-16 fs-lg-18"
                          href="#"
                          >3</a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  class="tab-pane fade position-relative"
                  id="lgSizingPaginationCode-tab-pane"
                  role="tabpanel"
                  tabindex="0"
                >
                  <!-- <button
                    class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                    data-clipboard-target="#lgSizingPaginationCode"
                  >
                    Copy
                  </button> -->
                  <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="lgSizingPaginationCode">
<div>&lt;nav&gt;</div>
    <div>&lt;ul class="pagination pagination-lg mb-0"&gt;</div>
        <div>&lt;li class="page-item active" aria-current="page"&gt;</div>
            <div>&lt;span class="page-link shadow-none fw-medium fs-15 fs-md-16 fs-lg-18"&gt;1&lt;/span&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium fs-15 fs-md-16 fs-lg-18" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium fs-15 fs-md-16 fs-lg-18" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-25 mt-lg-0">
              <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="smSizingPaginationPreview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#smSizingPaginationPreview-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="smSizingPaginationPreview-tab-pane"
                    aria-selected="true"
                  >
                    Preview
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="smSizingPaginationCode-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#smSizingPaginationCode-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="smSizingPaginationCode-tab-pane"
                    aria-selected="false"
                  >
                    Code
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="smSizingPaginationPreview-tab-pane"
                  role="tabpanel"
                  tabindex="0"
                >
                  <nav>
                    <ul class="pagination mb-0 pagination-sm">
                      <li class="page-item active" aria-current="page">
                        <span class="page-link fw-medium shadow-none">1</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link fw-medium shadow-none" href="#"
                          >2</a
                        >
                      </li>
                      <li class="page-item">
                        <a class="page-link fw-medium shadow-none" href="#"
                          >3</a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  class="tab-pane fade position-relative"
                  id="smSizingPaginationCode-tab-pane"
                  role="tabpanel"
                  tabindex="0"
                >
                  <!-- <button
                    class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                    data-clipboard-target="#smSizingPaginationCode"
                  >
                    Copy
                  </button> -->
                  <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="smSizingPaginationCode">
<div>&lt;nav&gt;</div>
    <div>&lt;ul class="pagination mb-0 pagination-sm"&gt;</div>
        <div>&lt;li class="page-item active" aria-current="page"&gt;</div>
            <div>&lt;span class="page-link fw-medium shadow-none"&gt;1&lt;/span&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link fw-medium shadow-none" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link fw-medium shadow-none" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Alignment</h5>
          <div class="row">
            <div class="col-lg-6">
              <p
                class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-15 mb-md-20"
              >
                Change the alignment of pagination components with
                <a
                  href="https://getbootstrap.com/docs/5.3/utilities/flex/"
                  target="_blank"
                  >flexbox utilities</a
                >. For example, with <code>.justify-content-center</code>:
              </p>
              <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="centerAlignmentPaginationPreview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#centerAlignmentPaginationPreview-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="centerAlignmentPaginationPreview-tab-pane"
                    aria-selected="true"
                  >
                    Preview
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="centerAlignmentPaginationCode-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#centerAlignmentPaginationCode-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="centerAlignmentPaginationCode-tab-pane"
                    aria-selected="false"
                  >
                    Code
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="centerAlignmentPaginationPreview-tab-pane"
                  role="tabpanel"
                  tabindex="0"
                >
                  <nav>
                    <ul class="pagination mb-0 justify-content-center">
                      <li class="page-item disabled">
                        <a class="page-link shadow-none fw-medium">Previous</a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link shadow-none fw-medium text-primary"
                          href="#"
                          >1</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link shadow-none fw-medium text-primary"
                          href="#"
                          >2</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link shadow-none fw-medium text-primary"
                          href="#"
                          >3</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link shadow-none fw-medium text-primary"
                          href="#"
                          >Next</a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  class="tab-pane fade position-relative"
                  id="centerAlignmentPaginationCode-tab-pane"
                  role="tabpanel"
                  tabindex="0"
                >
                  <!-- <button
                    class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                    data-clipboard-target="#centerAlignmentPaginationCode"
                  >
                    Copy
                  </button> -->
                  <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="centerAlignmentPaginationCode">
<div>&lt;nav&gt;</div>
    <div>&lt;ul class="pagination mb-0 justify-content-center"&gt;</div>
        <div>&lt;li class="page-item disabled"&gt;</div>
            <div>&lt;a class="page-link shadow-none fw-medium"&gt;Previous&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium text-primary" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium text-primary" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium text-primary" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;</div>
            <div>&lt;a class="page-link shadow-none fw-medium text-primary" href="#"&gt;Next&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-25 mt-lg-0">
              <p
                class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-15 mb-md-20"
              >
                Or with <code>.justify-content-end</code>:
              </p>
              <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="rightAlignmentPaginationPreview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#rightAlignmentPaginationPreview-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="rightAlignmentPaginationPreview-tab-pane"
                    aria-selected="true"
                  >
                    Preview
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="rightAlignmentPaginationCode-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#rightAlignmentPaginationCode-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="rightAlignmentPaginationCode-tab-pane"
                    aria-selected="false"
                  >
                    Code
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="rightAlignmentPaginationPreview-tab-pane"
                  role="tabpanel"
                  tabindex="0"
                >
                  <nav>
                    <ul class="pagination mb-0 justify-content-end">
                      <li class="page-item disabled">
                        <a class="page-link shadow-none fw-medium">Previous</a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link shadow-none fw-medium text-primary"
                          href="#"
                          >1</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link shadow-none fw-medium text-primary"
                          href="#"
                          >2</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link shadow-none fw-medium text-primary"
                          href="#"
                          >3</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link shadow-none fw-medium text-primary"
                          href="#"
                          >Next</a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  class="tab-pane fade position-relative"
                  id="rightAlignmentPaginationCode-tab-pane"
                  role="tabpanel"
                  tabindex="0"
                >
                  <!-- <button
                    class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                    data-clipboard-target="#rightAlignmentPaginationCode"
                  >
                    Copy
                  </button> -->
                  <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="rightAlignmentPaginationCode">
<div>&lt;nav&gt;</div>
    <div>&lt;ul class="pagination mb-0 justify-content-end"&gt;</div>
        <div>&lt;li class="page-item disabled"&gt;</div>
            <div>&lt;a class="page-link shadow-none fw-medium"&gt;Previous&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium text-primary" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium text-primary" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;&lt;a class="page-link shadow-none fw-medium text-primary" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="page-item"&gt;</div>
            <div>&lt;a class="page-link shadow-none fw-medium text-primary" href="#"&gt;Next&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationContent",
};
</script>