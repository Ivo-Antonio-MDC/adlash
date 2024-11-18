<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
        Flush Accordion
      </h5>
      <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="flushAccordionPreview-tab"
            data-bs-toggle="tab"
            data-bs-target="#flushAccordionPreview-tab-pane"
            type="button"
            role="tab"
            aria-controls="flushAccordionPreview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="flushAccordionCode-tab"
            data-bs-toggle="tab"
            data-bs-target="#flushAccordionCode-tab-pane"
            type="button"
            role="tab"
            aria-controls="flushAccordionCode-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="flushAccordionPreview-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <div class="accordion accordion-flush" id="flushAccordion">
            <div class="accordion-item mb-0">
              <button
                class="accordion-button shadow-none fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flushCollapseOne"
                aria-expanded="true"
                aria-controls="flushCollapseOne"
              >
                Accordion Item #1
              </button>
              <div
                id="flushCollapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#flushAccordion"
              >
                <div class="accordion-body">
                  <p class="lh-base fs-md-15 fs-lg-16 text-paragraph mb-0">
                    <strong class="text-black"
                      >This is the first item's accordion body.</strong
                    >
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-0">
              <button
                class="accordion-button collapsed shadow-none fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flushCollapseTwo"
                aria-expanded="false"
                aria-controls="flushCollapseTwo"
              >
                Accordion Item #2
              </button>
              <div
                id="flushCollapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#flushAccordion"
              >
                <div class="accordion-body">
                  <p class="lh-base fs-md-15 fs-lg-16 text-paragraph mb-0">
                    <strong class="text-black"
                      >This is the first item's accordion body.</strong
                    >
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-0">
              <button
                class="accordion-button collapsed shadow-none fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flushCollapseThree"
                aria-expanded="false"
                aria-controls="flushCollapseThree"
              >
                Accordion Item #3
              </button>
              <div
                id="flushCollapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#flushAccordion"
              >
                <div class="accordion-body">
                  <p class="lh-base fs-md-15 fs-lg-16 text-paragraph mb-0">
                    <strong class="text-black"
                      >This is the first item's accordion body.</strong
                    >
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-0">
              <button
                class="accordion-button collapsed shadow-none fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flushCollapseFour"
                aria-expanded="false"
                aria-controls="flushCollapseFour"
              >
                Accordion Item #4
              </button>
              <div
                id="flushCollapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#flushAccordion"
              >
                <div class="accordion-body">
                  <p class="lh-base fs-md-15 fs-lg-16 text-paragraph mb-0">
                    <strong class="text-black"
                      >This is the first item's accordion body.</strong
                    >
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade position-relative"
          id="flushAccordionCode-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <!-- <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
            data-clipboard-target="#flushAccordionCode"
          >
            Copy
          </button> -->
          <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="flushAccordionCode">
<div>&lt;div class="accordion" id="flushAccordion"&gt;</div>
    <div>&lt;div class="accordion-item mb-0"&gt;</div>
        <div>&lt;button class="accordion-button shadow-none fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#flushCollapseOne" aria-expanded="true" aria-controls="flushCollapseOne"&gt;</div>
            <div>Accordion Item #1</div>
        <div>&lt;/button&gt;</div>
        <div>&lt;div id="flushCollapseOne" class="accordion-collapse collapse show" data-bs-parent="#flushAccordion"&gt;</div>
            <div>&lt;div class="accordion-body"&gt;</div>
                <div>&lt;p class="lh-base fs-md-15 fs-lg-16 text-paragraph mb-0"&gt;&lt;strong class="text-black"&gt;This is the first item's accordion body.&lt;/strong&gt; It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the &lt;code&gt;.accordion-body&lt;/code&gt;, though the transition does limit overflow.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="accordion-item mb-0"&gt;</div>
        <div>&lt;button class="accordion-button collapsed shadow-none fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#flushCollapseTwo" aria-expanded="false" aria-controls="flushCollapseTwo"&gt;</div>
            <div>Accordion Item #2</div>
        <div>&lt;/button&gt;</div>
        <div>&lt;div id="flushCollapseTwo" class="accordion-collapse collapse" data-bs-parent="#flushAccordion"&gt;</div>
            <div>&lt;div class="accordion-body"&gt;</div>
                <div>&lt;p class="lh-base fs-md-15 fs-lg-16 text-paragraph mb-0"&gt;&lt;strong class="text-black"&gt;This is the first item's accordion body.&lt;/strong&gt; It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the &lt;code&gt;.accordion-body&lt;/code&gt;, though the transition does limit overflow.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="accordion-item mb-0"&gt;</div>
        <div>&lt;button class="accordion-button collapsed shadow-none fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#flushCollapseThree" aria-expanded="false" aria-controls="flushCollapseThree"&gt;</div>
            <div>Accordion Item #3</div>
        <div>&lt;/button&gt;</div>
        <div>&lt;div id="flushCollapseThree" class="accordion-collapse collapse" data-bs-parent="#flushAccordion"&gt;</div>
            <div>&lt;div class="accordion-body"&gt;</div>
                <div>&lt;p class="lh-base fs-md-15 fs-lg-16 text-paragraph mb-0"&gt;&lt;strong class="text-black"&gt;This is the first item's accordion body.&lt;/strong&gt; It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the &lt;code&gt;.accordion-body&lt;/code&gt;, though the transition does limit overflow.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="accordion-item mb-0"&gt;</div>
        <div>&lt;button class="accordion-button collapsed shadow-none fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#flushCollapseFour" aria-expanded="false" aria-controls="flushCollapseFour"&gt;</div>
            <div>Accordion Item #4</div>
        <div>&lt;/button&gt;</div>
        <div>&lt;div id="flushCollapseFour" class="accordion-collapse collapse" data-bs-parent="#flushAccordion"&gt;</div>
            <div>&lt;div class="accordion-body"&gt;</div>
                <div>&lt;p class="lh-base fs-md-15 fs-lg-16 text-paragraph mb-0"&gt;&lt;strong class="text-black"&gt;This is the first item's accordion body.&lt;/strong&gt; It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the &lt;code&gt;.accordion-body&lt;/code&gt;, though the transition does limit overflow.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlushAccordion",
};
</script>