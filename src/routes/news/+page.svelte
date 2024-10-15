<script>
  import NewsCard from "$lib/components/NewsSection/NewsCard/NewsCard.svelte"
  import NewsSection from "$lib/components/NewsSection/NewsSection.svelte"
  import SwiperNavigation from "$lib/components/SwiperSection/SwiperNavigation/SwiperNavigation.svelte"
  import SwiperPagination from "$lib/components/SwiperSection/SwiperPagination/SwiperPagination.svelte"
  import SwiperSection from "$lib/components/SwiperSection/SwiperSection.svelte"
  import BgGradient from "$lib/components/UI/BgGradient.svelte"
  import Deco from "$lib/components/UI/Deco/Deco.svelte"
  import bgImage from "../../assets/images/bgnewspage.png"
  import "swiper/swiper-bundle.css"
  import newsImage1 from "../../assets/images/newsimage1.png"
  import newsImage2 from "../../assets/images/newsimage2.png"
  import newsImage3 from "../../assets/images/newsimage3.png"
  import logo from "../../assets/images/logo.png"
  import logo2 from "../../assets/images/logo2.png"
  import OutlinedButton from "$lib/components/UI/Buttons/OutlinedButton.svelte"
  import Dropdown from "$lib/components/UI/Dropdown/Dropdown.svelte"
</script>

<section class="relative bg-background-primary">
  <BgGradient
    src={bgImage}
    class="opacity-50 h-[2200px] max-xl:h-[2020px] max-lg:h-[2200px] max-md:h-[3200px] max-xs:h-[2870px]"
  >
    <Deco title="News" class="py-28 max-xl:py-20 max-lg:py-10" />
    <SwiperSection />

    <div
      class="news-grid mt-32 max-sm:mt-8 max-xl:mt-10 justify-items-center px-10"
    >
      <div class="col-span-1 w-full">
        <Dropdown />
      </div>
      <div class="col-span-2 max-md:hidden"></div>
      <NewsCard imageSrc={newsImage1} logoSrc={logo} />
      <NewsCard imageSrc={newsImage2} logoSrc={logo2} />
      <NewsCard imageSrc={newsImage3} logoSrc={logo2} />
      <NewsCard imageSrc={newsImage1} logoSrc={logo} />
      <NewsCard imageSrc={newsImage2} logoSrc={logo2} />
      <NewsCard imageSrc={newsImage3} logoSrc={logo2} />
    </div>
    <div class="w-full flex justify-center pt-16 max-md:pt-7">
      <OutlinedButton
        text={"View More"}
        class="py-6 px-12 max-lg:px-8 max-lg:py-4 max-md:py-2"
      />
    </div>
  </BgGradient>
</section>

<style>
  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, 0.2fr);
    gap: 3rem;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1915px) {
    .news-grid {
      grid-template-columns: repeat(3, 0.5fr);
    }
  }
  @media (max-width: 992px) {
    .news-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    .news-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>
