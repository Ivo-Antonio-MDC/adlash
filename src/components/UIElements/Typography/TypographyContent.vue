<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Headings</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            All HTML headings, <code>&lt;h1&gt;</code> through
            <code>&lt;h6&gt;</code>, are available.
          </p>
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
          <div class="position-relative mt-25 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#headingsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="headingsCode">
<div>&lt;h1&gt;h1. Bootstrap heading&lt;/h1&gt;</div>
<div>&lt;h2&gt;h2. Bootstrap heading&lt;/h2&gt;</div>
<div>&lt;h3&gt;h3. Bootstrap heading&lt;/h3&gt;</div>
<div>&lt;h4&gt;h4. Bootstrap heading&lt;/h4&gt;</div>
<div>&lt;h5&gt;h5. Bootstrap heading&lt;/h5&gt;</div>
<div>&lt;h6&gt;h6. Bootstrap heading&lt;/h6&gt;</div>
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            <code>.h1</code> through <code>.h6</code> classes are also
            available, for when you want to match the font styling of a heading
            but cannot use the associated HTML element.
          </p>
          <p class="h1">h1. Bootstrap heading</p>
          <p class="h2">h2. Bootstrap heading</p>
          <p class="h3">h3. Bootstrap heading</p>
          <p class="h4">h4. Bootstrap heading</p>
          <p class="h5">h5. Bootstrap heading</p>
          <p class="h6">h6. Bootstrap heading</p>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#headings2Code"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="headings2Code">
<div>&lt;p class="h1"&gt;h1. Bootstrap heading&lt;/p&gt;</div>
<div>&lt;p class="h2"&gt;h2. Bootstrap heading&lt;/p&gt;</div>
<div>&lt;p class="h3"&gt;h3. Bootstrap heading&lt;/p&gt;</div>
<div>&lt;p class="h4"&gt;h4. Bootstrap heading&lt;/p&gt;</div>
<div>&lt;p class="h5"&gt;h5. Bootstrap heading&lt;/p&gt;</div>
<div>&lt;p class="h6"&gt;h6. Bootstrap heading&lt;/p&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Inline Text Elements</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Styling for common inline HTML5 elements.
          </p>
          <p class="fs-md-15 fs-lg-16">
            You can use the mark tag to <mark>highlight</mark> text.
          </p>
          <p class="fs-md-15 fs-lg-16">
            <del>This line of text is meant to be treated as deleted text.</del>
          </p>
          <p class="fs-md-15 fs-lg-16">
            <s
              >This line of text is meant to be treated as no longer
              accurate.</s
            >
          </p>
          <p class="fs-md-15 fs-lg-16">
            <ins
              >This line of text is meant to be treated as an addition to the
              document.</ins
            >
          </p>
          <p class="fs-md-15 fs-lg-16">
            <u>This line of text will render as underlined.</u>
          </p>
          <p class="fs-md-15 fs-lg-16">
            <small
              >This line of text is meant to be treated as fine print.</small
            >
          </p>
          <p class="fs-md-15 fs-lg-16">
            <strong>This line rendered as bold text.</strong>
          </p>
          <p class="fs-md-15 fs-lg-16">
            <em>This line rendered as italicized text.</em>
          </p>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#inlineTextElementsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="inlineTextElementsCode">
