<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Change the alignment of elements with the
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align"
          target="_blank"
          ><code>vertical-alignment</code></a
        >
        utilities. Please note that vertical-align only affects inline,
        inline-block, inline-table, and table cell elements.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Choose from <code>.align-baseline</code>, <code>.align-top</code>,
        <code>.align-middle</code>, <code>.align-bottom</code>,
        <code>.align-text-bottom</code>, and <code>.align-text-top</code> as
        needed.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        To vertically center non-inline content (like <code>&lt;div&gt;</code>s
        and more), use our
        <a
          href="https://getbootstrap.com/docs/5.3/utilities/flex/#align-items"
          target="_blank"
          >flex box utilities</a
        >.
      </p>
      <div class="border p-2 p-lg-4">
        <span class="align-baseline fs-md-15 fs-lg-16">baseline</span>
        <span class="align-top fs-md-15 fs-lg-16">top</span>
        <span class="align-middle fs-md-15 fs-lg-16">middle</span>
        <span class="align-bottom fs-md-15 fs-lg-16">bottom</span>
        <span class="align-text-top fs-md-15 fs-lg-16">text-top</span>
        <span class="align-text-bottom fs-md-15 fs-lg-16">text-bottom</span>
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#verticalAlignmentCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="verticalAlignmentCode">
&lt;span class="align-baseline"&gt;baseline&lt;/span&gt;
&lt;span class="align-top"&gt;top&lt;/span&gt;
&lt;span class="align-middle"&gt;middle&lt;/span&gt;
&lt;span class="align-bottom"&gt;bottom&lt;/span&gt;
&lt;span class="align-text-top"&gt;text-top&lt;/span&gt;
&lt;span class="align-text-bottom"&gt;text-bottom&lt;/span&gt;
</code>
</pre>
      </div>
      <p
        class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-15 mt-sm-20 mt-lg-25"
      >
        With table cells:
      </p>
      <div class="border p-2 p-lg-4">
        <table style="height: 100px">
          <tbody>
            <tr>
              <td class="align-baseline fs-md-15 fs-lg-16">baseline</td>
              <td class="align-top fs-md-15 fs-lg-16">top</td>
              <td class="align-middle fs-md-15 fs-lg-16">middle</td>
              <td class="align-bottom fs-md-15 fs-lg-16">bottom</td>
              <td class="align-text-top fs-md-15 fs-lg-16">text-top</td>
              <td class="align-text-bottom fs-md-15 fs-lg-16">text-bottom</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#verticalAlignment2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="verticalAlignment2Code">
&lt;table style="height: 100px;"&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td class="align-baseline"&gt;baseline&lt;/td&gt;
            &lt;td class="align-top"&gt;top&lt;/td&gt;
            &lt;td class="align-middle"&gt;middle&lt;/td&gt;
            &lt;td class="align-bottom"&gt;bottom&lt;/td&gt;
            &lt;td class="align-text-top"&gt;text-top&lt;/td&gt;
            &lt;td class="align-text-bottom"&gt;text-bottom&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalAlignment",
};
</script>