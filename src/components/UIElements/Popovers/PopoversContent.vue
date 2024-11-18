<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Basic Popovers
          </h5>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="popover"
            data-bs-title="Popover title"
            data-bs-content="And here's some amazing content. It's very engaging. Right?"
          >
            Click to toggle popover
          </button>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#basicPopoversCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicPopoversCode">
<div>&lt;button type="button" class="btn btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?"&gt;</div>
    <div>Click to toggle popover</div>
<div>&lt;/button&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Dismiss on Next Click Popovers
          </h5>
          <a
            tabindex="0"
            class="btn btn-primary"
            role="button"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            data-bs-title="Dismissible popover"
            data-bs-content="And here's some amazing content. It's very engaging. Right?"
          >
            Dismissible popover
          </a>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#dismissOnNextClickPopoversCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="dismissOnNextClickPopoversCode">
<div>&lt;a tabindex="0" class="btn btn-primary" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?"&gt;</div>
    <div>Dismissible popover</div>
<div>&lt;/a&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Disabled Popovers
          </h5>
          <span
            class="d-inline-block"
            tabindex="0"
            data-bs-toggle="popover"
            data-bs-trigger="hover focus"
            data-bs-content="Disabled popover"
          >
            <button class="btn btn-success" type="button" disabled>
              Disabled button
            </button>
          </span>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#disabledPopoversCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledPopoversCode">
<div>&lt;span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover"&gt;</div>
    <div>&lt;button class="btn btn-success" type="button" disabled&gt;Disabled button&lt;/button&gt;</div>
<div>&lt;/span&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-5 mb-md-10 mb-xl-15">
            Four Directions Popovers
          </h5>
          <button
            type="button"
            class="btn btn-secondary me-10 mt-10"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="top"
            data-bs-content="Top popover"
          >
            Popover on top
          </button>
          <button
            type="button"
            class="btn btn-secondary me-10 mt-10"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="right"
            data-bs-content="Right popover"
          >
            Popover on right
          </button>
          <button
            type="button"
            class="btn btn-secondary me-10 mt-10"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="bottom"
            data-bs-content="Bottom popover"
          >
            Popover on bottom
          </button>
          <button
            type="button"
            class="btn btn-secondary me-10 mt-10"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content="Left popover"
          >
            Popover on left
          </button>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#directionsPopoversCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="directionsPopoversCode">
<div>&lt;button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"&gt;</div>
    <div>Popover on top</div>
<div>&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover"&gt;</div>
    <div>Popover on right</div>
<div>&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover"&gt;</div>
    <div>Popover on bottom</div>
<div>&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover"&gt;</div>
    <div>Popover on left</div>
<div>&lt;/button&gt;</div>
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
  name: "PopoversContent",
};
</script>