<div>&lt;p&gt;You can use the mark tag to &lt;mark&gt;highlight&lt;/mark&gt; text.&lt;/p&gt;</div>
<div>&lt;p&gt;&lt;del&gt;This line of text is meant to be treated as deleted text.&lt;/del&gt;&lt;/p&gt;</div>
<div>&lt;p&gt;&lt;s&gt;This line of text is meant to be treated as no longer accurate.&lt;/s&gt;&lt;/p&gt;</div>
<div>&lt;p&gt;&lt;ins&gt;This line of text is meant to be treated as an addition to the document.&lt;/ins&gt;&lt;/p&gt;</div>
<div>&lt;p&gt;&lt;u&gt;This line of text will render as underlined.&lt;/u&gt;&lt;/p&gt;</div>
<div>&lt;p&gt;&lt;small&gt;This line of text is meant to be treated as fine print.&lt;/small&gt;&lt;/p&gt;</div>
<div>&lt;p&gt;&lt;strong&gt;This line rendered as bold text.&lt;/strong&gt;&lt;/p&gt;</div>
<div>&lt;p&gt;&lt;em&gt;This line rendered as italicized text.&lt;/em&gt;&lt;/p&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Abbreviations</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Stylized implementation of HTML’s <code>&lt;abbr&gt;</code> element
            for abbreviations and acronyms to show the expanded version on
            hover. Abbreviations have a default underline and gain a help cursor
            to provide additional context on hover and to users of assistive
            technologies.
          </p>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Add <code>.initialism</code> to an abbreviation for a slightly
            smaller font-size.
          </p>
          <p class="fs-md-15 fs-lg-16"><abbr title="attribute">attr</abbr></p>
          <p class="fs-md-15 fs-lg-16">
            <abbr title="HyperText Markup Language" class="initialism"
              >HTML</abbr
            >
          </p>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#abbreviationsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="abbreviationsCode">
<div>&lt;p&gt;&lt;abbr title="attribute"&gt;attr&lt;/abbr&gt;&lt;/p&gt;</div>
<div>&lt;p&gt;&lt;abbr title="HyperText Markup Language" class="initialism"&gt;HTML&lt;/abbr&gt;&lt;/p&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Description List Alignment</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Align terms and descriptions horizontally by using our grid system’s
            predefined classes (or semantic mixins). For longer terms, you can
            optionally add a <code>.text-truncate</code> class to truncate the
            text with an ellipsis.
          </p>
          <dl class="row">
            <dt class="col-sm-3 fs-md-15 fs-lg-16">Description lists</dt>
            <dd class="col-sm-9 fs-md-15 fs-lg-16">
              A description list is perfect for defining terms.
            </dd>
            <dt class="col-sm-3 fs-md-15 fs-lg-16">Term</dt>
            <dd class="col-sm-9 fs-md-15 fs-lg-16">
              <p>Definition for the term.</p>
              <p>And some more placeholder definition text.</p>
            </dd>
            <dt class="col-sm-3 fs-md-15 fs-lg-16">Another term</dt>
            <dd class="col-sm-9 fs-md-15 fs-lg-16">
              This definition is short, so no extra paragraphs or anything.
            </dd>
            <dt class="col-sm-3 fs-md-15 fs-lg-16 text-truncate">
              Truncated term is truncated
            </dt>
            <dd class="col-sm-9 fs-md-15 fs-lg-16">
              This can be useful when space is tight. Adds an ellipsis at the
              end.
            </dd>
            <dt class="col-sm-3 fs-md-15 fs-lg-16">Nesting</dt>
            <dd class="col-sm-9 fs-md-15 fs-lg-16">
              <dl class="row">
                <dt class="col-sm-4">Nested definition list</dt>
                <dd class="col-sm-8">
                  I heard you like definition lists. Let me put a definition
                  list inside your definition list.
                </dd>
              </dl>
            </dd>
          </dl>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#listAlignmentCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="listAlignmentCode">
