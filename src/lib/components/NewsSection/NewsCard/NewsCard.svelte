<script>
  import line from "../../../../assets/icons/line.svg"
  import NewsImage from "../NewsImage/NewsImage.svelte"
  export let imageSrc
  export let logoSrc
</script>

<section class="news-card">
  <div class="image-container">
    <NewsImage src={imageSrc} {logoSrc} />
  </div>
  <div class="content">
    <div>
      <h2 class="title font-bignoodletitling">Lorem ipsum dolo sit...</h2>
      <img src={line} alt="line" class="line pb-2" />
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
        sapien orci.
      </p>
    </div>
    <span class="date font-gilroyBold">1/10/2024</span>
  </div>
</section>

<style>
  .news-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    max-width: 402px;
    height: 462px;
    transition: transform 0.3s ease;
    background: white;
  }

  .image-container {
    width: 100%;
    height: 55%;
    overflow: hidden;
    background: linear-gradient(to left, #627fa4, #96c6d1);
    padding: 2px;
  }

  .content {
    position: relative;
    height: 45%;
    padding: 7px 15px 15px 15px;
    background: linear-gradient(206deg, #c8fdf1 48.52%, #87afcf 102.62%);
    color: white;
  }

  .title {
    color: #1d3456;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 3.85px;
  }

  .description {
    color: #325b64;
    font-size: 18px;
    font-weight: 400;
  }

  .date {
    position: absolute;
    bottom: 10px;
    left: 15px;
    color: #1d3456;
    font-size: 18px;
    font-weight: 400;
  }

  @media (hover: hover) {
    .news-card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
  }

  @media (max-width: 1200px) {
    .title {
      font-size: 30px;
      letter-spacing: 2.85px;
    }
    .description {
      font-size: 14px;
    }
    .date {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .news-card {
      max-width: 320px;
      height: 400px;
    }

    .title {
      font-size: 28px;
      letter-spacing: 2.85px;
    }

    .content {
      padding: 7px 10px 10px 10px;
    }
  }

  @media (max-width: 480px) {
    .news-card {
      max-width: 260px;
      height: 350px;
    }

    .title {
      font-size: 24px;
      letter-spacing: 2.5px;
    }

    .description {
      font-size: 0.85rem;
    }

    .date {
      font-size: 0.75rem;
    }
  }
</style>
