<script lang="ts">
  export let text: string
  let className = ""
  export { className as class }
</script>

<section>
  <button
    class={`text-white uppercase font-woodford border-white border-2 px-4 py-2 lg:px-8 lg:py-4 ${className}`}
    >{text}</button
  >
</section>
