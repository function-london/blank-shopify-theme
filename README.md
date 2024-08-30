# Blank Shopify Theme

This repo is a fork ofr the [blank shopify theme](https://github.com/devwhodevs/blank-shopify-theme) by 
Oleksandr Ostrovskyi, with some basic tooling on top to start working with tailwind.

## Setup

1. Install Shopify CLI
2. Clone this repo.
3. `nvm use` make sure the version of NPM being used is correct
4. `npm i` install dependencies
5. `npm run watch` to start a tailwind watcher
6. `shopify theme dev` to start serving the theme

## Structure

The main Tailwind CSS file is in ./src/ - this should only be edited when adding either something global to all 
elements (please ask someone if you want to do this), or to style a third-party component where you cannot control 
the classes.

CSS is compiled to an inline CSS snippet in snippets/css-main.min.css.liquid

We generally use Custom Elements loaded as JS modules, so there isn't a compilation step or JS build pipeline. All JS 
components should be in a separate JS file in the `./assets/` directory. Assets are typically included in liquid 
section templates with the following syntax:
```html
<script src="{{ 'custom-element-name.js' | asset_url }}" type="module"></script>
```

## License

Copyright (c) 2022-present Oleksandr Ostrovskyi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
