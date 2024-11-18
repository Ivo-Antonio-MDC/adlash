<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Basic Table</h5>
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="fw-medium">1</th>
                <td class="fw-medium">Mark</td>
                <td class="fw-medium">Otto</td>
                <td class="fw-medium">@mdo</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">2</th>
                <td class="fw-medium">Jacob</td>
                <td class="fw-medium">Thornton</td>
                <td class="fw-medium">@fat</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">3</th>
                <td colspan="2" class="fw-medium">Larry the Bird</td>
                <td class="fw-medium">@twitter</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicTableCode">
<div>&lt;table class="table"&gt;</div>
    <div>&lt;thead&gt;</div>
        <div>&lt;tr&gt;</div>
            <div>&lt;th scope="col"&gt;#&lt;/th&gt;</div>
            <div>&lt;th scope="col"&gt;First&lt;/th&gt;</div>
            <div>&lt;th scope="col"&gt;Last&lt;/th&gt;</div>
            <div>&lt;th scope="col"&gt;Handle&lt;/th&gt;</div>
        <div>&lt;/tr&gt;</div>
    <div>&lt;/thead&gt;</div>
    <div>&lt;tbody&gt;</div>
        <div>&lt;tr&gt;</div>
            <div>&lt;th scope="row" class="fw-medium"&gt;1&lt;/th&gt;</div>
            <div>&lt;td class="fw-medium"&gt;Mark&lt;/td&gt;</div>
            <div>&lt;td class="fw-medium"&gt;Otto&lt;/td&gt;</div>
            <div>&lt;td class="fw-medium"&gt;@mdo&lt;/td&gt;</div>
        <div>&lt;/tr&gt;</div>
        <div>&lt;tr&gt;</div>
            <div>&lt;th scope="row" class="fw-medium"&gt;2&lt;/th&gt;</div>
            <div>&lt;td class="fw-medium"&gt;Jacob&lt;/td&gt;</div>
            <div>&lt;td class="fw-medium"&gt;Thornton&lt;/td&gt;</div>
            <div>&lt;td class="fw-medium"&gt;@fat&lt;/td&gt;</div>
        <div>&lt;/tr&gt;</div>
        <div>&lt;tr&gt;</div>
            <div>&lt;th scope="row" class="fw-medium"&gt;3&lt;/th&gt;</div>
            <div>&lt;td colspan="2" class="fw-medium"&gt;Larry the Bird&lt;/td&gt;</div>
            <div>&lt;td class="fw-medium"&gt;@twitter&lt;/td&gt;</div>
        <div>&lt;/tr&gt;</div>
    <div>&lt;/tbody&gt;</div>
<div>&lt;/table&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Variants Table</h5>
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col">Class</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr class="fw-medium">
                <th scope="row">Default</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-primary fw-medium">
                <th scope="row">Primary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-secondary fw-medium">
                <th scope="row">Secondary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-success fw-medium">
                <th scope="row">Success</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-danger fw-medium">
                <th scope="row">Danger</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-warning fw-medium">
                <th scope="row">Warning</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-info fw-medium">
                <th scope="row">Info</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-light fw-medium">
                <th scope="row">Light</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-dark fw-medium">
                <th scope="row">Dark</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="variantsTableCode">
<div>&lt;!-- On tables --&gt;</div>
<div>&lt;table class="table-primary"&gt;...&lt;/table&gt;</div>
<div>&lt;table class="table-secondary"&gt;...&lt;/table&gt;</div>
<div>&lt;table class="table-success"&gt;...&lt;/table&gt;</div>
<div>&lt;table class="table-danger"&gt;...&lt;/table&gt;</div>
<div>&lt;table class="table-warning"&gt;...&lt;/table&gt;</div>
<div>&lt;table class="table-info"&gt;...&lt;/table&gt;</div>
<div>&lt;table class="table-light"&gt;...&lt;/table&gt;</div>
<div>&lt;table class="table-dark"&gt;...&lt;/table&gt;</div>

