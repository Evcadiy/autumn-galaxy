<script lang="ts">
  import DownloadDivider from "$lib/components/DownloadDivider/DownloadDivider.svelte"
  import FooterSection from "$lib/components/FooterSection/FooterSection.svelte"
  import Header from "$lib/components/Header/Header.svelte"
  import SocialsSection from "$lib/components/SocialsSection/SocialsSection.svelte"
  import "../styles/app.css"
</script>

<Header />
<slot />
<DownloadDivider />
<SocialsSection />
<FooterSection />
