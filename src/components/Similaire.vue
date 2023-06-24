<template>
  <div class="mt-10">
    <div class="text-3xl text-blue-500">
      BIEN SIMILAIRE VENDUS SECTION : {{ selectedAddress.section }}
    </div>
    <div class="rounded p-3">
      <button
        @click="generateReport"
        class="px-4 rounded bg-blue-500 text-white py-1"
      >
        Télécharger
      </button>
    </div>

    <vue-html2pdf
      class="ml-40 mt-3 mb-3"
      filename="Tableau Comparatif de bien"
      :show-layout="true"
      :float-layout="false"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1100"
      :pdf-quality="2"
      :manual-pagination="false"
      :html-to-pdf-options="{
        margin: 0,
        html2canvas: {
          scrollX: 0,
          scrollY: 0,
        },
      }"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <div>
          <table class="table-auto mt-5">
            <thead>
              <tr class="bg-blue-500">
                <th class="pl-5 pr-5">Type de Bien</th>
                <th class="pl-5 pr-5">Date de mutation</th>
                <th class="pl-5 pr-5">Identifiant</th>
                <th class="pl-5 pr-5">Surface du Bien</th>
                <th class="pl-5 pr-5">Adresse du bien</th>
                <th class="pl-5 pr-5">Valeur du bien</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(elem, index) in sameSection" :key="index">
                <td class="text-center border border-slate-700">
                  {{ elem.type }}
                </td>
                <td class="text-center border border-slate-700">
                  {{ elem.date }}
                </td>
                <td class="text-center border border-slate-700">
                  {{ elem.id_parcelle }}
                </td>
                <td class="text-center border border-slate-700">
                  {{ elem.surface_terrain || 'NC' }}m2
                </td>
                <td class="text-sm text-center border border-slate-700">
                  {{ elem.adresse }}
                </td>
                <td class="text-center border border-slate-700">
                  {{ elem.valeur }}€
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf';

export default {
  components: {
    VueHtml2pdf,
  },
  methods: {
    onProgress() {
      console.log('onProgress');
    },
    hasGenerated() {
      console.log('hasGenerated');
    },
    hasStartedGeneration() {
      console.log('hasStartedGeneration');
    },
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  props: {
    selectedAddress: {
      type: Object,
      default: () => {},
    },
    sameSection: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>