<div>&lt;!-- On rows --&gt;</div>
<div>&lt;tr class="table-primary"&gt;...&lt;/tr&gt;</div>
<div>&lt;tr class="table-secondary"&gt;...&lt;/tr&gt;</div>
<div>&lt;tr class="table-success"&gt;...&lt;/tr&gt;</div>
<div>&lt;tr class="table-danger"&gt;...&lt;/tr&gt;</div>
<div>&lt;tr class="table-warning"&gt;...&lt;/tr&gt;</div>
<div>&lt;tr class="table-info"&gt;...&lt;/tr&gt;</div>
<div>&lt;tr class="table-light"&gt;...&lt;/tr&gt;</div>
<div>&lt;tr class="table-dark"&gt;...&lt;/tr&gt;</div>

<div>&lt;!-- On cells (`td` or `th`) --&gt;</div>
<div>&lt;tr&gt;</div>
    <div>&lt;td class="table-primary"&gt;...&lt;/td&gt;</div>
    <div>&lt;td class="table-secondary"&gt;...&lt;/td&gt;</div>
    <div>&lt;td class="table-success"&gt;...&lt;/td&gt;</div>
    <div>&lt;td class="table-danger"&gt;...&lt;/td&gt;</div>
    <div>&lt;td class="table-warning"&gt;...&lt;/td&gt;</div>
    <div>&lt;td class="table-info"&gt;...&lt;/td&gt;</div>
    <div>&lt;td class="table-light"&gt;...&lt;/td&gt;</div>
    <div>&lt;td class="table-dark"&gt;...&lt;/td&gt;</div>
<div>&lt;/tr&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Dark Table</h5>
          <table class="table table-dark mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="fw-medium">1</th>
                <td class="fw-medium">Mark</td>
                <td class="fw-medium">Otto</td>
                <td class="fw-medium">@mdo</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">2</th>
                <td class="fw-medium">Jacob</td>
                <td class="fw-medium">Thornton</td>
                <td class="fw-medium">@fat</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">3</th>
                <td colspan="2" class="fw-medium">Larry the Bird</td>
                <td class="fw-medium">@twitter</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="darkTableCode">
&lt;table class="table table-dark"&gt;
    ...
&lt;/table&gt;
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-20">Bordered Table</h5>
          <table class="table table-bordered mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="fw-medium">1</th>
                <td class="fw-medium">Mark</td>
                <td class="fw-medium">Otto</td>
                <td class="fw-medium">@mdo</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">2</th>
                <td class="fw-medium">Jacob</td>
                <td class="fw-medium">Thornton</td>
                <td class="fw-medium">@fat</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">3</th>
                <td colspan="2" class="fw-medium">Larry the Bird</td>
                <td class="fw-medium">@twitter</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="borderedTableCode">
&lt;table class="table table-bordered"&gt;
    ...
&lt;/table&gt;
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-15 text-paragraph lh-base mt-25">
            <a
              href="https://getbootstrap.com/docs/5.3/utilities/borders/#border-color"
              target="_blank"
              >Border color utilities</a
            >
            can be added to change colors:
          </p>
          <table class="table table-bordered border-primary mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="fw-medium">1</th>
                <td class="fw-medium">Mark</td>
                <td class="fw-medium">Otto</td>
                <td class="fw-medium">@mdo</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">2</th>
                <td class="fw-medium">Jacob</td>
                <td class="fw-medium">Thornton</td>
                <td class="fw-medium">@fat</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">3</th>
                <td colspan="2" class="fw-medium">Larry the Bird</td>
                <td class="fw-medium">@twitter</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="borderColorTableCode">
&lt;table class="table table-bordered border-primary"&gt;
    ...
&lt;/table&gt;
</code>
</pre>
          </div>
          <p class="fs-md-15 fs-lg-15 text-paragraph lh-base mt-25">
            Add <code>.table-borderless</code> for a table without borders.
          </p>
          <table class="table table-borderless mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="fw-medium">1</th>
                <td class="fw-medium">Mark</td>
                <td class="fw-medium">Otto</td>
                <td class="fw-medium">@mdo</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">2</th>
                <td class="fw-medium">Jacob</td>
                <td class="fw-medium">Thornton</td>
                <td class="fw-medium">@fat</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">3</th>
                <td colspan="2" class="fw-medium">Larry the Bird</td>
                <td class="fw-medium">@twitter</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="borderlessTableCode">
