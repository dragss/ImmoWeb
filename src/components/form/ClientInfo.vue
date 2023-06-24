<template>
  <div>
    <div class="text-xl">Informations client</div>
    <div class="flex items-center">
      <FormulateInput
        label="Genre"
        class="w-20"
        name="client_grender"
        type="select"
        :options="['Mr.', 'Mme.', 'Mr. et Mme.', 'Non communiqué']"
      />
      <FormulateInput
        class="w-60"
        name="client_name"
        label="Nom du client"
        validation="required"
      />
    </div>
  </div>
</template>
