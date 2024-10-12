<script>
  export let src
  export let logoSrc
</script>

<section class="news-image-container" style="background-image: url('{src}');">
  <div class="shadow" />
  <div class="content-overlay">
    <img src={logoSrc} alt="logo" class="logo" />
    <h2 class="title font-woodford">UPDATE NOTE</h2>
  </div>
</section>

<style>
  .news-image-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    display: flex;
    padding: 15px;
  }

  .content-overlay {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      470deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  .logo {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 100px;
    height: auto;
  }

  .title {
    position: absolute;
    color: white;
    bottom: 5px;
    right: 10px;
    font-size: 34px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    background: url(../../../../assets/images/grunge.png) lightgray 50% / cover
      no-repeat;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1024px) {
    .logo {
      width: 70px;
    }
    .title {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 20px;
    }
  }
</style>
