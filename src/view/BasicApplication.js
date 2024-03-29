/* eslint-disable brace-style */
import { SvelteApplication } from "@typhonjs-fvtt/runtime/svelte/application";

import BasicAppShell from "./BasicAppShell.svelte";

export default class BasicApplication extends SvelteApplication {
   /**
    * Default Application options
    *
    * @returns {object} options - Application options.
    * @see https://foundryvtt.com/api/Application.html#options
    */
   static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
         title: "Skills and Actions", // Automatically localized from `lang/en.json`.
         width: 700,
         popOut: true,
         resizable: true,
         minimizable: true,
         height: 700,

         svelte: {
            class: BasicAppShell,
            target: document.body,
         },
      });
   }
}

