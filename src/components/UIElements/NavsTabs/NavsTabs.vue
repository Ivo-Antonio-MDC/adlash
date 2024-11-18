<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Base Nav</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            The base <code>.nav</code> component is built with flexbox and
            provide a strong foundation for building all types of navigation
            components. It includes some style overrides (for working with
            lists), some link padding for larger hit areas, and basic disabled
            styling.
          </p>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="position-relative mt-10">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#baseNavCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="baseNavCode">
<div>&lt;ul class="nav"&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Available styles</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
            Change the style of <code>.nav</code>s component with modifiers and
            utilities. Mix and match as needed, or build your own.
          </p>
          <span
            class="d-block text-black fs-md-15 fs-lg-18 fw-medium mb-5 mt-15"
            >Horizontal Alignment</span
          >
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Centered with <code>.justify-content-center</code>:
          </p>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="position-relative mt-10 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#horizontalAlignmentCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="horizontalAlignmentCode">
<div>&lt;ul class="nav justify-content-center"&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Right-aligned with <code>.justify-content-end</code>:
          </p>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="position-relative mt-10">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#horizontalAlignmentEndCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="horizontalAlignmentEndCode">
<div>&lt;ul class="nav justify-content-end"&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
          </div>
          <span
            class="d-block text-black fs-md-15 fs-lg-18 fw-medium mb-5 mt-15 mt-lg-20"
            >Vertical</span
          >
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Stack your navigation by changing the flex item direction with the
            <code>.flex-column</code> utility. Need to stack them on some
            viewports but not others? Use the responsive versions (e.g.,
            <code>.flex-sm-column</code>).
          </p>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="position-relative mt-10">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#verticalAlignmentEndCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="verticalAlignmentEndCode">
<div>&lt;ul class="nav flex-column"&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20">
            Pills with Dropdowns
          </h5>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                >Dropdown</a
              >
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="position-relative mt-10 mt-20">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#pillsWithDropdownsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="pillsWithDropdownsCode">
<div>&lt;ul class="nav nav-pills"&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item dropdown"&gt;</div>
        <div>&lt;a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"&gt;Dropdown&lt;/a&gt;</div>
        <div>&lt;ul class="dropdown-menu"&gt;</div>
            <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
            <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
            <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
            <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
            <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;/ul&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">JavaScript Behavior</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Use the tab JavaScript plugin—include it individually or through the
            compiled <code>bootstrap.js</code> file—to extend our navigational
            tabs and pills to create tabbable panes of local content.
          </p>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="disabled-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabled-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabled-tab-pane"
                aria-selected="false"
                disabled
              >
                Disabled
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="disabled-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
          </div>
          <div class="position-relative mt-15 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#javascriptBehaviorCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="javascriptBehaviorCode">
<div>&lt;ul class="nav nav-tabs" id="myTab" role="tablist"&gt;</div>
    <div>&lt;li class="nav-item" role="presentation"&gt;</div>
        <div>&lt;button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"&gt;Home&lt;/button&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item" role="presentation"&gt;</div>
        <div>&lt;button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"&gt;Profile&lt;/button&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item" role="presentation"&gt;</div>
        <div>&lt;button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"&gt;Contact&lt;/button&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item" role="presentation"&gt;</div>
        <div>&lt;button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled&gt;Disabled&lt;/button&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
<div>&lt;div class="tab-content" id="myTabContent"&gt;</div>
    <div>&lt;div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
    <div>&lt;div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
    <div>&lt;div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
    <div>&lt;div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            To help fit your needs, this works with
            <code>&lt;ul&gt;</code>-based markup, as shown above, or with any
            arbitrary “roll your own” markup. Note that if you’re using
            <code>&lt;nav&gt;</code>, you shouldn’t add
            <code>role="tablist"</code> directly to it, as this would override
            the element’s native role as a navigation landmark. Instead, switch
            to an alternative element (in the example below, a simple
            <code>&lt;div&gt;</code>) and wrap the
            <code>&lt;nav&gt;</code> around it.
          </p>
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Home
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Profile
              </button>
              <button
                class="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Contact
              </button>
              <button
                class="nav-link"
                id="nav-disabled-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-disabled"
                type="button"
                role="tab"
                aria-controls="nav-disabled"
                aria-selected="false"
                disabled
              >
                Disabled
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="nav-disabled"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
          </div>
          <div class="position-relative mt-15 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#javascriptBehavior2Code"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="javascriptBehavior2Code">
<div>&lt;nav&gt;</div>
    <div>&lt;div class="nav nav-tabs" id="nav-tab" role="tablist"&gt;</div>
        <div>&lt;button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"&gt;Home&lt;/button&gt;</div>
        <div>&lt;button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"&gt;Profile&lt;/button&gt;</div>
        <div>&lt;button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"&gt;Contact&lt;/button&gt;</div>
        <div>&lt;button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled&gt;Disabled&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/nav&gt;</div>
