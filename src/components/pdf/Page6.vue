<template>
  <section class="pdf-page">
    <img src="/template/p6.jpg" />
    <div class="absolute" style="top: 600px; left: 53px">
      Prix moyen des biens pour la commune de {{ pdfObject.commune }} au cours
      de la dernière année.
    </div>
    <div class="absolute" style="top: 650px; left: 40px">
      <div id="chart" />
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
  mounted() {
    axios
      .get(
        `https://api-terredimmo.fr/prices/${this.pdfObject.code_postal}?date=202&json=true`
      )
      .then((res) => {
        var chartData = res.data;

        this.chart = window.bb.generate({
          bindto: '#chart',
          size: {
            width: 715,
          },
          axis: {
            y: {
              min: Math.min(...chartData.data) - 300,
              label: 'Prix au m2',
              tick: {
                format: function (y) {
                  return `${y} €/m²`;
                },
              },
            },
            x: {
              type: 'timeseries',
              ticks: {
                display: false, //this will remove only the label
                format: function (x) {
                  const mois = [
                    'janv',
                    'fev',
                    'mars',
                    'avril',
                    'mai',
                    'juin',
                    'juil',
                    'aout',
                    'sept',
                    'oct',
                    'nov',
                    'dec',
                  ];
                  return `${mois[x.getMonth()]} ${x.getFullYear()}`;
                },
              },
            },
          },
          interaction: {
            enabled: false,
          },
          data: {
            x: 'x',
            y: chartData.communeName,
            columns: [
              ['x', ...chartData.xLabels],
              [chartData.communeName, ...chartData.data],
            ],
            labels: {
              show: true,
              position: {
                [chartData.communeName]: {
                  x: 0,
                  y: -8,
                },
              },
              format: function (v, id, i) {
                if (i && i > 0) {
                  let a = v;
                  let b = chartData.data[i - 1];
                  let percent = ((a - b) / b) * 100;
                  return `${percent > 0 ? '+' : ''}${percent.toFixed(2)}%`;
                }
                return ``;
              },
            },
            type: 'area-spline',
          },
        });
      });
  },
  props: {
    pdfObject: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chart: null,
    };
  },
};
</script>
