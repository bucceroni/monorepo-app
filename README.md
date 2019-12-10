# Start

- Monorepo/Lerna

  - mkdir app (Criar pasta monorepo)
  - git init (Configuração inicial do git)
  - lerna init (Configuração inicial do Lerna)

- Monorepo/Lerna/Webpack/Libs/Componentes

  - mkdir packages/components (Criar pasta components)
  - git init (Configuração inicial do git)
  - npm init -y (Configuração inicial para Javascript)
  - Instalar Dependências
    ```npm i --save-dev @babel/core
    npm i --save-dev @babel/preset-react
    npm i --save-dev @babel/preset-env
    npm install --save-dev webpack
    npm install --save-dev babel-loader
    npm install --save-dev uglifyjs-webpack-plugin
    npm install --save-dev webpack-cli
    npm install --save-dev styled-components
    npm install --save-dev babel-plugin-styled-components
    ```
  - npm run build (Build lib)

- Monorepo/Lerna/Webpack/App/SSR(create-next-app)

  - cd packages
  - npx create-next-app app (Criar aplicação com NEXT)

- Monorepo/Lerna/Webpack/App/Styleguide(Catalog/Storybook)

  - cd packages
  - npx create-react-app styleguide (Criar aplicação com CRA)
  - yarn add catalog

- Monorepo/Lerna/Link-Packages

  - lerna add components --scope=styleguide
  - lerna add components --scope=app

# Run

1.  Clone project: `https://github.com/bucceroni/monorepo-app.git`
2.  Install Dependencies: `lerna bootstrap`
3.  Folder app: `cd packages/app/`
4.  Run project: `npm run dev`

# Notes

## Lerna

- Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm

  - Install Lerna: `npm install -g lerna (global)`
  - Install all dependencies: `npm install` or `yarn install`
  - Add dependencies root: `npm intall styled-components` or `yarn add styled-components` after `lerna run bootstrap`
  - Link projects: `lerna bootstrap`
  - Execute all packages (lint/test/build): `npm packages` or `yarn packages`
  - Build: `npm packages:build` or `yarn packages:build` or `lerna run build`
  - Publish: `lerna publish --conventional-commits` or `lerna publish --conventional-commits --force-publish=*`
  - Update version: `lerna version [major|minor|patch|prerelease|etc]` or `lerna version 1.0.1`
  - Verify version: `lerna version`
  - Import project: `lerna import <path-project>` save commits
  - `useWorkspaces` to Yarn

## Storybook

- The tool enables developers to create components independently and showcase components interactively in an isolated development environment
  - Create CRA(create-react-app) project
  - Install Storybook `npx -p @storybook/cli sb init --type react`

## NEXT

- Install NEXT `npm i -g next`Ï
