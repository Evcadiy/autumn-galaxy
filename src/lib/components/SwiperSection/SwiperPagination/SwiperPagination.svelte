<script>
  import { slides } from "../slides"
  import { onMount } from "svelte"

  let currentSlideIndex = 0
  let swiperInstance

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index)
      currentSlideIndex = index
    }
  }

  const updateCurrentSlide = () => {
    if (swiperInstance) {
      currentSlideIndex = swiperInstance.activeIndex
    }
  }

  onMount(() => {
    swiperInstance = document.querySelector("swiper-container").swiper

    swiperInstance.on("slideChange", () => {
      currentSlideIndex = swiperInstance.activeIndex
    })
  })
</script>

<section>
  <div class="custom-pagination flex justify-center space-x-2 mt-4">
    {#each slides as slide, index}
      <button
        class="pagination-bullet"
        class:bg-white={currentSlideIndex === index}
        on:click={() => goToSlide(index)}
      ></button>
    {/each}
  </div>
</section>

<style>
  .custom-pagination {
    margin-top: 2.5rem;
    gap: 1.2rem;
  }

  .pagination-bullet {
    width: 9px;
    height: 9px;
    background-color: gray;
    transform: rotate(45deg);
    transition: background-color 0.3s;
  }

  .pagination-bullet.bg-white {
    background-color: white;
  }

  @media (max-width: 768.9px) {
    .custom-pagination {
      margin-top: 1rem;
    }
  }
</style>
