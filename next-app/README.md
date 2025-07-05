# Freelance Video Creation & Editing Site

This Next.js project runs entirely with **Deno**. No `npm install` step is needed because dependencies are imported via npm specifiers and fetched automatically by Deno on first run. Tailwind CSS is configured for styling and the site contains a few pages describing freelance video services.

## Development

1. Install [Deno](https://deno.land/).
2. Start the dev server:

   ```
   deno task dev
   ```

## Production build

To generate an optimized build and start it locally:

```bash
deno task build
deno task start
```

