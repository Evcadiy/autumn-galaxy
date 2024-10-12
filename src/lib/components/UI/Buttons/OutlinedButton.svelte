<script lang="ts">
  import { goto } from "$app/navigation" // Импорт функции для навигации

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
    class={`text-white max-md:text-sm uppercase font-woodford border-white border-2 ${className}`}
    on:click={handleClick}
  >
    {text}
  </button>
</section>
