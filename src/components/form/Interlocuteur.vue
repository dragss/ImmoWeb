<template>
  <div>
    <FormulateInput
      type="select"
      name="interlocuteur"
      label="Interlocuteur"
      :options="users.map((e) => e.name)"
    />
    <div class="flex items-center mt-2" v-if="selectedUser">
      <img :src="selectedUser.img" class="w-24 mr-3 rounded" />
      <div>
        <div class="font-bold">{{ selectedUser.name }}</div>
        <div>{{ selectedUser.tag }}</div>
        <div>{{ selectedUser.phone }}</div>
        <div>{{ selectedUser.mail }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import users from '@/assets/users';

export default {
  computed: {
    selectedUser() {
      if (this.formValues.interlocuteur)
        return this.users.find((e) => e.name === this.formValues.interlocuteur);
      return null;
    },
  },
  props: {
    formValues: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      users,
    };
  },
};
</script>
