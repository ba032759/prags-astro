import type { APIContext } from "astro";

export async function get({ locals }: APIContext) {
  // the type KVNamespace comes from the @cloudflare/workers-types package
  const { MY_KV } = locals.runtime.env;

  return MY_KV.get("key");
}

// export function GET(context: APIContext) {
//   const { MY_KV }= context.locals.runtime.env;

//   return MY_KV.get("key");
// }
