<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">Overview</h5>
          <div class="text-bg-primary p-3 fs-md-15 fs-lg-16">
            Primary with contrasting color
          </div>
          <div class="text-bg-secondary p-3 fs-md-15 fs-lg-16">
            Secondary with contrasting color
          </div>
          <div class="text-bg-success p-3 fs-md-15 fs-lg-16">
            Success with contrasting color
          </div>
          <div class="text-bg-danger p-3 fs-md-15 fs-lg-16">
            Danger with contrasting color
          </div>
          <div class="text-bg-warning p-3 fs-md-15 fs-lg-16">
            Warning with contrasting color
          </div>
          <div class="text-bg-info p-3 fs-md-15 fs-lg-16">
            Info with contrasting color
          </div>
          <div class="text-bg-light p-3 fs-md-15 fs-lg-16">
            Light with contrasting color
          </div>
          <div class="text-bg-dark p-3 fs-md-15 fs-lg-16">
            Dark with contrasting color
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#overviewBGColorCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="overviewBGColorCode">
<div>&lt;div class="text-bg-primary p-3 fs-md-15 fs-lg-16"&gt;Primary with contrasting color&lt;/div&gt;</div>
<div>&lt;div class="text-bg-secondary p-3 fs-md-15 fs-lg-16"&gt;Secondary with contrasting color&lt;/div&gt;</div>
<div>&lt;div class="text-bg-success p-3 fs-md-15 fs-lg-16"&gt;Success with contrasting color&lt;/div&gt;</div>
<div>&lt;div class="text-bg-danger p-3 fs-md-15 fs-lg-16"&gt;Danger with contrasting color&lt;/div&gt;</div>
<div>&lt;div class="text-bg-warning p-3 fs-md-15 fs-lg-16"&gt;Warning with contrasting color&lt;/div&gt;</div>
<div>&lt;div class="text-bg-info p-3 fs-md-15 fs-lg-16"&gt;Info with contrasting color&lt;/div&gt;</div>
<div>&lt;div class="text-bg-light p-3 fs-md-15 fs-lg-16"&gt;Light with contrasting color&lt;/div&gt;</div>
<div>&lt;div class="text-bg-dark p-3 fs-md-15 fs-lg-16"&gt;Dark with contrasting color&lt;/div&gt;</div>
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
            With Component
          </h5>
          <span class="badge text-bg-primary fw-medium me-10">Primary</span>
          <span class="badge text-bg-info fw-medium">Info</span>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#withBGColorCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="withBGColorCode">
<div>&lt;span class="badge text-bg-primary fw-medium"&gt;Primary&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-info fw-medium"&gt;Info&lt;/span&gt;</div>
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-20">
            Or on
            <a
              href="https://getbootstrap.com/docs/5.3/components/card/#background-and-color"
              target="_blank"
              >cards</a
            >:
          </p>
          <div class="card text-bg-primary mb-3">
            <div class="card-header fs-15 fs-md-18 fs-lg-20 fw-bold">
              Header
            </div>
            <div class="card-body">
              <p class="card-text fs-md-15 fs-lg-16">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card text-bg-info mb-3">
            <div class="card-header fs-15 fs-md-18 fs-lg-20 fw-bold">
              Header
            </div>
            <div class="card-body">
              <p class="card-text fs-md-15 fs-lg-16">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#cardBGColorCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="cardBGColorCode">
<div>&lt;div class="card text-bg-primary mb-3"&gt;</div>
    <div>&lt;div class="card-header fs-15 fs-md-18 fs-lg-20 fw-bold"&gt;Header&lt;/div&gt;</div>
    <div>&lt;div class="card-body"&gt;</div>
        <div>&lt;p class="card-text fs-md-15 fs-lg-16"&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="card text-bg-info mb-3"&gt;</div>
    <div>&lt;div class="card-header fs-15 fs-md-18 fs-lg-20 fw-bold"&gt;Header&lt;/div&gt;</div>
    <div>&lt;div class="card-body"&gt;</div>
        <div>&lt;p class="card-text fs-md-15 fs-lg-16"&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
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
  name: "ColorBackground",
};
</script>