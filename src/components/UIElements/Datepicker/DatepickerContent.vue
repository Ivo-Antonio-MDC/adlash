<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Bootstrap Datepicker</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <input
          type="date"
          class="form-control shadow-none text-black fs-md-15"
        />
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#bootstrapDatepickerCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="bootstrapDatepickerCode">
<div>&lt;input type="date" class="form-control shadow-none text-black fs-md-15"&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Flatpickr Datepicker</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <input
          class="flatpickr form-control fs-md-15 text-black shadow-none"
          type="text"
          placeholder="Select Date.."
          id="basic-calendar"
        />
      </div>
      <div class="position-relative mt-25 mb-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#flatDatepickerCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="flatDatepickerCode">
<div>&lt;input class="flatpickr form-control fs-md-15 text-black shadow-none" type="text" placeholder="Select Date.." id="basic-calendar"&gt;</div>
</code>
</pre>
      </div>
      <a
        href="https://flatpickr.js.org/examples/#basic"
        target="_blank"
        class="default-btn text-decoration-none transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 d-inline-block"
      >
        More About Flatpickr
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatepickerContent",
};
</script>