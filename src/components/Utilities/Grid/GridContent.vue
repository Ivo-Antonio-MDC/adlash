<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">Grid System</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Use our powerful mobile-first flexbox grid to build layouts of all
        shapes and sizes thanks to a twelve column system, six default
        responsive tiers, Sass variables and mixins, and dozens of predefined
        classes.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Bootstrap’s grid system uses a series of containers, rows, and columns
        to layout and align content. It’s built with
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
          target="_blank"
        >
          flexbox
        </a>
        and is fully responsive. Below is an example and an in-depth explanation
        for how the grid system comes together.
      </p>
      <a
        href="https://getbootstrap.com/docs/5.3/layout/grid/"
        class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block"
        target="_blank"
      >
        Grid on Bootstrap
      </a>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Grid</h5>
      <div class="row mb-25">
        <div class="col-12">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-12
          </div>
        </div>
      </div>
      <div class="row mb-25">
        <div class="col-6">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-6
          </div>
        </div>
        <div class="col-6">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-6
          </div>
        </div>
      </div>
      <div class="row mb-25">
        <div class="col-4">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-4
          </div>
        </div>
        <div class="col-4">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-4
          </div>
        </div>
        <div class="col-4">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-4
          </div>
        </div>
      </div>
      <div class="row mb-25">
        <div class="col-3">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-3
          </div>
        </div>
        <div class="col-3">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-3
          </div>
        </div>
        <div class="col-3">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-3
          </div>
        </div>
        <div class="col-3">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-3
          </div>
        </div>
      </div>
      <div class="row mb-25">
        <div class="col-7">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-7
          </div>
        </div>
        <div class="col-5">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-5
          </div>
        </div>
      </div>
      <div class="row mb-25">
        <div class="col-8">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-8
          </div>
        </div>
        <div class="col-4">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-4
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-3
          </div>
        </div>
        <div class="col-9">
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-9
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicGridCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicGridCode">
<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-12</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-6"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-6</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-6"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-6</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-4"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-4</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-4"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-4</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-4"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-4</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-3"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-3</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-3"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-3</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-3"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-3</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-3"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-3</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-7"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-7</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-5"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-5</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-8"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-8</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-4"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-4</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-3"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-3</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-9"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-9</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Responsive Grid</h5>
      <div class="row mb-25">
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 col-xxxl-4"
        >
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-4
          </div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 col-xxxl-4"
        >
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-4
          </div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 col-xxxl-4"
        >
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-4
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 col-xxxl-3"
        >
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-3
          </div>
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 col-xxxl-3"
        >
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-3
          </div>
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 col-xxxl-3"
        >
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-3
          </div>
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 col-xxxl-3"
        >
          <div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium">
            .col-3
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#responsiveGridCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="responsiveGridCode">
<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 col-xxxl-4"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-4</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 col-xxxl-4"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-4</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 col-xxxl-4"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-4</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 col-xxxl-3"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-3</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 col-xxxl-3"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-3</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 col-xxxl-3"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-3</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 col-xxxl-3"&gt;</div>
        <div>&lt;div class="bg-gray p-25 fs-md-15 fs-lg-16 text-black fw-medium"&gt;</div>
            <div>.col-3</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">CSS Grid</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Learn how to enable, use, and customize our alternate layout system
        built on CSS Grid with examples and code snippets.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Bootstrap’s default grid system represents the culmination of over a
        decade of CSS layout techniques, tried and tested by millions of people.
        But, it was also created without many of the modern CSS features and
        techniques we’re seeing in browsers like the new CSS Grid.
      </p>
      <a
        href="https://getbootstrap.com/docs/5.3/layout/css-grid/"
        class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block mt-10 mt-sm-0"
        target="_blank"
      >
        CSS Grid on Bootstrap
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridContent",
};
</script>