<template>
  <div>
    <div class="text-xl text-blue-500">ÉTAT DU BIEN</div>
    <div class="mt-1">
      <label for="Chambres-select"><strong>État intérieur :</strong></label>
      <select
        class="border rounded ml-1"
        name="Chambres"
        id="Chambres-select"
        :class="{ 'border-red-500': errorKey.includes('insideState') }"
        @change="
          addToInfoForm({
            insideState,
          })
        "
        v-model="insideState"
      >
        <option v-for="state in states" :key="state" :value="state">
          {{ state }}
        </option>
      </select>
    </div>

    <div class="mt-1" v-if="infoForm.type_local == 'Appartement'">
      <label for="Chambres-select">
        <strong>État parties communes :</strong>
      </label>

      <select
        class="border rounded ml-1"
        name="Chambres"
        id="Chambres-select"
        :class="{ 'border-red-500': errorKey.includes('publicState') }"
        @change="
          addToInfoForm({
            publicState,
          })
        "
        v-model="publicState"
      >
        <option v-for="state in states" :key="state" :value="state">
          {{ state }}
        </option>
      </select>
    </div>

    <div class="mt-1">
      <label for="Chambres-select"><strong>État de la façade :</strong></label>

      <select
        class="border rounded ml-1"
        name="Chambres"
        id="Chambres-select"
        :class="{ 'border-red-500': errorKey.includes('frontState') }"
        @change="
          addToInfoForm({
            frontState,
          })
        "
        v-model="frontState"
      >
        <option v-for="state in states" :key="state" :value="state">
          {{ state }}
        </option>
      </select>
    </div>

    <div class="mt-1">
      <label for="Chambres-select"><strong>État de la toiture :</strong></label>

      <select
        class="border rounded ml-1"
        name="Chambres"
        id="Chambres-select"
        :class="{ 'border-red-500': errorKey.includes('roofState') }"
        @change="
          addToInfoForm({
            roofState,
          })
        "
        v-model="roofState"
      >
        <option v-for="state in states" :key="state" :value="state">
          {{ state }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.insideState = this.infoForm.insideState || 'parfait état';
    this.publicState = this.infoForm.publicState || 'parfait état';
    this.frontState = this.infoForm.frontState || 'parfait état';
    this.roofState = this.infoForm.roofState || 'parfait état';

    this.addToInfoForm({
      insideState: this.insideState,
      frontState: this.frontState,
      roofState: this.roofState,
      publicState: this.publicState,
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
      states: [
        'parfait état',
        'très bon état',
        'état satisfaisant',
        'travaux à prévoir',
      ],
      insideState: 'parfait état',
      publicState: 'parfait état',
      frontState: 'parfait état',
      roofState: 'parfait état',
    };
  },
};
</script>