&lt;table class="table table-borderless"&gt;
    ...
&lt;/table&gt;
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-20">Nesting Table</h5>
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td colspan="4">
                  <table class="table mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Header</th>
                        <th scope="col">Header</th>
                        <th scope="col">Header</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">A</th>
                        <td>First</td>
                        <td>Last</td>
                      </tr>
                      <tr>
                        <th scope="row">B</th>
                        <td>First</td>
                        <td>Last</td>
                      </tr>
                      <tr>
                        <th scope="row">C</th>
                        <td>First</td>
                        <td>Last</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="nestingTableCode">
<div>&lt;table class="table"&gt;</div>
    <div>&lt;thead&gt;</div>
        <div>&lt;tr&gt;</div>
            <div>&lt;th scope="col"&gt;#&lt;/th&gt;</div>
            <div>&lt;th scope="col"&gt;First&lt;/th&gt;</div>
            <div>&lt;th scope="col"&gt;Last&lt;/th&gt;</div>
            <div>&lt;th scope="col"&gt;Handle&lt;/th&gt;</div>
        <div>&lt;/tr&gt;</div>
    <div>&lt;/thead&gt;</div>
    <div>&lt;tbody&gt;</div>
        <div>&lt;tr&gt;</div>
            <div>&lt;th scope="row"&gt;1&lt;/th&gt;</div>
            <div>&lt;td&gt;Mark&lt;/td&gt;</div>
            <div>&lt;td&gt;Otto&lt;/td&gt;</div>
            <div>&lt;td&gt;@mdo&lt;/td&gt;</div>
        <div>&lt;/tr&gt;</div>
        <div>&lt;tr&gt;</div>
            <div>&lt;td colspan="4"&gt;</div>
                <div>&lt;table class="table mb-0"&gt;</div>
                    <div>&lt;thead&gt;</div>
                        <div>&lt;tr&gt;</div>
                            <div>&lt;th scope="col"&gt;Header&lt;/th&gt;</div>
                            <div>&lt;th scope="col"&gt;Header&lt;/th&gt;</div>
                            <div>&lt;th scope="col"&gt;Header&lt;/th&gt;</div>
                        <div>&lt;/tr&gt;</div>
                    <div>&lt;/thead&gt;</div>
                    <div>&lt;tbody&gt;</div>
                        <div>&lt;tr&gt;</div>
                            <div>&lt;th scope="row"&gt;A&lt;/th&gt;</div>
                            <div>&lt;td&gt;First&lt;/td&gt;</div>
                            <div>&lt;td&gt;Last&lt;/td&gt;</div>
                        <div>&lt;/tr&gt;</div>
                        <div>&lt;tr&gt;</div>
                            <div>&lt;th scope="row"&gt;B&lt;/th&gt;</div>
                            <div>&lt;td&gt;First&lt;/td&gt;</div>
                            <div>&lt;td&gt;Last&lt;/td&gt;</div>
                        <div>&lt;/tr&gt;</div>
                        <div>&lt;tr&gt;</div>
                            <div>&lt;th scope="row"&gt;C&lt;/th&gt;</div>
                            <div>&lt;td&gt;First&lt;/td&gt;</div>
                            <div>&lt;td&gt;Last&lt;/td&gt;</div>
                        <div>&lt;/tr&gt;</div>
                    <div>&lt;/tbody&gt;</div>
                <div>&lt;/table&gt;</div>
            <div>&lt;/td&gt;</div>
        <div>&lt;/tr&gt;</div>
        <div>&lt;tr&gt;</div>
            <div>&lt;th scope="row"&gt;3&lt;/th&gt;</div>
            <div>&lt;td&gt;Larry&lt;/td&gt;</div>
            <div>&lt;td&gt;the Bird&lt;/td&gt;</div>
            <div>&lt;td&gt;@twitter&lt;/td&gt;</div>
        <div>&lt;/tr&gt;</div>
    <div>&lt;/tbody&gt;</div>
