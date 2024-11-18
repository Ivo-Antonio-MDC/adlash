<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Custom Styles</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label fw-medium"
              >First name</label
            >
            <input
              type="text"
              class="form-control shadow-none fs-md-15 text-black"
              id="validationCustom01"
              value="Mark"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label fw-medium"
              >Last name</label
            >
            <input
              type="text"
              class="form-control shadow-none fs-md-15 text-black"
              id="validationCustom02"
              value="Otto"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label fw-medium"
              >Username</label
            >
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">@</span>
              <input
                type="text"
                class="form-control shadow-none fs-md-15 text-black"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom03" class="form-label fw-medium"
              >City</label
            >
            <input
              type="text"
              class="form-control shadow-none fs-md-15 text-black"
              id="validationCustom03"
              required
            />
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label fw-medium"
              >State</label
            >
            <select
              class="form-select shadow-none fs-md-15 text-black"
              id="validationCustom04"
              required
            >
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label fw-medium"
              >Zip</label
            >
            <input
              type="text"
              class="form-control shadow-none fs-md-15 text-black"
              id="validationCustom05"
              required
            />
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label
                class="form-check-label fw-medium position-relative top-1"
                for="invalidCheck"
              >
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#customStylesCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="customStylesCode">
<div>&lt;form class="row g-3 needs-validation" novalidate&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;label for="validationCustom01" class="form-label fw-medium"&gt;First name&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="validationCustom01" value="Mark" required&gt;</div>
        <div>&lt;div class="valid-feedback"&gt;</div>
            <div>Looks good!</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;label for="validationCustom02" class="form-label fw-medium"&gt;Last name&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="validationCustom02" value="Otto" required&gt;</div>
        <div>&lt;div class="valid-feedback"&gt;</div>
            <div>Looks good!</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;label for="validationCustomUsername" class="form-label fw-medium"&gt;Username&lt;/label&gt;</div>
        <div>&lt;div class="input-group has-validation"&gt;</div>
            <div>&lt;span class="input-group-text" id="inputGroupPrepend"&gt;@&lt;/span&gt;</div>
            <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required&gt;</div>
            <div>&lt;div class="invalid-feedback"&gt;</div>
                <div>Please choose a username.</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-6"&gt;</div>
        <div>&lt;label for="validationCustom03" class="form-label fw-medium"&gt;City&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="validationCustom03" required&gt;</div>
        <div>&lt;div class="invalid-feedback"&gt;</div>
            <div>Please provide a valid city.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-3"&gt;</div>
        <div>&lt;label for="validationCustom04" class="form-label fw-medium"&gt;State&lt;/label&gt;</div>
        <div>&lt;select class="form-select shadow-none fs-md-15 text-black" id="validationCustom04" required&gt;</div>
            <div>&lt;option selected disabled value=""&gt;Choose...&lt;/option&gt;</div>
            <div>&lt;option&gt;...&lt;/option&gt;</div>
        <div>&lt;/select&gt;</div>
        <div>&lt;div class="invalid-feedback"&gt;</div>
            <div>Please select a valid state.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-3"&gt;</div>
        <div>&lt;label for="validationCustom05" class="form-label fw-medium"&gt;Zip&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="validationCustom05" required&gt;</div>
        <div>&lt;div class="invalid-feedback"&gt;</div>
            <div>Please provide a valid zip.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;div class="form-check"&gt;</div>
            <div>&lt;input class="form-check-input" type="checkbox" value="" id="invalidCheck" required&gt;</div>
            <div>&lt;label class="form-check-label fw-medium position-relative top-1" for="invalidCheck"&gt;</div>
                <div>Agree to terms and conditions</div>
            <div>&lt;/label&gt;</div>
            <div>&lt;div class="invalid-feedback"&gt;</div>
                <div>You must agree before submitting.</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;button class="btn btn-primary" type="submit"&gt;Submit form&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Browser Defaults</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="row g-3">
          <div class="col-md-4">
            <label for="validationDefault01" class="form-label fw-medium"
              >First name</label
            >
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              id="validationDefault01"
              value="Mark"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="validationDefault02" class="form-label fw-medium"
              >Last name</label
            >
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              id="validationDefault02"
              value="Otto"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="validationDefaultUsername" class="form-label fw-medium"
              >Username</label
            >
            <div class="input-group">
              <span class="input-group-text" id="inputGroupPrepend2">@</span>
              <input
                type="text"
                class="form-control shadow-none text-black fs-md-15"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationDefault03" class="form-label fw-medium"
              >City</label
            >
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              id="validationDefault03"
              required
            />
          </div>
          <div class="col-md-3">
            <label for="validationDefault04" class="form-label fw-medium"
              >State</label
            >
            <select
              class="form-select shadow-none text-black fs-md-15"
              id="validationDefault04"
              required
            >
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="validationDefault05" class="form-label fw-medium"
              >Zip</label
            >
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15"
              id="validationDefault05"
              required
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input shadow-none"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label
                class="form-check-label fw-medium position-relative top-1"
                for="invalidCheck2"
              >
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#browserDefaultsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="browserDefaultsCode">
<div>&lt;form class="row g-3"&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;label for="validationDefault01" class="form-label fw-medium"&gt;First name&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" id="validationDefault01" value="Mark" required&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;label for="validationDefault02" class="form-label fw-medium"&gt;Last name&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" id="validationDefault02" value="Otto" required&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;label for="validationDefaultUsername" class="form-label fw-medium"&gt;Username&lt;/label&gt;</div>
        <div>&lt;div class="input-group"&gt;</div>
            <div>&lt;span class="input-group-text" id="inputGroupPrepend2"&gt;@&lt;/span&gt;</div>
            <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-6"&gt;</div>
        <div>&lt;label for="validationDefault03" class="form-label fw-medium"&gt;City&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" id="validationDefault03" required&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-3"&gt;</div>
        <div>&lt;label for="validationDefault04" class="form-label fw-medium"&gt;State&lt;/label&gt;</div>
        <div>&lt;select class="form-select shadow-none text-black fs-md-15" id="validationDefault04" required&gt;</div>
            <div>&lt;option selected disabled value=""&gt;Choose...&lt;/option&gt;</div>
            <div>&lt;option&gt;...&lt;/option&gt;</div>
        <div>&lt;/select&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-3"&gt;</div>
        <div>&lt;label for="validationDefault05" class="form-label fw-medium"&gt;Zip&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15" id="validationDefault05" required&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;div class="form-check"&gt;</div>
            <div>&lt;input class="form-check-input shadow-none" type="checkbox" value="" id="invalidCheck2" required&gt;</div>
            <div>&lt;label class="form-check-label fw-medium position-relative top-1" for="invalidCheck2"&gt;</div>
                <div>Agree to terms and conditions</div>
            <div>&lt;/label&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;button class="btn btn-primary" type="submit"&gt;Submit form&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Server-side</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="row g-3">
          <div class="col-md-4">
            <label for="validationServer01" class="form-label fw-medium"
              >First name</label
            >
            <input
              type="text"
              class="form-control fs-md-15 text-black shadow-none is-valid"
              id="validationServer01"
              value="Mark"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationServer02" class="form-label fw-medium"
              >Last name</label
            >
            <input
              type="text"
              class="form-control fs-md-15 text-black shadow-none is-valid"
              id="validationServer02"
              value="Otto"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationServerUsername" class="form-label fw-medium"
              >Username</label
            >
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend3">@</span>
              <input
                type="text"
                class="form-control fs-md-15 text-black shadow-none is-invalid"
                id="validationServerUsername"
                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                required
              />
              <div
                id="validationServerUsernameFeedback"
                class="invalid-feedback"
              >
                Please choose a username.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationServer03" class="form-label fw-medium"
              >City</label
            >
            <input
              type="text"
              class="form-control fs-md-15 text-black shadow-none is-invalid"
              id="validationServer03"
              aria-describedby="validationServer03Feedback"
              required
            />
            <div id="validationServer03Feedback" class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationServer04" class="form-label fw-medium"
              >State</label
            >
            <select
              class="form-select fs-md-15 shadow-none text-black is-invalid"
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              required
            >
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>
            <div id="validationServer04Feedback" class="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationServer05" class="form-label fw-medium"
              >Zip</label
            >
            <input
              type="text"
              class="form-control fs-md-15 text-black shadow-none is-invalid"
              id="validationServer05"
              aria-describedby="validationServer05Feedback"
              required
            />
            <div id="validationServer05Feedback" class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input is-invalid"
                type="checkbox"
                value=""
                id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback"
                required
              />
              <label class="form-check-label fw-medium" for="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div id="invalidCheck3Feedback" class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#serverSideCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="serverSideCode">
