<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Base Offcanvas</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Use the buttons below to show and hide an offcanvas element via
            JavaScript that toggles the <code>.show</code> class on an element
            with the <code>.offcanvas</code> class.
          </p>
          <ul>
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas</code> hides content (default)
            </li>
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas.show</code> shows content
            </li>
          </ul>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-5">
            You can use a link with the <code>href</code> attribute, or a button
            with the <code>data-bs-target</code> attribute. In both cases, the
            <code>data-bs-toggle="offcanvas"</code> is required.
          </p>
          <a
            class="btn btn-primary me-10 mt-10"
            data-bs-toggle="offcanvas"
            href="#baseOffcanvas"
            role="button"
            aria-controls="baseOffcanvas"
          >
            Link with href
          </a>
          <button
            class="btn btn-primary me-10 mt-10"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#baseOffcanvas"
            aria-controls="baseOffcanvas"
          >
            Button with data-bs-target
          </button>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="baseOffcanvas"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Offcanvas</h5>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <div class="dropdown mt-3">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#bodyScrollingOffcanvasCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="baseOffcanvasCode">
<div>&lt;a class="btn btn-primary" data-bs-toggle="offcanvas" href="#baseOffcanvas" role="button" aria-controls="baseOffcanvas"&gt;</div>
    <div>Link with href</div>
<div>&lt;/a&gt;</div>
<div>&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#baseOffcanvas" aria-controls="baseOffcanvas"&gt;</div>
    <div>Button with data-bs-target</div>
<div>&lt;/button&gt;</div>
<div>&lt;div class="offcanvas offcanvas-start" tabindex="-1" id="baseOffcanvas"&gt;</div>
    <div>&lt;div class="offcanvas-header"&gt;</div>
        <div>&lt;h5 class="offcanvas-title"&gt;Offcanvas&lt;/h5&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="offcanvas-body"&gt;</div>
        <div>&lt;div class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;</div>
            <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="dropdown mt-3"&gt;</div>
            <div>&lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"&gt;</div>
                <div>Dropdown button</div>
            <div>&lt;/button&gt;</div>
            <div>&lt;ul class="dropdown-menu"&gt;</div>
                <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
                <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
                <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
            <div>&lt;/ul&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Static Backdrop Offcanvas</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            When backdrop is set to static, the offcanvas will not close when
            clicking outside of it.
          </p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            Toggle static offcanvas
          </button>
          <div
            class="offcanvas offcanvas-start"
            data-bs-backdrop="static"
            tabindex="-1"
            id="staticBackdrop"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Offcanvas</h5>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                I will not close if you click outside of me.
              </div>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#bodyScrollingOffcanvasCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="backdropOffcanvasCode">
<div>&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"&gt;</div>
    <div>Toggle static offcanvas</div>
<div>&lt;/button&gt;</div>
<div>&lt;div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"&gt;</div>
    <div>&lt;div class="offcanvas-header"&gt;</div>
        <div>&lt;h5 class="offcanvas-title"&gt;Offcanvas&lt;/h5&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="offcanvas-body"&gt;</div>
        <div>&lt;div class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;</div>
            <div>I will not close if you click outside of me.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Responsive</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Responsive offcanvas classes hide content outside the viewport from
            a specified breakpoint and down. Above that breakpoint, the contents
            within will behave as usual. For example,
            <code>.offcanvas-lg</code> hides content in an offcanvas below the
            <code>lg</code> breakpoint, but shows the content above the
            <code>lg</code> breakpoint.
          </p>
          <div class="border rounded-1 p-15 p-md-20 p-xl-25">
            <div class="alert alert-info d-none d-lg-block fs-md-15 fw-medium">
              Resize your browser to show the responsive offcanvas toggle.
            </div>
            <p class="mb-0 fs-md-15 fs-lg-16 text-paragraph lh-base">
              This is content within an <code>.offcanvas-lg</code>.
            </p>
          </div>
          <div class="position-relative mt-25 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#bodyScrollingOffcanvasCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="responsiveOffcanvasCode">