<div>&lt;div class="tab-content" id="nav-tabContent"&gt;</div>
    <div>&lt;div class="tab-pane fade show active" id="nav-home" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
    <div>&lt;div class="tab-pane fade" id="nav-profile" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
    <div>&lt;div class="tab-pane fade" id="nav-contact" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
    <div>&lt;div class="tab-pane fade" id="nav-disabled" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            The tabs plugin also works with pills.
          </p>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-disabled"
                type="button"
                role="tab"
                aria-controls="pills-disabled"
                aria-selected="false"
                disabled
              >
                Disabled
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="pills-disabled"
              role="tabpanel"
              tabindex="0"
            >
              ...
            </div>
          </div>
          <div class="position-relative mt-15 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#javascriptBehavior3Code"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="javascriptBehavior3Code">
<div>&lt;ul class="nav nav-pills mb-3" id="pills-tab" role="tablist"&gt;</div>
    <div>&lt;li class="nav-item" role="presentation"&gt;</div>
        <div>&lt;button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"&gt;Home&lt;/button&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item" role="presentation"&gt;</div>
        <div>&lt;button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"&gt;Profile&lt;/button&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item" role="presentation"&gt;</div>
        <div>&lt;button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"&gt;Contact&lt;/button&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item" role="presentation"&gt;</div>
        <div>&lt;button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled&gt;Disabled&lt;/button&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
<div>&lt;div class="tab-content" id="pills-tabContent"&gt;</div>
    <div>&lt;div class="tab-pane fade show active" id="pills-home" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
    <div>&lt;div class="tab-pane fade" id="pills-profile" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
    <div>&lt;div class="tab-pane fade" id="pills-contact" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
    <div>&lt;div class="tab-pane fade" id="pills-disabled" role="tabpanel" tabindex="0"&gt;...&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Base Nav</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Classes are used throughout, so your markup can be super flexible.
            Use <code>&lt;ul&gt;</code>s like above, <code>&lt;ol&gt;</code> if
            the order of your items is important, or roll your own with a
            <code>&lt;nav&gt;</code> element. Because the <code>.nav</code> uses
            <code>display: flex</code>, the nav links behave the same as nav
            items would, but without the extra markup.
          </p>
          <nav class="nav">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled">Disabled</a>
          </nav>
          <div class="position-relative mt-10">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#baseNav2Code"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="baseNav2Code">
<div>&lt;nav class="nav"&gt;</div>
    <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Tabs</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Takes the basic nav from above and adds the
            <code>.nav-tabs</code> class to generate a tabbed interface. Use
            them to create tabbable regions with our
            <a
              href="https://getbootstrap.com/docs/5.3/components/navs-tabs/#javascript-behavior"
              target="_blank"
              >tab JavaScript plugin</a
            >.
          </p>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="position-relative mt-10">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#tabsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="tabsCode">
<div>&lt;ul class="nav nav-tabs"&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Pills</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Take that same HTML, but use <code>.nav-pills</code> instead:
          </p>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="position-relative mt-20">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#pillsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="pillsCode">
&lt;ul class="nav nav-pills"&gt;
    &lt;li class="nav-item"&gt;
        &lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="nav-item"&gt;
        &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="nav-item"&gt;
        &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="nav-item"&gt;
        &lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Underline</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Take that same HTML, but use <code>.nav-underline</code> instead:
          </p>
          <ul class="nav nav-underline">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="position-relative mt-20">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#underlineCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="underlineCode">
<div>&lt;ul class="nav nav-underline"&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Fill and justify</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Force your <code>.nav</code>’s contents to extend the full available
            width one of two modifier classes. To proportionately fill all
            available space with your <code>.nav-item</code>s, use
            <code>.nav-fill</code>. Notice that all horizontal space is
            occupied, but not every nav item has the same width.
          </p>
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Much longer nav link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="position-relative mt-20 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#underlineCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="fillJustifyCode">
<div>&lt;ul class="nav nav-pills nav-fill"&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Much longer nav link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            When using a <code>&lt;nav&gt;</code>-based navigation, you can
            safely omit <code>.nav-item</code> as only <code>.nav-link</code> is
            required for styling <code>&lt;a&gt;</code> elements.
          </p>
          <nav class="nav nav-pills nav-fill">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
            <a class="nav-link" href="#">Much longer nav link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled">Disabled</a>
          </nav>
          <div class="position-relative mt-20 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#underlineCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="fillJustify2Code">
<div>&lt;nav class="nav nav-pills nav-fill"&gt;</div>
    <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;a class="nav-link" href="#"&gt;Much longer nav link&lt;/a&gt;</div>
    <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            For equal-width elements, use <code>.nav-justified</code>. All
            horizontal space will be occupied by nav links, but unlike the
            <code>.nav-fill</code> above, every nav item will be the same width.
          </p>
          <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Longer nav link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="position-relative mt-20 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#underlineCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="fillJustify3Code">
