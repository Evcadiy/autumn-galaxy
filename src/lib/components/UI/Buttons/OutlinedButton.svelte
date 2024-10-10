<script lang="ts">
  export let text: string
  let className = ""
  export { className as class }
</script>

<section>
  <button
    class={`text-white max-md:text-sm uppercase font-woodford border-white border-2 px-4 lg:px-8 ${className}`}
    >{text}</button
  >
</section>
