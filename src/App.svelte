<script>
  import Picture from "./lib/Picture.svelte";
  import Header from "./lib/Header.svelte";
  import Info from "./lib/Info.svelte";
  import AboutCard from "./lib/AboutCard.svelte";
  import ReposCard from "./lib/ReposCard.svelte";
</script>

<Header />

<main>
  <!-- Contenido de la pagina principal info* -->
  <div class="main-container">
    <Picture />
    <Info />
  </div>
  <section>
    <AboutCard />
    <ReposCard />
  </section>
</main>

<style>
  main {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }

  .main-container {
    align-items: center;
    width: 50%;
    display: flex;
    justify-content: space-between;
  }

  section { 
    margin-top: 30px;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
</style>
