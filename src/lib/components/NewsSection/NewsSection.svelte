<script>
  import bgNewsImage from "../../../assets/images/bgNews.png"
  import deco from "../../../assets/icons/deco.svg"
  import GradientBox from "../UI/GradientBox.svelte"
  import BgGradient from "../UI/BgGradient.svelte"
  import Deco from "../../components/UI/Deco/Deco.svelte"
  import NewsCard from "./NewsCard/NewsCard.svelte"
  import newsImage1 from "../../../assets/images/newsimage1.png"
  import newsImage2 from "../../../assets/images/newsimage2.png"
  import newsImage3 from "../../../assets/images/newsimage3.png"
  import logo from "../../../assets/images/logo.png"
  import logo2 from "../../../assets/images/logo2.png"
  import OutlinedButton from "../UI/Buttons/OutlinedButton.svelte"
</script>

<section
  class="bg-background-primary pt-36 pb-12 max-lg:pt-16 max-lg:pb-0 max-sm:pt-10"
>
  <BgGradient
    src={bgNewsImage}
    showGradientOnTop
    class="h-[800px] max-md:h-[1500px] max-sm:h-[1450px] max-xs:h-[1270px]"
  >
    <Deco title="News" />
    <div class="news-grid mt-14 max-sm:mt-0 2xl:mx-64">
      <NewsCard imageSrc={newsImage1} logoSrc={logo} />
      <NewsCard imageSrc={newsImage2} logoSrc={logo2} />
      <NewsCard imageSrc={newsImage3} logoSrc={logo2} />
    </div>
    <div class="w-full flex justify-center pt-6 max-md:pt-0">
      <OutlinedButton
        text={"All News"}
        class="py-6 px-12 max-lg:px-8 max-lg:py-4 max-md:py-2"
      />
    </div>
  </BgGradient>
</section>

<style>
  .news-grid {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1.5rem;
    justify-content: center;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    .news-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
