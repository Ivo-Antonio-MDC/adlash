<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Checks</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-check mb-15">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            class="form-check-label fw-medium position-relative top-1"
            for="flexCheckDefault"
          >
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label
            class="form-check-label fw-medium position-relative top-1"
            for="flexCheckChecked"
          >
            Checked checkbox
          </label>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicChecksCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicChecksCode">
<div>&lt;div class="form-check"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault"&gt;</div>
    <div>&lt;label class="form-check-label fw-medium position-relative top-1" for="flexCheckDefault"&gt;</div>
        <div>Default checkbox</div>
    <div>&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" value="" id="flexCheckChecked" checked&gt;</div>
    <div>&lt;label class="form-check-label fw-medium position-relative top-1" for="flexCheckChecked"&gt;</div>
        <div>Checked checkbox</div>
    <div>&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Disabled Checks</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-check mb-15">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            value=""
            id="flexCheckDisabled"
            disabled
          />
          <label
            class="form-check-label fw-medium position-relative top-1"
            for="flexCheckDisabled"
          >
            Disabled checkbox
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            value=""
            id="flexCheckCheckedDisabled"
            checked
            disabled
          />
          <label
            class="form-check-label fw-medium position-relative top-1"
            for="flexCheckCheckedDisabled"
          >
            Disabled checked checkbox
          </label>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#disabledChecksCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledChecksCode">
<div>&lt;div class="form-check"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDisabled" disabled&gt;</div>
    <div>&lt;label class="form-check-label fw-medium position-relative top-1" for="flexCheckDisabled"&gt;</div>
        <div>Disabled checkbox</div>
    <div>&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled&gt;</div>
    <div>&lt;label class="form-check-label fw-medium position-relative top-1" for="flexCheckCheckedDisabled"&gt;</div>
        <div>Disabled checked checkbox</div>
    <div>&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Radios</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-check mb-15">
          <input
            class="form-check-input shadow-none"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label fw-medium" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input shadow-none"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label fw-medium" for="flexRadioDefault2">
            Default checked radio
          </label>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicRadiosCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicRadiosCode">
<div>&lt;div class="form-check"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1"&gt;</div>
        <div>&lt;label class="form-check-label fw-medium" for="flexRadioDefault1"&gt;</div>
        <div>Default radio</div>
    <div>&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked&gt;</div>
        <div>&lt;label class="form-check-label fw-medium" for="flexRadioDefault2"&gt;</div>
        <div>Default checked radio</div>
    <div>&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Disabled Radios</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-check mb-15">
          <input
            class="form-check-input shadow-none"
            type="radio"
            name="flexRadioDisabled"
            id="flexRadioDisabled"
            disabled
          />
          <label class="form-check-label fw-medium" for="flexRadioDisabled">
            Disabled radio
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input shadow-none"
            type="radio"
            name="flexRadioDisabled"
            id="flexRadioCheckedDisabled"
            checked
            disabled
          />
          <label
            class="form-check-label fw-medium"
            for="flexRadioCheckedDisabled"
          >
            Disabled checked radio
          </label>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#disabledRadiosCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledRadiosCode">
