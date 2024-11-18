<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Basic Form Control
          </h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <div class="mb-15 mb-md-20">
              <label
                for="basicFormControlInput1"
                class="form-label fw-medium text-black"
              >
                Email address
              </label>
              <input
                type="email"
                class="form-control shadow-none fs-md-15 text-black"
                id="basicFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-15 mb-md-20">
              <label
                for="basicFormControlTextarea1"
                class="form-label fw-medium text-black"
              >
                Example textarea
              </label>
              <textarea
                class="form-control shadow-none fs-md-15 text-black"
                id="basicFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#basicFormControlCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicFormControlCode">
<div>&lt;div class="mb-15 mb-md-20"&gt;</div>
    <div>&lt;label for="basicFormControlInput1" class="form-label fw-medium text-black"&gt;Email address&lt;/label&gt;</div>
    <div>&lt;input type="email" class="form-control shadow-none fs-md-15 text-black" id="basicFormControlInput1" placeholder="name@example.com"&gt;</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="mb-15 mb-md-20"&gt;</div>
    <div>&lt;label for="basicFormControlTextarea1" class="form-label fw-medium text-black"&gt;Example textarea&lt;/label&gt;</div>
    <div>&lt;textarea class="form-control shadow-none fs-md-15 text-black" id="basicFormControlTextarea1" rows="3"&gt;&lt;/textarea&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">Disabled</h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <input
              class="form-control shadow-none fs-md-15 text-black mb-15"
              type="text"
              placeholder="Disabled input"
              disabled
            />
            <input
              class="form-control shadow-none fs-md-15 text-black"
              type="text"
              value="Disabled readonly input"
              disabled
              readonly
            />
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#disabledCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledCode">
<div>&lt;input class="form-control shadow-none fs-md-15 text-black" type="text" placeholder="Disabled input" disabled&gt;</div>
<div>&lt;input class="form-control shadow-none fs-md-15 text-black" type="text" value="Disabled readonly input" disabled readonly&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">File Input</h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <div class="mb-15 mb-md-20 mb-lg-25">
              <label for="formFile" class="form-label fw-medium">
                Default file input example
              </label>
              <input
                class="form-control fs-15 text-black shadow-none"
                type="file"
                id="formFile"
              />
            </div>
            <div class="mb-15 mb-md-20 mb-lg-25">
              <label for="formFileMultiple" class="form-label fw-medium">
                Multiple files input example
              </label>
              <input
                class="form-control fs-15 text-black shadow-none"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </div>
            <div class="mb-15 mb-md-20 mb-lg-25">
              <label for="formFileDisabled" class="form-label fw-medium">
                Disabled file input example
              </label>
              <input
                class="form-control fs-15 text-black shadow-none"
                type="file"
                id="formFileDisabled"
                disabled
              />
            </div>
            <div class="mb-15 mb-md-20 mb-lg-25">
              <label for="formFileSm" class="form-label fw-medium">
                Small file input example
              </label>
              <input
                class="form-control fs-14 text-black shadow-none form-control-sm"
                id="formFileSm"
                type="file"
              />
            </div>
            <div>
              <label for="formFileLg" class="form-label fw-medium">
                Large file input example
              </label>
              <input
                class="form-control fs-16 text-black shadow-none form-control-lg"
                id="formFileLg"
                type="file"
              />
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#fileInputCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="fileInputCode">
<div>&lt;div class="mb-15 mb-md-20 mb-lg-25"&gt;</div>
    <div>&lt;label for="formFile" class="form-label fw-medium"&gt;Default file input example&lt;/label&gt;</div>
    <div>&lt;input class="form-control fs-15 text-black shadow-none" type="file" id="formFile"&gt;</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="mb-15 mb-md-20 mb-lg-25"&gt;</div>
    <div>&lt;label for="formFileMultiple" class="form-label fw-medium"&gt;Multiple files input example&lt;/label&gt;</div>
    <div>&lt;input class="form-control fs-15 text-black shadow-none" type="file" id="formFileMultiple" multiple&gt;</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="mb-15 mb-md-20 mb-lg-25"&gt;</div>
    <div>&lt;label for="formFileDisabled" class="form-label fw-medium"&gt;Disabled file input example&lt;/label&gt;</div>
    <div>&lt;input class="form-control fs-15 text-black shadow-none" type="file" id="formFileDisabled" disabled&gt;</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="mb-15 mb-md-20 mb-lg-25"&gt;</div>
    <div>&lt;label for="formFileSm" class="form-label fw-medium"&gt;Small file input example&lt;/label&gt;</div>
    <div>&lt;input class="form-control fs-14 text-black shadow-none form-control-sm" id="formFileSm" type="file"&gt;</div>
