<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
        Additional Content Alerts
      </h5>
      <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="additionalAlertsPreview-tab"
            data-bs-toggle="tab"
            data-bs-target="#additionalAlertsPreview-tab-pane"
            type="button"
            role="tab"
            aria-controls="additionalAlertsPreview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="additionalAlertsCode-tab"
            data-bs-toggle="tab"
            data-bs-target="#additionalAlertsCode-tab-pane"
            type="button"
            role="tab"
            aria-controls="additionalAlertsCode-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="additionalAlertsPreview-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading fw-bold mb-10">Well done!</h4>
            <p class="fs-md-15 fs-lg-16">
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p class="mb-0 fs-md-15 fs-lg-16">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </div>
        </div>
        <div
          class="tab-pane fade position-relative"
          id="additionalAlertsCode-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <!-- <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
            data-clipboard-target="#additionalAlertsCode"
          >
            Copy
          </button> -->
          <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="additionalAlertsCode">
<div>&lt;div class="alert alert-success" role="alert"&gt;</div>
    <div>&lt;h4 class="alert-heading fw-bold mb-10"&gt;Well done!&lt;/h4&gt;</div>
    <div>&lt;p class="fs-md-15 fs-lg-16"&gt;Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.&lt;/p&gt;</div>
    <div>&lt;hr&gt;</div>
    <div>&lt;p class="mb-0 fs-md-15 fs-lg-16"&gt;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&lt;/p&gt;</div>
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
  name: "AdditionalContentAlerts",
};
</script>