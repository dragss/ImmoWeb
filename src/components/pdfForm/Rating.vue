<template>
  <div>
    <Rate
      :preSet="SITUATION"
      @change="(e) => addToInfoForm(e)"
      name="SITUATION"
    />
    <Rate
      :preSet="STANDING"
      @change="(e) => addToInfoForm(e)"
      name="STANDING"
    />
    <Rate
      :preSet="LUMINOSITÉ"
      @change="(e) => addToInfoForm(e)"
      name="LUMINOSITÉ"
    />
    <Rate :preSet="VUE" @change="(e) => addToInfoForm(e)" name="VUE" />
    <Rate :preSet="CALME" @change="(e) => addToInfoForm(e)" name="CALME" />
    <Rate
      :preSet="AGENCEMENT"
      @change="(e) => addToInfoForm(e)"
      name="AGENCEMENT"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Rate from '@/components/ui/Rate.vue';

export default {
  name: 'Rating',
  components: {
    Rate,
  },
  created() {
    this.SITUATION = this.infoForm.SITUATION || 0;
    this.STANDING = this.infoForm.STANDING || 0;
    this.LUMINOSITÉ = this.infoForm.LUMINOSITÉ || 0;
    this.VUE = this.infoForm.VUE || 0;
    this.CALME = this.infoForm.CALME || 0;
    this.AGENCEMENT = this.infoForm.AGENCEMENT || 0;

    this.addToInfoForm({
      SITUATION: this.SITUATION,
      STANDING: this.STANDING,
      LUMINOSITÉ: this.LUMINOSITÉ,
      VUE: this.VUE,
      CALME: this.CALME,
      AGENCEMENT: this.AGENCEMENT,
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
      SITUATION: 0,
      STANDING: 0,
      LUMINOSITÉ: 0,
      VUE: 0,
      CALME: 0,
      AGENCEMENT: 0,
    };
  },
};
</script>