<div>&lt;/div&gt;</div>
<div>&lt;div&gt;</div>
    <div>&lt;label for="formFileLg" class="form-label fw-medium"&gt;Large file input example&lt;/label&gt;</div>
    <div>&lt;input class="form-control fs-16 text-black shadow-none form-control-lg" id="formFileLg" type="file"&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">Color</h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <label for="colorInput" class="form-label fw-medium">
              Color picker
            </label>
            <input
              type="color"
              class="form-control p-5 fs-md-15 shadow-none form-control-color"
              id="colorInput"
              value="#563d7c"
              title="Choose your color"
            />
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#colorCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="colorCode">
<div>&lt;label for="colorInput" class="form-label fw-medium"&gt;Color picker&lt;/label&gt;</div>
<div>&lt;input type="color" class="form-control p-5 fs-md-15 shadow-none form-control-color" id="colorInput" value="#563d7c" title="Choose your color"&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">Datalists</h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <label for="dataList" class="form-label fw-medium">
              Datalist example
            </label>
            <input
              class="form-control fs-md-15 text-black shadow-none"
              list="datalistOptions"
              id="dataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="San Francisco"></option>
              <option value="New York"></option>
              <option value="Seattle"></option>
              <option value="Los Angeles"></option>
              <option value="Chicago"></option>
            </datalist>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#detailstsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="detailstsCode">
<div>&lt;label for="dataList" class="form-label fw-medium"&gt;Datalist example&lt;/label&gt;</div>
<div>&lt;input class="form-control fs-md-15 text-black shadow-none" list="datalistOptions" id="dataList" placeholder="Type to search..."&gt;</div>
<div>&lt;datalist id="datalistOptions"&gt;</div>
    <div>&lt;option value="San Francisco"&gt;</div>
    <div>&lt;option value="New York"&gt;</div>
    <div>&lt;option value="Seattle"&gt;</div>
    <div>&lt;option value="Los Angeles"&gt;</div>
    <div>&lt;option value="Chicago"&gt;</div>
<div>&lt;/datalist&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Sizing Form Control
          </h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <input
              class="form-control mb-15 fs-16 text-black shadow-none form-control-lg"
              type="text"
              placeholder=".form-control-lg"
            />
            <input
              class="form-control mb-15 fs-15 text-black shadow-none"
              type="text"
              placeholder="Default input"
            />
            <input
              class="form-control fs-14 text-black shadow-none form-control-sm"
              type="text"
              placeholder=".form-control-sm"
            />
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#sizingFormControlCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="sizingFormControlCode">
<div>&lt;input class="form-control fs-16 text-black shadow-none form-control-lg" type="text" placeholder=".form-control-lg"&gt;</div>
<div>&lt;input class="form-control fs-15 text-black shadow-none" type="text" placeholder="Default input"&gt;</div>
<div>&lt;input class="form-control fs-14 text-black shadow-none form-control-sm" type="text" placeholder=".form-control-sm"&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">Form Text</h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <label for="inputPassword5" class="form-label fw-medium"
              >Password</label
            >
            <input
              type="password"
              id="inputPassword5"
              class="form-control fs-md-15 shadow-none text-black"
            />
            <div class="form-text fs-13 text-paragarph">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#formTextCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="formTextCode">