<div>&lt;form class="row g-3"&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;label for="validationServer01" class="form-label fw-medium"&gt;First name&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none is-valid" id="validationServer01" value="Mark" required&gt;</div>
        <div>&lt;div class="valid-feedback"&gt;</div>
            <div>Looks good!</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;label for="validationServer02" class="form-label fw-medium"&gt;Last name&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none is-valid" id="validationServer02" value="Otto" required&gt;</div>
        <div>&lt;div class="valid-feedback"&gt;</div>
            <div>Looks good!</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-4"&gt;</div>
        <div>&lt;label for="validationServerUsername" class="form-label fw-medium"&gt;Username&lt;/label&gt;</div>
        <div>&lt;div class="input-group has-validation"&gt;</div>
            <div>&lt;span class="input-group-text" id="inputGroupPrepend3"&gt;@&lt;/span&gt;</div>
            <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required&gt;</div>
            <div>&lt;div id="validationServerUsernameFeedback" class="invalid-feedback"&gt;</div>
                <div>Please choose a username.</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-6"&gt;</div>
        <div>&lt;label for="validationServer03" class="form-label fw-medium"&gt;City&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required&gt;</div>
        <div>&lt;div id="validationServer03Feedback" class="invalid-feedback"&gt;</div>
            <div>Please provide a valid city.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-3"&gt;</div>
        <div>&lt;label for="validationServer04" class="form-label fw-medium"&gt;State&lt;/label&gt;</div>
        <div>&lt;select class="form-select fs-md-15 shadow-none text-black is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required&gt;</div>
            <div>&lt;option selected disabled value=""&gt;Choose...&lt;/option&gt;</div>
            <div>&lt;option&gt;...&lt;/option&gt;</div>
        <div>&lt;/select&gt;</div>
        <div>&lt;div id="validationServer04Feedback" class="invalid-feedback"&gt;</div>
            <div>Please select a valid state.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-3"&gt;</div>
        <div>&lt;label for="validationServer05" class="form-label fw-medium"&gt;Zip&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required&gt;</div>
        <div>&lt;div id="validationServer05Feedback" class="invalid-feedback"&gt;</div>
            <div>Please provide a valid zip.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;div class="form-check"&gt;</div>
            <div>&lt;input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required&gt;</div>
            <div>&lt;label class="form-check-label fw-medium" for="invalidCheck3"&gt;</div>
                <div>Agree to terms and conditions</div>
            <div>&lt;/label&gt;</div>
            <div>&lt;div id="invalidCheck3Feedback" class="invalid-feedback"&gt;</div>
                <div>You must agree before submitting.</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;button class="btn btn-primary" type="submit"&gt;Submit form&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Supported Elements</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="was-validated">
          <div class="mb-15 mb-md-20">
            <label for="validationTextarea" class="form-label fw-medium"
              >Textarea</label
            >
            <textarea
              class="form-control shadow-none fs-md-15 text-black"
              id="validationTextarea"
              placeholder="Required example textarea"
              required
            ></textarea>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>
          <div class="form-check mb-15 mb-md-20">
            <input
              type="checkbox"
              class="form-check-input shadow-none"
              id="validationFormCheck1"
              required
            />
            <label class="form-check-label fw-medium" for="validationFormCheck1"
              >Check this checkbox</label
            >
            <div class="invalid-feedback">Example invalid feedback text</div>
          </div>
          <div class="form-check mb-15 mb-md-20">
            <input
              type="radio"
              class="form-check-input shadow-none"
              id="validationFormCheck2"
              name="radio-stacked"
              required
            />
            <label class="form-check-label fw-medium" for="validationFormCheck2"
              >Toggle this radio</label
            >
          </div>
          <div class="form-check mb-15 mb-md-20">
            <input
              type="radio"
              class="form-check-input shadow-none"
              id="validationFormCheck3"
              name="radio-stacked"
              required
            />
            <label class="form-check-label fw-medium" for="validationFormCheck3"
              >Or toggle this other radio</label
            >
            <div class="invalid-feedback">
              More example invalid feedback text
            </div>
          </div>
          <div class="mb-15 mb-md-20">
            <select
              class="form-select shadow-none fs-md-15 text-black"
              required
              aria-label="select example"
            >
              <option value="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div class="invalid-feedback">Example invalid select feedback</div>
          </div>
          <div class="mb-15 mb-md-20">
            <input
              type="file"
              class="form-control shadow-none fs-md-15 text-black"
              aria-label="file example"
              required
            />
            <div class="invalid-feedback">
              Example invalid form file feedback
            </div>
          </div>
          <div>
            <button class="btn btn-primary" type="submit" disabled>
              Submit form
            </button>
          </div>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#supportedElementsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="supportedElementsCode">
