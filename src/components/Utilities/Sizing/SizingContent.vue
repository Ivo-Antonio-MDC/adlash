<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">Relative to The Parent</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Width and height utilities are generated from the utility API in
        <code>_utilities.scss</code>. Includes support for <code>25%</code>,
        <code>50%</code>, <code>75%</code>, <code>100%</code>, and
        <code>auto</code> by default. Modify those values as you need to
        generate different utilities here.
      </p>
      <div class="border p-2 p-lg-4">
        <div class="w-25-percentage p-3 bg-gray border fs-md-15 fs-lg-16">
          Width 25%
        </div>
        <div class="w-50-percentage p-3 bg-gray border fs-md-15 fs-lg-16">
          Width 50%
        </div>
        <div class="w-75-percentage p-3 bg-gray border fs-md-15 fs-lg-16">
          Width 75%
        </div>
        <div class="w-100 p-3 bg-gray border fs-md-15 fs-lg-16">Width 100%</div>
        <div class="w-auto p-3 bg-gray border fs-md-15 fs-lg-16">
          Width auto
        </div>
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#relativeParentCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="relativeParentCode">
&lt;div class="w-25-percentage p-3"&gt;Width 25%&lt;/div&gt;
&lt;div class="w-50-percentage p-3"&gt;Width 50%&lt;/div&gt;
&lt;div class="w-75-percentage p-3"&gt;Width 75%&lt;/div&gt;
&lt;div class="w-100 p-3"&gt;Width 100%&lt;/div&gt;
&lt;div class="w-auto p-3"&gt;Width auto&lt;/div&gt;
</code>
</pre>
      </div>
      <div class="border p-2 p-lg-4 mt-15 mt-sm-20 mt-md-25">
        <div style="height: 100px">
          <div
            class="h-25 d-inline-block bg-gray fs-md-15 fs-lg-16 border"
            style="width: 120px"
          >
            Height 25%
          </div>
          <div
            class="h-50 d-inline-block bg-gray fs-md-15 fs-lg-16 border"
            style="width: 120px"
          >
            Height 50%
          </div>
          <div
            class="h-75 d-inline-block bg-gray fs-md-15 fs-lg-16 border"
            style="width: 120px"
          >
            Height 75%
          </div>
          <div
            class="h-100 d-inline-block bg-gray fs-md-15 fs-lg-16 border"
            style="width: 120px"
          >
            Height 100%
          </div>
          <div
            class="h-auto d-inline-block bg-gray fs-md-15 fs-lg-16 border"
            style="width: 120px"
          >
            Height auto
          </div>
        </div>
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#relativeParent2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="relativeParent2Code">
&lt;div style="height: 100px;"&gt;
    &lt;div class="h-25-percentage d-inline-block" style="width: 120px;"&gt;Height 25%&lt;/div&gt;
    &lt;div class="h-50-percentage d-inline-block" style="width: 120px;"&gt;Height 50%&lt;/div&gt;
    &lt;div class="h-75-percentage d-inline-block" style="width: 120px;"&gt;Height 75%&lt;/div&gt;
    &lt;div class="h-100 d-inline-block" style="width: 120px;"&gt;Height 100%&lt;/div&gt;
    &lt;div class="h-auto d-inline-block" style="width: 120px;"&gt;Height auto&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
      <p
        class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-15 mt-sm-20 mt-md-25"
      >
        You can also use <code>max-width: 100%;</code> and
        <code>max-height: 100%;</code> utilities as needed.
      </p>
      <div class="border p-2 p-lg-4">
        <div
          style="width: 50%; height: 100px"
          class="bg-gray border fs-md-15 fs-lg-16"
        >
          <div class="mw-100 bg-body-secondary border" style="width: 200%">
            Max-width 100%
          </div>
        </div>
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#relativeParent3Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="relativeParent3Code">
&lt;div style="width: 50%; height: 100px;"&gt;
    &lt;div class="mw-100" style="width: 200%;"&gt;Max-width 100%&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
      <div class="border p-2 p-lg-4 mt-15 mt-sm-20 mt-md-25">
        <div style="height: 100px" class="bg-gray border fs-md-15 fs-lg-16">
          <div
            class="mh-100 bg-body-secondary border"
            style="width: 100px; height: 200px"
          >
            Max-height 100%
          </div>
        </div>
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#relativeParent4Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="relativeParent4Code">
&lt;div style="height: 100px;"&gt;
    &lt;div class="mh-100" style="width: 100px; height: 200px;"&gt;Max-height 100%&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
      <p
        class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-15 mt-sm-20 mt-md-25"
      >
        You can also use utilities to set the width and height relative to the
        viewport.
      </p>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#relativeParent5Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="relativeParent5Code">
&lt;div class="min-vw-100"&gt;Min-width 100vw&lt;/div&gt;
&lt;div class="min-vh-100"&gt;Min-height 100vh&lt;/div&gt;
&lt;div class="vw-100"&gt;Width 100vw&lt;/div&gt;
&lt;div class="vh-100"&gt;Height 100vh&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SizingContent",
};
</script>