<div>&lt;ul class="nav nav-pills nav-justified"&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Longer nav link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="nav-item"&gt;</div>
        <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Similar to the <code>.nav-fill</code> example using a
            <code>&lt;nav&gt;</code>-based navigation.
          </p>
          <nav class="nav nav-pills nav-justified">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
            <a class="nav-link" href="#">Longer nav link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled">Disabled</a>
          </nav>
          <div class="position-relative mt-20">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#underlineCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="fillJustify4Code">
<div>&lt;nav class="nav nav-pills nav-justified"&gt;</div>
    <div>&lt;a class="nav-link active" aria-current="page" href="#"&gt;Active&lt;/a&gt;</div>
    <div>&lt;a class="nav-link" href="#"&gt;Longer nav link&lt;/a&gt;</div>
    <div>&lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;</div>
    <div>&lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-12">Vertical JavaScript Behavior</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            And with vertical pills. Ideally, for vertical tabs, you should also
            add <code>aria-orientation="vertical"</code> to the tab list
            container.
          </p>
          <div class="d-flex align-items-start">
            <div
              class="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                class="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Home
              </button>
              <button
                class="nav-link"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Profile
              </button>
              <button
                class="nav-link"
                id="v-pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-disabled"
                type="button"
                role="tab"
                aria-controls="v-pills-disabled"
                aria-selected="false"
                disabled
              >
                Disabled
              </button>
              <button
                class="nav-link"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Messages
              </button>
              <button
                class="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Settings
              </button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                tabindex="0"
              >
                <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
                  This is some placeholder content the
                  <strong>Home tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the
                  next. The tab JavaScript swaps classes to control the content
                  visibility and styling. You can use it with tabs, pills, and
                  any other <code>.nav</code>-powered navigation.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                tabindex="0"
              >
                <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
                  This is some placeholder content the
                  <strong>profile tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the
                  next. The tab JavaScript swaps classes to control the content
                  visibility and styling. You can use it with tabs, pills, and
                  any other <code>.nav</code>-powered navigation.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-disabled"
                role="tabpanel"
                tabindex="0"
              >
                <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
                  This is some placeholder content the
                  <strong>Disabled tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the
                  next. The tab JavaScript swaps classes to control the content
                  visibility and styling. You can use it with tabs, pills, and
                  any other <code>.nav</code>-powered navigation.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                tabindex="0"
              >
                <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
                  This is some placeholder content the
                  <strong>Messages tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the
                  next. The tab JavaScript swaps classes to control the content
                  visibility and styling. You can use it with tabs, pills, and
                  any other <code>.nav</code>-powered navigation.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                tabindex="0"
              >
                <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
                  This is some placeholder content the
                  <strong>Settings tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the
                  next. The tab JavaScript swaps classes to control the content
                  visibility and styling. You can use it with tabs, pills, and
                  any other <code>.nav</code>-powered navigation.
                </p>
              </div>
            </div>
          </div>
          <div class="position-relative mt-10">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#underlineCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="verticalJavascriptBehaviorCode">
<div>&lt;div class="d-flex align-items-start"&gt;</div>
    <div>&lt;div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical"&gt;</div>
        <div>&lt;button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"&gt;Home&lt;/button&gt;</div>
        <div>&lt;button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"&gt;Profile&lt;/button&gt;</div>
        <div>&lt;button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled&gt;Disabled&lt;/button&gt;</div>
        <div>&lt;button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"&gt;Messages&lt;/button&gt;</div>
        <div>&lt;button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"&gt;Settings&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="tab-content" id="v-pills-tabContent"&gt;</div>
        <div>&lt;div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" tabindex="0"&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0"&gt;This is some placeholder content the &lt;strong&gt;Home tab's&lt;/strong&gt; associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other &lt;code&gt;.nav&lt;/code&gt;-powered navigation.&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="tab-pane fade" id="v-pills-profile" role="tabpanel" tabindex="0"&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0"&gt;This is some placeholder content the &lt;strong&gt;profile tab's&lt;/strong&gt; associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other &lt;code&gt;.nav&lt;/code&gt;-powered navigation.&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" tabindex="0"&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0"&gt;This is some placeholder content the &lt;strong&gt;Disabled tab's&lt;/strong&gt; associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other &lt;code&gt;.nav&lt;/code&gt;-powered navigation.&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="tab-pane fade" id="v-pills-messages" role="tabpanel" tabindex="0"&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0"&gt;This is some placeholder content the &lt;strong&gt;Messages tab's&lt;/strong&gt; associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other &lt;code&gt;.nav&lt;/code&gt;-powered navigation.&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="tab-pane fade" id="v-pills-settings" role="tabpanel" tabindex="0"&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0"&gt;This is some placeholder content the &lt;strong&gt;Settings tab's&lt;/strong&gt; associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other &lt;code&gt;.nav&lt;/code&gt;-powered navigation.&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
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
  name: "NavsTabs",
};
</script>