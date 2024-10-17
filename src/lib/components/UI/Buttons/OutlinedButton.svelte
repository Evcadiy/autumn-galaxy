<script lang="ts">
  import { goto } from "$app/navigation"

  export let text: string
  let className = ""

  const handleClick = () => {
    if (text === "All News") {
      goto("/news")
    }
  }

  export { className as class }
</script>

<section>
  <button
    class={`text-white  max-md:text-sm uppercase font-woodford border-white border-2 ${className}`}
    on:click={handleClick}
  >
    <p class="pt-[2px]">{text}</p>
  </button>
</section>

<style>
  @media (hover: hover) {
    button:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transition: background-color 0.3s ease;
    }
  }
</style>