<div>&lt;dl class="row"&gt;</div>
    <div>&lt;dt class="col-sm-3 fs-md-15 fs-lg-16"&gt;Description lists&lt;/dt&gt;</div>
    <div>&lt;dd class="col-sm-9 fs-md-15 fs-lg-16"&gt;A description list is perfect for defining terms.&lt;/dd&gt;</div>
    <div>&lt;dt class="col-sm-3 fs-md-15 fs-lg-16"&gt;Term&lt;/dt&gt;</div>
    <div>&lt;dd class="col-sm-9 fs-md-15 fs-lg-16"&gt;</div>
        <div>&lt;p&gt;Definition for the term.&lt;/p&gt;</div>
        <div>&lt;p&gt;And some more placeholder definition text.&lt;/p&gt;</div>
    <div>&lt;/dd&gt;</div>
    <div>&lt;dt class="col-sm-3 fs-md-15 fs-lg-16"&gt;Another term&lt;/dt&gt;</div>
    <div>&lt;dd class="col-sm-9 fs-md-15 fs-lg-16"&gt;This definition is short, so no extra paragraphs or anything.&lt;/dd&gt;</div>
    <div>&lt;dt class="col-sm-3 fs-md-15 fs-lg-16 text-truncate"&gt;Truncated term is truncated&lt;/dt&gt;</div>
    <div>&lt;dd class="col-sm-9 fs-md-15 fs-lg-16"&gt;This can be useful when space is tight. Adds an ellipsis at the end.&lt;/dd&gt;</div>
    <div>&lt;dt class="col-sm-3 fs-md-15 fs-lg-16"&gt;Nesting&lt;/dt&gt;</div>
    <div>&lt;dd class="col-sm-9 fs-md-15 fs-lg-16"&gt;</div>
        <div>&lt;dl class="row"&gt;</div>
            <div>&lt;dt class="col-sm-4"&gt;Nested definition list&lt;/dt&gt;</div>
            <div>&lt;dd class="col-sm-8"&gt;I heard you like definition lists. Let me put a definition list inside your definition list.&lt;/dd&gt;</div>
        <div>&lt;/dl&gt;</div>
    <div>&lt;/dd&gt;</div>
<div>&lt;/dl&gt;</div>
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
            Customizing Headings
          </h5>
          <h3>
            Fancy display heading
            <small class="text-body-secondary">With faded secondary text</small>
          </h3>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#customizingHeadingsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="customizingHeadingsCode">
<div>&lt;h3&gt;</div>
    <div>Fancy display heading</div>
    <div>&lt;small class="text-body-secondary"&gt;With faded secondary text&lt;/small&gt;</div>
<div>&lt;/h3&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Display Headings</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Traditional heading elements are designed to work best in the meat
            of your page content. When you need a heading to stand out, consider
            using a <strong>display heading</strong>—a larger, slightly more
            opinionated heading style.
          </p>
          <h1 class="display-1">Display 1</h1>
          <h1 class="display-2">Display 2</h1>
          <h1 class="display-3">Display 3</h1>
          <h1 class="display-4">Display 4</h1>
          <h1 class="display-5">Display 5</h1>
          <h1 class="display-6">Display 6</h1>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#displayHeadingsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="displayHeadingsCode">
<div>&lt;h1 class="display-1"&gt;Display 1&lt;/h1&gt;</div>
<div>&lt;h1 class="display-2"&gt;Display 2&lt;/h1&gt;</div>
<div>&lt;h1 class="display-3"&gt;Display 3&lt;/h1&gt;</div>
<div>&lt;h1 class="display-4"&gt;Display 4&lt;/h1&gt;</div>
<div>&lt;h1 class="display-5"&gt;Display 5&lt;/h1&gt;</div>
<div>&lt;h1 class="display-6"&gt;Display 6&lt;/h1&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Lead</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Make a paragraph stand out by adding <code>.lead</code>.
          </p>
          <p class="lead">
            This is a lead paragraph. It stands out from regular paragraphs.
          </p>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#leadCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="leadCode">
<div>&lt;p class="lead"&gt;</div>
    <div>This is a lead paragraph. It stands out from regular paragraphs.</div>
<div>&lt;/p&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Blockquotes</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            For quoting blocks of content from another source within your
            document. Wrap
            <code>&lt;blockquote class="blockquote"&gt;</code> around any HTML
            as the quote.
          </p>
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
            <figcaption class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </blockquote>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#blockquoteCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="blockquoteCode">
<div>&lt;blockquote class="blockquote"&gt;</div>
    <div>&lt;p&gt;A well-known quote, contained in a blockquote element.&lt;/p&gt;</div>
    <div>&lt;figcaption class="blockquote-footer"&gt;</div>
        <div>Someone famous in &lt;cite title="Source Title"&gt;Source Title&lt;/cite&gt;</div>
    <div>&lt;/figcaption&gt;</div>
