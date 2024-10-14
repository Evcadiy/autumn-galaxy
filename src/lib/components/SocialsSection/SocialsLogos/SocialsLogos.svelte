<script>
  import DiscordLogo from "../../../../assets/icons/socialIcons/Discord.svg"
  import FacebookLogo from "../../../../assets/icons/socialIcons/Facebook.svg"
  import TwitterLogo from "../../../../assets/icons/socialIcons/twitter.svg"
  import YoutubeLogo from "../../../../assets/icons/socialIcons/YouTube.svg"
</script>

<section class="flex justify-center gap-6 md:gap-12 pt-8 md:pt-16 items-center">
  <a href="/"><img src={TwitterLogo} alt="Twitter" class="w-8 md:w-14" /></a>
  <div class="h-12 md:h-20 w-[2px] md:w-[3px] bg-gray-400 divider"></div>
  <a href="/"><img src={FacebookLogo} alt="Facebook" class="w-8 md:w-14" /></a>
  <div class="h-12 md:h-20 w-[2px] md:w-[3px] bg-gray-400 divider"></div>
  <a href="/"><img src={DiscordLogo} alt="Discord" class="w-8 md:w-14" /></a>
  <div class="h-12 md:h-20 w-[2px] md:w-[3px] bg-gray-400 divider"></div>
  <a href="/"><img src={YoutubeLogo} alt="Youtube" class="w-8 md:w-14" /></a>
</section>

<style>
  .divider {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #fff 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
</style>
