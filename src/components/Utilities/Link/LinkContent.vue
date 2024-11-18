<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Link Opacity</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Change the alpha opacity of the link <code>rgba()</code> color value
        with utilities. Please be aware that changes to a color’s opacity can
        lead to links with
        <a
          href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast"
          target="_blank"
          ><em>insufficient</em> contrast</a
        >.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a class="link-opacity-10" href="#">Link opacity 10</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a class="link-opacity-25" href="#">Link opacity 25</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a class="link-opacity-50" href="#">Link opacity 50</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a class="link-opacity-75" href="#">Link opacity 75</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base mb-0">
          <a class="link-opacity-100" href="#">Link opacity 100</a>
        </p>
      </div>
      <div class="position-relative mt-25 mb-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#linkOpacityCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="linkOpacityCode">
&lt;p&gt;&lt;a class="link-opacity-10" href="#"&gt;Link opacity 10&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-opacity-25" href="#"&gt;Link opacity 25&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-opacity-50" href="#"&gt;Link opacity 50&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-opacity-75" href="#"&gt;Link opacity 75&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-opacity-100" href="#"&gt;Link opacity 100&lt;/a&gt;&lt;/p&gt;
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        You can even change the opacity level on hover.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <a class="link-opacity-10-hover" href="#">Link hover opacity 10</a>
        </p>
        <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <a class="link-opacity-25-hover" href="#">Link hover opacity 25</a>
        </p>
        <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <a class="link-opacity-50-hover" href="#">Link hover opacity 50</a>
        </p>
        <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <a class="link-opacity-75-hover" href="#">Link hover opacity 75</a>
        </p>
        <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
          <a class="link-opacity-100-hover" href="#">Link hover opacity 100</a>
        </p>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#linkHoverOpacityCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="linkHoverOpacityCode">
&lt;p&gt;&lt;a class="link-opacity-10-hover" href="#"&gt;Link hover opacity 10&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-opacity-25-hover" href="#"&gt;Link hover opacity 25&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-opacity-50-hover" href="#"&gt;Link hover opacity 50&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-opacity-75-hover" href="#"&gt;Link hover opacity 75&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-opacity-100-hover" href="#"&gt;Link hover opacity 100&lt;/a&gt;&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Underline Color</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Change the underline’s color independent of the link text color.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a href="#" class="link-underline-primary">Primary underline</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a href="#" class="link-underline-secondary">Secondary underline</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a href="#" class="link-underline-success">Success underline</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a href="#" class="link-underline-danger">Danger underline</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a href="#" class="link-underline-warning">Warning underline</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a href="#" class="link-underline-info">Info underline</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a href="#" class="link-underline-light">Light underline</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base mb-0">
          <a href="#" class="link-underline-dark">Dark underline</a>
        </p>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#underlineColorCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="underlineColorCode">
&lt;p&gt;&lt;a href="#" class="link-underline-primary"&gt;Primary underline&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-underline-secondary"&gt;Secondary underline&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-underline-success"&gt;Success underline&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-underline-danger"&gt;Danger underline&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-underline-warning"&gt;Warning underline&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-underline-info"&gt;Info underline&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-underline-light"&gt;Light underline&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-underline-dark"&gt;Dark underline&lt;/a&gt;&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Underline Offset</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Change the underline’s distance from your text. Offset is set in
        <code>em</code> units to automatically scale with the element’s current
        <code>font-size</code>.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <p class="fs-md-15 fs-lg-16 lh-base"><a href="#">Default link</a></p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a class="link-offset-1" href="#">Offset 1 link</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a class="link-offset-2" href="#">Offset 2 link</a>
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base mb-0">
          <a class="link-offset-3" href="#">Offset 3 link</a>
        </p>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#underlineOffsetCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="underlineOffsetCode">
&lt;p&gt;&lt;a href="#"&gt;Default link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-offset-1" href="#"&gt;Offset 1 link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-offset-2" href="#"&gt;Offset 2 link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-offset-3" href="#"&gt;Offset 3 link&lt;/a&gt;&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Underline Opacity</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Change the underline’s opacity. Requires adding
        <code>.link-underline</code> to first set an <code>rgba()</code> color
        we use to then modify the alpha opacity.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            class="link-offset-2 link-underline link-underline-opacity-0"
            href="#"
            >Underline opacity 0</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            class="link-offset-2 link-underline link-underline-opacity-10"
            href="#"
            >Underline opacity 10</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            class="link-offset-2 link-underline link-underline-opacity-25"
            href="#"
            >Underline opacity 25</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            class="link-offset-2 link-underline link-underline-opacity-50"
            href="#"
            >Underline opacity 50</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            class="link-offset-2 link-underline link-underline-opacity-75"
            href="#"
            >Underline opacity 75</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base mb-0">
          <a
            class="link-offset-2 link-underline link-underline-opacity-100"
            href="#"
            >Underline opacity 100</a
          >
        </p>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#underlineOpacityCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="underlineOpacityCode">
&lt;p&gt;&lt;a class="link-offset-2 link-underline link-underline-opacity-0" href="#"&gt;Underline opacity 0&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-offset-2 link-underline link-underline-opacity-10" href="#"&gt;Underline opacity 10&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-offset-2 link-underline link-underline-opacity-25" href="#"&gt;Underline opacity 25&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-offset-2 link-underline link-underline-opacity-50" href="#"&gt;Underline opacity 50&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-offset-2 link-underline link-underline-opacity-75" href="#"&gt;Underline opacity 75&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a class="link-offset-2 link-underline link-underline-opacity-100" href="#"&gt;Underline opacity 100&lt;/a&gt;&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Hover Variants</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Just like the <code>.link-opacity-*-hover</code> utilities,
        <code>.link-offset</code> and
        <code>.link-underline-opacity</code> utilities include
        <code>:hover</code> variants by default. Mix and match to create unique
        link styles.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <a
          class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-md-15 fs-lg-16"
          href="#"
        >
          Underline opacity 0
        </a>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#hoverVariantsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="hoverVariantsCode">
&lt;a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#"&gt;
    Underline opacity 0
&lt;/a&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Colored Links</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        <a
          href="https://getbootstrap.com/docs/5.3/helpers/colored-links/"
          target="_blank"
          >Colored link helpers</a
        >
        have been updated to pair with our link utilities. Use the new utilities
        to modify the link opacity, underline opacity, and underline offset.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            href="#"
            class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Primary link</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            href="#"
            class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Secondary link</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            href="#"
            class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Success link</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            href="#"
            class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Danger link</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            href="#"
            class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Warning link</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            href="#"
            class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Info link</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            href="#"
            class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Light link</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a
            href="#"
            class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Dark link</a
          >
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base mb-0">
          <a
            href="#"
            class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
            >Emphasis link</a
          >
        </p>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#coloredLinksCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="coloredLinksCode">
&lt;p&gt;&lt;a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"&gt;Primary link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"&gt;Secondary link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"&gt;Success link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"&gt;Danger link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"&gt;Warning link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"&gt;Info link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"&gt;Light link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"&gt;Dark link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"&gt;Emphasis link&lt;/a&gt;&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkContent",
};
</script>