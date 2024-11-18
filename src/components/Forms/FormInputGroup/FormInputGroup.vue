<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Basic Example</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group mb-15 mb-md-20">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
            placeholder="Username"
          />
        </div>
        <div class="input-group mb-15 mb-md-20">
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
            placeholder="Recipient's username"
          />
          <span class="input-group-text" id="basic-addon2">@example.com</span>
        </div>
        <div class="mb-15 mb-md-20">
          <label for="basic-url" class="form-label fw-medium"
            >Your vanity URL</label
          >
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"
              >https://example.com/users/</span
            >
            <input
              type="text"
              class="form-control shadow-none fs-md-15 text-black"
              id="basic-url"
            />
          </div>
          <div class="form-text text-paragraph fs-13" id="basic-addon4">
            Example help text goes outside the input group.
          </div>
        </div>
        <div class="input-group mb-15 mb-md-20">
          <span class="input-group-text">$</span>
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
          />
          <span class="input-group-text">.00</span>
        </div>
        <div class="input-group mb-15 mb-md-20">
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
            placeholder="Username"
          />
          <span class="input-group-text">@</span>
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
            placeholder="Server"
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">With textarea</span>
          <textarea
            class="form-control shadow-none fs-md-15 text-black"
          ></textarea>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicExampleCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicExampleCode">
<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;span class="input-group-text" id="basic-addon1"&gt;@&lt;/span&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" placeholder="Username"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" placeholder="Recipient's username"&gt;</div>
    <div>&lt;span class="input-group-text" id="basic-addon2"&gt;@example.com&lt;/span&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="mb-15 mb-md-20"&gt;</div>
    <div>&lt;label for="basic-url" class="form-label fw-medium"&gt;Your vanity URL&lt;/label&gt;</div>
    <div>&lt;div class="input-group"&gt;</div>
        <div>&lt;span class="input-group-text" id="basic-addon3"&gt;https://example.com/users/&lt;/span&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="basic-url"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="form-text text-paragraph fs-13" id="basic-addon4"&gt;Example help text goes outside the input group.&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;span class="input-group-text"&gt;$&lt;/span&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black"&gt;</div>
    <div>&lt;span class="input-group-text"&gt;.00&lt;/span&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" placeholder="Username"&gt;</div>
    <div>&lt;span class="input-group-text"&gt;@&lt;/span&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" placeholder="Server"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group"&gt;</div>
    <div>&lt;span class="input-group-text"&gt;With textarea&lt;/span&gt;</div>
    <div>&lt;textarea class="form-control shadow-none fs-md-15 text-black"&gt;&lt;/textarea&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Wrapping</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">@</span>
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
            placeholder="Username"
          />
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#wrappingCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="wrappingCode">
<div>&lt;div class="input-group flex-nowrap"&gt;</div>
    <div>&lt;span class="input-group-text" id="addon-wrapping"&gt;@&lt;/span&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" placeholder="Username"&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Sizing</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group input-group-sm mb-15 mb-md-20">
          <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
          />
        </div>
        <div class="input-group mb-15 mb-md-20">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Default</span
          >
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
          />
        </div>
        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
          />
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#sizingCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="sizingCode">
<div>&lt;div class="input-group input-group-sm mb-15 mb-md-20"&gt;</div>
    <div>&lt;span class="input-group-text" id="inputGroup-sizing-sm"&gt;Small&lt;/span&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;span class="input-group-text" id="inputGroup-sizing-default"&gt;Default&lt;/span&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group input-group-lg"&gt;</div>
    <div>&lt;span class="input-group-text" id="inputGroup-sizing-lg"&gt;Large&lt;/span&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black"&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Checkboxes & Radios</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group mb-15 mb-md-20">
          <div class="input-group-text">
            <input
              class="form-check-input shadow-none mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with checkbox"
          />
        </div>
        <div class="input-group">
          <div class="input-group-text">
            <input
              class="form-check-input shadow-none mt-0"
              type="radio"
              value=""
              aria-label="Radio button for following text input"
            />
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with radio button"
          />
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#checkboxesRadiosCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="checkboxesRadiosCode">
<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;div class="input-group-text"&gt;</div>
        <div>&lt;input class="form-check-input shadow-none mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;input type="text" class="form-control" aria-label="Text input with checkbox"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group"&gt;</div>
    <div>&lt;div class="input-group-text"&gt;</div>
        <div>&lt;input class="form-check-input shadow-none mt-0" type="radio" value="" aria-label="Radio button for following text input"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;input type="text" class="form-control" aria-label="Text input with radio button"&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Multiple Inputs</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group">
          <span class="input-group-text">First and last name</span>
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
          />
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
          />
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#multipleInputsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="multipleInputsCode">
<div>&lt;div class="input-group"&gt;</div>
    <div>&lt;span class="input-group-text"&gt;First and last name&lt;/span&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15"&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15"&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Multiple Addons</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group mb-15 mb-md-20">
          <span class="input-group-text">$</span>
          <span class="input-group-text">0.00</span>
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
          />
        </div>
        <div class="input-group">
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
          />
          <span class="input-group-text">$</span>
          <span class="input-group-text">0.00</span>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#multipleAddonsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="multipleAddonsCode">
