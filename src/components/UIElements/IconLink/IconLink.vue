<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Basic Icon Link</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Take a regular <code>&lt;a&gt;</code> element, add
        <code>.icon-link</code>, and insert an icon on either the left or right
        of your link text. The icon is automatically sized, placed, and colored.
      </p>
      <a class="icon-link text-decoration-none fw-medium transition" href="#">
        <i class="flaticon-sterile-box lh-1 fs-16 fs-lg-18"></i>
        Icon link
      </a>
      <div class="position-relative mt-15">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicIconLinkCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicIconLinkCode">
<div>&lt;a class="icon-link text-decoration-none fw-medium transition" href="#"&gt;</div>
    <div>&lt;i class="flaticon-sterile-box lh-1 fs-16 fs-lg-18"&gt;&lt;/i&gt;</div>
    <div>Icon link</div>
<div>&lt;/a&gt;</div>
</code>
</pre>
      </div>
      <a
        class="icon-link mt-15 mt-lg-20 text-decoration-none fw-medium transition"
        href="#"
      >
        Icon link
        <i class="flaticon-right-arrow-1 lh-1 position-relative top-1"></i>
      </a>
      <div class="position-relative mt-15">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicIconLink2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicIconLink2Code">
<div>&lt;a class="icon-link text-decoration-none fw-medium transition" href="#"&gt;</div>
    <div>Icon link</div>
    <div>&lt;i class="flaticon-right-arrow-1 lh-1 position-relative top-1"&gt;&lt;/i&gt;</div>
<div>&lt;/a&gt;</div>
</code>
</pre>
      </div>
      <h5 class="card-title fw-bold mb-10 mt-15 mt-sm-20 mt-md-25 md-lg-30">
        Style on hover
      </h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Add <code>.icon-link-hover</code> to move the icon to the right on
        hover.
      </p>
      <a
        class="icon-link icon-link-hover text-decoration-none fw-medium transition"
        href="#"
      >
        Icon link
        <i class="flaticon-right-arrow-1 bi lh-1"></i>
      </a>
      <div class="position-relative mt-15 mb-15 mb-sm-20 mb-md-25 mb-lg-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicIconLink3Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicIconLink3Code">
<div>&lt;a class="icon-link icon-link-hover text-decoration-none fw-medium transition" href="#"&gt;</div>
    <div>Icon link</div>
    <div>&lt;i class="flaticon-right-arrow-1 bi lh-1"&gt;&lt;/i&gt;</div>
<div>&lt;/a&gt;</div>
</code>
</pre>
      </div>
      <a
        class="icon-link icon-link-hover link-success text-decoration-none fw-medium transition"
        href="#"
      >
        Icon link
        <i class="flaticon-right-arrow-1 bi lh-1"></i>
      </a>
      <div class="position-relative mt-15">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicIconLink4Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicIconLink4Code">
<div>&lt;a class="icon-link icon-link-hover link-success text-decoration-none fw-medium transition" href="#"&gt;</div>
    <div>Icon link</div>
    <div>&lt;i class="flaticon-right-arrow-1 bi lh-1"&gt;&lt;/i&gt;</div>
<div>&lt;/a&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconLink",
};
</script>