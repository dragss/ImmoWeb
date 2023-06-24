<template>
  <div>
    <div class="text-blue-500 text-xl items-center">
      <i class="fas fa-circle-plus text-blue-500" />
      POINT FORT
    </div>
    <div
      class="grid grid-cols-2 gap-2 mt-3"
      :class="{ 'border border-red-500': error }"
    >
      <div v-for="v in values" :key="v">
        <input
          type="checkbox"
          :id="v"
          @change="(e) => handleChange(e, v)"
          :checked="result.includes(v)"
          :disabled="result.length === 8 && !result.includes(v)"
        />
        <label class="ml-2" :for="v">{{ v }}</label>
      </div>
    </div>
    <small class="mt-2">{{ result.length }} / 8 max</small>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['addToInfoForm']),
    handleChange(e, v) {
      if (e.target.checked) {
        this.result.push(v);
      } else {
        this.result = this.result.filter((item) => item !== v);
      }
      this.addToInfoForm({ goodPoint: this.result });
    },
  },
  created() {
    this.result = this.infoForm.goodPoint || [];
  },
  computed: {
    ...mapGetters(['infoForm']),
  },
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      result: [],
      value: '',
      items: [],
      values: [
        'Proximité des commerces',
        'Environnement privilégié ',
        'Quartier résidentiel',
        'Emplacement stratégique',
        'Coeur de ville',
        'Quartier historique',
        'Vue mer',
        'Vue mer spectaculaire',
        'Vue dégagée',
        'Vue exceptionnelle',
        'Bon état général (finitions)',
        'Très bon état',
        'Etat impeccable',
        'Etat proche du neuf',
        'Etat neuf',
        'Prestations de qualité',
        'Prestations haut de gamme',
        'Immeuble de caractère',
        'Immeuble de bon standing',
        'Immeuble de grand standing',
        'Maison individuelle non mitoyenne',
        'Maison de caractère',
        'Bonne Exposition',
        'Belle luminosité',
        'Logement économe',
        'Faibles charges',
        'Dernier étage',
        'Ascenseur',
        'Balcon',
        'Terrasse',
        'Garage',
        'Stationnement privatif',
        'Cave',
        'Sous-sol',
        'Sous-sol complet',
        'Cuisine haut de gamme',
        'Piscine',
        'Terrain piscinable',
      ],
    };
  },
};
</script>
