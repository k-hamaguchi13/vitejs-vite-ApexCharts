<script lang="ts" setup>
import { onMounted } from 'vue'
import ApexCharts from 'apexcharts';

var chart;
var lineBar;

var data = generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, {
  min: 30,
  max: 90
});
var data2 = generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, {
  min: 10,
  max: 100
});
var options = {
  series: [{
    data: data
  }],
  chart: {
    id: 'mainChart',
    type: 'line',
    height: 300,
    width: 700,
    toolbar: {
      autoSelected: 'pan',
      show: false
    }
  },
  colors: ['#546E7A'],
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  }
};

var options2 = {
  series: [{
    data: data
  },
  {
    data: data2
  }
  ],
  chart: {
    id: 'brushChart',
    width: 700,
    height: 200,
    type: 'line',
    foreColor: "#ccc",
    brush: {
      targets: ['mainChart'],
      enabled: true,
    },
    selection: {
      enabled: true,
    },
  },
  colors: ["#FF0080"],
  stroke: {
    width: 2
  },
  grid: {
    borderColor: "#444"
  },
  xaxis: {
    type: "datetime",
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 2
  }
};

onMounted(()=>{
  chart = new ApexCharts(document.getElementById('mainChart'), options);
  lineBar = new ApexCharts(document.getElementById('brushChart'), options2);
  chart.render();
  lineBar.render();
});

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
</script>

<template>
  <v-container>
      <v-row>
        <div id="mainChart"></div>
      </v-row>
      <v-row>
        <div id="brushChart"></div>
      </v-row>
  </v-container>
</template>

<style scoped>

</style>