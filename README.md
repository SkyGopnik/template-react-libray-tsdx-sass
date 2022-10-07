# React Template Library

Support Absolute paths, TypeScript, SASS (SCSS) modules, StoryBook and Jest

Congrats! You just saved yourself hours of work. Let’s get you oriented with what’s here and how to use it.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands

Template scaffolds your new library inside `/src`.

The recommended workflow is to run in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then you can import your library in local project using such as Next:

```javascript
import { ComponentName } from "{path-to-your-project}"
```

Then run either Storybook:

### Storybook

Run inside another terminal:

```bash
npm run storybook # or yarn storybook
```

This loads the stories from `/**/*.stories.tsx`.


### Jest

Run inside another terminal:

```bash
npm run test # or yarn test
```

This loads the stories from `/**/*.test.tsx`.

## Configuration

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` or `yarn size` and visulize it with `npm run analyze` or `tarn analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/src
  index.ts              # This is main export, project won't work without it
  /components           # Your new react library
    index.tsx           # Your component
    index.stories.tsx   # Instructions for StoryBook
    index.test.tsx      # Tests for Jest
    index.module.scss   # Styles
    /kekos              # Another example of component
```

### Rollup

Template uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Including Styles

There are many ways to ship styles, including with CSS-in-JS. Template has no opinion on this, configure how you like.

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).