<script>
  import FooterLink from "../FooterLink/FooterLink.svelte"
  import TwitterLogo from "../../../../assets/icons/footerIcons/Twitter.svg"
  import FacebookLogo from "../../../../assets/icons/footerIcons/Facebook.svg"
  import DiscordLogo from "../../../../assets/icons/footerIcons/discord.svg"
  import YoutubeLogo from "../../../../assets/icons/footerIcons/youtube.svg"
</script>

<section>
  <div
    class="flex flex-col md:flex-row items-center max-w-[1200px] mx-auto px-7 justify-between py-[80px] max-md:py-[60px]"
  >
    <!-- Left Side (Links) -->
    <div class="w-full max-w-[700px] min-w-[200px] max-sm:text-center">
      <h2 class="text-white text-lg font-gilroyBold pb-5">Autumn Kingdoms</h2>
      <div class="sm:flex flex-wrap gap-x-24 gap-y-4">
        <FooterLink text="Home" />
        <FooterLink text="Features" />
        <FooterLink text="Mobile Requirements" />
        <FooterLink text="News" />
        <FooterLink text="Download" />
      </div>
    </div>

    <!-- Right Side (Social Media) -->
    <div class="w-full max-w-[80px] pb-8 md:flex md:justify-center">
      <!-- Flex для md-->
      <div class="text-center">
        <h2 class="text-white text-lg font-gilroyBold pt-8 pb-5">Follow Us</h2>
        <div class="grid grid-cols-2 gap-x-8 gap-y-6">
          <a href="/"><img src={TwitterLogo} alt="Twitter" class="w-6" /></a>
          <a href="/"><img src={FacebookLogo} alt="Facebook" class="w-6" /></a>
          <a href="/"><img src={DiscordLogo} alt="Discord" class="w-6" /></a>
          <a href="/"><img src={YoutubeLogo} alt="YouTube" class="w-6" /></a>
        </div>
      </div>
    </div>
  </div>
</section>
