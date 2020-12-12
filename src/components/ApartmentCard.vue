<template>
  <div class="apartment-card">
    <CardHeader />
    <CardInfo />
  </div>
</template>

<script>
import CardHeader from "@/components/CardHeader.vue";
import CardInfo from "@/components/CardInfo.vue";

export default {
  name: "Card",
  components: {
    CardHeader,
    CardInfo,
  },
};
</script>


<style lang="scss" scoped>
.apartment-card {
  padding-bottom: 60px;
}
</style>