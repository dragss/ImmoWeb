<template>
  <div>
    <div class="fixed z-50 rounded p-3 left-3 top-12">
      <button
        @click="generateReport"
        class="px-5 rounded bg-green-500 text-white py-2"
      >
        Télécharger
      </button>
    </div>

    <vue-html2pdf
      class="ml-96 mb-3"
      filename="Dossier Avis de Valeur"
      :show-layout="true"
      :float-layout="false"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1120"
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
      <Pdf slot="pdf-content" :pdfObject="pdfData" />
    </vue-html2pdf>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VueHtml2pdf from 'vue-html2pdf';
import Pdf from '@/components/pdf';

export default {
  components: {
    VueHtml2pdf,
    Pdf,
  },
  created() {
    this.$meilisearch.index('pdf').addDocuments([
      {
        id: `${new Date()
          .toJSON()
          .slice(0, 10)
          .replace(/-/g, '-')}_${this.pdfObject.name.trim()}`,
        pdfTitle: `${new Date().toJSON().slice(0, 10).replace(/-/g, '/')} ${
          this.pdfObject.statut
        } ${this.pdfObject.name}`,
        ...this.pdfObject,
      },
    ]);
  },
  computed: {
    ...mapGetters(['pdfObject', 'insee']),
    pdfData() {
      return { ...this.pdfObject, graph: this.insee };
    },
  },
  methods: {
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
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
};
</script>
