<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-0 mb-lg-5 mb-xl-10">Example</h5>
      <a
        href="#"
        class="d-inline-block me-10 mt-15 fs-md-15 fw-medium focus-ring py-2 px-3 text-decoration-none border rounded-2"
      >
        Custom focus ring
      </a>
      <a
        href="#"
        class="d-inline-block me-10 mt-15 fs-md-15 fw-medium focus-ring focus-ring-primary py-2 px-3 text-decoration-none border rounded-2"
      >
        Primary focus
      </a>
      <a
        href="#"
        class="d-inline-block me-10 mt-15 fs-md-15 fw-medium focus-ring focus-ring-secondary text-secondary py-2 px-3 text-decoration-none border rounded-2"
      >
        Secondary focus
      </a>
      <a
        href="#"
        class="d-inline-block me-10 mt-15 fs-md-15 fw-medium focus-ring focus-ring-success text-success py-2 px-3 text-decoration-none border rounded-2"
      >
        Success focus
      </a>
      <a
        href="#"
        class="d-inline-block me-10 mt-15 fs-md-15 fw-medium focus-ring focus-ring-danger text-danger py-2 px-3 text-decoration-none border rounded-2"
      >
        Danger focus
      </a>
      <a
        href="#"
        class="d-inline-block me-10 mt-15 fs-md-15 fw-medium focus-ring focus-ring-warning text-warning py-2 px-3 text-decoration-none border rounded-2"
      >
        Warning focus
      </a>
      <a
        href="#"
        class="d-inline-block me-10 mt-15 fs-md-15 fw-medium focus-ring focus-ring-info text-info py-2 px-3 text-decoration-none border rounded-2"
      >
        Info focus
      </a>
      <a
        href="#"
        class="d-inline-block me-10 mt-15 fs-md-15 fw-medium focus-ring focus-ring-light text-light py-2 px-3 text-decoration-none border rounded-2"
      >
        Light focus
      </a>
      <a
        href="#"
        class="d-inline-block me-10 mt-15 fs-md-15 fw-medium focus-ring focus-ring-dark text-dark py-2 px-3 text-decoration-none border rounded-2"
      >
        Dark focus
      </a>
      <div class="position-relative mt-25">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#focusRingCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="focusRingCode">
<div>&lt;a href="#" class="d-inline-block fs-md-15 fw-medium focus-ring py-2 px-3 text-decoration-none border rounded-2"&gt;</div>
    <div>Custom focus ring</div>
<div>&lt;/a&gt;</div>
<div>&lt;a href="#" class="d-inline-block fs-md-15 fw-medium focus-ring focus-ring-primary py-2 px-3 text-decoration-none border rounded-2"&gt;</div>
    <div>Primary focus</div>
<div>&lt;/a&gt;</div>
<div>&lt;a href="#" class="d-inline-block fs-md-15 fw-medium focus-ring focus-ring-secondary py-2 px-3 text-decoration-none border rounded-2"&gt;</div>
    <div>Secondary focus</div>
<div>&lt;/a&gt;</div>
<div>&lt;a href="#" class="d-inline-block fs-md-15 fw-medium focus-ring focus-ring-success py-2 px-3 text-decoration-none border rounded-2"&gt;</div>
    <div>Success focus</div>
<div>&lt;/a&gt;</div>
<div>&lt;a href="#" class="d-inline-block fs-md-15 fw-medium focus-ring focus-ring-danger py-2 px-3 text-decoration-none border rounded-2"&gt;</div>
    <div>Danger focus</div>
<div>&lt;/a&gt;</div>
<div>&lt;a href="#" class="d-inline-block fs-md-15 fw-medium focus-ring focus-ring-warning py-2 px-3 text-decoration-none border rounded-2"&gt;</div>
    <div>Warning focus</div>
<div>&lt;/a&gt;</div>
<div>&lt;a href="#" class="d-inline-block fs-md-15 fw-medium focus-ring focus-ring-info py-2 px-3 text-decoration-none border rounded-2"&gt;</div>
    <div>Info focus</div>
<div>&lt;/a&gt;</div>
<div>&lt;a href="#" class="d-inline-block fs-md-15 fw-medium focus-ring focus-ring-light py-2 px-3 text-decoration-none border rounded-2"&gt;</div>
    <div>Light focus</div>
<div>&lt;/a&gt;</div>
<div>&lt;a href="#" class="d-inline-block fs-md-15 fw-medium focus-ring focus-ring-dark py-2 px-3 text-decoration-none border rounded-2"&gt;</div>
    <div>Dark focus</div>
<div>&lt;/a&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FocusRing",
};
</script>