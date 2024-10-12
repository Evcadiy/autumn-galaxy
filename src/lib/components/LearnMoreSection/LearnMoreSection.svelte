<script>
  import OutlinedButton from "../UI/Buttons/OutlinedButton.svelte"
</script>

<section class="banner-background">
  <div class="content pt-32 pb-16 max-md:pt-12 max-md:pb-8">
    <h1
      class="text-white text-7xl font-ethnocentricrg max-lg:text-5xl max-sm:text-4xl max-xs:text-3xl"
    >
      Lorem ipsum
    </h1>
    <h2
      class="text-white text-center text-xl pt-8 max-lg:text-lg max-md:text-sm"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </h2>
    <OutlinedButton
      text="Learn More"
      class="mt-16 max-md:mt-5 py-6 px-8 max-lg:px-4 max-lg:py-4 max-md:py-2"
    />
  </div>
</section>

<style>
  .banner-background {
    width: 100%;
    background-image: url("../../../assets/images/banner01.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
