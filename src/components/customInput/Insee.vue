<template>
  <div class="">
    <div>
      <strong>Code commune</strong>
    </div>
    <div class="flex items-center">
      <input
        class="border mr-1 w-60 p-1 text-lg outline-none"
        v-model="codeCommune"
        placeholder="Code Insee"
        @keydown.enter="loadComune()"
      />
      <button
        type="button"
        class="bg-blue-400 text-white px-6 py-2"
        :class="{ 'opacity-70': !codeCommune }"
        @click="loadComune()"
      >
        <div v-if="!loading">Go</div>
        <div class="flex items-center justify-center" v-else>
          <div
            class="w-5 h-5 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"
          ></div>
        </div>
      </button>
    </div>

    <div class="mt-10" v-if="!loading && graph && graph.sexeAge">
      <InseeGraph :graph="graph" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import InseeGraph from '@/components/InseeGraph';
import Checkmark from '@/components/Checkmark';

export default {
  components: {
    InseeGraph,
    Checkmark,
  },
  created() {
    this.graph = this.context.model;
  },
  methods: {
    async loadComune() {
      this.loading = true;
      this.graph = {};
      let res1,
        res2,
        res3,
        res4 = null;
      try {
        //================================================================
        // TYPES DE LOGEMENTS
        //================================================================
        res1 = await axios.get(
          `https://api.insee.fr/donnees-locales/V0.1/donnees/geo-TYPLR-CATL@GEO2021RP2018/COM-${this.codeCommune}.all.all`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer 07796c07-e112-3560-b894-ca479fa80696',
            },
          }
        );
        if (res1.data && res1.data.Cellule) {
          let nbTotal = parseFloat(res1.data.Cellule[20].Valeur);
          let nbResident = parseFloat(res1.data.Cellule[24].Valeur);
          let nbSec =
            parseFloat(res1.data.Cellule[32].Valeur) +
            parseFloat(res1.data.Cellule[28].Valeur);
          let nbVac = parseFloat(res1.data.Cellule[36].Valeur);

          let nbSecPct = (nbSec / nbTotal) * 100;
          let nbVacPct = (nbVac / nbTotal) * 100;
          let nbResidentPct = (nbResident / nbTotal) * 100;

          this.graph.logmentType = {
            nbResidentPct,
            nbSecPct,
            nbVacPct,
          };
        }

        //================================================================
        // CATÉGORIES SOCIOPRO
        //================================================================
        res2 = await axios.get(
          `https://api.insee.fr/donnees-locales/V0.1/donnees/geo-CS1_6@GEO2021RP2018/COM-${this.codeCommune}.all`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer 07796c07-e112-3560-b894-ca479fa80696',
            },
          }
        );

        if (res2.data && res2.data.Cellule) {
          let total2 = parseInt(res2.data.Cellule[0].Valeur);
          let nb_dirigeants =
            parseInt(res2.data.Cellule[3].Valeur) +
            parseInt(res2.data.Cellule[2].Valeur);
          let pourcentage = parseInt((nb_dirigeants * 100) / total2);
          this.graph.sociopro = pourcentage;
        }

        //================================================================
        // get Locataires / Propriétaires
        //================================================================
        res3 = await axios.get(
          `https://api.insee.fr/donnees-locales/V0.1/donnees/geo-STOCD@GEO2021RP2018/COM-${this.codeCommune}.all`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer 07796c07-e112-3560-b894-ca479fa80696',
            },
          }
        );
        if (res3.data && res3.data.Cellule) {
          let total3 = parseInt(res3.data.Cellule[6].Valeur);
          let nb_proprietaire = parseInt(res3.data.Cellule[7].Valeur);
          let pourcentage3 = parseInt((nb_proprietaire * 100) / total3);
          this.graph.proprio = pourcentage3;
        }

        //================================================================
        // NON
        //================================================================
        res4 = await axios.get(
          `https://api.insee.fr/donnees-locales/V0.1/donnees/geo-SEXE-AGEACT6_B-TACTR@GEO2021RP2018/COM-${this.codeCommune}.all.all.all`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer 07796c07-e112-3560-b894-ca479fa80696',
            },
          }
        );

        this.loading = false;
        if (res4.data && res4.data.Cellule) {
          let total = res4.data.Cellule[0].Valeur;
          let htotal = res4.data.Cellule[1].Valeur;
          let ftotal = res4.data.Cellule[2].Valeur;

          let total19 = res4.data.Cellule[3].Valeur;
          let h19 = (res4.data.Cellule[4].Valeur * 100) / htotal;
          let f19 = (res4.data.Cellule[5].Valeur * 100) / ftotal;

          let total24 = res4.data.Cellule[6].Valeur;
          let h24 = (res4.data.Cellule[7].Valeur * 100) / htotal;
          let f24 = (res4.data.Cellule[8].Valeur * 100) / ftotal;

          let total39 = res4.data.Cellule[9].Valeur;
          let h39 = (res4.data.Cellule[10].Valeur * 100) / htotal;
          let f39 = (res4.data.Cellule[11].Valeur * 100) / ftotal;

          let total54 = res4.data.Cellule[12].Valeur;
          let h54 = (res4.data.Cellule[13].Valeur * 100) / htotal;
          let f54 = (res4.data.Cellule[14].Valeur * 100) / ftotal;

          let total64 = res4.data.Cellule[15].Valeur;
          let h64 = (res4.data.Cellule[16].Valeur * 100) / htotal;
          let f64 = (res4.data.Cellule[17].Valeur * 100) / ftotal;

          let total100 = res4.data.Cellule[18].Valeur;
          let h100 = (res4.data.Cellule[19].Valeur * 100) / htotal;
          let f100 = (res4.data.Cellule[20].Valeur * 100) / ftotal;

          this.graph.sexeAge = {
            total,
            ftotal,
            htotal,
            total19,
            h19,
            f19,
            total24,
            h24,
            f24,
            total39,
            h39,
            f39,
            total54,
            h54,
            f54,
            total64,
            h64,
            f64,
            total100,
            h100,
            f100,
          };
        }

        if (
          !!this.graph &&
          !!this.graph.logmentType &&
          !!this.graph.sociopro &&
          !!this.graph.proprio &&
          !!this.graph.sexeAge
        ) {
          this.context.model = this.graph;
        }
        this.loading = false;
      } catch (e) {
        this.loading = false;
        this.graph = {};
      }
    },
  },
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      codeCommune: '',
      loading: false,
      graph: {},
    };
  },
};
</script>
