<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Fixed Top</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Position an element at the top of the viewport, from edge to edge.
            Be sure you understand the ramifications of fixed position in your
            project; you may need to add additional CSS.
          </p>
          <div class="position-relative">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#fixedTopCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="fixedTopCode">
&lt;div class="fixed-top"&gt;...&lt;/div&gt;
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Fixed Bottom</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Position an element at the bottom of the viewport, from edge to
            edge. Be sure you understand the ramifications of fixed position in
            your project; you may need to add additional CSS.
          </p>
          <div class="position-relative">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#fixedBottomCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="fixedBottomCode">
&lt;div class="fixed-bottom"&gt;...&lt;/div&gt;
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Sticky Top</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Position an element at the top of the viewport, from edge to edge,
            but only after you scroll past it.
          </p>
          <div class="position-relative">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#stickyTopCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="stickyTopCode">
&lt;div class="sticky-top"&gt;...&lt;/div&gt;
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Responsive Sticky Top</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Responsive variations also exist for
            <code>.sticky-top</code> utility.
          </p>
          <div class="position-relative">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveStickyTopCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="responsiveStickyTopCode">
<div>&lt;div class="sticky-sm-top"&gt;Stick to the top on viewports sized SM (small) or wider&lt;/div&gt;</div>
<div>&lt;div class="sticky-md-top"&gt;Stick to the top on viewports sized MD (medium) or wider&lt;/div&gt;</div>
<div>&lt;div class="sticky-lg-top"&gt;Stick to the top on viewports sized LG (large) or wider&lt;/div&gt;</div>
<div>&lt;div class="sticky-xl-top"&gt;Stick to the top on viewports sized XL (extra-large) or wider&lt;/div&gt;</div>
<div>&lt;div class="sticky-xxl-top"&gt;Stick to the top on viewports sized XXL (extra-extra-large) or wider&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Sticky Bottom</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Position an element at the bottom of the viewport, from edge to
            edge, but only after you scroll past it.
          </p>
          <div class="position-relative">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#stickyBottomCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="stickyBottomCode">
&lt;div class="sticky-bottom"&gt;...&lt;/div&gt;
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Responsive Sticky Bottom</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Responsive variations also exist for
            <code>.sticky-bottom</code> utility.
          </p>
          <div class="position-relative">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveStickyBottomCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="responsiveStickyBottomCode">
<div>&lt;div class="sticky-sm-bottom"&gt;Stick to the bottom on viewports sized SM (small) or wider&lt;/div&gt;</div>
<div>&lt;div class="sticky-md-bottom"&gt;Stick to the bottom on viewports sized MD (medium) or wider&lt;/div&gt;</div>
<div>&lt;div class="sticky-lg-bottom"&gt;Stick to the bottom on viewports sized LG (large) or wider&lt;/div&gt;</div>
<div>&lt;div class="sticky-xl-bottom"&gt;Stick to the bottom on viewports sized XL (extra-large) or wider&lt;/div&gt;</div>
<div>&lt;div class="sticky-xxl-bottom"&gt;Stick to the bottom on viewports sized XXL (extra-extra-large) or wider&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Position Values</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Quick positioning classes are available, though they are not responsive.
      </p>
      <div class="position-relative">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#positionValuesCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="positionValuesCode">
&lt;div class="position-static"&gt;...&lt;/div&gt;
&lt;div class="position-relative"&gt;...&lt;/div&gt;
&lt;div class="position-absolute"&gt;...&lt;/div&gt;
&lt;div class="position-fixed"&gt;...&lt;/div&gt;
&lt;div class="position-sticky"&gt;...&lt;/div&gt;
</code>
</pre>
      </div>
      <h5 class="card-title fw-bold mb-15 mt-15 mt-sm-20 mt-md-25">
        Arrange Elements
      </h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Arrange elements easily with the edge positioning utilities. The format
        is <code>{property}-{position}</code>.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Where property is one of:
      </p>
      <ul>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>top</code> - for the vertical <code>top</code> position
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>start</code> - for the horizontal <code>left</code> position (in
          LTR)
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>bottom</code> - for the vertical <code>bottom</code> position
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>end</code> - for the horizontal <code>right</code> position (in
          LTR)
        </li>
      </ul>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Where <em>position</em> is one of:
      </p>
      <ul>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>0</code> - for <code>0</code> edge position
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>50</code> - for <code>50%</code> edge position
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          <code>100</code> - for <code>100%</code> edge position
        </li>
      </ul>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        (You can add more position values by adding entries to the
        <code>$position-values</code> Sass map variable.)
      </p>
      <div class="position-relative bg-gray border" style="height: 200px">
        <div class="position-absolute top-0 start-0 bg-primary w-10 h-10"></div>
        <div class="position-absolute top-0 end-0 bg-primary w-10 h-10"></div>
        <div
          class="position-absolute top-50 start-50 bg-primary w-10 h-10"
        ></div>
        <div
          class="position-absolute bottom-50 end-50 bg-primary w-10 h-10"
        ></div>
        <div
          class="position-absolute bottom-0 start-0 bg-primary w-10 h-10"
        ></div>
        <div
          class="position-absolute bottom-0 end-0 bg-primary w-10 h-10"
        ></div>
      </div>
      <div class="position-relative mt-15 mt-sm-20 mt-md-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#positionValues2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="positionValues2Code">
