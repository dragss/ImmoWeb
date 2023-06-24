<template>
  <div>
    <div class="text-xl text-blue-500">LOCALISATION</div>
    <div class="mt-1">
      <strong>Nom du propriétaire :</strong>
      <input
        class="border rounded p-1 ml-1"
        @change="addToInfoForm({ name })"
        v-model="name"
      />
    </div>

    <div class="mt-1">
      <label for="typeselect"><strong>Civilité :</strong></label>
      <select
        name="type"
        class="border rounded ml-1"
        id="statut"
        @change="
          addToInfoForm({
            statut,
          })
        "
        :class="{ 'border-red-500': errorKey.includes('statut') }"
        v-model="statut"
      >
        <option value="Mr">Mr.</option>
        <option value="Mme.">Mme.</option>
        <option value="Mr. et Mme.">Mr. et Mme.</option>
        <option value="Non Communiqué">Non Communiqué</option>
      </select>
    </div>
    <div class="mt-1">
      <strong>Adresse :</strong>
      <input
        class="border rounded p-1 ml-1"
        @change="addToInfoForm({ complete_address })"
        :class="{ 'border-red-500': errorKey.includes('complete_address') }"
        v-model="complete_address"
      />
    </div>
    <div class="mt-1">
      <strong>Code postal :</strong>
      <input
        class="border rounded p-1 ml-1"
        @change="addToInfoForm({ code_postal })"
        :class="{ 'border-red-500': errorKey.includes('code_postal') }"
        v-model="code_postal"
      />
    </div>
    <div class="mt-1">
      <strong>Commune :</strong>
      <input
        class="border rounded p-1 ml-1"
        @change="addToInfoForm({ commune })"
        :class="{ 'border-red-500': errorKey.includes('commune') }"
        v-model="commune"
      />
    </div>
    <div class="mt-1">
      <label for="typeselect"><strong>Type de bien :</strong></label>
      <select
        name="type"
        class="border rounded ml-1"
        id="typeselect"
        @change="
          addToInfoForm({
            type_local,
          })
        "
        :class="{ 'border-red-500': errorKey.includes('type_local') }"
        v-model="type_local"
      >
        <option value="Appartement">Appartement</option>
        <option value="Maison">Maison</option>
        <option value="Maison de maître">Maison de maître</option>
        <option value="Longère">Longère</option>
        <option value="Propriété">Propriété</option>
        <option value="Manoir">Manoir</option>
        <option value="Château">Château</option>
        <option value="Terrain">Terrain</option>
        <option value="Local Commercial">Local Commercial</option>
      </select>
    </div>

    <div class="mt-1" v-if="infoForm.type_local == 'Appartement'">
      <label for="typeselect"><strong>Étage : </strong></label>
      <input
        @change="
          addToInfoForm({
            etage,
          })
        "
        :class="{ 'border-red-500': errorKey.includes('etage') }"
        v-model="etage"
        class="border rounded p-1"
        type="number"
      />
    </div>
    <div class="mt-1">
      <label for="Secteur-select"><strong>Secteur :</strong></label>
      <input
        id="Secteur-select"
        name="Secteur"
        @change="addToInfoForm({ secteur })"
        :class="{ 'border-red-500': errorKey.includes('secteur') }"
        v-model="secteur"
        class="border rounded ml-1"
      />
    </div>
    <div class="mt-1">
      <label for="proxyselect"><strong>A proximité :</strong></label>

      <select
        name="proxy"
        class="border rounded ml-1"
        :class="{ 'border-red-500': errorKey.includes('proxy') }"
        id="proxyselect"
        @change="
          addToInfoForm({
            proxy,
          })
        "
        v-model="proxy"
      >
        <option value="Centre-ville">Centre-ville</option>
        <option value="Port">Port</option>
        <option value="Mer">Mer</option>
        <option value="Commerces">Commerces</option>
        <option value="Écoles">Écoles</option>
        <option value="Sans">Sans</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.complete_address = this.infoForm.complete_address;
    this.statut = this.infoForm.statut || 'Mr';
    this.name = this.infoForm.name || ' ';
    this.etage = this.infoForm.etage || 'NC';
    this.type_local = this.infoForm.type_local || '';
    this.code_postal = this.infoForm.code_postal || '';
    this.commune = this.infoForm.commune || '';
    this.secteur = this.infoForm.secteur || 'NC';
    this.proxy = this.infoForm.proxy || 'Centre-ville';

    this.addToInfoForm({
      statut: this.statut,
      name: this.name,
      type_local: this.type_local,
      etage: this.etage,
      complete_address: this.complete_address,
      code_postal: this.code_postal,
      commune: this.commune,
      secteur: this.secteur,
      proxy: this.proxy,
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
      name: '',
      etage: '',
      complete_address: '',
      type_local: '',
      code_postal: '',
      commune: '',
      secteur: '',
      proxy: '',
      statut: '',
    };
  },
};
</script>
