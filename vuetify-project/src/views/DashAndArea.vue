<script lang="ts" setup>
import { onMounted } from 'vue'
import ApexCharts from 'apexcharts';

const ActualSupply = [60, 56, 61, 56, 64, 69, 69, null, null, null, null];
const PredictSupply = [null, null, null, null, null, null, 69, 53, 59, 61, 70];
const ConsumerA = [17, 18, 22, 19, 17, 26, 30, 19, 22, 23, 17];
const ConsumerB = [28, 24, 25, 15, 29, 26, 15, 24, 20, 25, 27];
const ConsumerC = [24, 29, 23, 25, 21, 15, 20, 18, 29, 15, 22];
const ConsumerSum = sumDemand();

/**
 * 需要量合計 計算
 */
function sumDemand() {
  var sumArray = [];
  ConsumerA.forEach(function(element:any, index:any){
    sumArray.push(Number(ConsumerA[index]) + Number(ConsumerB[index]) + Number(ConsumerC[index]));
  })
  return sumArray;
}

var annotationOpts = {
    xaxis: [
        {
            x: new Date('2003-06-01').getTime(),
            borderColor: '#555',
            label: {
            borderColor: '#555',
            style: {
                color: "#fff",
                background: "#555"
            },
            orientation: 'horizontal',
            text: 'Today'
            }
        }
    ]
};

// データセットの定義
var options ={
  colors: [ '#2E93fA', '#66DA26','#E91E63', '#FF9800', '#b700ff', '#546E7A'],
  series: [
    {
      name: '供給量(実測)',
      type: 'line',
      data: ActualSupply
    },
    {
      name: '供給量(予測)',
      type: 'line',
      data: PredictSupply
    },
    {
      name: '需要家A',
      type: 'line',
      data: ConsumerA,
    },
    {
      name: '需要家B',
      type: 'line',
      data: ConsumerB,
    },
    {
      name: '需要家C',
      type: 'line',
      data: ConsumerC,
    },
    {
      name: '需要家合計',
      type: 'area',
      data: ConsumerSum,
    },
  ],
  chart: {
    height: 350,
    width: 700,
    type: 'line',
    stacked: false,
  },
  annotations: annotationOpts,
  stroke: {
    width: [3, 3, 2, 2, 2, 2],
    dashArray: [0, 5, 0, 0, 0, 0],
    //curve: ['straight', 'straight', 'smooth', 'smooth']
    curve: 'smooth'
  },
 
  fill: {
    opacity: [1, 1, 0.75, 0.75, 0.75, 0.25],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
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
    text: "複数のグラフ形式を表示",
    align: "left",
  },
};

var chart;
onMounted( ()=>{
  //sumDemand();
  chart = new ApexCharts(document.getElementById('dashAndArea'), options);
  chart.render();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <div id="dashAndArea"></div>
      </v-col>
    </v-row>
  </v-container>
</template>
