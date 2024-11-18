<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">Basic Alerts</h5>
      <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="basicAlertsPreview-tab"
            data-bs-toggle="tab"
            data-bs-target="#basicAlertsPreview-tab-pane"
            type="button"
            role="tab"
            aria-controls="basicAlertsPreview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="basicAlertsCode-tab"
            data-bs-toggle="tab"
            data-bs-target="#basicAlertsCode-tab-pane"
            type="button"
            role="tab"
            aria-controls="basicAlertsCode-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="basicAlertsPreview-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <div class="alert alert-primary fs-md-15 fs-lg-16" role="alert">
            A simple primary alert—check it out!
          </div>
          <div class="alert alert-secondary fs-md-15 fs-lg-16" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div class="alert alert-success fs-md-15 fs-lg-16" role="alert">
            A simple success alert—check it out!
          </div>
          <div class="alert alert-danger fs-md-15 fs-lg-16" role="alert">
            A simple danger alert—check it out!
          </div>
          <div class="alert alert-warning fs-md-15 fs-lg-16" role="alert">
            A simple warning alert—check it out!
          </div>
          <div class="alert alert-info fs-md-15 fs-lg-16" role="alert">
            A simple info alert—check it out!
          </div>
          <div class="alert alert-light fs-md-15 fs-lg-16" role="alert">
            A simple light alert—check it out!
          </div>
          <div class="alert alert-dark fs-md-15 fs-lg-16" role="alert">
            A simple dark alert—check it out!
          </div>
        </div>
        <div
          class="tab-pane fade position-relative"
          id="basicAlertsCode-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <!-- <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
            data-clipboard-target="#basicAlertsCode"
          >
            Copy
          </button> -->
          <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode">
<div>&lt;div class="alert alert-primary fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>A simple primary alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-secondary fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>A simple secondary alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-success fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>A simple success alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-danger fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>A simple danger alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-warning fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>A simple warning alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-info fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>A simple info alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-light fs-md-15 fs-lg-16" role="alert"&gt;</div>
    <div>A simple light alert—check it out!</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="alert alert-dark fs-md-15 fs-lg-16" role="alert"&gt;</div>
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
  name: "BasicAlerts",
};
</script>