<div>&lt;/table&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Striped Rows Table</h5>
          <table class="table table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="fw-medium">1</th>
                <td class="fw-medium">Mark</td>
                <td class="fw-medium">Otto</td>
                <td class="fw-medium">@mdo</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">2</th>
                <td class="fw-medium">Jacob</td>
                <td class="fw-medium">Thornton</td>
                <td class="fw-medium">@fat</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">3</th>
                <td colspan="2" class="fw-medium">Larry the Bird</td>
                <td class="fw-medium">@twitter</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="stripedRowsTableCode">
&lt;table class="table table-striped"&gt;
    ...
&lt;/table&gt;
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Striped Columns Table</h5>
          <table class="table table-striped-columns mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="fw-medium">1</th>
                <td class="fw-medium">Mark</td>
                <td class="fw-medium">Otto</td>
                <td class="fw-medium">@mdo</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">2</th>
                <td class="fw-medium">Jacob</td>
                <td class="fw-medium">Thornton</td>
                <td class="fw-medium">@fat</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">3</th>
                <td colspan="2" class="fw-medium">Larry the Bird</td>
                <td class="fw-medium">@twitter</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="stripedCloumnsTableCode">
&lt;table class="table table-striped-columns"&gt;
    ...
&lt;/table&gt;
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Hoverable Rows Table</h5>
          <table class="table table-hover mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="fw-medium">1</th>
                <td class="fw-medium">Mark</td>
                <td class="fw-medium">Otto</td>
                <td class="fw-medium">@mdo</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">2</th>
                <td class="fw-medium">Jacob</td>
                <td class="fw-medium">Thornton</td>
                <td class="fw-medium">@fat</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">3</th>
                <td colspan="2" class="fw-medium">Larry the Bird</td>
                <td class="fw-medium">@twitter</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="tableHoverCode">
&lt;table class="table table-hover"&gt;
    ...
&lt;/table&gt;
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Active Table</h5>
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-active">
                <th scope="row" class="fw-medium">1</th>
                <td class="fw-medium">Mark</td>
                <td class="fw-medium">Otto</td>
                <td class="fw-medium">@mdo</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">2</th>
                <td class="fw-medium">Jacob</td>
                <td class="fw-medium">Thornton</td>
                <td class="fw-medium">@fat</td>
              </tr>
              <tr>
                <th scope="row" class="fw-medium">3</th>
                <td colspan="2" class="fw-medium table-active">
                  Larry the Bird
                </td>
                <td class="fw-medium">@twitter</td>
              </tr>
            </tbody>
          </table>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="activeTableCode">
<div>&lt;table class="table"&gt;</div>
    <div>&lt;thead&gt;</div>
        <div>...</div>
    <div>&lt;/thead&gt;</div>
    <div>&lt;tbody&gt;</div>
        <div>&lt;tr class="table-active"&gt;</div>
            <div>...</div>
        <div>&lt;/tr&gt;</div>
        <div>&lt;tr&gt;</div>
            <div>...</div>
        <div>&lt;/tr&gt;</div>
        <div>&lt;tr&gt;</div>
            <div>&lt;th scope="row"&gt;3&lt;/th&gt;</div>
            <div>&lt;td colspan="2" class="table-active"&gt;Larry the Bird&lt;/td&gt;</div>
            <div>&lt;td&gt;@twitter&lt;/td&gt;</div>
        <div>&lt;/tr&gt;</div>
    <div>&lt;/tbody&gt;</div>
