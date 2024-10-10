<script lang="ts">
  import burgerMenuIcon from "../../../../assets/icons/burger-menu.svg"
  import BurgerMenuItem from "./BurgerMenuItem.svelte"

  let isOpen = false

  const toggleMenu = () => {
    isOpen = !isOpen
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }
</script>

<div class="block">
  <button class="hidden max-md:block text-white" on:click={toggleMenu}>
    <img src={burgerMenuIcon} alt="burger-menu" class="w-8 text-white" />
  </button>
</div>

<!-- Menu -->
<div class={`menu ${isOpen ? "menu-enter" : "menu-exit"}`}>
  <button class="close-button" on:click={toggleMenu}>&times;</button>
  <ul class="text-white text-2xl space-y-6">
    <BurgerMenuItem text="Play" href="/" onClick={toggleMenu} />
    <BurgerMenuItem text="Download" href="/" onClick={toggleMenu} />
    <BurgerMenuItem text="About" href="/" onClick={toggleMenu} />
    <BurgerMenuItem text="Contact" href="/" onClick={toggleMenu} />
  </ul>
</div>

<style>
  .menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 50;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .menu-enter {
    transform: translateX(0);
  }

  .menu-exit {
    transform: translateX(100%);
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
  }
</style>
