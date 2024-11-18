<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Text Selection</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Change the way in which the content is selected when the user interacts
        with it.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <p class="user-select-all fs-md-15 fs-lg-16 lh-base">
          This paragraph will be entirely selected when clicked by the user.
        </p>
        <p class="user-select-auto fs-md-15 fs-lg-16 lh-base">
          This paragraph has default select behavior.
        </p>
        <p class="user-select-none fs-md-15 fs-lg-16 lh-base mb-0">
          This paragraph will not be selectable when clicked by the user.
        </p>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#interactionsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="interactionsCode">
&lt;p class="user-select-all"&gt;This paragraph will be entirely selected when clicked by the user.&lt;/p&gt;
&lt;p class="user-select-auto"&gt;This paragraph has default select behavior.&lt;/p&gt;
&lt;p class="user-select-none"&gt;This paragraph will not be selectable when clicked by the user.&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Pointer Events</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Bootstrap provides <code>.pe-none</code> and
        <code>.pe-auto</code> classes to prevent or add element interactions.
      </p>
      <div class="bg-gray p-2 p-lg-3 border">
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a href="#" class="pe-none" tabindex="-1" aria-disabled="true"
            >This link</a
          >
          can not be clicked.
        </p>
        <p class="fs-md-15 fs-lg-16 lh-base">
          <a href="#" class="pe-auto">This link</a> can be clicked (this is
          default behavior).
        </p>
        <p class="pe-none fs-md-15 fs-lg-16 lh-base mb-0">
          <a href="#" tabindex="-1" aria-disabled="true">This link</a> can not
          be clicked because the <code>pointer-events</code> property is
          inherited from its parent. However,
          <a href="#" class="pe-auto">this link</a> has a
          <code>pe-auto</code> class and can be clicked.
        </p>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#pointsEventsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="pointsEventsCode">
&lt;p&gt;&lt;a href="#" class="pe-none" tabindex="-1" aria-disabled="true"&gt;This link&lt;/a&gt; can not be clicked.&lt;/p&gt;
&lt;p&gt;&lt;a href="#" class="pe-auto"&gt;This link&lt;/a&gt; can be clicked (this is default behavior).&lt;/p&gt;
&lt;p class="pe-none"&gt;&lt;a href="#" tabindex="-1" aria-disabled="true"&gt;This link&lt;/a&gt; can not be clicked because the &lt;code&gt;pointer-events&lt;/code&gt; property is inherited from its parent. However, &lt;a href="#" class="pe-auto"&gt;this link&lt;/a&gt; has a &lt;code&gt;pe-auto&lt;/code&gt; class and can be clicked.&lt;/p&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InteractionsContent",
};
</script>