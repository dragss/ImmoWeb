<template>
  <div>
    <div class="text-xl text-blue-500">INFORMATIONS FINANCIÈRES</div>

    <div class="mt-1" v-if="this.infoForm.type_local == 'Appartement'">
      <label for="Charges-select"><strong>Charges :</strong></label>
      <input
        class="border rounded ml-1"
        :class="{ 'border-red-500': errorKey.includes('charges') }"
        id="Charges-select"
        name="Charges"
        type="number"
        @change="
          addToInfoForm({
            charges: charges || 'NC',
          })
        "
        v-model="charges"
      />€
    </div>

    <div class="mt-1">
      <label for="proxy-select"><strong>Taxe foncière :</strong></label>
      <input
        class="border rounded ml-1"
        :class="{ 'border-red-500': errorKey.includes('taxeFonciere') }"
        id="proxy-select"
        name="proxy"
        type="number"
        @change="
          addToInfoForm({
            taxeFonciere: taxeFonciere || 'NC',
          })
        "
        v-model="taxeFonciere"
      />€
    </div>

    <!-- <div class="mt-1">
      <label for="taxe-input"><strong>Taxe d'habitation :</strong></label>
      <input
        class="border rounded ml-1"
        :class="{ 'border-red-500': errorKey.includes('taxeHabit') }"
        id="taxe-input"
        type="number"
        name="taxe"
        @change="
          addToInfoForm({
            taxeHabit: taxeHabit || 'NC',
          })
        "
        v-model="taxeHabit"
      />€
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.charges = this.infoForm.charges || 'NC';
    this.taxeFonciere = this.infoForm.taxeFonciere || 'NC';
    this.taxeHabit = this.infoForm.taxeHabit || 'NC';

    this.addToInfoForm({
      charges: this.charges,
      taxeFonciere: this.taxeFonciere,
      taxeHabit: this.taxeHabit,
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
      charges: '',
      taxeFonciere: '',
      taxeHabit: '',
    };
  },
};
</script>
