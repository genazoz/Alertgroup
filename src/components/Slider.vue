<template>
  <!-- Swiper -->
  <div class="slider swiper-container">
    <div class="slider__wrapper swiper-wrapper">
      <div class="slider__slide swiper-slide">
        <div class="slider__slide-img-wrapper">
          <img
            class="slider__slide-img"
            src="@/assets/img/sliderImg.png"
            alt="sliderImg"
          />
        </div>
      </div>
      <div class="swiper-slide slider__slide">
        <div class="slider__slide-img-wrapper">
          <img
            class="slider__slide-img"
            src="@/assets/img/sliderImg.png"
            alt="sliderImg"
          />
        </div>
      </div>
      <div class="swiper-slide slider__slide">
        <div class="slider__slide-img-wrapper">
          <img
            class="slider__slide-img"
            src="@/assets/img/sliderImg.png"
            alt="sliderImg"
          />
        </div>
      </div>
      <div class="swiper-slide slider__slide">
        <div class="slider__slide-img-wrapper">
          <img
            class="slider__slide-img"
            src="@/assets/img/sliderImg.png"
            alt="sliderImg"
          />
        </div>
      </div>
      <div class="swiper-slide slider__slide">
        <div class="slider__slide-img-wrapper">
          <img
            class="slider__slide-img"
            src="@/assets/img/sliderImg.png"
            alt="sliderImg"
          />
        </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.onload = function () {
      var swiper = new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
    };
  },
};
</script>


<style lang="scss">
@import "@/assets/SCSS/VMR.scss";
@import "@/assets/SCSS/swiper.min.scss";

.slider {
  width: 100%;
  height: 100%;

  &.swiper-container-horizontal .swiper-pagination-bullets {
    bottom: 4px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-pagination {
    @include flexCenter;
    height: 10px;

    .swiper-pagination-bullet {
      display: flex;
      width: 4px;
      height: 4px;
      margin: 0 2px;

      border-radius: 50%;
      background: #c5cbd3;
      opacity: 1;

      &-active {
        background: #184f90;
      }
    }
  }
  &__slide {
    padding: 16px;
  }
  &__slide-img-wrapper {
    width: 100%;
    height: 100%;

    border: 1px solid #e2e5e9;
    border-radius: 3px;
  }
  &__slide-img {
    margin: 18px 0;
  }
}
</style>