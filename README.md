# rivet-add-on-boilerplate
A boilerplate for creating your own add-ons for the [Rivet software design system](https://rivet.iu.edu/). Replace the contents of this README with information about your add-on, following the template in README.template.md

[Download](https://github.com/indiana-university/rivet-add-on-boilerplate/archive/master.zip) | [Demo](https://indiana-university.github.io/rivet-add-on-boilerplate/)

## Getting started
This repo is meant to be cloned and used as a starting point for your Rivet add-on repo. It contains the JavaScript and CSS for the add-on, as well as example HTML snippets to help users start using your component.

Setting up the Rivet add-on boilerplate repo is a four-step process:

### 1. Clone this repo
Clone this repo `https://github.iu.edu/UITS/rivet-bopilerplate` to the computer on which you'll be developing your add-on.

Do a find-and-replace of the word "add-on-boilerplate" with the name of your add-on. A find-and-replace should be replaced on *file contents*, as well as for the filenames below

```
src/js/rivet-add-on-boilerplate.js
src/sass/rivet-add-on-boilerplate.scss
src/sass/components/_rivet-add-on-boilerplate.scss
```

This can be done with the following commands on a unix based system

```
# TODO write this
```

### 2. Include the CSS and JavaScript in your page
After renaming the CSS and JavaScript files to reflect the name of your add-on, update the `href` and `src` attribute values on lines `10` and `20` in `src/_includes/layouts/base.njk` to point to your renamed files.

```html
<link rel="stylesheet" href="dist/css/rivet-add-on-boilerplate.min.css">
<script src="dist/js/rivet-add-on-boilerplate.min.js"></script>
```

### 3. Add the markup to your HTML
We've provided a Nunjucks include called `demo-html.njk` where you can put the markup for your add-on. You can also write HTML directly inside the `index.md` file if you prefer, but using includes this way will help keep the main documentation page (`src/index.md`) more organized and easier to read. Include more than one example HTML snippet if your add-on has multiple variations.

This is also a great place to add documentation, [accessibility notes](https://rivet.iu.edu/components/navigation/dropdown/#accessibility-notes), or [microcopy guidelines](https://rivet.iu.edu/content-guide/), as the `index.html` file will be built to the `docs` folder and can be published with GitHub Pages.

### 4. Write add-on documentation, accessibility notes, and microcopy guidelines
We've proviede a template to use for your `README` file called `README.template.md`. To get started creating the README for your add-on follow these steps:

1. Delete this file
2. Rename `README.template.md` to `README.md` (the same as the file you just deleted). This is where you'll put your documentation and any other important information about your add-on.
3. Fill in the README template with the information about your add-on.

Delete or rename this file and rename `README.template.md` to `README.md`. Complete the `TODO`s in that file to fill in common documentation, and add any additional documentation that will helpful for developers implementing your add-on. Accessibility notes, microcopy guidelines, and a clear explanation of options will help keep the implementations of your add-on consistent and improve the overall usability of IU's software.

## Working with the source files
To get started working with add-on boilerplate you'll first need to make sure you have [Node.js](https://nodejs.org/en/) and NPM installed your system. Check if you have Node.js and NPM installed on Unix-like systems by running the following in your terminal:

```sh
node -v && npm -v
```

If you don't have Node and NPM installed, [go to the Node.js website](https://nodejs.org/en/) for instructions.

After you have Node installed, do the following:

1. Clone this repo
2. `npm install` to install all dependencies
3. Run `npm run start` to start a development server and watch for changes to `.scss`, `.js`. `.md` files.

This boilerplate uses [Eleventy](https://www.11ty.io/) to compile Markdown documentation to HTML. It also include Sass for CSS preprocessing and uses [Rollup](https://rollupjs.org/guide/en) to process modern JavaScript (ES6) into JavaScript that can saftely be used in the browser.

All files that are watched by default development task (`npm run start`) are compiled to and served from the `/docs` directory.

## To-do
- [X] Add steps to build `dist` folder with compiled and minified versions of add-on `.js` and `.css` files
- [X] Copy documentation from original boilerplate here: https://github.com/indiana-university/rivet-boilerplate
- [ ] Add section to the docs about all the build steps included in `gulpfile.js`. For instance, how to build the `/dist` folder for the final version and minified code.
- [ ] Add default `CONTRIBUTING.md`, `ISSUE_TEMPLATE.md`, and `PULL_REQEST_TEMPLATE.md` to `.github` folder.