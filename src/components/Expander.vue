<template>
  <div class="accordion card-info__accordion">
    <div class="accordion__header accordion__trigger" @click="open = !open">
      <h5>Стоимости</h5>
      <svg
        class="accordion__header-icon"
        :class="open ? 'active' : ''"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5L5 1L1 5"
          stroke="#184F90"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="accordion__content" :hidden="!open">
      <div class="accordion__content-title">
        <a href="#" class="p--medium p--regular">С акцией месяца</a>
      </div>
      <div class="accordion__content-info">
        <div class="p--medium p--regular">79 015 р./м²</div>
        <h3>3 870 900р.</h3>
      </div>
      <div class="accordion__content-title p--medium p--regular">
        100% / ипотека
      </div>
      <div class="accordion__content-info">
        <div class="p--medium p--regular">79 015 р./м²</div>
        <h3>3 870 900р.</h3>
      </div>
      <div class="accordion__content-title p--medium p--regular">Базовая</div>
      <div class="accordion__content-info">
        <div class="p--medium p--regular">79 015 р./м²</div>
        <h3>3 870 900р.</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/SCSS/VMR.scss";

.card-info__accordion {
  margin-top: 24px;
}

.accordion {
  @include panel();

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 12px 16px;
    border-bottom: 1px solid #ebedf0;
    color: $dark;

    &-icon {
      margin-right: 5px;

      transition: 0.2s all;

      transform: rotate(180deg);

      &.active {
        transform: rotate(0deg);
      }
    }
  }
  &__content {
    padding: 2px;
  }
  &__content-title {
    padding: 5px 14px;

    color: $gray20;
  }
  &__content-info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 14px 4px 14px;

    background: #f6f7f8;
    color: $black;
  }
}
</style>