<div>&lt;/blockquote&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Unstyled</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Remove the default <code>list-style</code> and left margin on list
            items (immediate children only).
            <strong>This only applies to immediate children list items</strong>,
            meaning you will need to add the class for any nested lists as well.
          </p>
          <ul class="list-unstyled mb-0">
            <li class="fs-md-15 fs-lg-16 lh-base">This is a list.</li>
            <li class="fs-md-15 fs-lg-16 lh-base">
              It appears completely unstyled.
            </li>
            <li class="fs-md-15 fs-lg-16 lh-base">
              Structurally, it's still a list.
            </li>
            <li class="fs-md-15 fs-lg-16 lh-base">
              However, this style only applies to immediate child elements.
            </li>
            <li class="fs-md-15 fs-lg-16 lh-base">
              Nested lists:
              <ul>
                <li class="fs-md-15 fs-lg-16 lh-base">
                  are unaffected by this style
                </li>
                <li class="fs-md-15 fs-lg-16 lh-base">
                  will still show a bullet
                </li>
                <li class="fs-md-15 fs-lg-16 lh-base">
                  and have appropriate left margin
                </li>
              </ul>
            </li>
            <li class="fs-md-15 fs-lg-16 lh-base">
              This may still come in handy in some situations.
            </li>
          </ul>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#unstyledCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="unstyledCode">
<div>&lt;ul class="list-unstyled"&gt;</div>
    <div>&lt;li class="fs-md-15 fs-lg-16 lh-base"&gt;This is a list.&lt;/li&gt;</div>
    <div>&lt;li class="fs-md-15 fs-lg-16 lh-base"&gt;It appears completely unstyled.&lt;/li&gt;</div>
    <div>&lt;li class="fs-md-15 fs-lg-16 lh-base"&gt;Structurally, it's still a list.&lt;/li&gt;</div>
    <div>&lt;li class="fs-md-15 fs-lg-16 lh-base"&gt;However, this style only applies to immediate child elements.&lt;/li&gt;</div>
    <div>&lt;li class="fs-md-15 fs-lg-16 lh-base"&gt;Nested lists:</div>
        <div>&lt;ul&gt;</div>
            <div>&lt;li class="fs-md-15 fs-lg-16 lh-base"&gt;are unaffected by this style&lt;/li&gt;</div>
            <div>&lt;li class="fs-md-15 fs-lg-16 lh-base"&gt;will still show a bullet&lt;/li&gt;</div>
            <div>&lt;li class="fs-md-15 fs-lg-16 lh-base"&gt;and have appropriate left margin&lt;/li&gt;</div>
        <div>&lt;/ul&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="fs-md-15 fs-lg-16 lh-base"&gt;This may still come in handy in some situations.&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-10">Inline</h5>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            Remove a list’s bullets and apply some light
            <code>margin</code> with a combination of two classes,
            <code>.list-inline</code> and <code>.list-inline-item</code>.
          </p>
          <ul class="list-inline">
            <li class="list-inline-item fs-md-15 fs-lg-16">
              This is a list item.
            </li>
            <li class="list-inline-item fs-md-15 fs-lg-16">And another one.</li>
            <li class="list-inline-item fs-md-15 fs-lg-16">
              But they're displayed inline.
            </li>
          </ul>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#inlineCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="inlineCode">
<div>&lt;ul class="list-inline"&gt;</div>
    <div>&lt;li class="list-inline-item fs-md-15 fs-lg-16"&gt;This is a list item.&lt;/li&gt;</div>
    <div>&lt;li class="list-inline-item fs-md-15 fs-lg-16"&gt;And another one.&lt;/li&gt;</div>
    <div>&lt;li class="list-inline-item fs-md-15 fs-lg-16"&gt;But they're displayed inline.&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
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
  name: "TypographyContent",
};
</script>