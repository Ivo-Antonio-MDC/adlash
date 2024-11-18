<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Text Alignment</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Easily realign text to components with text alignment classes. For
        start, end, and center alignment, responsive classes are available that
        use the same viewport width breakpoints as the grid system.
      </p>
      <div class="border p-2 p-lg-4">
        <p class="text-start fs-md-15 fs-lg-16 text-paragraph lh-base">
          Start aligned text on all viewport sizes.
        </p>
        <p class="text-center fs-md-15 fs-lg-16 text-paragraph lh-base">
          Center aligned text on all viewport sizes.
        </p>
        <p class="text-end fs-md-15 fs-lg-16 text-paragraph lh-base">
          End aligned text on all viewport sizes.
        </p>
        <p class="text-sm-start fs-md-15 fs-lg-16 text-paragraph lh-base">
          Start aligned text on viewports sized SM (small) or wider.
        </p>
        <p class="text-md-start fs-md-15 fs-lg-16 text-paragraph lh-base">
          Start aligned text on viewports sized MD (medium) or wider.
        </p>
        <p class="text-lg-start fs-md-15 fs-lg-16 text-paragraph lh-base">
          Start aligned text on viewports sized LG (large) or wider.
        </p>
        <p class="text-xl-start fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
          Start aligned text on viewports sized XL (extra-large) or wider.
        </p>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#textAlignmentCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="textAlignmentCode">
&lt;p class="text-start"&gt;Start aligned text on all viewport sizes.&lt;/p&gt;
&lt;p class="text-center"&gt;Center aligned text on all viewport sizes.&lt;/p&gt;
&lt;p class="text-end"&gt;End aligned text on all viewport sizes.&lt;/p&gt;

&lt;p class="text-sm-start"&gt;Start aligned text on viewports sized SM (small) or wider.&lt;/p&gt;
&lt;p class="text-md-start"&gt;Start aligned text on viewports sized MD (medium) or wider.&lt;/p&gt;
&lt;p class="text-lg-start"&gt;Start aligned text on viewports sized LG (large) or wider.&lt;/p&gt;
&lt;p class="text-xl-start"&gt;Start aligned text on viewports sized XL (extra-large) or wider.&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Text Wrapping & Overflow</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Wrap text with a <code>.text-wrap</code> class.
      </p>
      <div class="border p-2 p-lg-4">
        <div class="badge bg-primary text-wrap fw-medium" style="width: 6rem">
          This text should wrap.
        </div>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#textWrappingCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="textWrappingCode">
&lt;div class="badge bg-primary text-wrap" style="width: 6rem;"&gt;
    This text should wrap.
&lt;/div&gt;
</code>
</pre>
      </div>
      <p
        class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-15 mt-sm-20 mt-md-25"
      >
        Prevent text from wrapping with a <code>.text-nowrap</code> class.
      </p>
      <div class="border p-2 p-lg-4">
        <div
          class="text-nowrap bg-body-secondary border fw-medium"
          style="width: 8rem"
        >
          This text should overflow the parent.
        </div>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#textNowrapCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="textNowrapCode">
&lt;div class="text-nowrap bg-body-secondary border" style="width: 8rem;"&gt;
    This text should overflow the parent.
&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Word Break</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Prevent long strings of text from breaking your components’ layout by
        using <code>.text-break</code> to set
        <code>word-wrap: break-word</code> and
        <code>word-break: break-word</code>. We use
        <code>word-wrap</code> instead of the more common
        <code>overflow-wrap</code> for wider browser support, and add the
        deprecated <code>word-break: break-word</code> to avoid issues with flex
        containers.
      </p>
      <div class="border p-2 p-lg-4">
        <p class="text-break fw-medium mb-0">
          mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
        </p>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#wordBreakCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="wordBreakCode">
&lt;p class="text-break"&gt;mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Text Transform</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Transform text in components with text capitalization classes.
      </p>
      <div class="border p-2 p-lg-4">
        <p class="text-lowercase fw-medium">Lowercased text.</p>
        <p class="text-uppercase fw-medium">Uppercased text.</p>
        <p class="text-capitalize fw-medium mb-0">CapiTaliZed text.</p>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#textTransformCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="textTransformCode">
&lt;p class="text-lowercase"&gt;Lowercased text.&lt;/p&gt;
&lt;p class="text-uppercase"&gt;Uppercased text.&lt;/p&gt;
&lt;p class="text-capitalize"&gt;CapiTaliZed text.&lt;/p&gt;
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-15 mb-0">
        Note how <code>.text-capitalize</code> only changes the first letter of
        each word, leaving the case of any other letters unaffected.
      </p>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Font Size</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Quickly change the <code>font-size</code> of text. While our heading
        classes (e.g., <code>.h1</code>–<code>.h6</code>) apply
        <code>font-size</code>, <code>font-weight</code>, and
        <code>line-height</code>, these utilities <em>only</em> apply
        <code>font-size</code>. Sizing for these utilities matches HTML’s
        heading elements, so as the number increases, their size decreases.
      </p>
      <div class="border p-2 p-lg-4">
        <p class="fs-1">.fs-1 text</p>
        <p class="fs-2">.fs-2 text</p>
        <p class="fs-3">.fs-3 text</p>
        <p class="fs-4">.fs-4 text</p>
        <p class="fs-5">.fs-5 text</p>
        <p class="fs-6 mb-0">.fs-6 text</p>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#fontSizeCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="fontSizeCode">
