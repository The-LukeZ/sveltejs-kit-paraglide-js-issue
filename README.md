# SvelteKit Paraglide-JS Reproduction Example

This is a reproduction example for the issue I'm facing with SvelteKit and Paraglide-JS.

## Steps

1. Clone this repository
2. Run `npm install`
3. Run `npm run build && npm run preview`
4. Open the browser and navigate to `http://localhost:4173/`
5. Try to change the language and see what happens.

### Expected behavior

The language should change and the text and URL should be updated.

### Actual behavior

The language changes for a split of a second but then it reverts back to the previous language and doesn't change the URL.

It doesn't matter if you use the `preferredLocale` as a strategy or not, the behavior is the same. (Just the initial language is different)

### Reason

The reason for all of this are the `urlPatterns` from the vite config. If you remove them, everything works as expected.

```js
import { paraglideVitePlugin } from "@inlang/paraglide-js";

export default defineConfig({
  plugins: [
    // ...
    paraglideVitePlugin({
      // ...
      urlPatterns: [
        {
          pattern: "/:path(.*)?",
          localized: [
            ["en", "/:path(.*)?"],
            ["de", "/:path(.*)?"],
          ],
        },
      ],
    }),
  ],
  // ...
});
```

If you leave them there, the bug occurs. I've use two examples from the docs.

1. [Locale Prefixing](https://inlang.com/m/gerre34r/library-inlang-paraglideJs/strategy#locale-prefixing)
2. [Translated Pathnames](https://inlang.com/m/gerre34r/library-inlang-paraglideJs/strategy#translated-pathnames)
