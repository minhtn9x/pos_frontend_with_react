# POS Application (PWA)

## Tech stack

1. ReactJS
2. Polaris Shopify (UI Components)
3. Styled-components for styling
4. Styled-system for configuring **RESO's styles**
5. Vite for building, development
6. [Vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/) for pwa and offline work
7. Eslint, Prettier

## Functional requirement

- Các trang phải đc **`cached`** để sử dụng Offline với PWA
- UI cấu hình theo theme để tuân theo design system (kết hợp giữa **shopify** và **brand design**)

<br />
<br />
<br />

## How to start

This example relies on [https-localhost](https://github.com/daquinoaldo/https-localhost) to serve the dist files on https://localhost/. Please refer to it's docs for the steps to setup your local environment.

```bash
npm run start
```

Open up https://localhost/, then restart the server, you will see a notification ask you to restart reload the offline content.

## Issues:

1. Polaris không custome component mạnh được (layout component)
2. Không thể thay đổi design system của Polaris (colors) (workaround - ghi de cac gia tri cua `style` duoc nhung trong the body)

# Vite + React + Typescript + Eslint + Prettier

A starter for React with Typescript with the fast Vite and all static code testing with Eslint and formatting with Prettier.

I found out about Vite and I wanted to have a boilerplate for the technologies that I use. You can find more about these in the following links: [Vite](https://github.com/vitejs/vite), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Eslint](https://eslint.org/), [Prettier](https://prettier.io/).

## Installation

Clone the repo and run `yarn install`

## Start

After the successful installation of the packages: `yarn dev`
