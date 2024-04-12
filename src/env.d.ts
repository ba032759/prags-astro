/// <reference types="astro/client" />

// Calling it Env clashes with the @cloudflare type
type AppEnv = {
  // Bindings
  DB: D1Database;
  R2_CDN: R2Bucket;
  // Secrets
  AUTH_SECRET: string;
  MY_KV: KVNamespace;
};

type KVNamespace = import("@cloudflare/workers-types").KVNamespace;
type ENV = {
  // replace `MY_KV` with your KV namespace
  MY_KV: KVNamespace;
};

// // Depending on your adapter mode
// // use `AdvancedRuntime<ENV>` for advance runtime mode
// // use `DirectoryRuntime<ENV>` for directory runtime mode
type Runtime = import("@astrojs/cloudflare").DirectoryRuntime<ENV>;
declare namespace App {
  interface Locals {
    runtime: Runtime;
  }
}
