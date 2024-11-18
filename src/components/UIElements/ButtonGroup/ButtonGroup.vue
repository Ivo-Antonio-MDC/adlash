<template>
  <div class="row">
    <div class="col-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Basic Button Group
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="basicButtonGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicButtonGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicButtonGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="basicButtonGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicButtonGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicButtonGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="basicButtonGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group me-10 mt-10" role="group">
                <button type="button" class="btn btn-primary">Left</button>
                <button type="button" class="btn btn-primary">Middle</button>
                <button type="button" class="btn btn-primary">Right</button>
              </div>
              <div class="btn-group me-10 mt-10">
                <a href="#" class="btn btn-primary" aria-current="page"
                  >Active Link</a
                >
                <a href="#" class="btn btn-primary active">Link</a>
                <a href="#" class="btn btn-primary">Link</a>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="basicButtonGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#basicButtonGroupCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicButtonGroupCode">
<div>&lt;div class="btn-group" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;Left&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;Middle&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;Right&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="btn-group"&gt;</div>
    <div>&lt;a href="#" class="btn btn-primary" aria-current="page"&gt;Active Link&lt;/a&gt;</div>
    <div>&lt;a href="#" class="btn btn-primary active"&gt;Link&lt;/a&gt;</div>
    <div>&lt;a href="#" class="btn btn-primary"&gt;Link&lt;/a&gt;</div>
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
            Mixed Styles Button Group
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="mixedButtonGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#mixedButtonGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="mixedButtonGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="mixedButtonGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#mixedButtonGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="mixedButtonGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="mixedButtonGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-danger">Left</button>
                <button type="button" class="btn btn-warning">Middle</button>
                <button type="button" class="btn btn-success">Right</button>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="mixedButtonGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#mixedButtonGroupCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="mixedButtonGroupCode">
<div>&lt;div class="btn-group" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-danger"&gt;Left&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-warning"&gt;Middle&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-success"&gt;Right&lt;/button&gt;</div>
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
            Outlined Styles Button Group
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="outlinedButtonGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#outlinedButtonGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="outlinedButtonGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="outlinedButtonGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#outlinedButtonGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="outlinedButtonGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="outlinedButtonGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-primary">
                  Left
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Middle
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Right
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="outlinedButtonGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#outlinedButtonGroupCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="outlinedButtonGroupCode">
<div>&lt;div class="btn-group" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Left&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Middle&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Right&lt;/button&gt;</div>
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
            Checkbox & Radio Button Group
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="checkboxRadioButtonGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#checkboxRadioButtonGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="checkboxRadioButtonGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="checkboxRadioButtonGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#checkboxRadioButtonGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="checkboxRadioButtonGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="checkboxRadioButtonGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group me-10 mt-10" role="group">
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck1"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck1"
                  >Box 1</label
                >

                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck2"
                  >Box 2</label
                >

                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btncheck3"
                  >Box 3</label
                >
              </div>
              <div class="btn-group me-10 mt-10" role="group">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                  checked
                />
                <label class="btn btn-outline-primary" for="btnradio1"
                  >Radio 1</label
                >

                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btnradio2"
                  >Radio 2</label
                >

                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btnradio3"
                  >Radio 3</label
                >
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="checkboxRadioButtonGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#checkboxRadioButtonGroupCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="checkboxRadioButtonGroupCode">
<div>&lt;div class="btn-group" role="group"&gt;</div>
    <div>&lt;input type="checkbox" class="btn-check" id="btncheck1"autocomplete="off"&gt;</div>
    <div>&lt;label class="btn btn-outline-primary" for="btncheck1"&gt;Checkbox 1&lt;/label&gt;</div>

    <div>&lt;input type="checkbox" class="btn-check" id="btncheck2"autocomplete="off"&gt;</div>
    <div>&lt;label class="btn btn-outline-primary" for="btncheck2"&gt;Checkbox 2&lt;/label&gt;</div>

    <div>&lt;input type="checkbox" class="btn-check" id="btncheck3"autocomplete="off"&gt;</div>
    <div>&lt;label class="btn btn-outline-primary" for="btncheck3"&gt;Checkbox 3&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="btn-group" role="group"&gt;</div>
    <div>&lt;input type="radio" class="btn-check" name="btnradio" id="btnradio1"autocomplete="off"checked&gt;</div>
    <div>&lt;label class="btn btn-outline-primary" for="btnradio1"&gt;Radio 1&lt;/label&gt;</div>

    <div>&lt;input type="radio" class="btn-check" name="btnradio" id="btnradio2"autocomplete="off"&gt;</div>
    <div>&lt;label class="btn btn-outline-primary" for="btnradio2"&gt;Radio 2&lt;/label&gt;</div>

    <div>&lt;input type="radio" class="btn-check" name="btnradio" id="btnradio3"autocomplete="off"&gt;</div>
    <div>&lt;label class="btn btn-outline-primary" for="btnradio3"&gt;Radio 3&lt;/label&gt;</div>
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
            Button Toolbar
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="toolbarButtonGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#toolbarButtonGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="toolbarButtonGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="toolbarButtonGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#toolbarButtonGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="toolbarButtonGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="toolbarButtonGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-toolbar" role="toolbar">
                <div class="btn-group me-10 mt-10" role="group">
                  <button type="button" class="btn btn-primary">1</button>
                  <button type="button" class="btn btn-primary">2</button>
                  <button type="button" class="btn btn-primary">3</button>
                  <button type="button" class="btn btn-primary">4</button>
                </div>
                <div class="btn-group me-10 mt-10" role="group">
                  <button type="button" class="btn btn-secondary">5</button>
                  <button type="button" class="btn btn-secondary">6</button>
                  <button type="button" class="btn btn-secondary">7</button>
                </div>
                <div class="btn-group me-10 mt-10" role="group">
                  <button type="button" class="btn btn-info">8</button>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="toolbarButtonGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#toolbarButtonGroupCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="toolbarButtonGroupCode">