&lt;div class="position-relative"&gt;
    &lt;div class="position-absolute top-0 start-0"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-0 end-0"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-50 start-50"&gt;&lt;/div&gt;
    &lt;div class="position-absolute bottom-50 end-50"&gt;&lt;/div&gt;
    &lt;div class="position-absolute bottom-0 start-0"&gt;&lt;/div&gt;
    &lt;div class="position-absolute bottom-0 end-0"&gt;&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
      <h5 class="card-title fw-bold mb-15 mt-15 mt-sm-20 mt-md-25">
        Center Elements
      </h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        In addition, you can also center the elements with the transform utility
        class <code>.translate-middle</code>.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        This class applies the transformations <code>translateX(-50%)</code> and
        <code>translateY(-50%)</code> to the element which, in combination with
        the edge positioning utilities, allows you to absolute center an
        element.
      </p>
      <div class="position-relative bg-gray border" style="height: 200px">
        <div
          class="position-absolute top-0 start-0 translate-middle bg-danger w-10 h-10"
        ></div>
        <div
          class="position-absolute top-0 start-50 translate-middle bg-danger w-10 h-10"
        ></div>
        <div
          class="position-absolute top-0 start-100 translate-middle bg-danger w-10 h-10"
        ></div>
        <div
          class="position-absolute top-50 start-0 translate-middle bg-danger w-10 h-10"
        ></div>
        <div
          class="position-absolute top-50 start-50 translate-middle bg-danger w-10 h-10"
        ></div>
        <div
          class="position-absolute top-50 start-100 translate-middle bg-danger w-10 h-10"
        ></div>
        <div
          class="position-absolute top-100 start-0 translate-middle bg-danger w-10 h-10"
        ></div>
        <div
          class="position-absolute top-100 start-50 translate-middle bg-danger w-10 h-10"
        ></div>
        <div
          class="position-absolute top-100 start-100 translate-middle bg-danger w-10 h-10"
        ></div>
      </div>
      <div class="position-relative mt-15 mt-sm-20 mt-md-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#positionValuesCenterCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="positionValuesCenterCode">
&lt;div class="position-relative"&gt;
    &lt;div class="position-absolute top-0 start-0 translate-middle"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-0 start-50 translate-middle"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-0 start-100 translate-middle"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-50 start-0 translate-middle"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-50 start-50 translate-middle"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-50 start-100 translate-middle"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-100 start-0 translate-middle"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-100 start-50 translate-middle"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-100 start-100 translate-middle"&gt;&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
      <p
        class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-15 mt-sm-20 mt-md-25"
      >
        By adding <code>.translate-middle-x</code> or
        <code>.translate-middle-y</code> classes, elements can be positioned
        only in horizontal or vertical direction.
      </p>
      <div class="position-relative bg-gray border" style="height: 200px">
        <div class="position-absolute top-0 start-0 bg-success w-10 h-10"></div>
        <div
          class="position-absolute top-0 start-50 translate-middle-x bg-success w-10 h-10"
        ></div>
        <div class="position-absolute top-0 end-0 bg-success w-10 h-10"></div>
        <div
          class="position-absolute top-50 start-0 translate-middle-y bg-success w-10 h-10"
        ></div>
        <div
          class="position-absolute top-50 start-50 translate-middle bg-success w-10 h-10"
        ></div>
        <div
          class="position-absolute top-50 end-0 translate-middle-y bg-success w-10 h-10"
        ></div>
        <div
          class="position-absolute bottom-0 start-0 bg-success w-10 h-10"
        ></div>
        <div
          class="position-absolute bottom-0 start-50 translate-middle-x bg-success w-10 h-10"
        ></div>
        <div
          class="position-absolute bottom-0 end-0 bg-success w-10 h-10"
        ></div>
      </div>
      <div class="position-relative mt-15 mt-sm-20 mt-md-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#positionValuesCenter2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="positionValuesCenter2Code">
