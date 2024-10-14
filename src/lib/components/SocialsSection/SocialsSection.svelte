<script>
  import BgGradient from "../UI/BgGradient.svelte"
  import SmallerDeco from "../UI/Deco/SmallerDeco.svelte"
  import socialsImage from "../../../assets/images/socialsimage.png"
  import SocialsLogos from "./SocialsLogos/SocialsLogos.svelte"
</script>

<section class="bg-background-primary">
  <BgGradient
    class="h-[450px] max-md:h-[200px]"
    src={socialsImage}
    showGradientOnTop
  >
    <div class="w-full h-full flex-col flex justify-center align-center">
      <SmallerDeco title="Follow Us" />
      <SocialsLogos />
    </div>
  </BgGradient>
</section>