&lt;p class="fs-1"&gt;.fs-1 text&lt;/p&gt;
&lt;p class="fs-2"&gt;.fs-2 text&lt;/p&gt;
&lt;p class="fs-3"&gt;.fs-3 text&lt;/p&gt;
&lt;p class="fs-4"&gt;.fs-4 text&lt;/p&gt;
&lt;p class="fs-5"&gt;.fs-5 text&lt;/p&gt;
&lt;p class="fs-6"&gt;.fs-6 text&lt;/p&gt;
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-15 mb-0">
        Customize your available <code>font-sizes</code> by modifying the
        <code>$font-sizes</code> Sass map.
      </p>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Font Weight & Italics</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Quickly change the <code>font-weight</code> or
        <code>font-style</code> of text with these utilities.
        <code>font-style</code> utilities are abbreviated as
        <code>.fst-*</code> and <code>font-weight</code> utilities are
        abbreviated as <code>.fw-*</code>.
      </p>
      <div class="border p-2 p-lg-4">
        <p class="fw-bold fw-medium">Bold text.</p>
        <p class="fw-bolder fw-medium">
          Bolder weight text (relative to the parent element).
        </p>
        <p class="fw-semibold fw-medium">Semibold weight text.</p>
        <p class="fw-medium fw-medium">Medium weight text.</p>
        <p class="fw-normal fw-medium">Normal weight text.</p>
        <p class="fw-light fw-medium">Light weight text.</p>
        <p class="fw-lighter fw-medium">
          Lighter weight text (relative to the parent element).
        </p>
        <p class="fst-italic fw-medium">Italic text.</p>
        <p class="fst-normal fw-medium mb-0">Text with normal font style</p>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#fontWeightItalicsCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="fontWeightItalicsCode">
&lt;p class="fw-bold"&gt;Bold text.&lt;/p&gt;
&lt;p class="fw-bolder"&gt;Bolder weight text (relative to the parent element).&lt;/p&gt;
&lt;p class="fw-semibold"&gt;Semibold weight text.&lt;/p&gt;
&lt;p class="fw-medium"&gt;Medium weight text.&lt;/p&gt;
&lt;p class="fw-normal"&gt;Normal weight text.&lt;/p&gt;
&lt;p class="fw-light"&gt;Light weight text.&lt;/p&gt;
&lt;p class="fw-lighter"&gt;Lighter weight text (relative to the parent element).&lt;/p&gt;
&lt;p class="fst-italic"&gt;Italic text.&lt;/p&gt;
&lt;p class="fst-normal"&gt;Text with normal font style&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Line Height</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Change the line height with <code>.lh-*</code> utilities.
      </p>
      <div class="border p-2 p-lg-4">
        <p class="lh-1 fs-md-15 fs-lg-16">
          This is a long paragraph written to show how the line-height of an
          element is affected by our utilities. Classes are applied to the
          element itself or sometimes the parent element. These classes can be
          customized as needed with our utility API.
        </p>
        <p class="lh-sm fs-md-15 fs-lg-16">
          This is a long paragraph written to show how the line-height of an
          element is affected by our utilities. Classes are applied to the
          element itself or sometimes the parent element. These classes can be
          customized as needed with our utility API.
        </p>
        <p class="lh-base fs-md-15 fs-lg-16">
          This is a long paragraph written to show how the line-height of an
          element is affected by our utilities. Classes are applied to the
          element itself or sometimes the parent element. These classes can be
          customized as needed with our utility API.
        </p>
        <p class="lh-lg fs-md-15 fs-lg-16">
          This is a long paragraph written to show how the line-height of an
          element is affected by our utilities. Classes are applied to the
          element itself or sometimes the parent element. These classes can be
          customized as needed with our utility API.
        </p>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#lineHeightCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="lineHeightCode">
&lt;p class="lh-1"&gt;This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.&lt;/p&gt;
&lt;p class="lh-sm"&gt;This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.&lt;/p&gt;
&lt;p class="lh-base"&gt;This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.&lt;/p&gt;
&lt;p class="lh-lg"&gt;This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Monospace</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Change a selection to our monospace font stack with
        <code>.font-monospace</code>.
      </p>
      <div class="border p-2 p-lg-4">
        <p class="font-monospace mb-0">This is in monospace</p>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#monospaceCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="monospaceCode">
&lt;p class="font-monospace"&gt;This is in monospace&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Reset Color</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Reset a text or link’s color with <code>.text-reset</code>, so that it
        inherits the color from its parent.
      </p>
      <div class="border p-2 p-lg-4">
        <p class="text-body-secondary fs-md-15 fs-lg-16 mb-0">
          Muted text with a <a href="#" class="text-reset">reset link</a>.
        </p>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#resetColorCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="resetColorCode">
&lt;p class="text-body-secondary"&gt;
    Muted text with a &lt;a href="#" class="text-reset"&gt;reset link&lt;/a&gt;.
&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Text Decoration</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Decorate text in components with text decoration classes.
      </p>
      <div class="border p-2 p-lg-4">
        <p class="text-decoration-underline fs-md-15 fs-lg-16">
          This text has a line underneath it.
        </p>
        <p class="text-decoration-line-through fs-md-15 fs-lg-16">
          This text has a line going through it.
        </p>
        <a href="#" class="text-decoration-none fs-md-15 fs-lg-16"
          >This link has its text decoration removed</a
        >
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#textDecorationCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="textDecorationCode">
&lt;p class="text-decoration-underline"&gt;This text has a line underneath it.&lt;/p&gt;
&lt;p class="text-decoration-line-through"&gt;This text has a line going through it.&lt;/p&gt;
&lt;a href="#" class="text-decoration-none"&gt;This link has its text decoration removed&lt;/a&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextContent",
};
</script>