<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
        Navbar Scrollspy
      </h5>
      <nav
        id="navbarScrollspy"
        class="navbar bg-body-tertiary px-3 px-lg-4 mb-3"
      >
        <a class="navbar-brand fw-semibold" href="#">Navbar</a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">First</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">Second</a>
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
              <li>
                <a class="dropdown-item" href="#scrollspyHeading3">Third</a>
              </li>
              <li>
                <a class="dropdown-item" href="#scrollspyHeading4">Fourth</a>
              </li>
              <li><hr class="dropdown-div ider" /></li>
              <li>
                <a class="dropdown-item" href="#scrollspyHeading5">Fifth</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbarScrollspy"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="bg-body-tertiary p-3 p-lg-4 rounded-2"
        tabindex="0"
        style="height: 300px; overflow: auto"
      >
        <h5 id="scrollspyHeading1" class="fw-bold mb-5">First heading</h5>
        <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h5 id="scrollspyHeading2" class="fw-bold mb-5">Second heading</h5>
        <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h5 id="scrollspyHeading3" class="fw-bold mb-5">Third heading</h5>
        <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h5 id="scrollspyHeading4" class="fw-bold mb-5">Fourth heading</h5>
        <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h5 id="scrollspyHeading5" class="fw-bold mb-5">Fifth heading</h5>
        <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#navbarScrollspyCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="navbarScrollspyCode">
<div>&lt;nav id="navbarScrollspy" class="navbar bg-body-tertiary px-3 px-lg-4 mb-3"&gt;</div>
    <div>&lt;a class="navbar-brand fw-semibold" href="#"&gt;Navbar&lt;/a&gt;</div>
    <div>&lt;ul class="nav nav-pills"&gt;</div>
        <div>&lt;li class="nav-item"&gt;</div>
            <div>&lt;a class="nav-link" href="#scrollspyHeading1"&gt;First&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="nav-item"&gt;</div>
            <div>&lt;a class="nav-link" href="#scrollspyHeading2"&gt;Second&lt;/a&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="nav-item dropdown"&gt;</div>
            <div>&lt;a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"&gt;Dropdown&lt;/a&gt;</div>
            <div>&lt;ul class="dropdown-menu"&gt;</div>
                <div>&lt;li&gt;&lt;a class="dropdown-item" href="#scrollspyHeading3"&gt;Third&lt;/a&gt;&lt;/li&gt;</div>
                <div>&lt;li&gt;&lt;a class="dropdown-item" href="#scrollspyHeading4"&gt;Fourth&lt;/a&gt;&lt;/li&gt;</div>
                <div>&lt;li&gt;&lt;hr class="dropdown-div ider"&gt;&lt;/li&gt;</div>
                <div>&lt;li&gt;&lt;a class="dropdown-item" href="#scrollspyHeading5"&gt;Fifth&lt;/a&gt;&lt;/li&gt;</div>
            <div>&lt;/ul&gt;</div>
        <div>&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/nav&gt;</div>
<div>&lt;div data-bs-spy="scroll" data-bs-target="#navbarScrollspy" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="bg-body-tertiary p-3 p-lg-4 rounded-2" tabindex="0" style="height: 300px; overflow: auto;"&gt;</div>
    <div>&lt;h5 id="scrollspyHeading1" class="fw-bold mb-5"&gt;First heading&lt;/h5&gt;</div>
    <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
    <div>&lt;h5 id="scrollspyHeading2" class="fw-bold mb-5"&gt;Second heading&lt;/h5&gt;</div>
    <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
    <div>&lt;h5 id="scrollspyHeading3" class="fw-bold mb-5"&gt;Third heading&lt;/h5&gt;</div>
    <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
    <div>&lt;h5 id="scrollspyHeading4" class="fw-bold mb-5"&gt;Fourth heading&lt;/h5&gt;</div>
    <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
    <div>&lt;h5 id="scrollspyHeading5" class="fw-bold mb-5"&gt;Fifth heading&lt;/h5&gt;</div>
    <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
        Nested Nav Scrollspy
      </h5>
      <div class="row">
        <div class="col-md-4">
          <nav
            id="nestedNavScrollspy"
            class="h-100 flex-column align-items-stretch pe-4 border-end"
          >
            <nav class="nav nav-pills flex-column">
              <a class="nav-link" href="#item-1">Item 1</a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
              </nav>
              <a class="nav-link" href="#item-2">Item 2</a>
              <a class="nav-link" href="#item-3">Item 3</a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
              </nav>
            </nav>
          </nav>
        </div>
        <div class="col-md-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#nestedNavScrollspy"
            data-bs-smooth-scroll="true"
            tabindex="0"
            style="height: 350px; overflow: auto"
          >
            <div id="item-1">
              <h4 class="fw-bold mb-5">Item 1</h4>
              <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
            <div id="item-1-1">
              <h5 class="fw-bold mb-5">Item 1-1</h5>
              <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
            <div id="item-1-2">
              <h5 class="fw-bold mb-5">Item 1-2</h5>
              <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
            <div id="item-2">
              <h4 class="fw-bold mb-5">Item 2</h4>
              <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
            <div id="item-3">
              <h4 class="fw-bold mb-5">Item 3</h4>
              <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
            <div id="item-3-1">
              <h5 class="fw-bold mb-5">Item 3-1</h5>
              <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
            <div id="item-3-2">
              <h5 class="fw-bold mb-5">Item 3-2</h5>
              <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#nestedNavCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="nestedNavCode">
