<script>
  import HeaderNavBar from "$lib/components/Header/HeaderNavBar/HeaderNavBar.svelte"
  import logo from "../../../assets/images/logo.png"
  import OutlinedButton from "../UI/Buttons/OutlinedButton.svelte"
  import BurgerMenu from "./BurgerMenu/BurgerMenu.svelte"
  import HeaderDropdown from "./HeaderDropdown/HeaderDropdown.svelte"
  import HeaderDropdownItem from "./HeaderDropdownItem/HeaderDropdownItem.svelte"
</script>

<header
  class="w-full p-10 max-md:px-4 max-md:py-4 max-lg:px-6 flex items-center justify-between relative bg-background-primary"
>
  <div class="flex w-full items-center">
    <img src={logo} alt="logo" class="w-32 max-md:w-20" />
    <HeaderNavBar />
    <OutlinedButton
      text="Download"
      class="py-4 px-8 max-lg:px-4 max-md:mx-4 max-lg:py-2 max-md:py-1"
    />
  </div>
  <BurgerMenu />
</header>