<div>&lt;button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"&gt;Toggle offcanvas&lt;/button&gt;</div>
<div>&lt;div class="alert alert-info d-none d-lg-block"&gt;Resize your browser to show the responsive offcanvas toggle.&lt;/div&gt;</div>
    <div>&lt;div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive"&gt;</div>
    <div>&lt;div class="offcanvas-header"&gt;</div>
        <div>&lt;h5 class="offcanvas-title"&gt;Responsive offcanvas&lt;/h5&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="offcanvas-body"&gt;</div>
        <div>&lt;p class="mb-0 fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is content within an &lt;code&gt;.offcanvas-lg&lt;/code&gt;.&lt;/p&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-10">
            Responsive offcanvas classes are available across for each
            breakpoint.
          </p>
          <ul class="mb-0">
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas</code>
            </li>
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas-sm</code>
            </li>
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas-md</code>
            </li>
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas-lg</code>
            </li>
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas-xl</code>
            </li>
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas-xxl</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Body Scrolling Offcanvas</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Scrolling the <code>&lt;body&gt;</code> element is disabled when an
            offcanvas and its backdrop are visible. Use the
            <code>data-bs-scroll</code> attribute to enable
            <code>&lt;body&gt;</code> scrolling.
          </p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Enable body scrolling
          </button>
          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabindex="-1"
            id="offcanvasScrolling"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Offcanvas with body scrolling</h5>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                Try scrolling the rest of the page to see this option in action.
              </p>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#bodyScrollingOffcanvasCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="bodyScrollingOffcanvasCode">
<div>&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"&gt;Enable body scrolling&lt;/button&gt;</div>
<div>&lt;div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling"&gt;</div>
    <div>&lt;div class="offcanvas-header"&gt;</div>
        <div>&lt;h5 class="offcanvas-title"&gt;Offcanvas with body scrolling&lt;/h5&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="offcanvas-body"&gt;</div>
        <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;Try scrolling the rest of the page to see this option in action.&lt;/p&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">
            Body Scrolling & Backdrop Offcanvas
          </h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            You can also enable <code>&lt;body&gt;</code> scrolling with a
            visible backdrop.
          </p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            Enable both scrolling & backdrop
          </button>
          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Backdrop with scrolling</h5>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                Try scrolling the rest of the page to see this option in action.
              </p>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#bodyScrollingOffcanvasCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="withBothOptionsOffcanvasCode">
<div>&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"&gt;</div>
    <div>Enable both scrolling &amp; backdrop</div>
<div>&lt;/button&gt;</div>
<div>&lt;div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"&gt;</div>
    <div>&lt;div class="offcanvas-header"&gt;</div>
        <div>&lt;h5 class="offcanvas-title"&gt;Backdrop with scrolling&lt;/h5&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="offcanvas-body"&gt;</div>
        <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;Try scrolling the rest of the page to see this option in action.&lt;/p&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Placement</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-10">
            There’s no default placement for offcanvas components, so you must
            add one of the modifier classes below.
          </p>
          <ul class="mb-10">
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas-start</code> places offcanvas on the left of the
              viewport (shown above)
            </li>
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas-end</code> places offcanvas on the right of the
              viewport
            </li>
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas-top</code> places offcanvas on the top of the
              viewport
            </li>
            <li class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              <code>.offcanvas-bottom</code> places offcanvas on the bottom of
              the viewport
            </li>
          </ul>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Try the top, right, and bottom examples out below.
          </p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            Toggle top offcanvas
          </button>
          <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Offcanvas top</h5>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">...</div>
          </div>
          <div class="position-relative mt-25 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#bodyScrollingOffcanvasCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="offcanvasTopCode">
<div>&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"&gt;</div>
    <div>Toggle top offcanvas</div>
<div>&lt;/button&gt;</div>
<div>&lt;div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop"&gt;</div>
    <div>&lt;div class="offcanvas-header"&gt;</div>
        <div>&lt;h5 class="offcanvas-title"&gt;Offcanvas top&lt;/h5&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="offcanvas-body"&gt;</div>
        <div>...</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Toggle right offcanvas
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Offcanvas right</h5>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">...</div>
          </div>
          <div class="position-relative mt-25 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#bodyScrollingOffcanvasCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="offcanvasRightCode">
<div>&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"&gt;</div>
    <div>Toggle right offcanvas</div>
<div>&lt;/button&gt;</div>
<div>&lt;div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"&gt;</div>
    <div>&lt;div class="offcanvas-header"&gt;</div>
        <div>&lt;h5 class="offcanvas-title"&gt;Offcanvas right&lt;/h5&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="offcanvas-body"&gt;</div>
        <div>...</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            Toggle bottom offcanvas
          </button>
          <div
            class="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="offcanvasBottom"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Offcanvas bottom</h5>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">...</div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#bodyScrollingOffcanvasCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="offcanvasBottomCode">
<div>&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"&gt;</div>
    <div>Toggle bottom offcanvas</div>
<div>&lt;/button&gt;</div>
<div>&lt;div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"&gt;</div>
    <div>&lt;div class="offcanvas-header"&gt;</div>
        <div>&lt;h5 class="offcanvas-title"&gt;Offcanvas bottom&lt;/h5&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="offcanvas-body"&gt;</div>
        <div>...</div>
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
  name: "OffcanvasContent",
};
</script>