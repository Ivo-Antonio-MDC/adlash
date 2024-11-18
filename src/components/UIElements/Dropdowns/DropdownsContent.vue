<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Basic Dropdowns
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="basicDropdownsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicDropdownsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicDropdownsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="basicDropdownsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicDropdownsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicDropdownsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="basicDropdownsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
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
            <div
              class="tab-pane fade position-relative"
              id="basicDropdownsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#basicDropdownsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicDropdownsCode">
<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Dropdown button</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Link Dropdowns
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="linkDropdownsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#linkDropdownsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="linkDropdownsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="linkDropdownsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#linkDropdownsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="linkDropdownsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="linkDropdownsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="linkDropdownsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#linkDropdownsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="linkDropdownsCode">
<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;a class="btn btn-secondary dropdown-toggle" href="#"role="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Dropdown link</div>
    <div>&lt;/a&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Color Dropdowns
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="colorDropdownsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#colorDropdownsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="colorDropdownsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="colorDropdownsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#colorDropdownsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="colorDropdownsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="colorDropdownsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group mt-10 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Primary
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="btn-group mt-10 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Secondary
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="btn-group mt-10 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-success dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Success
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="btn-group mt-10 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-info dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Info
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="btn-group mt-10 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-warning dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Warning
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="btn-group mt-10 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-danger dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Danger
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="colorDropdownsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#colorDropdownsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="colorDropdownsCode">
<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Primary</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Secondary</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Success</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Info</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Warning</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Danger</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Split Dropdowns
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="splitDropdownsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#splitDropdownsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="splitDropdownsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="splitDropdownsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#splitDropdownsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="splitDropdownsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="splitDropdownsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group">
                <button type="button" class="btn btn-primary">Action</button>
                <button
                  type="button"
                  class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="splitDropdownsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#splitDropdownsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="splitDropdownsCode">
<div>&lt;div class="btn-group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;Action&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Dark Dropdowns
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="darkDropdownsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#darkDropdownsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="darkDropdownsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="darkDropdownsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#darkDropdownsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="darkDropdownsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="darkDropdownsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item active" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="darkDropdownsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#darkDropdownsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="darkDropdownsCode">
<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Dropdown button</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu dropdown-menu-dark"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item active" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Sizing Dropdowns
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="sizingDropdownsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#sizingDropdownsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="sizingDropdownsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="sizingDropdownsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#sizingDropdownsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="sizingDropdownsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="sizingDropdownsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group mt-10 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Large button
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item active" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="btn-group mt-10 me-10">
                <button class="btn btn-secondary btn-lg" type="button">
                  Large split button
                </button>
                <button
                  type="button"
                  class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item active" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
              <div class="btn-group mt-10 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Small button
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item active" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="btn-group">
                <button class="btn btn-secondary btn-sm" type="button">
                  Small split button
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item active" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="sizingDropdownsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#sizingDropdownsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="sizingDropdownsCode">
<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Large button</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item active" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="btn-group"&gt;</div>
    <div>&lt;button class="btn btn-secondary btn-lg" type="button"&gt;</div>
        <div>Large split button</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item active" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/ul&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Small button</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item active" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="btn-group"&gt;</div>
    <div>&lt;button class="btn btn-secondary btn-sm" type="button"&gt;</div>
        <div>Small split button</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item active" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Alignment Options Dropdowns
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="alignmentDropdownsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#alignmentDropdownsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="alignmentDropdownsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="alignmentDropdownsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#alignmentDropdownsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="alignmentDropdownsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="alignmentDropdownsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group me-10 mt-10">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group me-10 mt-10">
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Right-aligned menu
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group me-10 mt-10">
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                  >
                    Left-aligned, right-aligned lg
                  </button>
                  <ul class="dropdown-menu dropdown-menu-lg-end">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group me-10 mt-10">
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                  >
                    Right-aligned, left-aligned lg
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                  >
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group me-10 mt-10">
                <div class="dropdown dropstart">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropstart
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group me-10 mt-10">
                <div class="dropdown dropend">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropend
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group me-10 mt-10">
                <div class="dropdown dropup">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropup
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="alignmentDropdownsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#alignmentDropdownsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="alignmentDropdownsCode">
<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Dropdown</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Right-aligned menu</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu dropdown-menu-end"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false"&gt;</div>
        <div>Left-aligned, right-aligned lg</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu dropdown-menu-lg-end"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false"&gt;</div>
        <div>Right-aligned, left-aligned lg</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown dropstart"&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Dropstart</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown dropend"&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Dropend</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown dropup"&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>Dropup</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Auto Close Dropdowns
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="autoCloseDropdownsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#autoCloseDropdownsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="autoCloseDropdownsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="autoCloseDropdownsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#autoCloseDropdownsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="autoCloseDropdownsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="autoCloseDropdownsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group mt-15 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    Default dropdown
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group mt-15 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="inside"
                    aria-expanded="false"
                  >
                    Clickable inside
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group mt-15 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Clickable outside
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group mt-10 me-10">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="false"
                    aria-expanded="false"
                  >
                    Manual close
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="autoCloseDropdownsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#autoCloseDropdownsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="autoCloseDropdownsCode">
<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false"&gt;</div>
        <div>Default dropdown</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false"&gt;</div>
        <div>Clickable inside</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"&gt;</div>
        <div>Clickable outside</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="dropdown"&gt;</div>
    <div>&lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false"&gt;</div>
        <div>Manual close</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Menu item&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownsContent",
};
</script>