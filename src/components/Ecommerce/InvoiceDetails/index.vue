<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white letter-spacing invoice-details-box"
  >
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <div class="d-lg-flex justify-content-between">
        <div class="text-start">
          <img
            src="../../../assets/images/logo.svg"
            class="black-logo"
            alt="logo"
          />
          <img
            src="../../../assets/images/white-logo.svg"
            class="white-logo"
            alt="logo"
          />
          <span
            class="d-block mt-12 mt-md-15 mt-lg-30 fs-md-15 fs-lg-16 fw-medium text-paragraph mb-5 mb-md-8"
          >
            Company Admin
          </span>
          <p class="mb-5 text-muted fs-md-15 fs-md-16 lh-base">
            795 Folsom Ave, Suite 600 San <br />Francisco, CA 94107, USA
          </p>
          <spam class="d-block text-muted fs-md-15 fs-md-16">
            Reg. number : 245000002519
          </spam>
        </div>
        <div class="text-lg-center mt-15 mt-md-20 mt-lg-0">
          <h2
            class="text-black fw-black mb-5 mb-sm-10 mb-lg-20 fs-18 fs-md-20 fs-lg-30"
          >
            Invoice
          </h2>
          <span class="d-block fs-md-15 fs-md-16 text-muted">
            <span class="me-md-5 d-block d-md-inline-block">
              Inv. number :
              <span class="text-paragraph">#3256120</span>
            </span>
            <span class="ms-md-5 d-block d-md-inline-block">
              Date :
              <span class="text-paragraph">25th March, 2023</span>
            </span>
          </span>
        </div>
        <div class="text-lg-end mt-15 mt-md-20 mt-lg-0">
          <img src="../../../assets/images/qr-code.png" alt="qr-code" />
        </div>
      </div>
      <div class="invoice-info d-lg-flex justify-content-between">
        <div class="d-flex">
          <div>
            <span class="d-block text-black fs-md-15 fw-bold mb-12">
              Invoice To:
            </span>
            <span
              class="d-block fs-md-15 fs-lg-16 fw-medium text-paragraph mb-8"
            >
              Jane Ronan
            </span>
            <p class="mb-5 text-muted fs-md-15 fs-md-16 lh-base">
              795 Folsom Ave, Suite 600 San <br />Francisco, CA 94107, USA
            </p>
            <spam class="d-block text-muted fs-md-15 fs-md-16">
              Reg. number : 245000002519
            </spam>
          </div>
          <div class="ms-10 ms-sm-50 ms-md-100">
            <span class="d-block text-black fs-md-15 fw-bold mb-12">
              Payment:
            </span>
            <span
              class="d-block fs-md-15 fs-lg-16 fw-medium text-paragraph mb-8"
            >
              American Bank Ltd.
            </span>
            <p class="mb-5 text-muted fs-md-15 fs-md-16 lh-base">
              IBAN: EST6049283742809
            </p>
            <spam class="d-block text-muted fs-md-15 fs-md-16">
              Swift Code: SP29015
            </spam>
          </div>
        </div>
        <div class="buttons-list mt-15 mt-md-20 mt-lg-0">
          <button
            class="default-btn position-relative transition border-0 fw-medium text-white pt-12 pb-12 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 fs-md-15 fs-lg-16 d-inline-block me-10"
            type="button"
          >
            Print <i class="flaticon-printer position-relative ms-5 fs-12"></i>
          </button>
          <button
            class="default-outline-btn position-relative transition fw-medium text-primary pt-10 pb-10 ps-25 pe-25 ps-md-30 pe-md-30 rounded-1 fs-md-15 fs-lg-16 d-inline-block bg-gray"
            type="button"
          >
            Download
            <i class="flaticon-file-1 position-relative ms-5 top-2 fs-15"></i>
          </button>
        </div>
      </div>
      <span class="d-block text-black fs-md-15 fw-bold mb-15 mb-md-20 mb-lg-25">
        Order Summary
      </span>
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
              >
                #No
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Item
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Quantity
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Unit Price
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 pe-0"
              >
                Total Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="shadow-none lh-1 fw-semibold text-black ps-0">1.</td>
              <td class="shadow-none text-paragraph product-title">
                <h5
                  class="text-black fw-bold fs-14 fs-md-15 fs-md-16 mb-8 mb-md-10"
                >
                  Sanung Airpods 3s Voltage Multifunction
                </h5>
                <spand class="d-block">
                  Brand Model: 360059XT, With multifunction Speaker <br />and
                  wifi support.
                </spand>
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">3</td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">$125.00</td>
              <td class="shadow-none lh-1 fw-medium text-paragraph pe-0">
                $375.00
              </td>
            </tr>
            <tr>
              <td class="shadow-none lh-1 fw-semibold text-black ps-0">2.</td>
              <td class="shadow-none text-paragraph product-title">
                <h5
                  class="text-black fw-bold fs-14 fs-md-15 fs-md-16 mb-8 mb-md-10"
                >
                  Sanung 14” Laptop With HD Display, 8gb Ram, 16gb Rom
                </h5>
                <spand class="d-block">
                  Brand Model: 360059XT, With multifunction Speaker <br />and
                  wifi support.
                </spand>
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">2</td>
              <td class="shadow-none lh-1 fw-medium text-paragraph">
                $1250.00
              </td>
              <td class="shadow-none lh-1 fw-medium text-paragraph pe-0">
                $2500.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul class="order-summary-list ps-0 mb-0 list-unstyled">
        <li class="d-flex align-items-center justify-content-between">
          <span class="d-block text-paragraph fw-medium"> Grand Total </span>
          <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium">
            $2875.00
          </span>
        </li>
        <li class="d-flex align-items-center justify-content-between">
          <span class="d-block text-paragraph fw-medium">
            Shipping Charge
          </span>
          <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium">
            + $15.00
          </span>
        </li>
        <li class="d-flex align-items-center justify-content-between">
          <span class="d-block text-paragraph fw-medium"> Discount </span>
          <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium">
            - $80.00
          </span>
        </li>
        <li class="d-flex align-items-center justify-content-between">
          <span class="d-block text-paragraph fw-medium"> Estimated Tax </span>
          <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium">
            + $180.00
          </span>
        </li>
        <li class="d-flex align-items-center justify-content-between">
          <span class="d-block text-paragraph fw-medium"> Total </span>
          <span class="d-block text-primary fs-md-15 fs-lg-16 fw-bold">
            $2990.00
          </span>
        </li>
      </ul>
      <span
        class="d-block text-black text-center fs-md-15 fs-lg-16 mt-15 mt-md-25 mt-lg-35 mt-xl-50"
      >
        # Thanks For Shopping With
        <span class="text-primary fw-bold">Adlash</span> #
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "InvoiceDetails",
};
</script>