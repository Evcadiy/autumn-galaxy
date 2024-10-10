<script>
  import banner from "../../../assets/images/BannerStarcraft1.png"
  import galaxy from "../../../assets/images/Galaxy01.png"
  import GreenButton from "../UI/Buttons/GreenButton.svelte"
  import GradientBox from "../UI/GradientBox.svelte"
  import TrailerPlaceholder from "./TrailerPlaceholder.svelte"
</script>

<section
  class="relative bg-background-primary flex justify-center items-center flex-col"
>
  <GradientBox src={banner} />
  <div
    class="relative -top-64 max-xl:-top-52 max-lg:-top-32 max-sm:-top-16 left-0 right-0 flex justify-center items-center flex-col z-10"
  >
    <img src={galaxy} alt="banner" class=" w-[70%]" />
    <p
      class="text-white px-4 text-center text-xl mt-[-70px] max-xl:mt-[-60px] max-lg:mt-[-50px] max-md:text-sm max-sm:mt-[-20px]"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <GreenButton text="Play Now" class="mt-16 max-md:mt-5" />
    <TrailerPlaceholder />
  </div>
</section>
