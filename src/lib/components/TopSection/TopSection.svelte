<script>
  import banner from "../../../assets/images/BannerStarcraft1.png"
  import galaxy from "../../../assets/images/Galaxy01.png"
  import GreenButton from "../UI/Buttons/GreenButton.svelte"
  import TrailerPlaceholder from "./TrailerPlaceholder.svelte"
</script>

<section
  class="relative bg-background-primary flex justify-center items-center flex-col"
>
  <div
    class="gradient-overlay h-[500px] max-xl:h-[600px] max-lg:h-[400px] max-md:h-[100px] mb-96"
  ></div>
  <img src={banner} alt="banner" class="w-full" />
  <div
    class="relative bottom-80 max-xl:bottom-52 max-lg:bottom-32 max-sm:bottom-16 left-0 right-0 flex justify-center items-center flex-col"
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

<style>
  .gradient-overlay {
    position: absolute;
    bottom: 2;
    left: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(10, 19, 25, 0.9) 20%,
      rgba(10, 19, 25, 1) 50%,
      rgba(10, 19, 25, 1) 70%,
      rgba(10, 19, 25, 1) 100%
    );
  }
</style>
