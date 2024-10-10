<script lang="ts">
  export let text: string
  let className = ""
  export { className as class }
</script>

<section>
  <button
    class={`relative bg-gradient-to-r from-[#03501D] to-[#0BA071] text-transparent font-bold py-6 px-8 overflow-hidden max-sm:py-4 max-sm:px-6 ${className}`}
  >
    <span
      class="absolute inset-0 bg-gradient-to-r from-[#03501D] to-[#0d4d39] rounded-lg blur-md"
    ></span>
    <span
      class="relative uppercase z-10 text-2xl font-woodford drop-shadow-lg text-white max-sm:text-sm"
      style="text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(11, 160, 113, 0.6);"
      >{text}</span
    >
  </button>
</section>
