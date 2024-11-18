<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">Display Property</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Quickly and responsively toggle the display value of components and more
        with our display utilities. Includes support for some of the more common
        values, as well as some extras for controlling display when printing.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Display utility classes that apply to all
        <a
          href="https://getbootstrap.com/docs/5.3/layout/breakpoints/"
          target="_blank"
          >breakpoints</a
        >, from <code>xs</code> to <code>xxl</code>, have no breakpoint
        abbreviation in them. This is because those classes are applied from
        <code>min-width: 0;</code> and up, and thus are not bound by a media
        query. The remaining breakpoints, however, do include a breakpoint
        abbreviation.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-10">
        As such, the classes are named using the format:
      </p>
      <ul>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.d-{value}</code> for <code>xs</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>.d-{breakpoint}-{value}</code> for <code>sm</code>,
          <code>md</code>, <code>lg</code>, <code>xl</code>, and
          <code>xxl</code>.
        </li>
      </ul>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-10">
        Where <em>value</em> is one of:
      </p>
      <ul>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>none</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>inline</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>inline-block</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>block</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>grid</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>inline-grid</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>table</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>table-cell</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>table-row</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>inline-flex</code>
        </li>
      </ul>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-10">
        The display values can be altered by changing the
        <code>display</code> values defined in <code>$utilities</code> and
        recompiling the SCSS.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-20">
        The media queries affect screen widths with the given breakpoint
        <em>or larger</em>. For example, <code>.d-lg-none</code> sets
        <code>display: none;</code> on <code>lg</code>, <code>xl</code>, and
        <code>xxl</code> screens.
      </p>
      <div class="d-inline p-2 text-bg-primary me-10 mb-15">d-inline</div>
      <div class="d-inline p-2 text-bg-dark me-10 mb-15">d-inline</div>
      <div
        class="position-relative mt-15 mt-md-20 mt-lg-25 mb-15 mb-md-20 mb-lg-25"
      >
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#displayCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="displayCode">
&lt;div class="d-inline p-2 text-bg-primary"&gt;d-inline&lt;/div&gt;
&lt;div class="d-inline p-2 text-bg-dark"&gt;d-inline&lt;/div&gt;
</code>
</pre>
      </div>
      <span class="d-block p-2 text-bg-primary">d-block</span>
      <span class="d-block p-2 text-bg-dark">d-block</span>
      <div class="position-relative mt-15 mt-md-20 mt-lg-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#display2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="display2Code">
&lt;span class="d-block p-2 text-bg-primary"&gt;d-block&lt;/span&gt;
&lt;span class="d-block p-2 text-bg-dark"&gt;d-block&lt;/span&gt;
</code>
</pre>
      </div>
      <a
        href="https://getbootstrap.com/docs/5.3/utilities/display/#hiding-elements"
        class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block mt-20"
        target="_blank"
      >
        More About Display
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayContent",
};
</script>