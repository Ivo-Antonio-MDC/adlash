<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Horizontal Gutters</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        <code>.gx-*</code> classes can be used to control the horizontal gutter
        widths. The <code>.container</code> or
        <code>.container-fluid</code> parent may need to be adjusted if larger
        gutters are used too to avoid unwanted overflow, using a matching
        padding utility. For example, in the following example we’ve increased
        the padding with <code>.px-4</code>:
      </p>
      <div class="row gx-5">
        <div class="col">
          <div class="p-3 fw-medium bg-gray border">Custom column padding</div>
        </div>
        <div class="col">
          <div class="p-3 fw-medium bg-gray border">Custom column padding</div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#horizontalGuttersCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="horizontalGuttersCode">
<div>&lt;div class="row gx-5"&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 fw-medium bg-gray border"&gt;Custom column padding&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 fw-medium bg-gray border"&gt;Custom column padding&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Row Columns Gutters</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Gutter classes can also be added to
        <a
          href="https://getbootstrap.com/docs/5.3/layout/grid/#row-columns"
          target="_blank"
          >row columns</a
        >. In the following example, we use responsive row columns and
        responsive gutter classes.
      </p>
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div class="col">
          <div class="p-3 bg-gray fw-medium border">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 bg-gray fw-medium border">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 bg-gray fw-medium border">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 bg-gray fw-medium border">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 bg-gray fw-medium border">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 bg-gray fw-medium border">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 bg-gray fw-medium border">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 bg-gray fw-medium border">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 bg-gray fw-medium border">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 bg-gray fw-medium border">Row column</div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#rowGuttersCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="rowGuttersCode">
<div>&lt;div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3"&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;Row column&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;Row column&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;Row column&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;Row column&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;Row column&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;Row column&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;Row column&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;Row column&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;Row column&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;Row column&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">No Gutters</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        The gutters between columns in our predefined grid classes can be
        removed with <code>.g-0</code>. This removes the negative
        <code>margin</code>s from <code>.row</code> and the horizontal
        <code>padding</code> from all immediate children columns.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        <strong>Need an edge-to-edge design?</strong> Drop the parent
        <code>.container</code> or <code>.container-fluid</code> and add
        <code>.mx-0</code> to the <code>.row</code> to prevent overflow.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        In practice, here’s how it looks. Note you can continue to use this with
        all other predefined grid classes (including column widths, responsive
        tiers, reorders, and more).
      </p>
      <div class="row g-0 text-center">
        <div class="col-sm-6 col-md-8">
          <div class="p-3 bg-gray fw-medium border">.col-sm-6 .col-md-8</div>
        </div>
        <div class="col-6 col-md-4">
          <div class="p-3 bg-gray fw-medium border">.col-6 .col-md-4</div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#noGuttersCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="noGuttersCode">
<div>&lt;div class="row g-0 text-center"&gt;</div>
    <div>&lt;div class="col-sm-6 col-md-8"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;.col-sm-6 .col-md-8&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-6 col-md-4"&gt;</div>
        <div>&lt;div class="p-3 bg-gray fw-medium border"&gt;.col-6 .col-md-4&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuttersContent",
};
</script>