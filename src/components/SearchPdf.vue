<template>
  <div>
    <div v-if="pdfs" class="mt-3">
      <FormulateInput v-model="q" label="Rechercher" />
      <div v-for="(pdf, index) in pdfs" :key="pdf.id" class="flex items-center">
        <div
          @click="loadPdfObject(pdf)"
          class="cursor-pointer hover:bg-blue-200 p-2 rounded"
        >
          {{ new Date(pdf.dateCreation).toLocaleDateString('fr') }}
          - {{ pdf.title }} /
          {{ pdf.formValues.interlocuteur }}
        </div>
        <i
          class="fas fa-trash text-red-400 cursor-pointer ml-4"
          @click="removePdf(pdf.id, index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  async created() {
    this.pdfs = await this.$meilisearch
      .index('pdf')
      .getDocuments({ limit: 10 });
  },
  watch: {
    async q() {
      if (this.q) {
        const res = await this.$meilisearch
          .index('pdf')
          .search(this.q, { limit: 10 });
        this.pdfs = res.hits || null;
      }
    },
  },
  methods: {
    loadPdfObject(pdf) {
      this.$router.push('/form/' + pdf.id);
    },
    removePdf(id, index) {
      this.$meilisearch.index('pdf').deleteDocument(id);
      this.pdfs.splice(index, 1);
    },
  },
  data() {
    return {
      loading: false,
      pdfs: null,
      q: '',
    };
  },
};
</script>
