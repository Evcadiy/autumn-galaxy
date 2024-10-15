<script>
  import { register } from "swiper/element/bundle"
  register()

  import { slides } from "./slides"
  import SwiperNavigation from "./SwiperNavigation/SwiperNavigation.svelte"
  import SwiperPagination from "./SwiperPagination/SwiperPagination.svelte"
</script>

<section class="relative">
  <swiper-container
    navigation="true"
    centered-slides="true"
    slides-per-view="auto"
    space-between="30"
    effect="coverflow"
    coverflow-effect-rotate="0"
    coverflow-effect-stretch="600"
    coverflow-effect-depth="400"
    coverflow-effect-slide-shadows="false"
    class="w-full max-w-[1355px] h-[450px] max-lg:h-[300px] max-md:h-[350px] mx-auto"
  >
    {#each slides as slide}
      <swiper-slide key={slide.title}>
        <div class="flex max-md:flex-col max-md:items-center">
          <div
            class="w-1/2 max-xl:h-[300px] max-xl:max-w-[400px] max-lg:h-[200px] max-lg:max-w-[300px] max-md:h-[150px] max-md:w-[228px] max-md:p-2 h-full relative p-8 bg-black"
          >
            <img
              src={slide.image}
              alt={slide.title}
              class="object-cover w-full h-full"
            />
          </div>
          <!-- Rigth Side -->
          <div
            class="w-1/2 bg-black max-xl:h-[300px] max-xl:max-w-[400px] max-lg:h-[200px] max-lg:max-w-[300px] max-md:h-[150px] max-md:max-w-[440px] max-md:p-2 md:pl-0 p-8 text-white flex flex-col justify-between max-md:justify-center"
          >
            <div>
              <p
                class="text-md font-gilroyBold text-white pb-2 max-xl:text-sm max-lg:text-xs max-lg:pb-1 max-md:text-[9px] max-md:pb-0"
              >
                {slide.date}
              </p>
              <h3 class="title font-bignoodletitling">
                {slide.title}
              </h3>
              <div
                class="divider my-7 max-xl:my-3 max-lg:my-2 max-md:my-1"
              ></div>
              <div
                class="flex flex-col gap-8 max-lg:gap-2 max-lg:text-xs max-md:gap-1 max-md:text-[9px]"
              >
                <p>{slide.description}</p>
                <p>{slide.secondDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
  <SwiperNavigation />
  <SwiperPagination />
</section>

<style>
  swiper-container {
    --swiper-navigation-color: transparent;
    --swiper-pagination-color: white;
  }

  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition:
      transform 0.4s,
      filter 0.4s;
    width: 1000px;
  }

  swiper-slide:not(.swiper-slide-active) {
    filter: brightness(0.4);
    opacity: 0.6;
  }

  .title {
    color: #fff;
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: #fff;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 91.648%;
    letter-spacing: 2.75px;
  }

  .divider {
    opacity: 0.55;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #fff 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @media (max-width: 1200.9px) {
    .title {
      font-size: 30px;
    }
  }

  @media (max-width: 992.9px) {
    .title {
      font-size: 18px;
    }
  }
  @media (max-width: 768.9px) {
    .title {
      font-size: 14px;
    }
  }
</style>
