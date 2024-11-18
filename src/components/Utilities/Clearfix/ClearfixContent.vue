<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">Clearfix</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Quickly and easily clear floated content within a container by adding a
        clearfix utility.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Easily clear <code>float</code>s by adding <code>.clearfix</code>
        <strong>to the parent element</strong>. Can also be used as a mixin.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">Use in HTML:</p>
      <div class="position-relative">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#clearfixCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="clearfixCode">
<div>&lt;div class="clearfix"&gt;...&lt;/div&gt;</div>
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-15 mt-lg-20">
        The following example shows how the clearfix can be used. Without the
        clearfix the wrapping div would not span around the buttons which would
        cause a broken layout.
      </p>
      <div class="bg-info clearfix mb-20">
        <button type="button" class="btn btn-secondary float-start">
          Example Button floated left
        </button>
        <button type="button" class="btn btn-secondary float-end">
          Example Button floated right
        </button>
      </div>
      <div class="position-relative">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#clearfix2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="clearfix2Code">
<div>&lt;div class="bg-info clearfix"&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary float-start"&gt;Example Button floated left&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary float-end"&gt;Example Button floated right&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClearfixContent",
};
</script>