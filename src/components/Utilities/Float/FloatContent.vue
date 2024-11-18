<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Overview</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        These utility classes float an element to the left or right, or disable
        floating, based on the current viewport size using the
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/float"
          target="_blank"
          >CSS <code>float</code> property</a
        >. <code>!important</code> is included to avoid specificity issues.
        These use the same viewport breakpoints as our grid system. Please be
        aware float utilities have no effect on flex items.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <div class="float-start fw-medium">
          Float start on all viewport sizes
        </div>
        <br />
        <div class="float-end fw-medium">Float end on all viewport sizes</div>
        <br />
        <div class="float-none fw-medium">
          Don't float on all viewport sizes
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#floatCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="floatCode">
&lt;div class="float-start"&gt;Float start on all viewport sizes&lt;/div&gt;&lt;br&gt;
&lt;div class="float-end"&gt;Float end on all viewport sizes&lt;/div&gt;&lt;br&gt;
&lt;div class="float-none"&gt;Don't float on all viewport sizes&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Responsive</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Responsive variations also exist for each <code>float</code> value.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <div class="float-sm-start fw-medium">
          Float start on viewports sized SM (small) or wider
        </div>
        <br />
        <div class="float-md-start fw-medium">
          Float start on viewports sized MD (medium) or wider
        </div>
        <br />
        <div class="float-lg-start fw-medium">
          Float start on viewports sized LG (large) or wider
        </div>
        <br />
        <div class="float-xl-start fw-medium">
          Float start on viewports sized XL (extra-large) or wider
        </div>
        <br />
      </div>
      <div class="position-relative mt-25 mb-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#floatResponsiveCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="floatResponsiveCode">
&lt;div class="float-sm-start"&gt;Float start on viewports sized SM (small) or wider&lt;/div&gt;&lt;br&gt;
&lt;div class="float-md-start"&gt;Float start on viewports sized MD (medium) or wider&lt;/div&gt;&lt;br&gt;
&lt;div class="float-lg-start"&gt;Float start on viewports sized LG (large) or wider&lt;/div&gt;&lt;br&gt;
&lt;div class="float-xl-start"&gt;Float start on viewports sized XL (extra-large) or wider&lt;/div&gt;&lt;br&gt;
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-10">
        Here are all the support classes:
      </p>
      <ul class="mb-0">
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-start</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-end</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-none</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-sm-start</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-sm-end</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-sm-none</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-md-start</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-md-end</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-md-none</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-lg-start</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-lg-end</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-lg-none</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-xl-start</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-xl-end</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-xl-none</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-xxl-start</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-xxl-end</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.float-xxl-none</code>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatContent",
};
</script>