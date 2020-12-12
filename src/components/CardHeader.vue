<template>
  <header class="card-info-header">
    <div class="card-info-header__top">
      <div class="card-info-header__top-flexRow flexRow">
        <h3>Карточка квартиры</h3>
        <div class="flexRow">
          <hr />
          <button class="card-info-header__top-close-btn">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L10 10M1 10L10 1"
                stroke="#173456"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="card-info-header__info">
      <div class="card-info-header__info-flexRow flexRow">
        <div class="card-info-header__info-item">
          <p class="p--medium p--bold">№12</p>
        </div>
        <div
          class="card-info-header__info-item card-info-header__info-item--wide"
        >
          <p class="card-info-header__info-item-letter p--medium p--bold">M</p>
          <p class="card-info-header__info-item-size p--medium p--bold">
            59.52м²
          </p>
        </div>
      </div>
      <div
        class="card-info-header__info-indicator card-info-header__info-indicator--active p--small p--regular"
      ></div>
    </div>
    <nav
      class="menu card-info-header__menu"
      v-bind:class="$store.state.cardNavActive"
    >
      <a
        href="#"
        class="menu__link menu__link--info p--medium p--bold"
        @click.prevent="changeCardTab('info')"
        >Информация</a
      >
      <a
        href="#"
        class="menu__link menu__link--spaces p--medium p--bold"
        @click.prevent="changeCardTab('spaces')"
        >Площади</a
      >
      <a
        href="#"
        class="menu__link menu__link--stock p--medium p--bold"
        @click.prevent="changeCardTab('stock')"
        >Акции</a
      >
      <a
        href="#"
        class="menu__link menu__link--advantages p--medium p--bold"
        @click.prevent="changeCardTab('advantages')"
        >Преимущества</a
      >
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeCardTab: function (cls) {
      this.makeActive(cls);
    },
    makeActive: function (item) {
      this.$store.dispatch("setState", item);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/SCSS/VMR.scss";

.card-info-header {
  background: white;

  &__top {
    @include flexCenter();
    width: 100%;
    height: 60px;

    box-shadow: 0px 4px 10px rgba(10, 61, 128, 0.05);

    hr {
      width: 2px;
      height: 36px;
      left: 315px;
      top: 12px;

      background: #e2e5e9;
      border-radius: 9px;
      border: unset;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  }
  &__top-flexRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &__top-close-btn {
    @include flexCenter();
    width: 60px;
  }
  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    margin-bottom: 3px;
    padding: 8px 12px 8px 8px;

    box-shadow: 0px 4px 10px rgba(10, 61, 128, 0.05);
  }
  &__info-flexRow {
    height: 100%;
    max-height: 32px;
  }
  &__info-item {
    @include flexCenter();
    margin-right: 4px;
    padding: 0 8px;

    border: 1px solid #e2e5e9;
    border-radius: 3px;
    color: $black;

    &-letter {
      padding-left: 2px;
      padding-right: 7px;
    }
    &-size {
      padding-left: 9px;
      border-left: 1px solid #e2e5e9;
    }
  }
  &__info-indicator {
    padding: 2px 10px;

    background: black;
    border-radius: 32px;
    color: white;

    &--active {
      background: #44a86e;
      &:before {
        content: "Свободно";
      }
    }
  }
}
.menu {
  padding: 2px 8px;
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  margin: 0;
  &__link {
    position: relative;

    @include flexCenter();
    height: 40px;
    padding: 0 16px;

    color: $gray30;
    background: transparent;
  }
  &.info &__link--info,
  &.spaces &__link--spaces,
  &.stock &__link--stock,
  &.advantages &__link--advantages {
    color: $darkgray;
    &:before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;

      width: 100%;
      height: 1px;

      background: #184f90;
      border-radius: 1px 1px 0px 0px;
    }
  }
}
h3 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;

  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin-left: 16px;

  color: $black;
}
</style>