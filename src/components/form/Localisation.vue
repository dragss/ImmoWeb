<template>
  <div>
    <div class="text-xl">Localisation du bien</div>
    <FormulateInput name="address" label="Addresse" validation="required" />
    <FormulateInput
      name="code_postal"
      label="Code postal"
      validation="required"
    />
    <FormulateInput name="commune" label="Commune" validation="required" />
  </div>
</template>

<script>
export default {};
</script>
