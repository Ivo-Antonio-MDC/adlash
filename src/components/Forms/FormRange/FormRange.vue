<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Basic Range
          </h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <label for="customRange1" class="form-label fw-medium">
              Example range
            </label>
            <input type="range" class="form-range" id="customRange1" />
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#basicRangeCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicRangeCode">
<div>&lt;label for="customRange1" class="form-label fw-medium"&gt;Example range&lt;/label&gt;</div>
<div>&lt;input type="range" class="form-range" id="customRange1"&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Disabled Range
          </h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <label for="disabledRange" class="form-label fw-medium">
              Disabled range
            </label>
            <input
              type="range"
              class="form-range"
              id="disabledRange"
              disabled
            />
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#disabledRangeCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledRangeCode">
&lt;label for="disabledRange" class="form-label"&gt;Disabled range&lt;/label&gt;
&lt;input type="range" class="form-range" id="disabledRange" disabled&gt;
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Min & Max Range
          </h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <label for="customRange2" class="form-label fw-medium">
              Example range
            </label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="5"
              id="customRange2"
            />
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#minMaxRangeCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="minMaxRangeCode">
&lt;label for="customRange2" class="form-label fw-medium"&gt;Example range&lt;/label&gt;
&lt;input type="range" class="form-range" min="0" max="5" id="customRange2"&gt;
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Steps Range
          </h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <label for="customRange3" class="form-label fw-medium"
              >Example range</label
            >
            <input
              type="range"
              class="form-range"
              min="0"
              max="5"
              step="0.5"
              id="customRange3"
            />
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#stepsRangeCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="stepsRangeCode">
&lt;label for="customRange3" class="form-label fw-medium"&gt;Example range&lt;/label&gt;
&lt;input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"&gt;
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormRange",
};
</script>