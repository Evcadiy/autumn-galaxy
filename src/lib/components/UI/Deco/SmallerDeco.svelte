<script>
  export let title = ""
  let className = ""
  export { className as class }
</script>

<section class={`w-full flex justify-center ${className}`}>
  <div class="decorated-header mx-2 xl:mx-52 w-full 2xl:w-1/2">
    <h1 class="title font-ethnocentricrg">{title}</h1>
  </div>
</section>

<style>
  .decorated-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../../../assets/icons/deco2.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .title {
    color: white;
    font-size: 55px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    .title {
      font-size: 30px;
    }
  }

  @media (max-width: 640px) {
    .title {
      font-size: 18px;
    }
  }
</style>
