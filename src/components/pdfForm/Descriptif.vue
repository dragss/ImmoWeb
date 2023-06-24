<template>
  <div>
    <div class="text-xl text-blue-500">DESCRIPTIF</div>
    <div class="mt-1">
      <strong>Surface habitable :</strong>
      <input
        @change="addToInfoForm({ surface_reelle_bati })"
        class="border rounded ml-1 w-20"
        :class="{ 'border-red-500': errorKey.includes('surface_reelle_bati') }"
        type="number"
        v-model="surface_reelle_bati"
      />m2
    </div>
    <div class="mt-1">
      <strong>Terrain :</strong>
      <input
        @change="addToInfoForm({ surface_terrain })"
        type="number"
        class="border rounded ml-1 w-20"
        :class="{ 'border-red-500': errorKey.includes('surface_terrain') }"
        v-model="surface_terrain"
      />m2
    </div>
    <div class="mt-1">
      <strong>Pièces :</strong>
      <input
        @change="addToInfoForm({ nombre_pieces_principales })"
        type="number"
        class="border rounded ml-1"
        :class="{
          'border-red-500': errorKey.includes('nombre_pieces_principales'),
        }"
        v-model="nombre_pieces_principales"
      />
    </div>
    <div class="mt-1">
      <strong>Surface séjour :</strong>
      <input
        @change="addToInfoForm({ surface_sejour })"
        type="number"
        class="border rounded ml-1"
        :class="{
          'border-red-500': errorKey.includes('surface_sejour'),
        }"
        v-model="surface_sejour"
      />m2
    </div>
    <div class="mt-1">
      <label for="Chambres-select"><strong>Chambre(s) :</strong></label>

      <select
        class="border rounded ml-1"
        name="Chambres"
        id="Chambres-select"
        :class="{ 'border-red-500': errorKey.includes('nombre_chambres') }"
        @change="
          addToInfoForm({
            nombre_chambres,
          })
        "
        v-model="nombre_chambres"
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
      </select>
    </div>

    <!-- <div class="mt-1">
      <label for="Bains-select"><strong>Salle(s) de bain(s) :</strong></label>

      <select
        class="border rounded ml-1"
        name="Bains"
        id="Bains-select"
        :class="{ 'border-red-500': errorKey.includes('nombre_bains') }"
        @change="
          addToInfoForm({
            nombre_bains,
          })
        "
        v-model="nombre_bains"
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div> -->

    <div class="mt-1">
      <label for="Cuisine-select"><strong>Cuisine :</strong></label>

      <select
        name="Cuisine"
        id="Cuisine-select"
        class="border rounded ml-1"
        :class="{ 'border-red-500': errorKey.includes('cuisine') }"
        @change="
          addToInfoForm({
            cuisine,
          })
        "
        v-model="cuisine"
      >
        <option value="Aménagée">Aménagée</option>
        <option value="Équipée">Équipée</option>
        <option value="Aménagée et équipée">Aménagée et équipée</option>
        <option value="Sans">Sans</option>
      </select>
    </div>
    <div class="mt-1">
      <label for="Chauffage-select"><strong>Type de Chauffage :</strong></label>

      <select
        name="Chauffage"
        class="border rounded ml-1"
        :class="{ 'border-red-500': errorKey.includes('chauffage') }"
        id="Chauffage-select"
        @change="
          addToInfoForm({
            chauffage,
          })
        "
        v-model="chauffage"
      >
        <option value="Gaz">Gaz</option>
        <option value="Bois">Bois</option>
        <option value="Granulés">Granulés</option>
        <option value="Fuel">Fuel</option>
        <option value="Électrique">Électrique</option>
        <option value="Solaire">Solaire</option>
        <option value="Collectif">Collectif</option>
        <option value="Individuel">Individuel</option>
        <option value="Sans">Sans</option>
      </select>
    </div>

    <div class="mt-1">
      <label for="Chauffage-select"><strong>Mode de Chauffage :</strong></label>

      <select
        class="border rounded ml-1"
        :class="{ 'border-red-500': errorKey.includes('chauffage_mode') }"
        @change="
          addToInfoForm({
            chauffage_mode,
          })
        "
        v-model="chauffage_mode"
      >
        <option value="Radiateur">Radiateur</option>
        <option value="Cheminée">Cheminée</option>
        <option value="Panneau solaire">Panneau solaire</option>
        <option value="Chauffage au sol">Chauffage au sol</option>
        <option value="Poêle">Poêle</option>
        <option value="Pompe à chaleur">Pompe à chaleur</option>
        <option value="Sans">Sans</option>
      </select>
    </div>

    <div class="mt-1" v-if="infoForm.type_local == 'Maison'">
      <label for="Chauffage-select"><strong>Type de toiture :</strong></label>

      <select
        class="border rounded ml-1"
        :class="{ 'border-red-500': errorKey.includes('toiture_type') }"
        @change="
          addToInfoForm({
            toiture_type,
          })
        "
        v-model="toiture_type"
      >
        <option value="Ardoises naturelles">Ardoises naturelles</option>
        <option value="Shingle">Shingle</option>
        <option value="Fibrociment">Fibrociment</option>
        <option value="Zinc">Zinc</option>
        <option value="Bac d'acier">Bac d'acier</option>
        <option value="Tuiles">Tuiles</option>
        <option value="Bois">Bois</option>
        <option value="Chaume">Chaume</option>
        <option value="Panneau solaire">Panneau solaire</option>
        <option value=" Photovoltaïques">Photovoltaïques</option>
      </select>
    </div>

    <div class="mt-1">
      <label for="year-select"><strong>Année de construction :</strong></label>
      <input
        class="border rounded ml-1"
        @change="
          addToInfoForm({
            year,
          })
        "
        :class="{ 'border-red-500': errorKey.includes('year') }"
        v-model="year"
        id="year-select"
        type="number"
        min="1900"
        max="2050"
        step="10"
        value="2010"
      />
    </div>

    <!-- <div class="mt-1">
      <label for="DPE-select"><strong>DPE :</strong></label>

      <select
        name="DPE"
        class="border rounded ml-1"
        :class="{ 'border-red-500': errorKey.includes('dpe') }"
        id="DPE-select"
        @change="
          $emit('change', {
            dpe,
          })
        "
        v-model="dpe"
      >
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
      </select>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.surface_reelle_bati = this.infoForm.surface_reelle_bati || 'NC';
    this.surface_terrain = this.infoForm.surface_terrain || 'NC';
    this.nombre_pieces_principales =
      this.infoForm.nombre_pieces_principales || 1;
    this.nombre_chambres = this.infoForm.nombre_chambres || 0;
    this.chauffage = this.infoForm.chauffage || 'Gaz';
    this.chauffage_mode = this.infoForm.chauffage_mode || 'Radiateur';
    this.cuisine = this.infoForm.cuisine || 'Aménagée';
    this.toiture_type = this.infoForm.toiture_type || 'Ardoises naturelles';
    this.year = this.infoForm.year || 1990;
    this.dpe = this.infoForm.dpe || 'A';

    this.addToInfoForm({
      surface_reelle_bati: this.surface_reelle_bati,
      surface_terrain: this.surface_terrain,
      nombre_pieces_principales: this.nombre_pieces_principales,
      nombre_chambres: this.nombre_chambres,
      chauffage: this.chauffage,
      chauffage_mode: this.chauffage_mode,
      cuisine: this.cuisine,
      toiture_type: this.toiture_type,
      year: this.year,
      dpe: this.dpe,
    });
  },
  computed: {
    ...mapGetters(['infoForm']),
  },
  methods: {
    ...mapActions(['addToInfoForm']),
  },
  props: {
    errorKey: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      surface_reelle_bati: '',
      surface_terrain: '',
      nombre_pieces_principales: 1,
      nombre_chambres: '0',
      chauffage: 'Gaz',
      chauffage_mode: 'Radiateur',
      cuisine: 'Aménagée',
      year: 1990,
      dpe: 'A',
    };
  },
};
</script>
