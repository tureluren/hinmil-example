# HinMil example

A small project to try [HinMil](https://github.com/tureluren/hinmil):
Hindley-Milner type checking for plain JavaScript. The types are signatures in
ordinary comments, so every file here is plain `.js` that runs as it is.

![A call with a string where a number is expected: HinMil underlines it, the hover shows the type mismatch, and after the fix the hover shows the inferred type](https://raw.githubusercontent.com/tureluren/hinmil/main/images/diagnostics.gif)

## Try it in three steps

1. Clone this repository and open the folder in VS Code:

   ```sh
   git clone https://github.com/tureluren/hinmil-example.git
   code hinmil-example
   ```

2. Install the **HinMil** extension. VS Code suggests it when the folder
   opens; otherwise search the Extensions view for `hinmil.hinmil`.

3. Open the files in `src/`. Each one has one deliberate type error, marked
   with a red squiggle. Hover over a name to see its type.

## What is in `src/`

| File | Shows | The deliberate error |
|---|---|---|
| [`shop.js`](src/shop.js) | a record type and a function on it | `quantity: "3"` is a String; `LineItem` wants a Number |
| [`cart.js`](src/cart.js) | records, arrays, a two-argument function and a `Functor` type class | none: hover over the names |
| [`result.js`](src/result.js) | a sum type (`Ok \| Err`) and narrowing with `::narrow` | the fallback `"one"` is not a Number |
| [`pipeline.js`](src/pipeline.js) | a typed `pipe` that checks each link | `format` gives a String, `withVat` wants a Number |

Things to try:

- Fix an error and watch the squiggle go away.
- Hover over `result.value` in `result.js`: after `isOk (result)` it is a
  `Number`.
- Change a signature, for example `price :: String` in `shop.js`, and see
  which lines disagree.

## On the command line

The same checks run without an editor, for example in CI:

```sh
npm install
npm run check
```

`npm run check` runs `hinmil src`. It exits with an error here, because of the
deliberate errors above.

## A note on VS Code's TypeScript checker

VS Code's built-in TypeScript extension also analyses JavaScript, and it does
not know HM annotations. [.vscode/settings.json](.vscode/settings.json)
switches off its diagnostics for this folder only. See
[Using HinMil without the built-in TypeScript extension](https://github.com/tureluren/hinmil#using-hinmil-without-the-built-in-typescript-extension)
for the other options.

## License

MIT
