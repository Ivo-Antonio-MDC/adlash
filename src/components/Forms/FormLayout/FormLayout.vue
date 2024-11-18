<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Basic Layout</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="mb-15 mb-md-20">
          <label for="formGroupExampleInput" class="form-label fw-medium">
            Example label
          </label>
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
        <div>
          <label for="formGroupExampleInput2" class="form-label fw-medium"
            >Another label</label
          >
          <input
            type="text"
            class="form-control shadow-none fs-md-15 text-black"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          />
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicLayoutCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicLayoutCode">
<div>&lt;div class="mb-15 mb-md-20"&gt;</div>
    <div>&lt;label for="formGroupExampleInput" class="form-label fw-medium"&gt;Example label&lt;/label&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="formGroupExampleInput" placeholder="Example input placeholder"&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div&gt;</div>
    <div>&lt;label for="formGroupExampleInput2" class="form-label fw-medium"&gt;Another label&lt;/label&gt;</div>
    <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="formGroupExampleInput2" placeholder="Another input placeholder"&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Form Grid</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#formGridCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="formGridCode">
<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder="First name" aria-label="First name"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder="Last name" aria-label="Last name"&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Gutters</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="row g-3">
          <div class="col">
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#guttersCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="guttersCode">
<div>&lt;div class="row g-3"&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder="First name" aria-label="First name"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder="Last name" aria-label="Last name"&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-25">
        More complex layouts can also be created with the grid system.
      </p>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label fw-medium">Email</label>
            <input
              type="email"
              class="form-control shadow-none fs-md-15 text-black"
              id="inputEmail4"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label fw-medium"
              >Password</label
            >
            <input
              type="password"
              class="form-control shadow-none fs-md-15 text-black"
              id="inputPassword4"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label fw-medium"
              >Address</label
            >
            <input
              type="text"
              class="form-control shadow-none fs-md-15 text-black"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label fw-medium"
              >Address 2</label
            >
            <input
              type="text"
              class="form-control shadow-none fs-md-15 text-black"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label fw-medium">City</label>
            <input
              type="text"
              class="form-control shadow-none fs-md-15 text-black"
              id="inputCity"
            />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label fw-medium">State</label>
            <select
              id="inputState"
              class="form-select shadow-none fs-md-15 text-black"
            >
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input
              type="text"
              class="form-control shadow-none fs-md-15 text-black"
              id="inputZip"
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input shadow-none"
                type="checkbox"
                id="gridCheck"
              />
              <label
                class="form-check-label fw-medium position-relative top-1"
                for="gridCheck"
              >
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#gutters2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="gutters2Code">
<div>&lt;form class="row g-3"&gt;</div>
    <div>&lt;div class="col-md-6"&gt;</div>
        <div>&lt;label for="inputEmail4" class="form-label fw-medium"&gt;Email&lt;/label&gt;</div>
        <div>&lt;input type="email" class="form-control shadow-none fs-md-15 text-black" id="inputEmail4"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-6"&gt;</div>
        <div>&lt;label for="inputPassword4" class="form-label fw-medium"&gt;Password&lt;/label&gt;</div>
        <div>&lt;input type="password" class="form-control shadow-none fs-md-15 text-black" id="inputPassword4"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;label for="inputAddress" class="form-label fw-medium"&gt;Address&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="inputAddress" placeholder="1234 Main St"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;label for="inputAddress2" class="form-label fw-medium"&gt;Address 2&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="inputAddress2" placeholder="Apartment, studio, or floor"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-6"&gt;</div>
        <div>&lt;label for="inputCity" class="form-label fw-medium"&gt;City&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="inputCity"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;label for="inputState" class="form-label fw-medium"&gt;State&lt;/label&gt;</div>
        <div>&lt;select id="inputState" class="form-select shadow-none fs-md-15 text-black"&gt;</div>
            <div>&lt;option selected&gt;Choose...&lt;/option&gt;</div>
            <div>&lt;option&gt;...&lt;/option&gt;</div>
        <div>&lt;/select&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-2"&gt;</div>
        <div>&lt;label for="inputZip" class="form-label"&gt;Zip&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="inputZip"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;div class="form-check"&gt;</div>
            <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="gridCheck"&gt;</div>
            <div>&lt;label class="form-check-label fw-medium position-relative top-1" for="gridCheck"&gt;</div>
                <div>Check me out</div>
            <div>&lt;/label&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;button type="submit" class="btn btn-primary"&gt;Sign in&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Horizontal Form</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form>
          <div class="row mb-15 mb-md-20">
            <label for="inputEmail3" class="col-sm-2 col-form-label fw-medium">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control shadow-none text-black fs-md-15"
                id="inputEmail3"
              />
            </div>
          </div>
          <div class="row mb-15 mb-md-20">
            <label
              for="inputPassword3"
              class="col-sm-2 col-form-label fw-medium"
              >Password</label
            >
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control shadow-none text-black fs-md-15"
                id="inputPassword3"
              />
            </div>
          </div>
          <fieldset class="row mb-15 mb-md-20">
            <legend class="col-form-label col-sm-2 pt-0 fw-medium">
              Radios
            </legend>
            <div class="col-sm-10">
              <div class="form-check mb-15 mb-md-20">
                <input
                  class="form-check-input shadow-none"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label fw-medium" for="gridRadios1">
                  First radio
                </label>
              </div>
              <div class="form-check mb-15 mb-md-20">
                <input
                  class="form-check-input shadow-none"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label class="form-check-label fw-medium" for="gridRadios2">
                  Second radio
                </label>
              </div>
              <div class="form-check disabled">
                <input
                  class="form-check-input shadow-none"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  value="option3"
                  disabled
                />
                <label class="form-check-label fw-medium" for="gridRadios3">
                  Third disabled radio
                </label>
              </div>
            </div>
          </fieldset>
          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input
                  class="form-check-input shadow-none"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label class="form-check-label fw-medium" for="gridCheck1">
                  Example checkbox
                </label>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#horizontalFormCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="horizontalFormCode">
