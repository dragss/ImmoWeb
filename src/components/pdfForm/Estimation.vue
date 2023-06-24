<template>
  <div>
    <div class="text-xl text-blue-500 mb-3">Estimation du bien</div>
    Entre
    <input
      @change="
        addToInfoForm({
          lowPrice,
        })
      "
      :class="{ 'border-red-500': errorKey.includes('lowPrice') }"
      v-model="lowPrice"
      class="border rounded p-1"
      type="number"
    />€ &
    <input
      @change="
        addToInfoForm({
          highPrice,
        })
      "
      :class="{ 'border-red-500': errorKey.includes('highPrice') }"
      v-model="highPrice"
      class="border rounded p-1"
      type="number"
    />€
    <div>{{ mc2price }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.lowPrice = this.infoForm.lowPrice || null;
    this.highPrice = this.infoForm.highPrice || null;

    this.addToInfoForm({
      lowPrice: this.lowPrice,
      highPrice: this.highPrice,
    });
  },
  computed: {
    ...mapGetters(['infoForm']),
    mc2price() {
      return `${parseInt(this.mc2lowprice).toLocaleString()}€ / m2 - ${parseInt(
        this.mc2highprice
      ).toLocaleString()}€ / m2`;
    },
    mc2lowprice() {
      let surface =
        parseInt(this.infoForm.surface_reelle_bati) ||
        parseInt(this.infoForm.surface_terrain);
      let a = this.infoForm.lowPrice / surface;
      return parseInt(a);
    },
    mc2highprice() {
      let surface =
        parseInt(this.infoForm.surface_reelle_bati) ||
        parseInt(this.infoForm.surface_terrain);
      let b = this.infoForm.highPrice / surface;
      return parseInt(b);
    },
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
      lowPrice: null,
      highPrice: null,
    };
  },
};
</script>
