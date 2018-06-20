# rivet-add-on-boilerplate
A boilerplate for Rivet add-ons. Replace the contents of this README with information about your add-on, following the template in README.template.md

[Download](https://github.com/indiana-university/rivet-add-on-boilerplate/archive/master.zip) | [Demo](https://indiana-university.github.io/rivet-add-on-boilerplate/)

## Getting started
This repo is meant to be cloned, and used as a starting point for a Rivet add-on repo. It contains the javascript and css for the add-on, as well as an example of the HTML required by the component. There are a few steps to get this repo ready to be used as a base.

### 1. Clone this repo
Clone this repo `https://github.iu.edu/UITS/rivet-bopilerplate` to the machine where you'll be developing your add-on.

Do a find-and-replace of the word "add-on-boilerplate" with the name of your add-on. A find-and-replace should be replaced on *file contents*, as well as for the filenames below

```
src/js/rivet-boilerplate.js
src/sass/rivet-boilerplate.scss
src/sass/components/rivetboilerplate.scss
```

This can be done with the following commands on a unix based system

```
# TODO write this
```

### 2. Include the CCS and JavaScript in your page
After renaming the files, edit `src/index.html` to use the updated names

```html
<link rel="stylesheet" href="dist/css/rivet-add-on-boilerplate.min.css">
<script src="dist/js/rivet-add-on-boilerplate.min.js"></script>
```

### 3. Add the markup to your HTML
Add your markup to `src/index.html`, replacing the HTML comment `<!-- PLACE BOILERPLATE EXAMPLE HERE -->`. Include as many examples as are helpful to convey the variations and options of the component.

This is also a great place to add documentation, accessibility notes, or microcopy guidelines, as the `index.html` file will be built to the `docs` folder and can be published with GitHub Pages.


### 4. Write the documentation
Delete or rename this file, and rename `README.template.md` to `README.md`. Complete the `TODO`s in that file to fill in common documentation, and add any additional documentation that will helpful for developers implementing your add-on. Accessibility notes, microcopy guidelines, and a clear explanation of options will help keep the implementations of your add-on consistent, and improve the overall usability of IU's software.

## Working with the source files
(Need to write this...)

1. Clone this repo
2. `npm install` to install all dependencies
3. Run `npm run start` to start a development server and watch for changes to `.scss`, `.js`. `.md` files.

This boilerplate uses [Eleventy](https://www.11ty.io/) to compile Markdown documentation to regular HTML. It also include Sass for CSS preprocessing and uses [Rollup](https://rollupjs.org/guide/en) to process modern JavaScript (ES6) into JavaScript that can saftely be used in the browser.

All files that are watched by default development task (`npm run start`) are compiled to and served from the `/docs` directory.

## To-do
- [X] Add steps to build `dist` folder with compiled and minified versions of add-on `.js` and `.css` files
- [ ] Copy documentation from original boilerplate here: https://github.com/indiana-university/rivet-boilerplate
- [ ] Add default `CONTRIBUTING.md`, `ISSUE_TEMPLATE.md`, and `PULL_REQEST_TEMPLATE.md` to `.github` folder.