<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;span class="input-group-text"&gt;$&lt;/span&gt;</div>
    <div>&lt;span class="input-group-text"&gt;0.00&lt;/span&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group"&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15"&gt;</div>
    <div>&lt;span class="input-group-text"&gt;$&lt;/span&gt;</div>
    <div>&lt;span class="input-group-text"&gt;0.00&lt;/span&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Button Addons</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group mb-15 mb-md-20">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            Button
          </button>
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
            placeholder=""
          />
        </div>
        <div class="input-group mb-15 mb-md-20">
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
            placeholder="Recipient's username"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
        <div class="input-group mb-15 mb-md-20">
          <button class="btn btn-outline-secondary" type="button">
            Button
          </button>
          <button class="btn btn-outline-secondary" type="button">
            Button
          </button>
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
            placeholder=""
          />
        </div>
        <div class="input-group">
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
            placeholder="Recipient's username"
          />
          <button class="btn btn-outline-secondary" type="button">
            Button
          </button>
          <button class="btn btn-outline-secondary" type="button">
            Button
          </button>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#buttonAddonsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="buttonAddonsCode">
<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary" type="button" id="button-addon1"&gt;Button&lt;/button&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder=""&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder="Recipient's username"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary" type="button" id="button-addon2"&gt;Button&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary" type="button"&gt;Button&lt;/button&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary" type="button"&gt;Button&lt;/button&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder=""&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group"&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder="Recipient's username"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary" type="button"&gt;Button&lt;/button&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary" type="button"&gt;Button&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Buttons with Dropdowns</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group mb-15 mb-md-20">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
            aria-label="Text input with dropdown button"
          />
        </div>
        <div class="input-group mb-15 mb-md-20">
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
            aria-label="Text input with dropdown button"
          />
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="input-group">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action before</a></li>
            <li><a class="dropdown-item" href="#">Another action before</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
            aria-label="Text input with 2 dropdown buttons"
          />
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#buttonWithDropdownsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="buttonWithDropdownsCode">
<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;Dropdown&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" aria-label="Text input with dropdown button"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" aria-label="Text input with dropdown button"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;Dropdown&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu dropdown-menu-end"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;Dropdown&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action before&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action before&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" aria-label="Text input with 2 dropdown buttons"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;Dropdown&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu dropdown-menu-end"&gt;</div>
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
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Segmented Buttons</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group mb-15 mb-md-20">
          <button type="button" class="btn btn-outline-secondary">
            Action
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
            aria-label="Text input with segmented dropdown button"
          />
        </div>
        <div class="input-group">
          <input
            type="text"
            class="form-control shadow-none text-black fs-md-15"
            aria-label="Text input with segmented dropdown button"
          />
          <button type="button" class="btn btn-outline-secondary">
            Action
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#segmentedButtonsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="segmentedButtonsCode">
<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-secondary"&gt;Action&lt;/button&gt;</div>
        <div>&lt;button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu"&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;</div>
        <div>&lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" aria-label="Text input with segmented dropdown button"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group"&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" aria-label="Text input with segmented dropdown button"&gt;</div>
    <div>&lt;button type="button" class="btn btn-outline-secondary"&gt;Action&lt;/button&gt;</div>
        <div>&lt;button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;ul class="dropdown-menu dropdown-menu-end"&gt;</div>
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
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Custom Select</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group mb-15 mb-md-20">
          <label class="input-group-text" for="inputGroupSelect01"
            >Options</label
          >
          <select
            class="form-select text-black shadow-none fs-md-15"
            id="inputGroupSelect01"
          >
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="input-group mb-15 mb-md-20">
          <select
            class="form-select text-black shadow-none fs-md-15"
            id="inputGroupSelect02"
          >
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label class="input-group-text" for="inputGroupSelect02"
            >Options</label
          >
        </div>
        <div class="input-group mb-15 mb-md-20">
          <button class="btn btn-outline-secondary" type="button">
            Button
          </button>
          <select
            class="form-select text-black shadow-none fs-md-15"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="input-group">
          <select
            class="form-select text-black shadow-none fs-md-15"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button class="btn btn-outline-secondary" type="button">
            Button
          </button>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#customSelectCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="customSelectCode">
