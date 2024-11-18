<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Vertical Stacks</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Use <code>.vstack</code> to create vertical layouts. Stacked items are
        full-width by default. Use <code>.gap-*</code> utilities to add space
        between items.
      </p>
      <div class="vstack gap-3 bg-gray border">
        <div class="p-2 bg-gray border fs-md-15 fs-lg-16 fw-medium">
          First item
        </div>
        <div class="p-2 bg-gray border fs-md-15 fs-lg-16 fw-medium">
          Second item
        </div>
        <div class="p-2 bg-gray border fs-md-15 fs-lg-16 fw-medium">
          Third item
        </div>
      </div>
      <div class="position-relative mt-15 mt-md-20">
        <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#verticalStacksCode"
        >
          Copy
        </button>
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="verticalStacksCode">
&lt;div class="vstack gap-3"&gt;
    &lt;div class="p-2"&gt;First item&lt;/div&gt;
    &lt;div class="p-2"&gt;Second item&lt;/div&gt;
    &lt;div class="p-2"&gt;Third item&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Horizontal Stacks</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Use <code>.hstack</code> for horizontal layouts. Stacked items are
        vertically centered by default and only take up their necessary width.
        Use <code>.gap-*</code> utilities to add space between items.
      </p>
      <div class="hstack gap-3 bg-gray border">
        <div class="p-2 bg-gray border fw-medium fs-md-15 fs-lg-16">
          First item
        </div>
        <div class="p-2 bg-gray border fw-medium fs-md-15 fs-lg-16">
          Second item
        </div>
        <div class="p-2 bg-gray border fw-medium fs-md-15 fs-lg-16">
          Third item
        </div>
      </div>
      <div class="position-relative mt-15 mt-md-20">
        <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#horizontalStacksCode"
        >
          Copy
        </button>
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="horizontalStacksCode">
<div>&lt;div class="hstack gap-3"&gt;</div>
    <div>&lt;div class="p-2"&gt;First item&lt;/div&gt;</div>
    <div>&lt;div class="p-2"&gt;Second item&lt;/div&gt;</div>
    <div>&lt;div class="p-2"&gt;Third item&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Buttons Stacks</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Use <code>.vstack</code> to stack buttons and other elements:
      </p>
      <div class="vstack gap-2 col-md-5 mx-auto">
        <button type="button" class="btn btn-secondary">Save changes</button>
        <button type="button" class="btn btn-outline-secondary">Cancel</button>
      </div>
      <div class="position-relative mt-15 mt-md-20 mb-15 mb-md-20 mb-lg-25">
        <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#buttonsStacksCode"
        >
          Copy
        </button>
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="buttonsStacksCode">
<div>&lt;div class="vstack gap-2 col-md-5 mx-auto"&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary"&gt;Save changes&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-secondary"&gt;Cancel&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Create an inline form with <code>.hstack</code>:
      </p>
      <div class="hstack gap-3">
        <input
          class="form-control me-auto text-black fs-md-15 fs-lg-16"
          type="text"
          placeholder="Add your item here..."
          aria-label="Add your item here..."
        />
        <button type="button" class="btn btn-secondary">Submit</button>
        <div class="vr"></div>
        <button type="button" class="btn btn-outline-danger">Reset</button>
      </div>
      <div class="position-relative mt-15 mt-md-20">
        <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#formStacksCode"
        >
          Copy
        </button>
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="formStacksCode">
<div>&lt;div class="hstack gap-3"&gt;</div>
    <div>&lt;input class="form-control me-auto text-black fs-md-15 fs-lg-16" type="text" placeholder="Add your item here..." aria-label="Add your item here..."&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary"&gt;Submit&lt;/button&gt;</div>
    <div>&lt;div class="vr"&gt;&lt;/div&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-danger"&gt;Reset&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StacksContant",
};
</script>