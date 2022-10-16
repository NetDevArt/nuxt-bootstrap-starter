# Nuxt 3 with Bootstrap Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.
> Feel free to contribute optimizing the structure and libraries versions.

This setup is designed to bring some people to work as a team with common coding conventions.
This starter includes some packages to work with nuxt3, vue3, typescript, Sass, bootstrap. It also includes eslint and
prettier to format your code in the same way for the whole team.

Moreover, and following
[this thread](https://www.aleksandrhovhannisyan.com/blog/crlf-vs-lf-normalizing-line-endings-in-git/#lf-line-feed),
line endings are forced to `LF` within repo, but allows users to have their own configuration within IDE.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

Make sure to configure your IDE to use prettier & eslint to format your files.

### Lint and pre-commit Hook

[Check this link to get more details](https://leighdinaya.com/blog/configure-eslint-prettier-husky-commitlint-nuxt3/)


### Bootstrap

Bootstrap is set to import components individually through scss imports.  
Its javascript plugins are also imported individually, globally through `plugins/bootstrap.client.ts`. However, you can
load specific plugins to get better controls on it within your vue components.

> For example, use collapse globally (on all pages) because it is used by the navbar which will be on all pages.  
> However, use Modal in its own component beacause it will not be used on every pages.

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