<div>&lt;form class="was-validated"&gt;</div>
    <div>&lt;div class="mb-15 mb-md-20"&gt;</div>
        <div>&lt;label for="validationTextarea" class="form-label fw-medium"&gt;Textarea&lt;/label&gt;</div>
        <div>&lt;textarea class="form-control shadow-none fs-md-15 text-black" id="validationTextarea" placeholder="Required example textarea" required&gt;&lt;/textarea&gt;</div>
        <div>&lt;div class="invalid-feedback"&gt;</div>
            <div>Please enter a message in the textarea.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="form-check mb-15 mb-md-20"&gt;</div>
        <div>&lt;input type="checkbox" class="form-check-input shadow-none" id="validationFormCheck1" required&gt;</div>
        <div>&lt;label class="form-check-label fw-medium" for="validationFormCheck1"&gt;Check this checkbox&lt;/label&gt;</div>
        <div>&lt;div class="invalid-feedback"&gt;Example invalid feedback text&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="form-check mb-15 mb-md-20"&gt;</div>
        <div>&lt;input type="radio" class="form-check-input shadow-none" id="validationFormCheck2" name="radio-stacked" required&gt;</div>
        <div>&lt;label class="form-check-label fw-medium" for="validationFormCheck2"&gt;Toggle this radio&lt;/label&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="form-check mb-15 mb-md-20"&gt;</div>
        <div>&lt;input type="radio" class="form-check-input shadow-none" id="validationFormCheck3" name="radio-stacked" required&gt;</div>
        <div>&lt;label class="form-check-label fw-medium" for="validationFormCheck3"&gt;Or toggle this other radio&lt;/label&gt;</div>
        <div>&lt;div class="invalid-feedback"&gt;More example invalid feedback text&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="mb-15 mb-md-20"&gt;</div>
        <div>&lt;select class="form-select shadow-none fs-md-15 text-black" required aria-label="select example"&gt;</div>
            <div>&lt;option value=""&gt;Open this select menu&lt;/option&gt;</div>
            <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
            <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
            <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
        <div>&lt;/select&gt;</div>
        <div>&lt;div class="invalid-feedback"&gt;Example invalid select feedback&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="mb-15 mb-md-20"&gt;</div>
        <div>&lt;input type="file" class="form-control shadow-none fs-md-15 text-black" aria-label="file example" required&gt;</div>
        <div>&lt;div class="invalid-feedback"&gt;Example invalid form file feedback&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div&gt;</div>
        <div>&lt;button class="btn btn-primary" type="submit" disabled&gt;Submit form&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Tooltips</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label fw-medium"
              >First name</label
            >
            <input
              type="text"
              class="form-control fs-md-15 text-black shadow-none"
              id="validationTooltip01"
              value="Mark"
              required
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip02" class="form-label fw-medium"
              >Last name</label
            >
            <input
              type="text"
              class="form-control fs-md-15 text-black shadow-none"
              id="validationTooltip02"
              value="Otto"
              required
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltipUsername" class="form-label fw-medium"
              >Username</label
            >
            <div class="input-group has-validation">
              <span
                class="input-group-text"
                id="validationTooltipUsernamePrepend"
                >@</span
              >
              <input
                type="text"
                class="form-control fs-md-15 text-black shadow-none"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div class="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label fw-medium"
              >City</label
            >
            <input
              type="text"
              class="form-control fs-md-15 text-black shadow-none"
              id="validationTooltip03"
              required
            />
            <div class="invalid-tooltip">Please provide a valid city.</div>
          </div>
          <div class="col-md-3 position-relative">
            <label for="validationTooltip04" class="form-label fw-medium"
              >State</label
            >
            <select
              class="form-select fs-md-15 text-black shadow-none"
              id="validationTooltip04"
              required
            >
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>
            <div class="invalid-tooltip">Please select a valid state.</div>
          </div>
          <div class="col-md-3 position-relative">
            <label for="validationTooltip05" class="form-label fw-medium"
              >Zip</label
            >
            <input
              type="text"
              class="form-control fs-md-15 text-black shadow-none"
              id="validationTooltip05"
              required
            />
            <div class="invalid-tooltip">Please provide a valid zip.</div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#tooltipsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="tooltipsCode">
