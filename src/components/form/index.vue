<template>
  <div class="pb-32">
    <FormulateForm v-model="pdfObject.formValues" @submit="submit">
      <div class="flex justify-center text-center">
        <FormulateInput
          class="w-80"
          name="title"
          label="Titre du PDF"
          validation="required"
          v-model="pdfObject.title"
        />
      </div>
      <ClientInfo class="mb-5" />
      <div class="flex justify-center">
        <Perception class="mb-5 w-1/2" />
        <div class="w-1/2">
          <Localisation class="mb-5" />
          <InfoBien :formValues="pdfObject.formValues" class="mb-5" />
          <EtatBien class="mb-5" />
        </div>
      </div>
      <div class="flex justify-center">
        <InfoFinance :formValues="pdfObject.formValues" class="mb-5 w-1/2" />
        <Estimation :formValues="pdfObject.formValues" class="mb-5 w-1/2" />
      </div>
      <Interlocuteur :formValues="pdfObject.formValues" class="mb-5" />
      <FormulateInput
        type="insee"
        label="iness"
        name="graph"
        validation="required"
      />
      <FormulateInput type="submit" class="fixed bottom-10 left-10">
        <i class="fas fa-save fa-3x p-2" />
        <Checkmark v-if="clicked" class="ml-4" />
      </FormulateInput>
    </FormulateForm>
  </div>
</template>

<script>
import Checkmark from '@/components/Checkmark';
import Localisation from './Localisation';
import ClientInfo from './ClientInfo';
import InfoBien from './InfoBien';
import Perception from './Perception';
import InfoFinance from './InfoFinance';
import EtatBien from './EtatBien';
import Estimation from './Estimation';
import Interlocuteur from './Interlocuteur';

export default {
  name: 'Form',
  components: {
    Checkmark,
    ClientInfo,
    Localisation,
    InfoBien,
    Perception,
    InfoFinance,
    EtatBien,
    Estimation,
    Interlocuteur,
  },
  async created() {
    if (this.$route.params.id) {
      this.pdfObject = await this.$meilisearch
        .index('pdf')
        .getDocument(this.$route.params.id);
      this.$emit('submit', this.pdfObject);
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.pdfObject);
      this.pdfObject.dateUpdate = new Date().getTime();
      this.$meilisearch.index('pdf').addDocuments([this.pdfObject]);
      this.clicked = true;
      setTimeout(() => {
        this.clicked = false;
      }, 1000);
    },
  },
  data() {
    return {
      clicked: false,
      pdfObject: {
        id: new Date().getTime(),
        dateCreation: new Date().getTime(),
        dateUpdate: null,
        title: '',
        formValues: {},
      },
    };
  },
};
</script>
