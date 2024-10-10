<script lang="ts">
  export let text: string
  export let href: string
  export let onClick: () => void
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li on:click={onClick}>
  <a {href} class="hover:text-gray-400">{text}</a>
</li>
