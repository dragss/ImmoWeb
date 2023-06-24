<template>
  <div class="max-w-screen-lg mx-auto px-3">
    <small class="text-gray-400 text-center w-full mb-1">
      Les adresses disponible a la recherche dependent des données
      <a href="https://app.dvf.etalab.gouv.fr/" class="text-blue-500 underline">
        DVF</a
      >, il est possible que l'adresse que vous recherchez ne soit
      <strong>pas référencée</strong>
    </small>
    <div class="flex items-center border border-gray-400 px-3 rounded-full">
      <i class="fas fa-search" />
      <input
        placeholder="10 Rue De La Tourelle, 29000 QUIMPER"
        class="text-lg w-full ml-2 h-10 outline-none border-transparent rounded-lg"
        type="text"
        @input="debounceSearch"
      />
    </div>
    <div class="mt-3">
      <div v-if="addresses.length" class="flex text-sm text-center">
        <div class="w-1/12 border-r-2 font-semibold">Date</div>
        <div class="w-5/12 border-r-2 font-semibold">Adresse</div>
        <div class="w-1/12 border-r-2 font-semibold">Type</div>
        <div class="w-1/12 border-r-2 font-semibold">Bati m2</div>
        <div class="w-1/12 border-r-2 font-semibold">Terrain m2</div>
        <div class="w-1/12 border-r-2 font-semibold">Pieces</div>
        <div class="w-2/12 font-semibold">Valeur fonciere</div>
      </div>

      <div
        v-for="item in addresses"
        :key="item.id"
        @click="selectedAddress = item"
        class="flex hover:bg-gray-200 text-center text-sm cursor-pointer"
      >
        <div class="w-1/12 border-r-2 text-left">
          {{ item.date_mutation }}
        </div>
        <div class="w-1/12 border-r-2 text-left">
          {{ item.type_local }}
        </div>
        <div
          class="w-5/12 border-r-2 text-left pl-2"
          v-html="item._formatted.complete_address"
        />
        <div class="w-1/12 border-r-2">
          {{ item.surface_reelle_bati }}
        </div>
        <div class="w-1/12 border-r-2">{{ item.surface_terrain }}</div>
        <div class="w-1/12 border-r-2">
          {{ item.nombre_pieces_principales }} pieces
        </div>
        <div class="w-2/12">{{ item.valeur_fonciere }} €</div>
      </div>
    </div>
    <div v-if="!selectedAddress" class="flex justify-center mt-8">
      <button
        @click="noAddress()"
        class="bg-yellow-400 text-white rounded w-80 py-2 mt-1"
      >
        Continuer sans adresse
      </button>
    </div>
    <div v-if="selectedAddress" class="flex flex-col items-center mt-8">
      <div class="text-center text-lg">
        <i
          class="fas fa-trash text-red-500 mr-2 cursor-pointer"
          @click="selectedAddress = null"
        />
        {{ selectedAddress.complete_address }}
      </div>
      <button
        @click="handleSave()"
        class="bg-green-400 text-white rounded w-80 py-2 mt-3 flex items-center justify-center"
      >
        <Checkmark v-if="clicked" />
        <div else>Suivent <i class="fas fa-arrow-right ml-1" /></div>
      </button>
    </div>

    <div v-else-if="address">
      <div class="text-center text-lg">
        {{ address.complete_address }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Checkmark from '@/components/Checkmark';

export default {
  components: {
    Checkmark,
  },
  computed: {
    ...mapGetters(['address']),
  },
  methods: {
    ...mapActions(['setAddress', 'setAllowedStep']),
    noAddress() {
      this.setAddress({});
      this.$router.push('/pdf-gen/step/2');
    },
    handleSave() {
      this.setAddress(this.selectedAddress);
      this.clicked = true;
      setTimeout(() => {
        this.clicked = false;
        this.$router.push('/pdf-gen/step/2');
      }, 1000);
    },
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(async () => {
        let q = event.target.value;
        const res = await this.$meilisearch.index('dvf').search(q, {
          filter:
            'code_departement = 29 OR code_departement = 35 OR code_departement = 22 OR code_departement = 56',
          attributesToRetrieve: ['code_commune', '*'],
          attributesToHighlight: ['complete_address'],
          limit: 20,
        });
        this.addresses = res.hits;
      }, 250);
    },
  },
  data() {
    return {
      clicked: false,
      next: false,
      debounce: null,
      addresses: [],
      selectedAddress: null,
    };
  },
};
</script>

<style>
em {
  background: rgb(255, 221, 207);
  border-radius: 3px;
}
</style>
