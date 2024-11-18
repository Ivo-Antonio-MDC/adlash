<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Basic Example</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-floating mb-15 mb-md-20">
          <input
            type="email"
            class="form-control shadow-none text-black fs-md-15"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control shadow-none text-black fs-md-15"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
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
<div>&lt;div class="form-floating mb-15 mb-md-20"&gt;</div>
    <div>&lt;input type="email" class="form-control shadow-none text-black fs-md-15" id="floatingInput" placeholder="name@example.com"&gt;</div>
    <div>&lt;label for="floatingInput"&gt;Email address&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-floating"&gt;</div>
    <div>&lt;input type="password" class="form-control shadow-none text-black fs-md-15" id="floatingPassword" placeholder="Password"&gt;</div>
    <div>&lt;label for="floatingPassword"&gt;Password&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-25">
        When there’s a <code>value</code> already defined,
        <code>&lt;label&gt;</code>s will automatically adjust to their floated
        position.
      </p>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="form-floating">
          <input
            type="email"
            class="form-control shadow-none text-black fs-md-15"
            id="floatingInputValue"
            placeholder="name@example.com"
            value="test@example.com"
          />
          <label for="floatingInputValue">Input with value</label>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicExample2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicExample2Code">
<div>&lt;form class="form-floating"&gt;</div>
    <div>&lt;input type="email" class="form-control shadow-none text-black fs-md-15" id="floatingInputValue" placeholder="name@example.com" value="test@example.com"&gt;</div>
    <div>&lt;label for="floatingInputValue"&gt;Input with value&lt;/label&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-25">
        Form validation styles also work as expected.
      </p>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <form class="form-floating">
          <input
            type="email"
            class="form-control shadow-none text-black fs-md-15 is-invalid"
            id="floatingInputInvalid"
            placeholder="name@example.com"
            value="test@example.com"
          />
          <label for="floatingInputInvalid">Invalid input</label>
        </form>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicExample3Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicExample3Code">
<div>&lt;form class="form-floating"&gt;</div>
    <div>&lt;input type="email" class="form-control shadow-none text-black fs-md-15 is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com"&gt;</div>
    <div>&lt;label for="floatingInputInvalid"&gt;Invalid input&lt;/label&gt;</div>
<div>&lt;/form&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Textareas</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-floating">
          <textarea
            class="form-control shadow-none text-black fs-md-15"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#textareasCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="textareasCode">
<div>&lt;div class="form-floating"&gt;</div>
    <div>&lt;textarea class="form-control shadow-none text-black fs-md-15" placeholder="Leave a comment here" id="floatingTextarea"&gt;&lt;/textarea&gt;</div>
    <div>&lt;label for="floatingTextarea"&gt;Comments&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-25">
        To set a custom height on your <code>&lt;textarea&gt;</code>, do not use
        the <code>rows</code> attribute. Instead, set an explicit
        <code>height</code> (either inline or via custom CSS).
      </p>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-floating">
          <textarea
            class="form-control shadow-none text-black fs-md-15"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#textareas2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="textareas2Code">
<div>&lt;div class="form-floating"&gt;</div>
    <div>&lt;textarea class="form-control shadow-none text-black fs-md-15" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"&gt;&lt;/textarea&gt;</div>
    <div>&lt;label for="floatingTextarea2"&gt;Comments&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Selects</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-floating">
          <select
            class="form-select fs-md-15 text-black shadow-none"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#selectsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="selectsCode">
<div>&lt;div class="form-floating"&gt;</div>
    <div>&lt;select class="form-select fs-md-15 text-black shadow-none" id="floatingSelect" aria-label="Floating label select example"&gt;</div>
        <div>&lt;option selected&gt;Open this select menu&lt;/option&gt;</div>
        <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
        <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
        <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
    <div>&lt;/select&gt;</div>
    <div>&lt;label for="floatingSelect"&gt;Works with selects&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Disabled</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-floating mb-15 mb-md-20">
          <input
            type="email"
            class="form-control shadow-none fs-md-15 text-black"
            id="floatingInputDisabled"
            placeholder="name@example.com"
            disabled
          />
          <label for="floatingInputDisabled">Email address</label>
        </div>
        <div class="form-floating mb-15 mb-md-20">
          <textarea
            class="form-control shadow-none fs-md-15 text-black"
            placeholder="Leave a comment here"
            id="floatingTextareaDisabled"
            disabled
          ></textarea>
          <label for="floatingTextareaDisabled">Comments</label>
        </div>
        <div class="form-floating mb-15 mb-md-20">
          <textarea
            class="form-control shadow-none fs-md-15 text-black"
            placeholder="Leave a comment here"
            id="floatingTextarea2Disabled"
            style="height: 100px"
            disabled
          ></textarea>
          <label for="floatingTextarea2Disabled">Comments</label>
        </div>
        <div class="form-floating">
          <select
            class="form-select shadow-none fs-md-15 text-black"
            id="floatingSelectDisabled"
            aria-label="Floating label disabled select example"
            disabled
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelectDisabled">Works with selects</label>
        </div>
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
<div>&lt;div class="form-floating mb-15 mb-md-20"&gt;</div>
    <div>&lt;input type="email" class="form-control shadow-none fs-md-15 text-black" id="floatingInputDisabled" placeholder="name@example.com" disabled&gt;</div>
    <div>&lt;label for="floatingInputDisabled"&gt;Email address&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-floating mb-15 mb-md-20"&gt;</div>
    <div>&lt;textarea class="form-control shadow-none fs-md-15 text-black" placeholder="Leave a comment here" id="floatingTextareaDisabled" disabled&gt;&lt;/textarea&gt;</div>
    <div>&lt;label for="floatingTextareaDisabled"&gt;Comments&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-floating mb-15 mb-md-20"&gt;</div>
    <div>&lt;textarea class="form-control shadow-none fs-md-15 text-black" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style="height: 100px" disabled&gt;&lt;/textarea&gt;</div>
    <div>&lt;label for="floatingTextarea2Disabled"&gt;Comments&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-floating"&gt;</div>
    <div>&lt;select class="form-select shadow-none fs-md-15 text-black" id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled&gt;</div>
        <div>&lt;option selected&gt;Open this select menu&lt;/option&gt;</div>
        <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
        <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
        <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
    <div>&lt;/select&gt;</div>
    <div>&lt;label for="floatingSelectDisabled"&gt;Works with selects&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Readonly Plaintext</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="form-floating mb-15 mb-md-20">
          <input
            type="email"
            readonly
            class="form-control-plaintext shadow-none fs-md-15 text-black"
            id="floatingEmptyPlaintextInput"
            placeholder="name@example.com"
          />
          <label for="floatingEmptyPlaintextInput">Empty input</label>
        </div>
        <div class="form-floating mb-15 mb-md-20">
          <input
            type="email"
            readonly
            class="form-control-plaintext shadow-none fs-md-15 text-black"
            id="floatingPlaintextInput"
            placeholder="name@example.com"
            value="name@example.com"
          />
          <label for="floatingPlaintextInput">Input with value</label>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#readonlyPlaintextCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="readonlyPlaintextCode">
