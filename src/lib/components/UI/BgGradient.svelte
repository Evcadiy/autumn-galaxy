<script>
  export let src
  export let showGradientOnTop = false

  let className = ""
  export { className as class }
</script>

<section class="banner-container">
  <div class="banner-content">
    <div class="gradient-overlay {showGradientOnTop ? 'top-gradient' : ''}">
      <slot />
    </div>
    <img {src} alt="banner" class={`w-full ${className}`} />
  </div>
</section>

<style>
  .banner-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }

  .banner-content {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(
      to top,
      rgba(10, 19, 25, 1) 0%,
      rgba(10, 19, 25, 0) 40%
    );
  }

  .top-gradient::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(
      to bottom,
      rgba(10, 19, 25, 1) 0%,
      rgba(10, 19, 25, 0) 100%
    );
  }

  img {
    display: block;
    width: 100%;
    z-index: 0;
    object-fit: cover;
    object-position: center;
  }
</style>
