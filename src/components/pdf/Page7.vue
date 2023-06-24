<template>
  <section class="pdf-page">
    <img src="/template/p7.jpg" />
    <div
      class="absolute"
      style="top: 250px; left: 80px"
      v-if="pdfObject && pdfObject.graph"
    >
      <div class="relative flex justify-around">
        <div class="p-3 w-80">
          <div class="text-2xl font-inconsolata">TAUX DE PROPRIÉTAIRES</div>
          <div class="relative pt-2 mt-5">
            <div
              class="flex w-full h-6 justify-end"
              style="background-color: rgb(0, 152, 212)"
            >
              <div
                class="h-6 bg-gray-500"
                :style="{ width: 100 - pdfObject.graph.proprio + '%' }"
              />
            </div>
            <div class="absolute top-0 w-0.5 h-10 bg-black" />
            <div
              class="absolute top-0 h-10 bg-gray-300"
              style="margin-left: 20%; width: 1px"
            />
            <div
              class="absolute top-0 h-10 bg-gray-300"
              style="margin-left: 40%; width: 1px"
            />
            <div
              class="absolute top-0 h-10 bg-gray-300"
              style="margin-left: 60%; width: 1px"
            />
            <div
              class="absolute top-0 h-10 bg-gray-300"
              style="margin-left: 80%; width: 1px"
            />
            <div
              class="absolute top-0 w-0.5 h-10 bg-black"
              style="margin-left: calc(100% - 2px)"
            />
          </div>
          <div class="mt-8">
            <div class="flex items-center" style="color: rgb(0, 152, 212)">
              <div
                class="h-4 w-7 mr-2 mt-4"
                style="background-color: rgb(0, 152, 212)"
              />
              <div class="mr-1" style="color: rgb(0, 152, 212)">
                {{ pdfObject.graph.proprio }}%
              </div>
              Propriétaires
            </div>
            <div class="flex items-center mt-1 text-gray-500">
              <div class="h-4 w-7 bg-gray-500 mr-2 mt-4" />
              <div class="text-gray-500 mr-1">
                {{ 100 - pdfObject.graph.proprio }}%
              </div>
              Locataires
            </div>
          </div>
        </div>

        <div class="p-3 w-80">
          <div class="text-2xl font-inconsolata">CATÉGORIES SOCIOPRO.</div>
          <div class="relative pt-2 mt-5">
            <div
              class="flex w-full h-6 justify-end"
              style="background-color: rgb(0, 152, 212)"
            >
              <div
                class="h-6 bg-gray-500"
                :style="{ width: pdfObject.graph.sociopro + '%' }"
              />
            </div>
            <div class="absolute top-0 w-0.5 h-10 bg-black" />
            <div
              class="absolute top-0 h-10 bg-gray-300"
              style="margin-left: 20%; width: 1px"
            />
            <div
              class="absolute top-0 h-10 bg-gray-300"
              style="margin-left: 40%; width: 1px"
            />
            <div
              class="absolute top-0 h-10 bg-gray-300"
              style="margin-left: 60%; width: 1px"
            />
            <div
              class="absolute top-0 h-10 bg-gray-300"
              style="margin-left: 80%; width: 1px"
            />
            <div
              class="absolute top-0 w-0.5 h-10 bg-black"
              style="margin-left: calc(100% - 2px)"
            />
          </div>
          <div class="mt-8">
            <div class="flex items-center" style="color: rgb(0, 152, 212)">
              <div
                class="h-4 w-7 mr-2 mt-4"
                style="background-color: rgb(0, 152, 212)"
              />
              <div class="mr-1" style="color: rgb(0, 152, 212)">
                {{ 100 - pdfObject.graph.sociopro }}%
              </div>
              Employés
            </div>
            <div class="flex items-center mt-1 text-gray-500">
              <div class="h-4 w-7 bg-gray-500 mr-2 mt-4" />
              <div class="text-gray-500 mr-1">
                {{ pdfObject.graph.sociopro }}%
              </div>
              Chefs d’entreprises et cadres
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-around mt-12">
        <div class="p-3 w-80">
          <div class="text-2xl font-inconsolata">TYPES DE LOGEMENTS</div>
          <GChart
            type="PieChart"
            class="mt-8"
            :data="chartData"
            :options="chartOptions"
          />
          <!-- <div class="relative w-48 h-48 ml-14 mt-5">
        <div
          class="absolute rounded-full w-48 h-48 top-0 left-0 bg-black"
          :style="pieChart()"
        />
        <div class="absolute rounded-full bg-white w-24 h-24 top-12 left-12" />
      </div> -->
          <div class="mt-8">
            <div class="flex items-center" style="color: rgb(0, 152, 212)">
              <div
                class="h-4 w-7 mr-2 mt-4"
                style="background-color: rgb(0, 152, 212)"
              />
              <div class="mr-1 w-14" style="color: rgb(0, 152, 212)">
                {{ pdfObject.graph.logmentType.nbResidentPct.toFixed(2) }}%
              </div>
              Résidences principales
            </div>
            <div class="flex items-center mt-1 text-gray-500">
              <div class="h-4 w-7 bg-gray-500 mr-2 mt-4" />
              <div class="text-gray-500 mr-1 w-14">
                {{ pdfObject.graph.logmentType.nbSecPct.toFixed(2) }}%
              </div>
              Résidences secondaires
            </div>
            <div class="flex items-center mt-1">
              <div class="h-4 w-7 bg-black mr-2 mt-4" />
              <div class="text-black mr-1 w-14">
                {{ pdfObject.graph.logmentType.nbVacPct.toFixed(2) }}%
              </div>
              Logements vacants
            </div>
          </div>
        </div>

        <div class="p-3 w-80">
          <div class="text-2xl font-inconsolata">POPULATION</div>
          <div class="flex mt-6">
            <div>
              <div class="w-20 mt-2 font-medium text-xs">+ de 65 ans</div>
              <div class="w-20 mt-5 font-medium text-xs">55 à 64ans</div>
              <div class="w-20 mt-5 font-medium text-xs">40 à 54 ans</div>
              <div class="w-20 mt-5 font-medium text-xs">25 à 39 ans</div>
              <div class="w-20 mt-5 font-medium text-xs">18 à 24 ans</div>
              <div class="w-20 mt-5 font-medium text-xs">- de 18 ans</div>
            </div>
            <div class="w-full flex relative">
              <div
                class="w-1/2 pb-3 border-r border-black flex flex-col items-end"
              >
                <div
                  class="h-6 w-8 mt-3"
                  style="background-color: rgb(0, 152, 212)"
                  :style="'width:' + pdfObject.graph.sexeAge.h19 * 2 + '%'"
                />
                <div
                  class="h-6 w-8 mt-3"
                  style="background-color: rgb(0, 152, 212)"
                  :style="'width:' + pdfObject.graph.sexeAge.h24 * 2 + '%'"
                />
                <div
                  class="h-6 w-8 mt-3"
                  style="background-color: rgb(0, 152, 212)"
                  :style="'width:' + pdfObject.graph.sexeAge.h39 * 2 + '%'"
                />
                <div
                  class="h-6 w-8 mt-3"
                  style="background-color: rgb(0, 152, 212)"
                  :style="'width:' + pdfObject.graph.sexeAge.h54 * 2 + '%'"
                />
                <div
                  class="h-6 w-8 mt-3"
                  style="background-color: rgb(0, 152, 212)"
                  :style="'width:' + pdfObject.graph.sexeAge.h64 * 2 + '%'"
                />
                <div
                  class="h-6 w-8 mt-3"
                  style="background-color: rgb(0, 152, 212)"
                  :style="'width:' + pdfObject.graph.sexeAge.h100 * 2 + '%'"
                />
              </div>
              <div class="w-1/2 pb-3 border-l border-black">
                <div
                  class="h-6 w-8 mt-3 bg-gray-500"
                  :style="'width:' + pdfObject.graph.sexeAge.f19 * 2 + '%'"
                />
                <div
                  class="h-6 w-8 mt-3 bg-gray-500"
                  :style="'width:' + pdfObject.graph.sexeAge.f24 * 2 + '%'"
                />
                <div
                  class="h-6 w-8 mt-3 bg-gray-500"
                  :style="'width:' + pdfObject.graph.sexeAge.f39 * 2 + '%'"
                />
                <div
                  class="h-6 w-8 mt-3 bg-gray-500"
                  :style="'width:' + pdfObject.graph.sexeAge.f54 * 2 + '%'"
                />
                <div
                  class="h-6 w-8 mt-3 bg-gray-500"
                  :style="'width:' + pdfObject.graph.sexeAge.f64 * 2 + '%'"
                />
                <div
                  class="h-6 w-8 mt-3 bg-gray-500"
                  :style="'width:' + pdfObject.graph.sexeAge.f100 * 2 + '%'"
                />
              </div>
              <div class="absolute h-full w-0.5 bg-gray-400" />
              <div class="absolute h-full w-0.5 left-14 bg-gray-400" />
              <div class="absolute h-full w-0.5 right-14 bg-gray-400" />
              <div class="absolute h-full w-0.5 right-0 bg-gray-400" />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex items-center" style="color: rgb(0, 152, 212)">
              <div
                class="h-4 w-7 mr-2 mt-4"
                style="background-color: rgb(0, 152, 212)"
              />
              Femme
            </div>
            <div class="flex items-center mt-1 text-gray-500">
              <div class="h-4 w-7 mr-2 mt-4 bg-gray-500" />
              Homme
            </div>
          </div>
        </div>
      </div>

      <!-- <div>{{ pdfObject.graph.sexeAge }}</div> -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pdfObject: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    pieChart() {
      if (this.pdfObject && this.pdfObject.graph) {
        let { nbResidentPct, nbSecPct } = this.pdfObject.graph.logmentType;
        return `background: conic-gradient(#11b981 0% ${nbResidentPct}%, #f59e0b ${nbResidentPct}% ${
          nbResidentPct + nbSecPct
        }%, #5fa5f9 ${nbResidentPct + nbSecPct}% 100%);`;
      } else {
        return '';
      }
    },
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Effort', 'Amount given'],
        ['1', this.pdfObject.graph.logmentType.nbResidentPct],
        ['2', this.pdfObject.graph.logmentType.nbSecPct],
        ['3', this.pdfObject.graph.logmentType.nbVacPct],
      ],
      chartOptions: {
        enableInteractivity: false,
        chartArea: { left: 0, top: 0, width: '100%', height: '100%' },
        tooltip: 'none',
        pieHole: 0.5,
        pieSliceText: 'none',
        legend: 'none',
        colors: ['#0098d4', '#6b7280', '#000000'],
      },
    };
  },
};
</script>
