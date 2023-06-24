<template>
  <div>
    <div class="text-blue-500 items-center">
      <i class="fas fa-circle-plus text-blue-500" />
      POINT FORT
    </div>

    <PointList
      @change="(e) => addToInfoForm(e)"
      :error="errorKey.includes('goodPoint')"
      :preSet="goodPoint"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PointList from '@/components/ui/PointList';

export default {
  name: 'PointFort',
  components: {
    PointList,
  },
  created() {
    this.goodPoint = this.infoForm.goodPoint || [];

    this.addToInfoForm({
      goodPoint: this.goodPoint,
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
      goodPoint: [],
    };
  },
};
</script>
