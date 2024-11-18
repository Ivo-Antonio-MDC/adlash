<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
        Avatar Size Square-Circle
      </h5>
      <ul class="nav nav-tabs mb-md-5" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="avatarSquarePreview-tab"
            data-bs-toggle="tab"
            data-bs-target="#avatarSquarePreview-tab-pane"
            type="button"
            role="tab"
            aria-controls="avatarSquarePreview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="avatarSquareCode-tab"
            data-bs-toggle="tab"
            data-bs-target="#avatarSquareCode-tab-pane"
            type="button"
            role="tab"
            aria-controls="avatarSquareCode-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="avatarSquarePreview-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <div class="d-md-flex align-items-center">
            <div
              class="rounded-1 justify-content-center bg-gray align-items-center d-flex fw-bold fs-25 text-primary text-center w-130 h-130 me-md-20 mt-15"
            >
              Ab
            </div>
            <div
              class="rounded-1 justify-content-center bg-gray align-items-center d-flex fw-bold fs-20 text-primary text-center w-110 h-110 me-md-20 mt-15"
            >
              Ab
            </div>
            <div
              class="rounded-1 justify-content-center bg-gray align-items-center d-flex fw-bold fs-18 text-primary text-center w-90 h-90 me-md-20 mt-15"
            >
              Ab
            </div>
            <div
              class="rounded-1 justify-content-center bg-gray align-items-center d-flex fw-bold fs-18 text-primary text-center w-70 h-70 me-md-20 mt-15"
            >
              Ab
            </div>
            <div
              class="rounded-1 justify-content-center bg-gray align-items-center d-flex fw-bold text-primary text-center w-50 h-50 mt-15"
            >
              Ab
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade position-relative"
          id="avatarSquareCode-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
            data-clipboard-target="#avatarSquareCode"
          >
            Copy
          </button>
          <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="avatarSquareCode">
<div>&lt;div class="rounded-1 justify-content-center bg-gray align-items-center d-flex fw-bold fs-25 text-primary text-center w-130 h-130"&gt;</div>
    <div>Ab</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="rounded-1 justify-content-center bg-gray align-items-center d-flex fw-bold fs-20 text-primary text-center w-110 h-110"&gt;</div>
    <div>Ab</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="rounded-1 justify-content-center bg-gray align-items-center d-flex fw-bold fs-18 text-primary text-center w-90 h-90"&gt;</div>
    <div>Ab</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="rounded-1 justify-content-center bg-gray align-items-center d-flex fw-bold fs-18 text-primary text-center w-70 h-70"&gt;</div>
    <div>Ab</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="rounded-1 justify-content-center bg-gray align-items-center d-flex fw-bold text-primary text-center w-50 h-50"&gt;</div>
    <div>Ab</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvatarSquareCircle",
};
</script>