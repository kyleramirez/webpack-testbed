## Webpack requirements

- resolve-root : Ability to write `import { Component } from "ui"`
- tree-shake-re-export : Ability for a module to be re-exported, and not show up in the final version
- be able to show that some things that evaluate to true are automatically replaced, i.e. env, and can assining that to a variable change that

## Goal: Demonstrate the most minimal configuration to enable features for single page app development

1. Demonstrate using `WebpackDevServer` to serve static HTML file
1. Demonstrate using `WebpackDevServer` to serve bundled JavaScript file
1. Demonstrate using production and development environments in `Webpack`
1. Demonstrate using `Webpack` to bundle a JavaScript file for production
1. Demonstrate using `Webpack` to generate source maps to original source code in various environments
1. Demonstrate using `Webpack` with `UglifyJS` to "tree shake", or remove unused modules, drop `console.log`, and other optimizations
1. Demonstrate importing `React` and `ReactDOM`, and writing in `JSX` with `Babel`
1. Demonstrate writing in `ES6` with `Babel`
1. Demonstrate using `React Hot Loader` to tweak `React` components in real time
1. Demonstrate using CSS modules in `Webpack`, which:
   - In a development environment
     - Loads CSS in the document `<head>`
     - Uses readable class names in the rendered markup
   - In a production environment
     - Generates CSS assets
     - Uses minified class names
1. Demonstrate using a combination of tools to generate CSS from SCSS that:
   - Imports global SCSS variables for each CSS module
   - Automatic vendor prefixing with PostCSS `autoprefixer`
   - Includes original SCSS source code in the browser
1. Demonstrate basic usage of `react-router`
1. Demonstrate using "code splitting" to break up a large single page application, while keeping features like hot reloading in a development environment
1. Demonstrate state and data management using a combination of `Redux`, `React Redux` and `Redux Flute`, including:
   - Basic configuration of `store`
   - Creating `Models` with `Redux Flute`
   - Rendering a simple list of API resources (collections)
   - Rendering a session-based API resource (members)
   - Advanced `Model` configuration
     - Specifying routes
     - Specifying static and instance methods
     - Specifying associations, validations and scopes
1. Demonstrate the `ReactiveRecord` and `ReactiveForm` ecosystem to create, read, update and delete API resources.
1. Demonstrate techniques for memory management in `React`
