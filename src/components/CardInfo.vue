<template>
  <section class="card-info" :hidden="'info' !== $store.state.cardNavActive">
    <Slider />
    <Expander />
    <div class="forecast">
      <p class="forecast__title p--small p--bold">
        Прогнозируемое повышение на
      </p>
      <p class="forecast__price p--medium p--regular">120 321р.</p>
    </div>
    <InfoBlocks />
  </section>
</template>

<script>
import Expander from "@/components/Expander.vue";
import Slider from "@/components/Slider.vue";
import InfoBlocks from "@/components/CardInfoBlocks.vue";

export default {
  data() {
    return {};
  },
  components: { Expander, Slider, InfoBlocks },
  mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/SCSS/VMR.scss";

.card-info {
  padding: 8px;
}
.forecast {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 8px;
  padding: 9px 16px;

  @include panel();

  &-title {
    color: $black;
  }
  &-price {
    color: $accent;
  }
}
</style>