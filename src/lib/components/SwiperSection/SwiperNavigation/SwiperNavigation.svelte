<script>
  import rightArrowIcon from "../../../../assets/icons/Rightarrow.svg"
  import leftArrowIcon from "../../../../assets/icons/Leftarrow.svg"
  import { onMount, afterUpdate } from "svelte"

  let swiperInstance
  let isBeginning = true
  let isEnd = false

  onMount(() => {
    swiperInstance = document.querySelector("swiper-container").swiper
    if (swiperInstance) {
      swiperInstance.init()
      swiperInstance.update()

      updateNavigationState()
      swiperInstance.on("slideChange", updateNavigationState)
    }
  })

  afterUpdate(() => {
    if (!swiperInstance) {
      swiperInstance = document.querySelector("swiper-container").swiper
      if (swiperInstance) {
        swiperInstance.init()
        swiperInstance.update()

        updateNavigationState()
        swiperInstance.on("slideChange", updateNavigationState)
      }
    }
  })

  const nextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext()
    }
  }

  const prevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev()
    }
  }

  const updateNavigationState = () => {
    if (swiperInstance) {
      isBeginning = swiperInstance.isBeginning
      isEnd = swiperInstance.isEnd
    }
  }
</script>

<section>
  <div class="swiper-custom-navigation">
    <button
      class="swiper-custom-prev text-white text-5xl transition-transform duration-300 hover:scale-110 {isBeginning
        ? 'disabled'
        : ''}"
      on:click={prevSlide}
      disabled={isBeginning}
    >
      <img
        src={leftArrowIcon}
        alt="left arrow"
        class="arrow-icon {isBeginning ? 'dimmed' : ''}"
      />
    </button>
    <button
      class="swiper-custom-next text-white text-5xl transition-transform duration-300 hover:scale-110 {isEnd
        ? 'disabled'
        : ''}"
      on:click={nextSlide}
      disabled={isEnd}
    >
      <img
        src={rightArrowIcon}
        alt="right arrow"
        class="arrow-icon {isEnd ? 'dimmed' : ''}"
      />
    </button>
  </div>
</section>

<style>
  .swiper-custom-navigation {
    position: absolute;
    top: 45%;
    left: 20%;
    width: 60%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 10;
  }

  .swiper-custom-prev,
  .swiper-custom-next {
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    margin: 0 20px;
  }

  .arrow-icon {
    width: 80%;
    height: auto;
    pointer-events: none;
    transition: opacity 0.3s;
  }

  .dimmed {
    opacity: 0.1;
  }

  .disabled {
    pointer-events: none;
  }

  @media (max-width: 1900px) {
    .swiper-custom-navigation {
      left: 12.8%;
      width: 75%;
    }
  }
  @media (max-width: 1600px) {
    .swiper-custom-navigation {
      left: 10%;
      width: 80%;
    }
  }
  @media (max-width: 1450px) {
    .swiper-custom-navigation {
      left: 0%;
      width: 100%;
    }
  }
  @media (max-width: 992px) {
    .swiper-custom-navigation {
      top: 42%;
    }
  }
  @media (max-width: 768.9px) {
    .swiper-custom-navigation {
      display: none;
    }
  }
</style>
