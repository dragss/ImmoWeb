<template>
  <div>
    <div class="text-xl">Estimation du bien</div>
    <div class="flex items-center">
      entre
      <FormulateInput name="lowPrice" validation="required" class="w-28 mx-2" />
      € et
      <FormulateInput
        name="highPrice"
        validation="required"
        class="w-28 mx-2"
      />€
    </div>
    <div>{{ mc2price }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    mc2price() {
      return `${parseInt(this.mc2lowprice).toLocaleString()}€ / m2 - ${parseInt(
        this.mc2highprice
      ).toLocaleString()}€ / m2`;
    },
    mc2lowprice() {
      let surface =
        parseInt(this.formValues.surface_reelle_bati) ||
        parseInt(this.formValues.surface_terrain);
      let a = this.formValues.lowPrice / surface;
      return parseInt(a);
    },
    mc2highprice() {
      let surface =
        parseInt(this.formValues.surface_reelle_bati) ||
        parseInt(this.formValues.surface_terrain);
      let b = this.formValues.highPrice / surface;
      return parseInt(b);
    },
  },
  props: {
    formValues: {
      type: Object,
      required: true,
    },
  },
};
</script>
