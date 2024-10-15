<script>
  import arrowUp from "../../../../assets/icons/arrow-up.svg"
  import arrowDown from "../../../../assets/icons/arrow-down-light.svg"
  import DropdownItem from "./DropdownItem.svelte"

  let isOpen = false
  let dropdownRef

  const toggleDropdown = () => {
    isOpen = !isOpen
  }

  const handleClickOutside = (event) => {
    if (dropdownRef && !dropdownRef.contains(event.target)) {
      isOpen = false
    }
  }

  const onMount = () => {
    document.addEventListener("click", handleClickOutside)
  }

  const onDestroy = () => {
    document.removeEventListener("click", handleClickOutside)
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="relative w-full max-w-sm mx-auto z-10 opacity-85"
  bind:this={dropdownRef}
  on:click={onMount}
>
  <button
    on:click={toggleDropdown}
    class="flex justify-between items-center w-full p-4 bg-black text-white font-gilroyBold text-[20px] max-md:text-[16px] font-bold border border-white"
  >
    All
    <img src={isOpen ? arrowUp : arrowDown} alt="Arrow Icon" class="w-6" />
  </button>

  {#if isOpen}
    <div class="absolute w-full mt-2 bg-black">
      <ul class="text-white divide-y divide-gray-white">
        <DropdownItem {toggleDropdown} text="All" />
        <DropdownItem {toggleDropdown} text="Announcement" />
        <DropdownItem {toggleDropdown} text="News" />
        <DropdownItem {toggleDropdown} text="Guides" />
      </ul>
    </div>
  {/if}
</div>

<style>
</style>
