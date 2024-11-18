<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Vertical Rule</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Vertical rules are inspired by the <code>&lt;hr&gt;</code> element,
        allowing you to create vertical dividers in common layouts. They’re
        styled just like <code>&lt;hr&gt;</code> elements:
      </p>
      <ul>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          They’re <code>1px</code> wide
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          They have <code>min-height</code> of <code>1em</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          Their color is set via <code>currentColor</code> and
          <code>opacity</code>
        </li>
      </ul>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Customize them with additional styles as needed.
      </p>
      <div class="border p-2 p-xl-4">
        <div class="vr"></div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#verticalRule2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="verticalRule2Code">
&lt;div class="d-flex" style="height: 200px;"&gt;
    &lt;div class="vr"&gt;&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-25">
        Vertical rules scale their height in flex layouts:
      </p>
      <div class="border p-2 p-xl-4">
        <div class="d-flex" style="height: 200px">
          <div class="vr"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalRule",
};
</script>