<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;nav id="nestedNavScrollspy" class="h-100 flex-column align-items-stretch pe-4 border-end"&gt;</div>
            <div>&lt;nav class="nav nav-pills flex-column"&gt;</div>
                <div>&lt;a class="nav-link" href="#item-1"&gt;Item 1&lt;/a&gt;</div>
                <div>&lt;nav class="nav nav-pills flex-column"&gt;</div>
                    <div>&lt;a class="nav-link ms-3 my-1" href="#item-1-1"&gt;Item 1-1&lt;/a&gt;</div>
                    <div>&lt;a class="nav-link ms-3 my-1" href="#item-1-2"&gt;Item 1-2&lt;/a&gt;</div>
                <div>&lt;/nav&gt;</div>
            <div>&lt;a class="nav-link" href="#item-2"&gt;Item 2&lt;/a&gt;</div>
            <div>&lt;a class="nav-link" href="#item-3"&gt;Item 3&lt;/a&gt;</div>
                <div>&lt;nav class="nav nav-pills flex-column"&gt;</div>
                    <div>&lt;a class="nav-link ms-3 my-1" href="#item-3-1"&gt;Item 3-1&lt;/a&gt;</div>
                    <div>&lt;a class="nav-link ms-3 my-1" href="#item-3-2"&gt;Item 3-2&lt;/a&gt;</div>
                <div>&lt;/nav&gt;</div>
            <div>&lt;/nav&gt;</div>
        <div>&lt;/nav&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-8"&gt;</div>
        <div>&lt;divdata-bs-spy="scroll"data-bs-target="#nestedNavScrollspy"data-bs-smooth-scroll="true"tabindex="0"style="height: 350px; overflow: auto;"&gt;</div>
            <div>&lt;div id="item-1"&gt;</div>
                <div>&lt;h4 class="fw-bold mb-5"&gt;Item 1&lt;/h4&gt;</div>
                <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div id="item-1-1"&gt;</div>
                <div>&lt;h5 class="fw-bold mb-5"&gt;Item 1-1&lt;/h5&gt;</div>
                <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div id="item-1-2"&gt;</div>
                <div>&lt;h5 class="fw-bold mb-5"&gt;Item 1-2&lt;/h5&gt;</div>
                <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div id="item-2"&gt;</div>
                <div>&lt;h4 class="fw-bold mb-5"&gt;Item 2&lt;/h4&gt;</div>
                <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div id="item-3"&gt;</div>
                <div>&lt;h4 class="fw-bold mb-5"&gt;Item 3&lt;/h4&gt;</div>
                <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div id="item-3-1"&gt;</div>
                <div>&lt;h5 class="fw-bold mb-5"&gt;Item 3-1&lt;/h5&gt;</div>
                <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div id="item-3-2"&gt;</div>
                <div>&lt;h5 class="fw-bold mb-5"&gt;Item 3-2&lt;/h5&gt;</div>
                <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
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
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
        List Group Scrollspy
      </h5>
      <div class="row">
        <div class="col-md-4">
          <div id="listGroupScrollspy" class="list-group">
            <a
              class="list-group-item list-group-item-action fs-md-15 fs-lg-16 fw-medium"
              href="#list-item-1"
              >Item 1</a
            >
            <a
              class="list-group-item list-group-item-action fs-md-15 fs-lg-16 fw-medium"
              href="#list-item-2"
              >Item 2</a
            >
            <a
              class="list-group-item list-group-item-action fs-md-15 fs-lg-16 fw-medium"
              href="#list-item-3"
              >Item 3</a
            >
            <a
              class="list-group-item list-group-item-action fs-md-15 fs-lg-16 fw-medium"
              href="#list-item-4"
              >Item 4</a
            >
          </div>
        </div>
        <div class="col-md-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#listGroupScrollspy"
            data-bs-smooth-scroll="true"
            tabindex="0"
            style="height: 300px; overflow: auto"
          >
            <h5 id="list-item-1" class="fw-bold mb-5">Item 1</h5>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h5 id="list-item-2" class="fw-bold mb-5">Item 2</h5>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h5 id="list-item-3" class="fw-bold mb-5">Item 3</h5>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h5 id="list-item-4" class="fw-bold mb-5">Item 4</h5>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#listGroupScrollspyCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="listGroupScrollspyCode">
