<script lang="ts" setup>
import { onMounted } from 'vue'
import ApexCharts from 'apexcharts';

// データセットの定義
var options ={
  series: [
    {
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    },
    {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    },
    {
      name: 'TEAM C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }
  ],
  chart: {
    height: 350,
    width: 700,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: { columnWidth: '50%' }
  },

  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: [ '01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
            '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: 'Points',
    },
    min: 0
  },
  title: {
    text: "複数のグラフ形式を表示 & チェックボックスでグラフの表示切替",
    align: "left",
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;

      }
    }
  }
};

var chart;
onMounted( ()=>{
  chart = new ApexCharts(document.getElementById('mixChart'), options);
  chart.render();
});

// チェックボックスチェックイベント
function checkEvent(){
  var ele = document.getElementById('series1Checkbox');
  if( ele.checked ){
    chart.showSeries('TEAM C');
  }
  else{
    chart.hideSeries('TEAM C');
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <div id="mixChart"></div>
      </v-col>
      <v-col cols="2">
        <label>
          <input type="checkbox" id="series1Checkbox" checked @click="checkEvent()"> TEAM C
        </label>
      </v-col>
    </v-row>
  </v-container>
</template>
