<script>
  export let text
  let className = ""
  export { className as class }
</script>

<section class={"max-sm:pb-3"}>
  <a href="/" class={`link ${className}`}>{text}</a>
</section>

<style>
  .link {
    color: #9e9e9e;
  }
</style>
