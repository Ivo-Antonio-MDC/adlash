<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="d-sm-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Task Overview</h5>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Show</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option value="1" class="fw-medium" selected>All</option>
            <option value="2" class="fw-medium">Sat</option>
            <option value="3" class="fw-medium">Sun</option>
            <option value="4" class="fw-medium">Mon</option>
            <option value="5" class="fw-medium">Tue</option>
            <option value="6" class="fw-medium">Wed</option>
            <option value="7" class="fw-medium">Thu</option>
            <option value="8" class="fw-medium">Fri</option>
          </select>
        </div>
      </div>
      <div id="taskOverviewChart" class="chart">
        <apexchart
          type="bar"
          height="370"
          :options="taskOverviewChart"
          :series="task"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskOverview",
  data: function () {
    return {
      task: [
        {
          name: "This Week",
          data: [250, 200, 280, 150, 190, 350, 220, 180],
        },
      ],
      taskOverviewChart: {
        chart: {
          type: "bar",
          height: 370,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "24%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#6560F0"],
        stroke: {
          show: false,
        },
        xaxis: {
          categories: [
            "Spt_01",
            "Spt_02",
            "Spt_03",
            "Spt_04",
            "Spt_05",
            "Spt_06",
            "Spt_07",
            "Spt_08",
          ],
          labels: {
            show: true,
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: "#9C9AB6",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          show: true,
          tickAmount: 6,
          labels: {
            show: true,
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: ["#9C9AB6"],
              fontSize: "14px",
              fontWeight: 500,
            },
          },
          axisBorder: {
            show: true,
            color: "#eee",
          },
        },
        fill: {
          opacity: 1,
          // type: 'gradient',
          // gradient: {
          //     opacityTo: 1,
          //     opacityFrom: .01,
          //     type: "vertical",
          //     stops: [0, 60, 100]
          // }
        },
        tooltip: {
          style: {
            fontSize: "14px",
            fontFamily: "Red Hat Display, sans-serif",
          },
        },
        grid: {
          show: true,
          strokeDashArray: 5,
          borderColor: "#d9e9ef",
        },
      },
    };
  },
});
</script>