<template>
  <div>
    <div class="text-xl">Etat du bien</div>
    <FormulateInput
      name="insideState"
      label="Etat intérieur"
      type="select"
      :options="states"
    />
    <FormulateInput
      name="publicState"
      label="État parties communes"
      type="select"
      :options="states"
    />
    <FormulateInput
      name="frontState"
      label="État de la façade"
      type="select"
      :options="states"
    />
    <FormulateInput
      name="roofState"
      label="État de la toiture"
      type="select"
      :options="states"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: [
        'parfait état',
        'très bon état',
        'état satisfaisant',
        'travaux à prévoir',
      ],
    };
  },
};
</script>
