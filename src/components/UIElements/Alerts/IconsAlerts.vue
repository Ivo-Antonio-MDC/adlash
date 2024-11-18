<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">Icons Alerts</h5>
      <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="iconsAlertsPreview-tab"
            data-bs-toggle="tab"
            data-bs-target="#iconsAlertsPreview-tab-pane"
            type="button"
            role="tab"
            aria-controls="iconsAlertsPreview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="iconsAlertsCode-tab"
            data-bs-toggle="tab"
            data-bs-target="#iconsAlertsCode-tab-pane"
            type="button"
            role="tab"
            aria-controls="iconsAlertsCode-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="iconsAlertsPreview-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <div
            class="alert alert-primary d-flex align-items-center fs-md-15 fs-lg-16"
            role="alert"
          >
            <i
              class="flaticon-sterile-box lh-1 fs-20 position-relative top-1 me-8"
            ></i>
            A simple primary alert—check it out!
          </div>
          <div
            class="alert alert-secondary d-flex align-items-center fs-md-15 fs-lg-16"
            role="alert"
          >
            <i
              class="flaticon-extension lh-1 fs-20 position-relative top-1 me-8"
            ></i>
            A simple secondary alert—check it out!
          </div>
          <div
            class="alert alert-success d-flex align-items-center fs-md-15 fs-lg-16"
            role="alert"
          >
            <i
              class="flaticon-sugar-cubes lh-1 fs-20 position-relative top-1 me-8"
            ></i>
            A simple success alert—check it out!
          </div>
          <div
            class="alert alert-danger d-flex align-items-center fs-md-15 fs-lg-16"
            role="alert"
          >
            <i
              class="flaticon-gallery-1 lh-1 fs-20 position-relative top-1 me-8"
            ></i>
            A simple danger alert—check it out!
          </div>
          <div
            class="alert alert-warning d-flex align-items-center fs-md-15 fs-lg-16"
            role="alert"
          >
            <i
              class="flaticon-pie-chart-5 lh-1 fs-20 position-relative top-1 me-8"
            ></i>
            A simple warning alert—check it out!
          </div>
          <div
            class="alert alert-info d-flex align-items-center fs-md-15 fs-lg-16"
            role="alert"
          >
            <i
              class="flaticon-setting lh-1 fs-20 position-relative top-1 me-8"
            ></i>
            A simple info alert—check it out!
          </div>
          <div
            class="alert alert-light d-flex align-items-center fs-md-15 fs-lg-16"
            role="alert"
          >
            <i
              class="flaticon-dribbble lh-1 fs-20 position-relative top-1 me-8"
            ></i>
            A simple light alert—check it out!
          </div>
          <div
            class="alert alert-dark d-flex align-items-center fs-md-15 fs-lg-16"
            role="alert"
          >
            <i
              class="flaticon-printing lh-1 fs-20 position-relative top-1 me-8"
            ></i>
            A simple dark alert—check it out!
          </div>
        </div>
        <div
          class="tab-pane fade position-relative"
          id="iconsAlertsCode-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <!-- <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
            data-clipboard-target="#iconsAlertsCode"
          >
            Copy
          </button> -->
          <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="iconsAlertsCode">
<div>&lt;div class="alert alert-primary d-flex align-items-center fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>&lt;i class="flaticon-sterile-box lh-1 fs-20 position-relative top-1 me-8"&gt;&lt;/i&gt;</div>
    <div>A simple primary alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-secondary d-flex align-items-center fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>&lt;i class="flaticon-extension lh-1 fs-20 position-relative top-1 me-8"&gt;&lt;/i&gt;</div>
    <div>A simple secondary alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-success d-flex align-items-center fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>&lt;i class="flaticon-sugar-cubes lh-1 fs-20 position-relative top-1 me-8"&gt;&lt;/i&gt;</div>
    <div>A simple success alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-danger d-flex align-items-center fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>&lt;i class="flaticon-gallery-1 lh-1 fs-20 position-relative top-1 me-8"&gt;&lt;/i&gt;</div>
    <div>A simple danger alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-warning d-flex align-items-center fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>&lt;i class="flaticon-pie-chart-5 lh-1 fs-20 position-relative top-1 me-8"&gt;&lt;/i&gt;</div>
    <div>A simple warning alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-info d-flex align-items-center fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>&lt;i class="flaticon-setting lh-1 fs-20 position-relative top-1 me-8"&gt;&lt;/i&gt;</div>
    <div>A simple info alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-light d-flex align-items-center fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>&lt;i class="flaticon-dribbble lh-1 fs-20 position-relative top-1 me-8"&gt;&lt;/i&gt;</div>
    <div>A simple light alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-dark d-flex align-items-center fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>&lt;i class="flaticon-printing lh-1 fs-20 position-relative top-1 me-8"&gt;&lt;/i&gt;</div>
    <div>A simple dark alert—check it out!</div>
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
  name: "IconsAlerts",
};
</script>