<div>&lt;div class="form-check"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="flexRadioDisabled"&gt;</div>
        <div>Disabled radio</div>
    <div>&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="flexRadioCheckedDisabled"&gt;</div>
        <div>Disabled checked radio</div>
    <div>&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Switches</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-check form-switch mb-15">
          <input
            class="form-check-input shadow-none me-8"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label fw-medium" for="flexSwitchCheckDefault"
            >Default switch checkbox input</label
          >
        </div>
        <div class="form-check form-switch mb-15">
          <input
            class="form-check-input shadow-none me-8"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
          />
          <label class="form-check-label fw-medium" for="flexSwitchCheckChecked"
            >Checked switch checkbox input</label
          >
        </div>
        <div class="form-check form-switch mb-15">
          <input
            class="form-check-input shadow-none me-8"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDisabled"
            disabled
          />
          <label
            class="form-check-label fw-medium"
            for="flexSwitchCheckDisabled"
            >Disabled switch checkbox input</label
          >
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input shadow-none me-8"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckCheckedDisabled"
            checked
            disabled
          />
          <label
            class="form-check-label fw-medium"
            for="flexSwitchCheckCheckedDisabled"
            >Disabled checked switch checkbox input</label
          >
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#switchesCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="switchesCode">
<div>&lt;div class="form-check form-switch"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none me-8" type="checkbox" role="switch" id="flexSwitchCheckDefault"&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="flexSwitchCheckDefault"&gt;Default switch checkbox input&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check form-switch"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none me-8" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="flexSwitchCheckChecked"&gt;Checked switch checkbox input&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check form-switch"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none me-8" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="flexSwitchCheckDisabled"&gt;Disabled switch checkbox input&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check form-switch"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none me-8" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="flexSwitchCheckCheckedDisabled"&gt;Disabled checked switch checkbox input&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Inline</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label class="form-check-label fw-medium" for="inlineCheckbox1"
            >1</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label fw-medium" for="inlineCheckbox2"
            >2</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
            disabled
          />
          <label class="form-check-label fw-medium" for="inlineCheckbox3"
            >3 (disabled)</label
          >
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#inlineChecksCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="inlineChecksCode">
<div>&lt;div class="form-check form-check-inline"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="inlineCheckbox1" value="option1"&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="inlineCheckbox1"&gt;1&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check form-check-inline"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="inlineCheckbox2" value="option2"&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="inlineCheckbox2"&gt;2&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check form-check-inline"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="inlineCheckbox3" value="option3" disabled&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="inlineCheckbox3"&gt;3 (disabled)&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10 mt-25">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input shadow-none"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label fw-medium" for="inlineRadio1">1</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input shadow-none"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label fw-medium" for="inlineRadio2">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input shadow-none"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
            disabled
          />
          <label class="form-check-label fw-medium" for="inlineRadio3"
            >3 (disabled)</label
          >
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#inlineRadiosCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="inlineRadiosCode">
<div>&lt;div class="form-check form-check-inline"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="inlineRadio1"&gt;1&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check form-check-inline"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="inlineRadio2"&gt;2&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check form-check-inline"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled&gt;</div>
    <div>&lt;label class="form-check-label fw-medium" for="inlineRadio3"&gt;3 (disabled)&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Reverse</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-check form-check-reverse mb-15">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            value=""
            id="reverseCheck1"
          />
          <label class="form-check-label fw-medium me-8" for="reverseCheck1">
            Reverse checkbox
          </label>
        </div>
        <div class="form-check form-check-reverse mb-15">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            value=""
            id="reverseCheck2"
            disabled
          />
          <label class="form-check-label fw-medium me-8" for="reverseCheck2">
            Disabled reverse checkbox
          </label>
        </div>
        <div class="form-check form-switch form-check-reverse">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            id="flexSwitchCheckReverse"
          />
          <label
            class="form-check-label fw-medium me-8"
            for="flexSwitchCheckReverse"
            >Reverse switch checkbox input</label
          >
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#reverseCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="reverseCode">
<div>&lt;div class="form-check form-check-reverse"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" value="" id="reverseCheck1"&gt;</div>
    <div>&lt;label class="form-check-label fw-medium me-8" for="reverseCheck1"&gt;</div>
        <div>Reverse checkbox</div>
    <div>&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check form-check-reverse"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" value="" id="reverseCheck2" disabled&gt;</div>
    <div>&lt;label class="form-check-label fw-medium me-8" for="reverseCheck2"&gt;</div>
        <div>Disabled reverse checkbox</div>
    <div>&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-check form-switch form-check-reverse"&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="flexSwitchCheckReverse"&gt;</div>
    <div>&lt;label class="form-check-label fw-medium me-8" for="flexSwitchCheckReverse"&gt;Reverse switch checkbox input&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Without Labels</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="mb-15">
          <input
            class="form-check-input shadow-none"
            type="checkbox"
            id="checkboxNoLabel"
            value=""
            aria-label="..."
          />
        </div>
        <div>
          <input
            class="form-check-input shadow-none"
            type="radio"
            name="radioNoLabel"
            id="radioNoLabel1"
            value=""
            aria-label="..."
          />
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#withoutLabelsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="withoutLabelsCode">
<div>&lt;div&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div&gt;</div>
    <div>&lt;input class="form-check-input shadow-none" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-12">Toggle buttons</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-15">
        Create button-like checkboxes and radio buttons by using
        <code>.btn</code> styles rather than <code>.form-check-label</code> on
        the <code>&lt;label&gt;</code> elements. These toggle buttons can
        further be grouped in a
        <a
          href="https://getbootstrap.com/docs/5.3/components/button-group/"
          target="_blank"
          >button group</a
        >
        if needed.
      </p>
      <span class="d-block text-black fw-medium mb-15 mt-20"
        >Checkbox toggle buttons</span
      >
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <input
          type="checkbox"
          class="btn-check"
          id="btn-check"
          autocomplete="off"
        />
        <label class="btn btn-primary" for="btn-check">Single toggle</label>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#toggleButtonsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="toggleButtonsCode">
