/// <reference types="astro/client" />

// // Depending on your adapter mode
// // use `AdvancedRuntime<ENV>` for advance runtime mode
// // use `DirectoryRuntime<ENV>` for directory runtime mode
type Runtime = import("@astrojs/cloudflare").DirectoryRuntime<ENV>;
declare namespace App {
  interface Locals {
    runtime: {
      env: Env;
    };
  }
}