&lt;div class="position-relative"&gt;
    &lt;div class="position-absolute top-0 start-0"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-0 start-50 translate-middle-x"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-0 end-0"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-50 start-0 translate-middle-y"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-50 start-50 translate-middle"&gt;&lt;/div&gt;
    &lt;div class="position-absolute top-50 end-0 translate-middle-y"&gt;&lt;/div&gt;
    &lt;div class="position-absolute bottom-0 start-0"&gt;&lt;/div&gt;
    &lt;div class="position-absolute bottom-0 start-50 translate-middle-x"&gt;&lt;/div&gt;
    &lt;div class="position-absolute bottom-0 end-0"&gt;&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
      <p
        class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-15 mt-sm-20 mt-md-25"
      >
        Here are some real life examples of these classes:
      </p>
      <div
        class="d-sm-flex align-items-center justify-content-between bg-gray border p-2 p-lg-4"
      >
        <button type="button" class="btn btn-primary position-relative">
          Mails
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
            >+99 <span class="visually-hidden">unread messages</span></span
          >
        </button>
        <div
          class="position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill"
        >
          Marker
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="position-absolute top-100 start-50 translate-middle mt-1"
            fill="var(--bs-dark)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
            />
          </svg>
        </div>
        <button type="button" class="btn btn-primary position-relative">
          Alerts
          <span
            class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"
            ><span class="visually-hidden">unread messages</span></span
          >
        </button>
      </div>
      <div class="position-relative mt-15 mt-sm-20 mt-md-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#positionValuesCenter3Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="positionValuesCenter3Code">
&lt;button type="button" class="btn btn-primary position-relative"&gt;
    Mails &lt;span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"&gt;+99 &lt;span class="visually-hidden"&gt;unread messages&lt;/span&gt;&lt;/span&gt;
&lt;/button&gt;

&lt;div class="position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill"&gt;
    Marker &lt;svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-dark)" xmlns="http://www.w3.org/2000/svg"&gt;&lt;path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/&gt;&lt;/svg&gt;
&lt;/div&gt;

&lt;button type="button" class="btn btn-primary position-relative"&gt;
    Alerts &lt;span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"&gt;&lt;span class="visually-hidden"&gt;unread messages&lt;/span&gt;&lt;/span&gt;
&lt;/button&gt;
</code>
</pre>
      </div>
      <p
        class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-15 mt-sm-20 mt-md-25"
      >
        You can use these classes with existing components to create new ones.
        Remember that you can extend its functionality by adding entries to the
        <code>$position-values</code> variable.
      </p>
      <div class="bg-gray border p-2 p-lg-4">
        <div class="position-relative m-4">
          <div
            class="progress"
            role="progressbar"
            aria-label="Progress"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 1px"
          >
            <div class="progress-bar" style="width: 50%"></div>
          </div>
          <button
            type="button"
            class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill p-0"
            style="width: 2rem; height: 2rem"
          >
            1
          </button>
          <button
            type="button"
            class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill p-0"
            style="width: 2rem; height: 2rem"
          >
            2
          </button>
          <button
            type="button"
            class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill p-0"
            style="width: 2rem; height: 2rem"
          >
            3
          </button>
        </div>
      </div>
      <div class="position-relative mt-15 mt-sm-20 mt-md-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#positionValuesCenter4Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="positionValuesCenter4Code">
&lt;div class="position-relative m-4"&gt;
    &lt;div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;"&gt;
        &lt;div class="progress-bar" style="width: 50%"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;button type="button" class="position-absolute p-0 top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;"&gt;1&lt;/button&gt;
    &lt;button type="button" class="position-absolute p-0 top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;"&gt;2&lt;/button&gt;
    &lt;button type="button" class="position-absolute p-0 top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;"&gt;3&lt;/button&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PositionContent",
};
</script>