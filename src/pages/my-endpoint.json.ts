import type { APIContext } from "astro";

export async function GET({ locals }: APIContext) {
  // the type KVNamespace comes from the @cloudflare/workers-types package
  const { MY_KV } = locals.runtime.env;

  console.log({ MY_KV });
  const key = await MY_KV.get("key");
  return new Response(
    JSON.stringify({
      key,
    })
  );
}

// export function GET(context: APIContext) {
//   const { MY_KV }= context.locals.runtime.env;

//   return MY_KV.get("key");
// }
