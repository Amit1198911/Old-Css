import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const BarChart = () => {
  useEffect(() => {
    const chartConfig = {
      series: [
        {
          name: "Sales",
          data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
      ],
      chart: {
        type: "bar",
        height: 240,
        toolbar: {
          show: false,
        },
      },
      title: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#bar-chart"),
      chartConfig
    );
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
      {/* Header */}
      <div className="relative mx-4 mt-4 flex flex-col gap-1 md:flex-row md:items-center">
        
      </div>
      {/* Chart */}
      <div className="pt-1 px-2 pb-0">
        <div id="bar-chart" />
      </div>
    </div>
  );
};

export default BarChart;