<div>&lt;label for="inputPassword5" class="form-label fw-medium"&gt;Password&lt;/label&gt;</div>
    <div>&lt;input type="password" id="inputPassword5" class="form-control fs-md-15 shadow-none text-black"&gt;</div>
    <div>&lt;div class="form-text fs-13 text-paragarph"&gt;</div>
    <div>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
          <p
            class="fs-md-15 fs-lg-16 text-paragarph lh-base mt-15 mt-md-20 mt-xl-25"
          >
            Inline text can use any typical inline HTML element (be it a
            <code>&lt;span&gt;</code>, <code>&lt;small&gt;</code>, or something
            else) with nothing more than the <code>.form-text</code> class.
          </p>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <div class="row g-3 align-items-center">
              <div class="col-auto">
                <label for="inputPassword6" class="col-form-label fw-medium"
                  >Password</label
                >
              </div>
              <div class="col-auto">
                <input
                  type="password"
                  id="inputPassword6"
                  class="form-control fs-md-15 fs-lg-16 shadow-none text-black"
                />
              </div>
              <div class="col-auto">
                <span class="form-text fs-13 text-paragarph">
                  Must be 8-20 characters long.
                </span>
              </div>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#formText2Code"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="formText2Code">
<div>&lt;div class="row g-3 align-items-center"&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;label for="inputPassword6" class="col-form-label fw-medium"&gt;Password&lt;/label&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;input type="password" id="inputPassword6" class="form-control fs-md-15 fs-lg-16 shadow-none text-black"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;span class="form-text fs-13 text-paragarph"&gt;</div>
            <div>Must be 8-20 characters long.</div>
        <div>&lt;/span&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">Readonly</h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <input
              class="form-control shadow-none text-black fs-md-15"
              type="text"
              value="Readonly input here..."
              readonly
            />
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#readonlyFormControlCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="readonlyFormControlCode">
<div>&lt;input class="form-control shadow-none text-black fs-md-15" type="text" value="Readonly input here..." readonly&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Readonly Plain Text
          </h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <div class="mb-15 mb-md-20 mb-xl-25 row">
              <label
                for="staticEmail"
                class="col-sm-2 col-form-label fw-medium"
              >
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext shadow-none text-black fs-md-15"
                  id="staticEmail"
                  value="email@example.com"
                />
              </div>
            </div>
            <div class="mb-0 row">
              <label
                for="inputPassword"
                class="col-sm-2 col-form-label fw-medium"
              >
                Password
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control fs-md-15 shadow-none text-black"
                  id="inputPassword"
                />
              </div>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#readonlyPlainCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="readonlyPlainCode">
<div>&lt;div class="mb-15 mb-md-20 mb-xl-25 row"&gt;</div>
    <div>&lt;label for="staticEmail" class="col-sm-2 col-form-label fw-medium"&gt;Email&lt;/label&gt;</div>
    <div>&lt;div class="col-sm-10"&gt;</div>
        <div>&lt;input type="text" readonly class="form-control-plaintext shadow-none text-black fs-md-15" id="staticEmail" value="email@example.com"&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="mb-15 mb-md-20 mb-xl-25 row"&gt;</div>
    <div>&lt;label for="inputPassword" class="col-sm-2 col-form-label fw-medium"&gt;Password&lt;/label&gt;</div>
    <div>&lt;div class="col-sm-10"&gt;</div>
        <div>&lt;input type="password" class="form-control fs-md-15 shadow-none text-black" id="inputPassword"&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10 mt-25">
            <form class="row align-items-center g-3">
              <div class="col-auto">
                <label for="staticEmail2" class="visually-hidden fw-medium">
                  Email
                </label>
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext text-black fs-md-15 shadow-none"
                  id="staticEmail2"
                  value="email@example.com"
                />
              </div>
              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden fw-medium">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control fs-md-15 shadow-none text-black"
                  id="inputPassword2"
                  placeholder="Password"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary">
                  Confirm identity
                </button>
              </div>
            </form>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#readonlyPlain2Code"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="readonlyPlain2Code">
<div>&lt;form class="row align-items-center g-3"&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;label for="staticEmail2" class="visually-hidden fw-medium"&gt;Email&lt;/label&gt;</div>
        <div>&lt;input type="text" readonly class="form-control-plaintext text-black fs-md-15 shadow-none" id="staticEmail2" value="email@example.com"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;label for="inputPassword2" class="visually-hidden fw-medium"&gt;Password&lt;/label&gt;</div>
        <div>&lt;input type="password" class="form-control fs-md-15 shadow-none text-black" id="inputPassword2" placeholder="Password"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;button type="submit" class="btn btn-primary"&gt;Confirm identity&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/form&gt;</div>
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
  name: "FormControl",
};
</script>