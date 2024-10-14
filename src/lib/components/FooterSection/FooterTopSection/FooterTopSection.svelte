<script>
  import FooterLink from "../FooterLink/FooterLink.svelte"
  import TwitterLogo from "../../../../assets/icons/footerIcons/Twitter.svg"
  import FacebookLogo from "../../../../assets/icons/footerIcons/Facebook.svg"
  import DiscordLogo from "../../../../assets/icons/footerIcons/discord.svg"
  import YoutubeLogo from "../../../../assets/icons/footerIcons/youtube.svg"
</script>

<section>
  <div
    class="flex justify-center items-center gap-[350px] max-md:gap-0 max-md:py-[30px] max-lg:py-[50px] max-xl:gap-[200px] px-10 py-[120px] max-md:flex-col"
  >
    <!-- Left Side (Links) -->
    <div class="w-full max-w-[500px] min-w-[200px] max-sm:text-center">
      <h2 class="text-white text-lg pb-5">Autumn Kingdoms</h2>
      <div class="sm:flex flex-wrap gap-x-10 gap-y-4">
        <FooterLink text="Home" />
        <FooterLink text="Features" />
        <FooterLink text="Mobile Requirements" />
        <FooterLink text="News" />
        <FooterLink text="Download" />
      </div>
    </div>
    <!-- Right Side (Social Media) -->
    <div class="w-full max-w-[80px] pb-8">
      <h2 class="text-white text-lg pt-8 pb-5">Follow Us</h2>
      <div class="grid grid-cols-2 gap-x-8 gap-y-6">
        <a href="/"><img src={TwitterLogo} alt="Twitter" class="w-6" /></a>
        <a href="/"><img src={FacebookLogo} alt="Facebook" class="w-6" /></a>
        <a href="/"><img src={DiscordLogo} alt="Discord" class="w-6" /></a>
        <a href="/"><img src={YoutubeLogo} alt="YouTube" class="w-6" /></a>
      </div>
    </div>
  </div>
</section>
