<template>
  <div class="card-info__iblocks">
    <div class="iblock card-info__iblock">
      <div class="iblock__title p--medium p--bold">Подъезд</div>
      <div class="iblock__info p--medium p--regular">17</div>
    </div>
    <div class="iblock card-info__iblock">
      <div class="iblock__title p--medium p--bold">Этаж</div>
      <div class="iblock__info p--medium p--regular">17</div>
    </div>
    <div class="iblock card-info__iblock">
      <div class="iblock__title p--medium p--bold">Комнат</div>
      <div class="iblock__info p--medium p--regular">17</div>
    </div>
    <div class="iblock card-info__iblock">
      <div class="iblock__title p--medium p--bold">Высота потолка</div>
      <div class="iblock__info p--medium p--regular">2.76м²</div>
    </div>
    <div class="iblock card-info__iblock">
      <div class="iblock__title p--medium p--bold">Вид из окна</div>
      <div class="iblock__info p--medium p--regular">Во двор и на улицу</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/SCSS/VMR.scss";

.card-info {
  &__iblocks {
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
  }
  &__iblock {
    margin-right: 8px;
    &:nth-child(-n + 3) {
      width: calc(100% / 3 - 8px * 2 / 3);
      margin-bottom: 8px;
    }
    &:nth-child(n + 4) {
      width: calc(100% / 2 - 8px / 2);
    }
    &:nth-child(3) {
      margin-right: 0;
    }
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
  .iblock {
    @include iblock;
  }
}
</style>