<script lang="ts">
  export let text: string
  let className = ""
  export { className as class }
</script>

<section>
  <button
    class={`relative green-btn text-transparent font-bold py-6 px-8 overflow-hidden max-sm:py-4 max-sm:px-6 ${className}`}
  >
    <span
      class="relative uppercase z-10 text-2xl font-woodford drop-shadow-lg text-white max-sm:text-sm"
      style="text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(11, 160, 113, 0.6);"
      >{text}</span
    >
  </button>
</section>

<style>
  .green-btn {
    position: relative;
    z-index: 1;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  }

  .green-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(47deg, #05802f 40.22%, #12dc9c 109.98%);
    opacity: 0.45;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  .green-btn span {
    position: relative;
    z-index: 10;
  }

  @media (hover: hover) {
    .green-btn:hover::before {
      opacity: 0.65;
    }

    .green-btn:hover {
      box-shadow: 0 15px 20px rgba(0, 0, 0, 0.6);
      transition: box-shadow 0.3s ease;
    }
  }
</style>