<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;div id="listGroupScrollspy" class="list-group"&gt;</div>
            <div>&lt;a class="list-group-item list-group-item-action fs-md-15 fs-lg-16 fw-medium" href="#list-item-1"&gt;Item 1&lt;/a&gt;</div>
            <div>&lt;a class="list-group-item list-group-item-action fs-md-15 fs-lg-16 fw-medium" href="#list-item-2"&gt;Item 2&lt;/a&gt;</div>
            <div>&lt;a class="list-group-item list-group-item-action fs-md-15 fs-lg-16 fw-medium" href="#list-item-3"&gt;Item 3&lt;/a&gt;</div>
            <div>&lt;a class="list-group-item list-group-item-action fs-md-15 fs-lg-16 fw-medium" href="#list-item-4"&gt;Item 4&lt;/a&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-8"&gt;</div>
        <div>&lt;div data-bs-spy="scroll" data-bs-target="#listGroupScrollspy" data-bs-smooth-scroll="true" tabindex="0" style="height: 300px; overflow: auto;"&gt;</div>
            <div>&lt;h5 id="list-item-1" class="fw-bold mb-5"&gt;Item 1&lt;/h5&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
            <div>&lt;h5 id="list-item-2" class="fw-bold mb-5"&gt;Item 2&lt;/h5&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
            <div>&lt;h5 id="list-item-3" class="fw-bold mb-5"&gt;Item 3&lt;/h5&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
            <div>&lt;h5 id="list-item-4" class="fw-bold mb-5"&gt;Item 4&lt;/h5&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
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
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
        Anchors Scrollspy
      </h5>
      <div class="row">
        <div class="col-md-4">
          <div
            id="anchorsScrollspy"
            class="d-flex flex-column simple-list-example-scrollspy gap-2 text-center"
          >
            <a
              class="p-1 rounded fs-md-15 fs-lg-16 fw-medium"
              href="#simple-list-item-1"
              >Item 1</a
            >
            <a
              class="p-1 rounded fs-md-15 fs-lg-16 fw-medium"
              href="#simple-list-item-2"
              >Item 2</a
            >
            <a
              class="p-1 rounded fs-md-15 fs-lg-16 fw-medium"
              href="#simple-list-item-3"
              >Item 3</a
            >
            <a
              class="p-1 rounded fs-md-15 fs-lg-16 fw-medium"
              href="#simple-list-item-4"
              >Item 4</a
            >
            <a
              class="p-1 rounded fs-md-15 fs-lg-16 fw-medium"
              href="#simple-list-item-5"
              >Item 5</a
            >
          </div>
        </div>
        <div class="col-md-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#anchorsScrollspy"
            data-bs-offset="0"
            data-bs-smooth-scroll="true"
            tabindex="0"
            style="height: 300px; overflow: auto"
          >
            <h4 id="simple-list-item-1" class="fw-bold mb-5">Item 1</h4>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="simple-list-item-2" class="fw-bold mb-5">Item 2</h4>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="simple-list-item-3" class="fw-bold mb-5">Item 3</h4>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="simple-list-item-4" class="fw-bold mb-5">Item 4</h4>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="simple-list-item-5" class="fw-bold mb-5">Item 5</h4>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#anchorsScrollspyCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="anchorsScrollspyCode">
<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;div id="anchorsScrollspy" class="d-flex flex-column gap-2 text-center"&gt;</div>
            <div>&lt;a class="p-1 rounded fs-md-15 fs-lg-16 fw-medium" href="#simple-list-item-1"&gt;Item 1&lt;/a&gt;</div>
            <div>&lt;a class="p-1 rounded fs-md-15 fs-lg-16 fw-medium" href="#simple-list-item-2"&gt;Item 2&lt;/a&gt;</div>
            <div>&lt;a class="p-1 rounded fs-md-15 fs-lg-16 fw-medium" href="#simple-list-item-3"&gt;Item 3&lt;/a&gt;</div>
            <div>&lt;a class="p-1 rounded fs-md-15 fs-lg-16 fw-medium" href="#simple-list-item-4"&gt;Item 4&lt;/a&gt;</div>
            <div>&lt;a class="p-1 rounded fs-md-15 fs-lg-16 fw-medium" href="#simple-list-item-5"&gt;Item 5&lt;/a&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-8"&gt;</div>
        <div>&lt;div data-bs-spy="scroll" data-bs-target="#anchorsScrollspy" data-bs-offset="0" data-bs-smooth-scroll="true" tabindex="0" style="height: 300px; overflow: auto;"&gt;</div>
        <div>&lt;h4 id="simple-list-item-1" class="fw-bold mb-5"&gt;Item 1&lt;/h4&gt;</div>
        <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
        <div>&lt;h4 id="simple-list-item-2" class="fw-bold mb-5"&gt;Item 2&lt;/h4&gt;</div>
        <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
        <div>&lt;h4 id="simple-list-item-3" class="fw-bold mb-5"&gt;Item 3&lt;/h4&gt;</div>
        <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
        <div>&lt;h4 id="simple-list-item-4" class="fw-bold mb-5"&gt;Item 4&lt;/h4&gt;</div>
        <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
        <div>&lt;h4 id="simple-list-item-5" class="fw-bold mb-5"&gt;Item 5&lt;/h4&gt;</div>
        <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollspyContent",
};
</script>