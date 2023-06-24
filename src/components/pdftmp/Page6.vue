<template>
  <section class="pdf-page">
    <img src="/template/p6.jpg" />
    <div class="absolute" style="top: 600px; left: 53px">
      Prix moyen des biens pour la commune de
      {{ pdfObject.formValues.commune }} au cours de la dernière année.
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
        `https://api-terredimmo.fr/prices/${this.pdfObject.formValues.code_postal}?date=202&json=true`
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
              tick: {
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
                  return `${mois[x.getMonth()]}`; // ${x.getFullYear()}`;
                },
              },
            },
          },
          interaction: {
            enabled: false,
          },
          data: {
            colors: { [this.pdfObject.formValues.commune]: '#000' },
            x: 'x',
            y: this.pdfObject.formValues.commune,
            columns: [
              ['x', ...chartData.xLabels],
              [this.pdfObject.formValues.commune, ...chartData.data],
            ],
            labels: {
              show: true,
              position: {
                [this.pdfObject.formValues.commune]: {
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
            type: 'spline',
          },
          grid: {
            y: {
              show: true,
            },
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

<style lang="scss">
.bb {
  .bb-line {
    stroke-width: 2px;
  }

  .domain {
    display: none;
  }

  .bb-ygrid {
    stroke-dasharray: none;
    stroke: '#e6e6e6';
  }

  .bb-circle {
    r: 5px;
    fill: rgb(255, 255, 255) !important;
    stroke: rgb(0, 0, 0) !important;
    stroke-width: 2px;
  }
}
</style>