<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;label class="input-group-text" for="inputGroupSelect01"&gt;Options&lt;/label&gt;</div>
    <div>&lt;select class="form-select text-black shadow-none fs-md-15" id="inputGroupSelect01"&gt;</div>
        <div>&lt;option selected&gt;Choose...&lt;/option&gt;</div>
        <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
        <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
        <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
    <div>&lt;/select&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;select class="form-select text-black shadow-none fs-md-15" id="inputGroupSelect02"&gt;</div>
        <div>&lt;option selected&gt;Choose...&lt;/option&gt;</div>
        <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
        <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
        <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
    <div>&lt;/select&gt;</div>
    <div>&lt;label class="input-group-text" for="inputGroupSelect02"&gt;Options&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary" type="button"&gt;Button&lt;/button&gt;</div>
    <div>&lt;select class="form-select text-black shadow-none fs-md-15" id="inputGroupSelect03" aria-label="Example select with button addon"&gt;</div>
        <div>&lt;option selected&gt;Choose...&lt;/option&gt;</div>
        <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
        <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
        <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
    <div>&lt;/select&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group"&gt;</div>
    <div>&lt;select class="form-select text-black shadow-none fs-md-15" id="inputGroupSelect04" aria-label="Example select with button addon"&gt;</div>
        <div>&lt;option selected&gt;Choose...&lt;/option&gt;</div>
        <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
        <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
        <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
    <div>&lt;/select&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary" type="button"&gt;Button&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Custom File Input</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group mb-15 mb-md-20">
          <label class="input-group-text" for="inputGroupFile01">Upload</label>
          <input
            type="file"
            class="form-control fs-md-15 text-black shadow-none"
            id="inputGroupFile01"
          />
        </div>
        <div class="input-group mb-15 mb-md-20">
          <input
            type="file"
            class="form-control fs-md-15 text-black shadow-none"
            id="inputGroupFile02"
          />
          <label class="input-group-text" for="inputGroupFile02">Upload</label>
        </div>
        <div class="input-group mb-15 mb-md-20">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="inputGroupFileAddon03"
          >
            Button
          </button>
          <input
            type="file"
            class="form-control fs-md-15 text-black shadow-none"
            id="inputGroupFile03"
            aria-describedby="inputGroupFileAddon03"
            aria-label="Upload"
          />
        </div>
        <div class="input-group">
          <input
            type="file"
            class="form-control fs-md-15 text-black shadow-none"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="inputGroupFileAddon04"
          >
            Button
          </button>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#customSelectCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="customSelectCode">
<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;label class="input-group-text" for="inputGroupFile01"&gt;Upload&lt;/label&gt;</div>
    <div>&lt;input type="file" class="form-control fs-md-15 text-black shadow-none" id="inputGroupFile01"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;input type="file" class="form-control fs-md-15 text-black shadow-none" id="inputGroupFile02"&gt;</div>
    <div>&lt;label class="input-group-text" for="inputGroupFile02"&gt;Upload&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group mb-15 mb-md-20"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03"&gt;Button&lt;/button&gt;</div>
    <div>&lt;input type="file" class="form-control fs-md-15 text-black shadow-none" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="input-group"&gt;</div>
    <div>&lt;input type="file" class="form-control fs-md-15 text-black shadow-none" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"&gt;</div>
    <div>&lt;button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04"&gt;Button&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormInputGroup",
};
</script>