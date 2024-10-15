<script>
  export let text
  export let toggleDropdown
</script>

<section>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <li
    on:click={toggleDropdown}
    class="text-white text p-4 font-gilroyBold hover:text-opacity-75 hover:bg-gray-500 hover:cursor-pointer"
  >
    {text}
  </li>
</section>

<style>
  .text {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 124%; /* 31px */
    letter-spacing: 1.5px;
  }
  @media (max-width: 768px) {
    .text {
      font-size: 16px;
    }
  }
</style>