<div>&lt;form&gt;</div>
    <div>&lt;div class="row mb-15 mb-md-20"&gt;</div>
        <div>&lt;label for="inputEmail3" class="col-sm-2 col-form-label fw-medium"&gt;Email&lt;/label&gt;</div>
        <div>&lt;div class="col-sm-10"&gt;</div>
            <div>&lt;input type="email" class="form-control shadow-none text-black fs-md-15" id="inputEmail3"&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="row mb-15 mb-md-20"&gt;</div>
        <div>&lt;label for="inputPassword3" class="col-sm-2 col-form-label fw-medium"&gt;Password&lt;/label&gt;</div>
        <div>&lt;div class="col-sm-10"&gt;</div>
            <div>&lt;input type="password" class="form-control shadow-none text-black fs-md-15" id="inputPassword3"&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;fieldset class="row mb-15 mb-md-20"&gt;</div>
        <div>&lt;legend class="col-form-label col-sm-2 pt-0 fw-medium"&gt;Radios&lt;/legend&gt;</div>
        <div>&lt;div class="col-sm-10"&gt;</div>
            <div>&lt;div class="form-check mb-15 mb-md-20"&gt;</div>
                <div>&lt;input class="form-check-input shadow-none" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked&gt;</div>
                    <div>&lt;label class="form-check-label fw-medium" for="gridRadios1"&gt;</div>
                    <div>First radio</div>
                <div>&lt;/label&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div class="form-check mb-15 mb-md-20"&gt;</div>
                <div>&lt;input class="form-check-input shadow-none" type="radio" name="gridRadios" id="gridRadios2" value="option2"&gt;</div>
                <div>&lt;label class="form-check-label fw-medium" for="gridRadios2"&gt;</div>
                    <div>Second radio</div>
                <div>&lt;/label&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div class="form-check disabled"&gt;</div>
                <div>&lt;input class="form-check-input shadow-none" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled&gt;</div>
                <div>&lt;label class="form-check-label fw-medium" for="gridRadios3"&gt;</div>
                    <div>Third disabled radio</div>
                <div>&lt;/label&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;/div&gt;</div>
    <div>&lt;/fieldset&gt;</div>
    <div>&lt;div class="row mb-3"&gt;</div>
        <div>&lt;div class="col-sm-10 offset-sm-2"&gt;</div>
            <div>&lt;div class="form-check"&gt;</div>
                <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="gridCheck1"&gt;</div>
                <div>&lt;label class="form-check-label fw-medium" for="gridCheck1"&gt;</div>
                    <div>Example checkbox</div>
                <div>&lt;/label&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;button type="submit" class="btn btn-primary"&gt;Sign in&lt;/button&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">
        Horizontal Form Label Sizing
      </h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="row mb-15 mb-md-20">
          <label
            for="colFormLabelSm"
            class="col-sm-2 col-form-label fw-medium col-form-label-sm"
            >Email</label
          >
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control shadow-none fs-14 text-black form-control-sm"
              id="colFormLabelSm"
              placeholder="col-form-label-sm"
            />
          </div>
        </div>
        <div class="row mb-15 mb-md-20">
          <label for="colFormLabel" class="col-sm-2 col-form-label fw-medium"
            >Email</label
          >
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control shadow-none fs-15 text-black"
              id="colFormLabel"
              placeholder="col-form-label"
            />
          </div>
        </div>
        <div class="row">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label fw-medium col-form-label-lg"
            >Email</label
          >
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control shadow-none fs-16 text-black form-control-lg"
              id="colFormLabelLg"
              placeholder="col-form-label-lg"
            />
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#horizontalSizingFormCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="horizontalSizingFormCode">
<div>&lt;div class="row mb-15 mb-md-20"&gt;</div>
    <div>&lt;label for="colFormLabelSm" class="col-sm-2 col-form-label fw-medium col-form-label-sm"&gt;Email&lt;/label&gt;</div>
    <div>&lt;div class="col-sm-10"&gt;</div>
        <div>&lt;input type="email" class="form-control shadow-none fs-md-15 text-black form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="row mb-15 mb-md-20"&gt;</div>
    <div>&lt;label for="colFormLabel" class="col-sm-2 col-form-label fw-medium"&gt;Email&lt;/label&gt;</div>
    <div>&lt;div class="col-sm-10"&gt;</div>
        <div>&lt;input type="email" class="form-control shadow-none fs-md-15 text-black" id="colFormLabel" placeholder="col-form-label"&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
