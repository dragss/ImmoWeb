<template>
  <div>
    <div class="text-blue-500 items-center">
      <i class="fas fa-circle-minus text-blue-500" />
      POINT FAIBLE
    </div>

    <PointList />
  </div>
</template>

<script>
import PointList from "@/components/ui/PointList";

export default {
  name: "PointFaible",
  components: {
    PointList,
  },
};
</script>