<div>&lt;div class="form-floating mb-15 mb-md-20"&gt;</div>
    <div>&lt;input type="email" readonly class="form-control-plaintext shadow-none fs-md-15 text-black" id="floatingEmptyPlaintextInput" placeholder="name@example.com"&gt;</div>
    <div>&lt;label for="floatingEmptyPlaintextInput"&gt;Empty input&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="form-floating mb-15 mb-md-20"&gt;</div>
    <div>&lt;input type="email" readonly class="form-control-plaintext shadow-none fs-md-15 text-black" id="floatingPlaintextInput" placeholder="name@example.com" value="name@example.com"&gt;</div>
    <div>&lt;label for="floatingPlaintextInput"&gt;Input with value&lt;/label&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Input Groups</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group">
          <span class="input-group-text">@</span>
          <div class="form-floating">
            <input
              type="text"
              class="form-control shadow-none fs-md-15 text-black"
              id="floatingInputGroup1"
              placeholder="Username"
            />
            <label for="floatingInputGroup1">Username</label>
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#inputGroupsCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="inputGroupsCode">
<div>&lt;div class="input-group"&gt;</div>
    <div>&lt;span class="input-group-text"&gt;@&lt;/span&gt;</div>
    <div>&lt;div class="form-floating"&gt;</div>
        <div>&lt;input type="text" class="form-control shadow-none fs-md-15 text-black" id="floatingInputGroup1" placeholder="Username"&gt;</div>
        <div>&lt;label for="floatingInputGroup1"&gt;Username&lt;/label&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mt-25">
        When using <code>.input-group</code> and
        <code>.form-floating</code> along with form validation, the
        <code>-feedback</code> should be placed outside of the
        <code>.form-floating</code>, but inside of the
        <code>.input-group</code>. This means that the feedback will need to be
        shown using javascript.
      </p>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="input-group has-validation">
          <span class="input-group-text">@</span>
          <div class="form-floating is-invalid">
            <input
              type="text"
              class="form-control shadow-none text-black fs-md-15 is-invalid"
              id="floatingInputGroup2"
              placeholder="Username"
              required
            />
            <label for="floatingInputGroup2">Username</label>
          </div>
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#inputGroups2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="inputGroups2Code">
<div>&lt;div class="input-group has-validation"&gt;</div>
    <div>&lt;span class="input-group-text"&gt;@&lt;/span&gt;</div>
        <div>&lt;div class="form-floating is-invalid"&gt;</div>
            <div>&lt;input type="text" class="form-control shadow-none text-black fs-md-15 is-invalid" id="floatingInputGroup2" placeholder="Username" required&gt;</div>
            <div>&lt;label for="floatingInputGroup2"&gt;Username&lt;/label&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="invalid-feedback"&gt;</div>
        <div>Please choose a username.</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-lg-20">Layout</h5>
      <div class="border p-2 p-lg-4 border-dark border-opacity-10">
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating">
              <input
                type="email"
                class="form-control shadow-none text-black fs-md-15"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value="mdo@example.com"
              />
              <label for="floatingInputGrid">Email address</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <select
                class="form-select shadow-none text-black fs-md-15"
                id="floatingSelectGrid"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label for="floatingSelectGrid">Works with selects</label>
            </div>
          </div>
        </div>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#layoutCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="layoutCode">
<div>&lt;div class="row g-2"&gt;</div>
    <div>&lt;div class="col-md"&gt;</div>
        <div>&lt;div class="form-floating"&gt;</div>
            <div>&lt;input type="email" class="form-control shadow-none text-black fs-md-15" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com"&gt;</div>
            <div>&lt;label for="floatingInputGrid"&gt;Email address&lt;/label&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col-md"&gt;</div>
        <div>&lt;div class="form-floating"&gt;</div>
            <div>&lt;select class="form-select shadow-none text-black fs-md-15" id="floatingSelectGrid"&gt;</div>
                <div>&lt;option selected&gt;Open this select menu&lt;/option&gt;</div>
                <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
                <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
                <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
            <div>&lt;/select&gt;</div>
            <div>&lt;label for="floatingSelectGrid"&gt;Works with selects&lt;/label&gt;</div>
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
  name: "FormFloatingLabels",
};
</script>