<template>
  <div>
    <div class="text-xl">Informations finance</div>
    <FormulateInput
      v-if="formValues.type_local === 'Appartement'"
      name="charges"
      label="Charges"
      type="number"
    />
    <FormulateInput name="taxeFonciere" label="Taxe foncière" type="number" />
  </div>
</template>

<script>
export default {
  props: {
    formValues: {
      type: Object,
      required: true,
    },
  },
};
</script>
