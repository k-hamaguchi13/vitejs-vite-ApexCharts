<script lang="ts" setup>
import { onMounted } from 'vue'
import ApexCharts from 'apexcharts';
import MixChart from './MixChart.vue';
import DashLineChart from './DashLineChart.vue';
import BrushChart from './BrushChart.vue';
import DashAndArea from './DashAndArea.vue';
import Sample from './Sample.vue';

// データセットの定義
var series = [
  {
    name: "実測値",
    data: [30, 40, 35, 50, 49, null, null, null, null],
  },
  {
    name: "予測値",
    data: [null, null, null, null, 49, 45, 50, 58, 70],
  },
];

// グラフの設定
var options = {
  chart: {
    height: 350,
    width: 700,
    type: "line",
  },
  series: series,
  colors: ["#008FFB", "#FF4560"],
  stroke: {
    width: [3, 3],
    dashArray: [0, 5] // 一つ目の折れ線グラフは実線、二つ目の折れ線グラフは破線
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  title: {
    text: "二つの折れ線グラフ使って一つのグラフを表現",
    align: "left",
  },
  xaxis: {
    categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
  },
  yaxis: {
    title: {
      text: "値",
    },
  },

};

onMounted( ()=>{
  var chart = new ApexCharts(document.getElementById('chart'), options);
  chart.render();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <div id="chart"></div>
      </v-col>
      <v-col cols="6">
        <DashLineChart />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <MixChart />
      </v-col>
      <v-col cols="6">
        <DashAndArea />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <BrushChart />
        <Sample />
      </v-col>
    </v-row>
  </v-container>
</template>