<div>&lt;div class="btn-group me-2" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;1&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;2&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;3&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;4&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="btn-group me-2" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary"&gt;5&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary"&gt;6&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-secondary"&gt;7&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="btn-group" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-info"&gt;8&lt;/button&gt;</div>
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
            Sizing Button Group
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="sizingButtonGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#sizingButtonGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="sizingButtonGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="sizingButtonGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#sizingButtonGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="sizingButtonGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="sizingButtonGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group btn-group-lg me-10 mt-10" role="group">
                <button type="button" class="btn btn-outline-primary">
                  Left
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Middle
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Right
                </button>
              </div>
              <div class="btn-group me-10 mt-10" role="group">
                <button type="button" class="btn btn-outline-primary">
                  Left
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Middle
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Right
                </button>
              </div>
              <div class="btn-group btn-group-sm me-10 mt-10" role="group">
                <button type="button" class="btn btn-outline-primary">
                  Left
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Middle
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Right
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="sizingButtonGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#sizingButtonGroupCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="sizingButtonGroupCode">
<div>&lt;div class="btn-group btn-group-lg" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Left&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Middle&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Right&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="btn-group" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Left&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Middle&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Right&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="btn-group btn-group-sm" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Left&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Middle&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-primary"&gt;Right&lt;/button&gt;</div>
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
            Nesting Button Group
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="nestingButtonGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#nestingButtonGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="nestingButtonGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="nestingButtonGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#nestingButtonGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="nestingButtonGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="nestingButtonGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary">1</button>
                <button type="button" class="btn btn-primary">2</button>

                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="nestingButtonGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#nestingButtonGroupCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="nestingButtonGroupCode">
<div>&lt;div class="btn-group" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;1&lt;/button&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;2&lt;/button&gt;</div>

    <div>&lt;div class="btn-group" role="group"&gt;</div>
        <div>&lt;button type="button" class="btn btn-primary dropdown-toggle"data-bs-toggle="dropdown"aria-expanded="false"&gt;</div>
            <div>Dropdown</div>
        <div>&lt;/button&gt;</div>
        <div>&lt;ul class="dropdown-menu"&gt;</div>
            <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Dropdown link&lt;/a&gt;&lt;/li&gt;</div>
            <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Dropdown link&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;/ul&gt;</div>
    <div>&lt;/div&gt;</div>
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
            Vertical Button Group
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="verticalButtonGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#verticalButtonGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="verticalButtonGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="verticalButtonGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#verticalButtonGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="verticalButtonGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="verticalButtonGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="btn-group-vertical" role="group">
                <button type="button" class="btn btn-primary">Button</button>
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                  </ul>
                </div>
                <button type="button" class="btn btn-primary">Button</button>
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="verticalButtonGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#verticalButtonGroupCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="verticalButtonGroupCode">
<div>&lt;div class="btn-group-vertical" role="group"&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;Button&lt;/button&gt;</div>
    <div>&lt;div class="btn-group" role="group"&gt;</div>
        <div>&lt;button type="button" class="btn btn-primary dropdown-toggle"data-bs-toggle="dropdown"aria-expanded="false"&gt;</div>
            <div>Dropdown</div>
        <div>&lt;/button&gt;</div>
        <div>&lt;ul class="dropdown-menu"&gt;</div>
            <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Dropdown link&lt;/a&gt;&lt;/li&gt;</div>
            <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Dropdown link&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;/ul&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;button type="button" class="btn btn-primary"&gt;Button&lt;/button&gt;</div>
    <div>&lt;div class="btn-group" role="group"&gt;</div>
        <div>&lt;button type="button" class="btn btn-primary dropdown-toggle"data-bs-toggle="dropdown"aria-expanded="false"&gt;</div>
            <div>Dropdown</div>
        <div>&lt;/button&gt;</div>
        <div>&lt;ul class="dropdown-menu"&gt;</div>
            <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Dropdown link&lt;/a&gt;&lt;/li&gt;</div>
            <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Dropdown link&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;/ul&gt;</div>
    <div>&lt;/div&gt;</div>
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
  name: "ButtonGroup",
};
</script>