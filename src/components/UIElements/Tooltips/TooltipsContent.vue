<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-5 mb-lg-10 mb-xl-15">
            Basic Tooltips
          </h5>
          <button
            type="button"
            class="btn btn-secondary me-10 mt-10"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Tooltip on top"
          >
            Tooltip on top
          </button>
          <button
            type="button"
            class="btn btn-secondary me-10 mt-10"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-title="Tooltip on right"
          >
            Tooltip on right
          </button>
          <button
            type="button"
            class="btn btn-secondary me-10 mt-10"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Tooltip on bottom"
          >
            Tooltip on bottom
          </button>
          <button
            type="button"
            class="btn btn-secondary me-10 mt-10"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-title="Tooltip on left"
          >
            Tooltip on left
          </button>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#basicTooltipsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicTooltipsCode">
<div>&lt;button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"&gt;</div>
    <div>Tooltip on top</div>
<div>&lt;/button&gt;</div>

<div>&lt;button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right"&gt;</div>
    <div>Tooltip on right</div>
<div>&lt;/button&gt;</div>

<div>&lt;button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom"&gt;</div>
    <div>Tooltip on bottom</div>
<div>&lt;/button&gt;</div>

<div>&lt;button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left"&gt;</div>
    <div>Tooltip on left</div>
<div>&lt;/button&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-5 mb-lg-10 mb-xl-15">
            Tooltips on Links
          </h5>
          <p class="muted fs-md-15 fs-lg-16 lh-base">
            Placeholder text to demonstrate some
            <a href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip"
              >inline links</a
            >
            with tooltips. This is now just filler, no killer. Content placed
            here just to mimic the presence of
            <a href="#" data-bs-toggle="tooltip" data-bs-title="Another tooltip"
              >real text</a
            >. And all that just to give you an idea of how tooltips would look
            when used in real-world situations. So hopefully you've now seen how
            <a
              href="#"
              data-bs-toggle="tooltip"
              data-bs-title="Another one here too"
              >these tooltips on links</a
            >
            can work in practice, once you use them on
            <a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!"
              >your own</a
            >
            site or project.
          </p>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#linksTooltipsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="linksTooltipsCode">
<div>&lt;p class="muted fs-md-15 fs-lg-16 lh-base"&gt;Placeholder text to demonstrate some &lt;a href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip"&gt;inline links&lt;/a&gt; with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of &lt;a href="#" data-bs-toggle="tooltip" data-bs-title="Another tooltip"&gt;real text&lt;/a&gt;. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how &lt;a href="#" data-bs-toggle="tooltip" data-bs-title="Another one here too"&gt;these tooltips on links&lt;/a&gt; can work in practice, once you use them on &lt;a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!"&gt;your own&lt;/a&gt; site or project.&lt;/p&gt;</div>
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
            Disabled Tooltips
          </h5>
          <span
            class="d-inline-block"
            tabindex="0"
            data-bs-toggle="tooltip"
            data-bs-title="Disabled tooltip"
          >
            <button class="btn btn-primary" type="button" disabled>
              Disabled button
            </button>
          </span>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#disabledTooltipsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledTooltipsCode">
<div>&lt;span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" data-bs-title="Disabled tooltip"&gt;</div>
    <div>&lt;button class="btn btn-primary" type="button" disabled&gt;Disabled button&lt;/button&gt;</div>
<div>&lt;/span&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Custom Tooltips
          </h5>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            data-bs-title="This top tooltip is themed via CSS variables."
          >
            Custom tooltip
          </button>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#customTooltipsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="customTooltipsCode">
<div>&lt;button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="This top tooltip is themed via CSS variables."&gt;</div>
    <div>Custom tooltip</div>
<div>&lt;/button&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            With SVG Tooltips
          </h5>
          <a
            href="#"
            class="d-inline-block"
            data-bs-toggle="tooltip"
            data-bs-title="Default tooltip"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 100 100"
            >
              <rect width="100%" height="100%" fill="#563d7c" />
              <circle cx="50" cy="50" r="30" fill="#007bff" />
            </svg>
          </a>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#svgTooltipsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="svgTooltipsCode">
<div>&lt;a href="#" class="d-inline-block" data-bs-toggle="tooltip" data-bs-title="Default tooltip"&gt;</div>
    <div>&lt;svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100"&gt;</div>
        <div>&lt;rect width="100%" height="100%" fill="#563d7c"/&gt;</div>
        <div>&lt;circle cx="50" cy="50" r="30" fill="#007bff"/&gt;</div>
    <div>&lt;/svg&gt;</div>
<div>&lt;/a&gt;</div>
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
  name: "TooltipsContent",
};
</script>