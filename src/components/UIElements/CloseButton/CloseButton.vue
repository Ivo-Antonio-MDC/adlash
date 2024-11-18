<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Basic Close Button
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="basicCloseButtonPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicCloseButtonPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicCloseButtonPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="basicCloseButtonCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicCloseButtonCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicCloseButtonCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="basicCloseButtonPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                type="button"
                class="btn-close shadow-none"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="basicCloseButtonCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#basicCloseButtonCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicCloseButtonCode">
<div>&lt;button type="button" class="btn-close shadow-none" aria-label="Close"&gt;&lt;/button&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Disabled Close Button
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="disabledCloseButtonPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabledCloseButtonPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabledCloseButtonPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="disabledCloseButtonCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabledCloseButtonCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabledCloseButtonCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="disabledCloseButtonPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                type="button"
                class="btn-close shadow-none"
                disabled
                aria-label="Close"
              ></button>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="disabledCloseButtonCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#disabledCloseButtonCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledCloseButtonCode">
<div>&lt;button type="button" class="btn-close shadow-none" disabled aria-label="Close"&gt;&lt;/button&gt;</div>
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
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Dark Variant Close Button
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="darkCloseButtonPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#darkCloseButtonPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="darkCloseButtonPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="darkCloseButtonCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#darkCloseButtonCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="darkCloseButtonCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="darkCloseButtonPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="bg-dark p-15 p-sm-20 p-md-25 p-lg-30">
                <div data-bs-theme="dark">
                  <button
                    type="button"
                    class="btn-close shadow-none"
                    aria-label="Close"
                  ></button>
                  <button
                    type="button"
                    class="btn-close shadow-none"
                    disabled
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="darkCloseButtonCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#darkCloseButtonCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="darkCloseButtonCode">
<div>&lt;div data-bs-theme="dark"&gt;</div>
    <div>&lt;button type="button" class="btn-close shadow-none" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn-close shadow-none" disabled aria-label="Close"&gt;&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CloseButton",
};
</script>