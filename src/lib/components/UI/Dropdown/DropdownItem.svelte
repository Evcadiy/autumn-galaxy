<script>
  export let text
</script>

<section>
  <li class="text-white text p-4 font-gilroyBold">{text}</li>
</section>

<style>
  .text {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 124%; /* 31px */
    letter-spacing: 1.5px;
  }
  @media (max-width: 768px) {
    .text {
      font-size: 16px;
    }
  }
</style>
