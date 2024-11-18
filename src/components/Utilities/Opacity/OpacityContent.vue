<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">Opacity</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Control the opacity of elements.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        The <code>opacity</code> property sets the opacity level for an element.
        The opacity level describes the transparency level, where
        <code>1</code> is not transparent at all, <code>.5</code> is 50%
        visible, and <code>0</code> is completely transparent.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-5">
        Set the <code>opacity</code> of an element using
        <code>.opacity-{value}</code> utilities.
      </p>
      <div
        class="opacity-100 d-inline-block me-10 mt-15 w-110 h-90 bg-primary rounded-1"
      ></div>
      <div
        class="opacity-75 d-inline-block me-10 mt-15 w-110 h-90 bg-primary rounded-1"
      ></div>
      <div
        class="opacity-50 d-inline-block me-10 mt-15 w-110 h-90 bg-primary rounded-1"
      ></div>
      <div
        class="opacity-25 d-inline-block me-10 mt-15 w-110 h-90 bg-primary rounded-1"
      ></div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#opacityCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="opacityCode">
&lt;div class="opacity-100"&gt;...&lt;/div&gt;
&lt;div class="opacity-75"&gt;...&lt;/div&gt;
&lt;div class="opacity-50"&gt;...&lt;/div&gt;
&lt;div class="opacity-25"&gt;...&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpacityContent",
};
</script>