<div>&lt;div class="row"&gt;</div>
    <div>&lt;label for="colFormLabelLg" class="col-sm-2 col-form-label fw-medium col-form-label-lg"&gt;Email&lt;/label&gt;</div>
    <div>&lt;div class="col-sm-10"&gt;</div>
    <div>&lt;input type="email" class="form-control shadow-none fs-md-15 text-black form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Column Sizing</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="row g-3">
          <div class="col-sm-7">
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              placeholder="City"
              aria-label="City"
            />
          </div>
          <div class="col-sm">
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              placeholder="State"
              aria-label="State"
            />
          </div>
          <div class="col-sm">
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              placeholder="Zip"
              aria-label="Zip"
            />
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#columnSizingCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="columnSizingCode">
<div>&lt;div class="row g-3"&gt;</div>
    <div>&lt;div class="col-sm-7"&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder="City" aria-label="City"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-sm"&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder="State" aria-label="State"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-sm"&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" placeholder="Zip" aria-label="Zip"&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Auto-sizing</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
            <label class="visually-hidden fw-medium" for="autoSizingInput">
              Name
            </label>
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              id="autoSizingInput"
              placeholder="Jane Doe"
            />
          </div>
          <div class="col-auto">
            <label class="visually-hidden fw-medium" for="autoSizingInputGroup"
              >Username</label
            >
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control shadow-none text-black fs-md-15"
                id="autoSizingInputGroup"
                placeholder="Username"
              />
            </div>
          </div>
          <div class="col-auto">
            <label class="visually-hidden fw-medium" for="autoSizingSelect"
              >Preference</label
            >
            <select
              class="form-select fs-md-15 text-black shadow-none"
              id="autoSizingSelect"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-auto">
            <div class="form-check">
              <input
                class="form-check-input shadow-none"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label
                class="form-check-label fw-medium position-relative top-1"
                for="autoSizingCheck"
              >
                Remember me
              </label>
            </div>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#autoSizingCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="autoSizingCode">
<div>&lt;form class="row gy-2 gx-3 align-items-center"&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;label class="visually-hidden fw-medium" for="autoSizingInput"&gt;Name&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" id="autoSizingInput" placeholder="Jane Doe"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;label class="visually-hidden fw-medium" for="autoSizingInputGroup"&gt;Username&lt;/label&gt;</div>
        <div>&lt;div class="input-group"&gt;</div>
            <div>&lt;div class="input-group-text"&gt;@&lt;/div&gt;</div>
            <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" id="autoSizingInputGroup" placeholder="Username"&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;label class="visually-hidden fw-medium" for="autoSizingSelect"&gt;Preference&lt;/label&gt;</div>
        <div>&lt;select class="form-select fs-md-15 text-black shadow-none" id="autoSizingSelect"&gt;</div>
            <div>&lt;option selected&gt;Choose...&lt;/option&gt;</div>
            <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
            <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
            <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
        <div>&lt;/select&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;div class="form-check"&gt;</div>
            <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="autoSizingCheck"&gt;</div>
            <div>&lt;label class="form-check-label fw-medium position-relative top-1" for="autoSizingCheck"&gt;</div>
                <div>Remember me</div>
            <div>&lt;/label&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;button type="submit" class="btn btn-primary"&gt;Submit&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-25">
        You can then remix that once again with size-specific column classes.
      </p>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="row gx-3 gy-2 align-items-center">
          <div class="col-sm-3">
            <label class="visually-hidden fw-medium" for="specificSizeInputName"
              >Name</label
            >
            <input
              type="text"
              class="form-control fs-md-15 text-black shadow-none"
              id="specificSizeInputName"
              placeholder="Jane Doe"
            />
          </div>
          <div class="col-sm-3">
            <label
              class="visually-hidden fw-medium"
              for="specificSizeInputGroupUsername"
              >Username</label
            >
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control fs-md-15 text-black shadow-none"
                id="specificSizeInputGroupUsername"
                placeholder="Username"
              />
            </div>
          </div>
          <div class="col-sm-3">
            <label class="visually-hidden fw-medium" for="specificSizeSelect"
              >Preference</label
            >
            <select
              class="form-select fs-md-15 text-black shadow-none"
              id="specificSizeSelect"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-auto">
            <div class="form-check">
              <input
                class="form-check-input shadow-none"
                type="checkbox"
                id="autoSizingCheck2"
              />
              <label
                class="form-check-label fw-medium position-relative top-1"
                for="autoSizingCheck2"
              >
                Remember me
              </label>
            </div>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#autoSizing2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="autoSizing2Code">