<div>&lt;form class="row g-3 needs-validation" novalidate&gt;</div>
    <div>&lt;div class="col-md-4 position-relative"&gt;</div>
        <div>&lt;label for="validationTooltip01" class="form-label fw-medium"&gt;First name&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none" id="validationTooltip01" value="Mark" required&gt;</div>
        <div>&lt;div class="valid-tooltip"&gt;</div>
            <div>Looks good!</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-4 position-relative"&gt;</div>
        <div>&lt;label for="validationTooltip02" class="form-label fw-medium"&gt;Last name&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none" id="validationTooltip02" value="Otto" required&gt;</div>
        <div>&lt;div class="valid-tooltip"&gt;</div>
            <div>Looks good!</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-4 position-relative"&gt;</div>
        <div>&lt;label for="validationTooltipUsername" class="form-label fw-medium"&gt;Username&lt;/label&gt;</div>
        <div>&lt;div class="input-group has-validation"&gt;</div>
            <div>&lt;span class="input-group-text" id="validationTooltipUsernamePrepend"&gt;@&lt;/span&gt;</div>
            <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required&gt;</div>
            <div>&lt;div class="invalid-tooltip"&gt;</div>
                <div>Please choose a unique and valid username.</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-6 position-relative"&gt;</div>
        <div>&lt;label for="validationTooltip03" class="form-label fw-medium"&gt;City&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none" id="validationTooltip03" required&gt;</div>
        <div>&lt;div class="invalid-tooltip"&gt;</div>
            <div>Please provide a valid city.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-3 position-relative"&gt;</div>
        <div>&lt;label for="validationTooltip04" class="form-label fw-medium"&gt;State&lt;/label&gt;</div>
        <div>&lt;select class="form-select fs-md-15 text-black shadow-none" id="validationTooltip04" required&gt;</div>
            <div>&lt;option selected disabled value=""&gt;Choose...&lt;/option&gt;</div>
            <div>&lt;option&gt;...&lt;/option&gt;</div>
        <div>&lt;/select&gt;</div>
        <div>&lt;div class="invalid-tooltip"&gt;</div>
            <div>Please select a valid state.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md-3 position-relative"&gt;</div>
        <div>&lt;label for="validationTooltip05" class="form-label fw-medium"&gt;Zip&lt;/label&gt;</div>
        <div>&lt;input type="text" class="form-control fs-md-15 text-black shadow-none" id="validationTooltip05" required&gt;</div>
        <div>&lt;div class="invalid-tooltip"&gt;</div>
            <div>Please provide a valid zip.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-12"&gt;</div>
        <div>&lt;button class="btn btn-primary" type="submit"&gt;Submit form&lt;/button&gt;</div>
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
  name: "FormValidation",
};
</script>