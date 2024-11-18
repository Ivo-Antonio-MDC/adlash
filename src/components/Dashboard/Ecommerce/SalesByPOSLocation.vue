<template>
  <div class="card mb-25 border-0 rounded-0 bg-white sales-pos-location-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="mb-15 d-sm-flex align-items-center justify-content-between">
        <h6 class="card-title fw-bold mb-0">Sales By POS Location</h6>
        <router-link
          to="/"
          class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5"
        >
          View Details
        </router-link>
      </div>
      <ul class="list ps-0 mb-5 list-unstyled mt-15">
        <li class="text-muted position-relative fw-medium">
          Allocated Budget -
          <span class="text-black fw-bold ms-8">$29,500.00</span>
          <span class="fw-bold text-success ms-5">
            5.5%
            <i class="flaticon-up-arrow fs-12 lh-1 position-relative top-1"></i>
          </span>
        </li>
        <li class="text-muted position-relative fw-medium">
          Actual Spending -
          <span class="text-black fw-bold ms-15">$19,500.00</span>
          <span class="fw-bold text-danger ms-5">
            1.4%
            <i class="flaticon-down-arrow fs-12 lh-1 position-relative top-1">
            </i>
          </span>
        </li>
      </ul>
      <div id="salesByPosLocationChart" class="chart">
        <apexchart
          type="radar"
          height="385"
          :options="salesByPosLocationChart"
          :series="sales"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SalesByPOSLocation",
  data: function () {
    return {
      sales: [
        {
          name: "Allocated Budget",
          data: [100, 20, 45, 20, 65, 20, 60],
        },
        {
          name: "Actual Spending",
          data: [40, 40, 40, 60, 40, 80, 40],
        },
      ],
      salesByPosLocationChart: {
        chart: {
          type: "radar",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          radar: {
            polygons: {
              strokeColors: "#d9e9ef",
              connectorColors: "#d9e9ef",
            },
          },
        },
        legend: {
          show: false,
        },
        colors: ["#6560F0", "#06B48A"],
        markers: {
          size: 5,
          strokeWidth: 0,
        },
        tooltip: {
          y: {
            formatter: function (val: unknown) {
              return val;
            },
          },
          style: {
            fontSize: "14px",
            fontFamily: "Red Hat Display, sans-serif",
          },
        },
        xaxis: {
          categories: [
            "Marketing",
            "Sales",
            "Dev",
            "Tech",
            "Support",
            "Social",
            "Admin",
          ],
          labels: {
            show: true,
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: ["#9C9AB6"],
              fontSize: "14px",
              fontWeight: 500,
            },
          },
        },
        yaxis: {
          tickAmount: 7,
          show: false,
          labels: {
            formatter: function (val: unknown, i: number) {
              if (i % 2 === 0) {
                return val;
              } else {
                return "";
              }
            },
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: ["#9C9AB6"],
              fontSize: "14px",
              fontWeight: 500,
            },
          },
        },
      },
    };
  },
});
</script>