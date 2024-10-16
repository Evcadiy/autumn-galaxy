<script>
  import logo from "../../../../assets/images/logo.png"
  import FooterLink from "../FooterLink/FooterLink.svelte"
</script>

<section class="bg-background-primary py-10">
  <div
    class="flex flex-col md:flex-row max-w-[1200px] mx-auto px-5 max-md:px-8"
  >
    <!-- Logo Section -->
    <div class="flex items-start justify-center pl-4 md:pr-20 max-md:pb-12">
      <a href="/"><img src={logo} alt="logo" class="w-20" /></a>
    </div>
    <div class="flex flex-1 space-x-16 justify-start">
      <!-- About Section -->
      <div>
        <div class="pb-7">
          <FooterLink text="About" class="text-lg" />
        </div>
        <ul class="space-y-2">
          <FooterLink text="Legal & Privacy" class="text-sm" />
          <FooterLink
            text="Privacy & Cookie Policy (Your Privacy Rights)"
            class="text-sm"
          />
          <FooterLink text="Cookie Preferences" class="text-sm" />
        </ul>
      </div>

      <!-- Support Section -->
      <div>
        <div class="pb-7">
          <FooterLink text="Support" class="text-lg" />
        </div>
        <ul class="space-y-2">
          <FooterLink text="User Agreement" class="text-sm" />
        </ul>
      </div>
    </div>

    <div
      class="text-[#9e9e9e] md:flex items-center text-sm px-4 max-md:text-center max-md:pt-7"
    >
      © 2024 Autumn ( name here )
    </div>
  </div>
</section>
