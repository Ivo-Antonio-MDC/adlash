<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Bootstrap Timepicker</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <input
          type="time"
          class="form-control shadow-none text-black fs-md-15"
        />
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#bootstrapTimepickerCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="bootstrapTimepickerCode">
<div>&lt;input type="time" class="form-control shadow-none text-black fs-md-15"&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimepickerContent",
};
</script>