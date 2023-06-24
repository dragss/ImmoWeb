<template>
  <div class="pb-10 pt-3">
    <div class="text-3xl text-blue-500">CARACTÉRISTIQUES DE VOTRE BIEN</div>
    <hr class="mt-8" />
    <div class="flex mt-4">
      <Descriptif :errorKey="errorKey" class="w-96" />
      <Localisation :errorKey="errorKey" class="w-96" />
    </div>
    <hr class="mt-8" />
    <div class="flex mt-8">
      <EtatDuBien class="w-96" :errorKey="errorKey" />
      <InformationsFinancieres :errorKey="errorKey" class="w-96" />
    </div>

    <hr class="mt-8" />

    <Presentation class="mt-8" :errorKey="errorKey" />
    <hr class="mt-8" />

    <div class="text-2xl text-blue-500 mt-8">PERCEPTION DE VOTRE BIEN</div>

    <Rating class="mt-5" :errorKey="errorKey" />
    <hr class="mt-8" />
    <div class="flex mt-8">
      <!-- <PointFort
        @change="addToPdfObject"
        class="w-96"
        :errorKey="errorKey"
        :pdfObject="pdfObject"
      /> -->

      <CheckList :error="errorKey.includes('goodPoint')" />
    </div>

    <hr class="mt-8" />
    <Comantaire class="mt-8" :errorKey="errorKey" />

    <hr class="mt-8" />
    <Estimation class="mt-8" :errorKey="errorKey" />

    <hr class="mt-8" />

    <Interlocuteur class="mt-8" />

    <div
      v-if="errorKey.length"
      class="bg-red-100 border border-red-500 rounded-lg p-3 mt-8"
    >
      <div class="text-lg">le formulaire n'est pas rempli correctement :</div>
      <div class="text-red-500" v-for="key in errorKey" :key="key">
        . {{ errorKeyLabel[key] }}
      </div>
    </div>

    <button
      @click="submitForm()"
      class="flex items-center mb-10 mt-5 bg-green-400 px-6 py-2 text-white rounded text-lg font-bold"
    >
      Enregistrer
      <i class="fas fa-save ml-2" />
      <Checkmark v-if="clicked" class="ml-4" />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Checkmark from '@/components/Checkmark';
import Descriptif from './Descriptif';
import Localisation from './Localisation';
import EtatDuBien from './EtatDuBien';
import InformationsFinancieres from './InformationsFinancieres';
import Presentation from './Presentation';
import Rating from './Rating';
import PointFort from './PointFort';
import Comantaire from './Comantaire';
import Estimation from './Estimation';
import Interlocuteur from './Interlocuteur';
import CheckList from '@/components/ui/CheckList';

export default {
  name: 'PdfForm',
  components: {
    Checkmark,
    Descriptif,
    Localisation,
    EtatDuBien,
    InformationsFinancieres,
    Presentation,
    Rating,
    PointFort,
    Comantaire,
    Estimation,
    Interlocuteur,
    CheckList,
  },
  computed: {
    ...mapGetters(['infoForm']),
    errorKey() {
      if (!this.submited) {
        return [];
      }

      let res = [];
      for (let key in this.infoForm) {
        if (
          Object.keys(this.errorKeyLabel).includes(key) &&
          !this.infoForm[key] &&
          this.infoForm[key] !== 0 &&
          key != 'graph'
        ) {
          res.push(key);
        }
      }

      if (!this.infoForm.goodPoint || !this.infoForm.goodPoint.length) {
        res.push('goodPoint');
      }

      return res;
    },
  },
  methods: {
    ...mapActions(['setPdfObject']),
    submitForm() {
      this.submited = true;

      if (!this.errorKey.length) {
        this.setPdfObject(this.infoForm);
        this.clicked = true;
        setTimeout(() => {
          this.clicked = false;
          this.$router.push('/pdf-gen/step/4');
        }, 1000);
      }
    },
  },
  data() {
    return {
      clicked: false,
      submited: false,
      errorKeyLabel: {
        statut: 'Civilité',
        type_local: 'Type de Bien',
        etage: 'Etage',
        goodPoint: 'Point Fort',
        surface: 'Surface habitable',
        terrain: 'Terrain',
        pieces: 'Pièces',
        chambres: 'Chambres',
        complete_address: 'Adresse',
        code_postal: 'Code postal',
        commune: 'Commune',
        secteur: 'Secteur',
        proxy: 'A proximité',
        charges: 'Charges',
        taxeFonciere: 'Taxe foncière',
        taxeHabit: "Taxe d'habitation",
        presentation: 'PRÉSENTATION DU BIEN',
        comment: 'COMMENTAIRES',
        lowPrice: 'Estimation du bien (prix bas)',
        highPrice: 'Estimation du bien (prix haut)',
      },
    };
  },
};
</script>