<div>&lt;/table&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Vertical Alignment Table</h5>
          <div class="table-responsive">
            <table class="table mb-0 align-middle">
              <thead>
                <tr>
                  <th scope="col" class="w-25">Heading 1</th>
                  <th scope="col" class="w-25">Heading 2</th>
                  <th scope="col" class="w-25">Heading 3</th>
                  <th scope="col" class="w-25">Heading 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fs-md-15 fs-lg-16">
                    This cell inherits <code>vertical-align: middle;</code> from
                    the table
                  </td>
                  <td class="fs-md-15 fs-lg-16">
                    This cell inherits <code>vertical-align: middle;</code> from
                    the table
                  </td>
                  <td class="fs-md-15 fs-lg-16">
                    This cell inherits <code>vertical-align: middle;</code> from
                    the table
                  </td>
                  <td class="fs-md-15 fs-lg-16">
                    This here is some placeholder text, intended to take up
                    quite a bit of vertical space, to demonstrate how the
                    vertical alignment works in the preceding cells.
                  </td>
                </tr>
                <tr class="align-bottom">
                  <td class="fs-md-15 fs-lg-16">
                    This cell inherits <code>vertical-align: bottom;</code> from
                    the table row
                  </td>
                  <td class="fs-md-15 fs-lg-16">
                    This cell inherits <code>vertical-align: bottom;</code> from
                    the table row
                  </td>
                  <td class="fs-md-15 fs-lg-16">
                    This cell inherits <code>vertical-align: bottom;</code> from
                    the table row
                  </td>
                  <td class="fs-md-15 fs-lg-16">
                    This here is some placeholder text, intended to take up
                    quite a bit of vertical space, to demonstrate how the
                    vertical alignment works in the preceding cells.
                  </td>
                </tr>
                <tr>
                  <td class="fs-md-15 fs-lg-16">
                    This cell inherits <code>vertical-align: middle;</code> from
                    the table
                  </td>
                  <td class="fs-md-15 fs-lg-16">
                    This cell inherits <code>vertical-align: middle;</code> from
                    the table
                  </td>
                  <td class="align-top fs-md-15 fs-lg-15">
                    This cell is aligned to the top.
                  </td>
                  <td class="fs-md-15 fs-lg-16">
                    This here is some placeholder text, intended to take up
                    quite a bit of vertical space, to demonstrate how the
                    vertical alignment works in the preceding cells.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="verticalAlignmentTableCode">
<div>&lt;div class="table-responsive"&gt;</div>
    <div>&lt;table class="table align-middle"&gt;</div>
        <div>&lt;thead&gt;</div>
            <div>&lt;tr&gt;</div>
                <div>&lt;th scope="col" class="w-25"&gt;Heading 1&lt;/th&gt;</div>
                <div>&lt;th scope="col" class="w-25"&gt;Heading 2&lt;/th&gt;</div>
                <div>&lt;th scope="col" class="w-25"&gt;Heading 3&lt;/th&gt;</div>
                <div>&lt;th scope="col" class="w-25"&gt;Heading 4&lt;/th&gt;</div>
            <div>&lt;/tr&gt;</div>
        <div>&lt;/thead&gt;</div>
        <div>&lt;tbody&gt;</div>
            <div>&lt;tr&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/td&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/td&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/td&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.&lt;/td&gt;</div>
            <div>&lt;/tr&gt;</div>
            <div>&lt;tr class="align-bottom"&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table row&lt;/td&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table row&lt;/td&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table row&lt;/td&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.&lt;/td&gt;</div>
            <div>&lt;/tr&gt;</div>
            <div>&lt;tr&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/td&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/td&gt;</div>
                <div>&lt;td class="align-top fs-md-15 fs-lg-15"&gt;This cell is aligned to the top.&lt;/td&gt;</div>
                <div>&lt;td class="fs-md-15 fs-lg-16"&gt;This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.&lt;/td&gt;</div>
            <div>&lt;/tr&gt;</div>
        <div>&lt;/tbody&gt;</div>
    <div>&lt;/table&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15">Responsive Table</h5>
          <div class="table-responsive">
            <table class="table mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr class="fw-medium">
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="fw-medium">
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="fw-medium">
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#responsiveTableCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="responsiveTableCode">
&lt;div class="table-responsive"&gt;
    &lt;table class="table"&gt;
        ...
    &lt;/table&gt;
&lt;/div&gt;
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
  name: "TablesContent",
};
</script>