<div>&lt;form class="row gx-3 gy-2 align-items-center"&gt;</div>
    <div>&lt;div class="col-sm-3"&gt;</div>
        <div>&lt;label class="visually-hidden fw-medium" for="specificSizeInputName"&gt;Name&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none" id="specificSizeInputName" placeholder="Jane Doe"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-sm-3"&gt;</div>
        <div>&lt;label class="visually-hidden fw-medium" for="specificSizeInputGroupUsername"&gt;Username&lt;/label&gt;</div>
        <div>&lt;div class="input-group"&gt;</div>
            <div>&lt;div class="input-group-text"&gt;@&lt;/div&gt;</div>
            <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none" id="specificSizeInputGroupUsername" placeholder="Username"&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-sm-3"&gt;</div>
        <div>&lt;label class="visually-hidden fw-medium" for="specificSizeSelect"&gt;Preference&lt;/label&gt;</div>
        <div>&lt;select class="form-select fs-md-15 text-black shadow-none" id="specificSizeSelect"&gt;</div>
            <div>&lt;option selected&gt;Choose...&lt;/option&gt;</div>
            <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
            <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
            <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
        <div>&lt;/select&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
        <div>&lt;div class="form-check"&gt;</div>
        <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="autoSizingCheck2"&gt;</div>
            <div>&lt;label class="form-check-label fw-medium position-relative top-1" for="autoSizingCheck2"&gt;</div>
                <div>Remember me</div>
            <div>&lt;/label&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-auto"&gt;</div>
    <div>&lt;button type="submit" class="btn btn-primary"&gt;Submit&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Inline Forms</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="row row-cols-lg-auto g-3 align-items-center">
          <div class="col-12">
            <label
              class="visually-hidden fw-medium"
              for="inlineFormInputGroupUsername"
            >
              Username
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control shadow-none fs-md-15 text-black"
                id="inlineFormInputGroupUsername"
                placeholder="Username"
              />
            </div>
          </div>
          <div class="col-12">
            <label class="visually-hidden fw-medium" for="inlineFormSelectPref"
              >Preference</label
            >
            <select
              class="form-select shadow-none fs-md-15 text-black"
              id="inlineFormSelectPref"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input shadow-none"
                type="checkbox"
                id="inlineFormCheck"
              />
              <label
                class="form-check-label fw-medium position-relative top-1"
                for="inlineFormCheck"
              >
                Remember me
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#inlineFormsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="inlineFormsCode">
<div>&lt;form class="row row-cols-lg-auto g-3 align-items-center"&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;label class="visually-hidden fw-medium" for="inlineFormInputGroupUsername"&gt;Username&lt;/label&gt;</div>
        <div>&lt;div class="input-group"&gt;</div>
            <div>&lt;div class="input-group-text"&gt;@&lt;/div&gt;</div>
            <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="inlineFormInputGroupUsername" placeholder="Username"&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;label class="visually-hidden fw-medium" for="inlineFormSelectPref"&gt;Preference&lt;/label&gt;</div>
        <div>&lt;select class="form-select shadow-none fs-md-15 text-black" id="inlineFormSelectPref"&gt;</div>
            <div>&lt;option selected&gt;Choose...&lt;/option&gt;</div>
            <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
            <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
            <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
        <div>&lt;/select&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;div class="form-check"&gt;</div>
            <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="inlineFormCheck"&gt;</div>
            <div>&lt;label class="form-check-label fw-medium position-relative top-1" for="inlineFormCheck"&gt;</div>
                <div>Remember me</div>
            <div>&lt;/label&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;button type="submit" class="btn btn-primary"&gt;Submit&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormLayout",
};
</script>