&lt;input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"&gt;
&lt;label class="btn btn-primary" for="btn-check"&gt;Single toggle&lt;/label&gt;
</code>
</pre>
      </div>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10 mt-25">
        <input
          type="checkbox"
          class="btn-check"
          id="btn-check-2"
          checked
          autocomplete="off"
        />
        <label class="btn btn-primary" for="btn-check-2">Checked</label>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#toggleButtons2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="toggleButtons2Code">
&lt;input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off"&gt;
&lt;label class="btn btn-primary" for="btn-check-2"&gt;Checked&lt;/label&gt;
</code>
</pre>
      </div>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10 mt-25">
        <input
          type="checkbox"
          class="btn-check"
          id="btn-check-3"
          autocomplete="off"
          disabled
        />
        <label class="btn btn-primary" for="btn-check-3">Disabled</label>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#toggleButtons3Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="toggleButtons3Code">
&lt;input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled&gt;
&lt;label class="btn btn-primary" for="btn-check-3"&gt;Disabled&lt;/label&gt;
</code>
</pre>
      </div>
      <span class="d-block text-black fw-medium mb-15 mt-25"
        >Radio toggle buttons</span
      >
      <div class="border p-2 p-lg-4 border-dark border-opacity-10 mt-25">
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option1"
          autocomplete="off"
          checked
        />
        <label class="btn btn-secondary" for="option1">Checked</label>
        <span class="me-5"></span>
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option2"
          autocomplete="off"
        />
        <label class="btn btn-secondary" for="option2">Radio</label>
        <span class="me-5"></span>
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option3"
          autocomplete="off"
          disabled
        />
        <label class="btn btn-secondary" for="option3">Disabled</label>
        <span class="me-5"></span>
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option4"
          autocomplete="off"
        />
        <label class="btn btn-secondary" for="option4">Radio</label>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#toggleButtons4Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="toggleButtons4Code">
&lt;input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked&gt;
&lt;label class="btn btn-secondary" for="option1"&gt;Checked&lt;/label&gt;

&lt;input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"&gt;
&lt;label class="btn btn-secondary" for="option2"&gt;Radio&lt;/label&gt;

&lt;input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled&gt;
&lt;label class="btn btn-secondary" for="option3"&gt;Disabled&lt;/label&gt;

&lt;input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"&gt;
&lt;label class="btn btn-secondary" for="option4"&gt;Radio&lt;/label&gt;
</code>
</pre>
      </div>
      <span class="d-block text-black fw-medium mb-15 mt-25"
        >Outlined styles</span
      >
      <div class="border p-2 p-lg-4 border-dark border-opacity-10 mt-25">
        <input
          type="checkbox"
          class="btn-check"
          id="btn-check-outlined"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btn-check-outlined"
          >Single toggle</label
        ><br />
        <br />

        <input
          type="checkbox"
          class="btn-check"
          id="btn-check-2-outlined"
          checked
          autocomplete="off"
        />
        <label class="btn btn-outline-secondary" for="btn-check-2-outlined"
          >Checked</label
        ><br />
        <br />

        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="success-outlined"
          autocomplete="off"
          checked
        />
        <label class="btn btn-outline-success" for="success-outlined"
          >Checked success radio</label
        >

        <span class="me-10"></span>

        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="danger-outlined"
          autocomplete="off"
        />
        <label class="btn btn-outline-danger" for="danger-outlined"
          >Danger radio</label
        >
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#toggleButtons5Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="toggleButtons5Code">
&lt;input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"&gt;
&lt;label class="btn btn-outline-primary" for="btn-check-outlined"&gt;Single toggle&lt;/label&gt;&lt;br&gt;

&lt;input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off"&gt;
&lt;label class="btn btn-outline-secondary" for="btn-check-2-outlined"&gt;Checked&lt;/label&gt;&lt;br&gt;

&lt;input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked&gt;
&lt;label class="btn btn-outline-success" for="success-outlined"&gt;Checked success radio&lt;/label&gt;

&lt;input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"&gt;
&lt;label class="btn btn-outline-danger" for="danger-outlined"&gt;Danger radio&lt;/label&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormChecksRadios",
};
</script>