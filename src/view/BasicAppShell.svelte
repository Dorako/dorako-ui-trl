<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true} />

<script>
   import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
   import SkillsPage from "./SkillsPage.svelte";
   import Sidebar from "./Sidebar.svelte";

   const isGM = game.user.isGM;
   let token = _token;

   export let elementRoot;
</script>

<!-- ApplicationShell provides the popOut / application shell frame, header bar, content areas -->
<!-- ApplicationShell exports `elementRoot` which is the outer application shell element -->
<ApplicationShell bind:elementRoot>
   <main>
      <Sidebar />
      <SkillsPage />
   </main>
   <!-- {getFeint().data.data.description["value"]}; -->
</ApplicationShell>

<style lang="scss">
   main {
      // background-image: url("./background-light.webp");
      display: flex;
      flex-direction: row;
      gap: 10px;
   }
</style>
