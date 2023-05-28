# Todo List

This project represents modern UI design styles under a todo list app.

## Purpose

Collect all design styles together in one place and learn how to implement them in CSS.

## Demo

A live demo is available at [https://todo-list-rust-theta.vercel.app](https://todo-list-rust-theta.vercel.app).
To change the theme, click the `Settings` button on the right navigation bar. Then, select the style you want to use.

## Design styles

All design styles are written from scratch. This application does not use any UI component library. Currently, the app implements the following design styles:

- Modern Dark
- Modern Light
- Brutalism
- Neobrutalism
- Cardboard
- Glassmorphism
- Claymorphism
- Neumorphism
- Aurora (the dark theme with some subtle vector graphics in the background)

## Screenshot

⚠️ The screenshot below is outdated. It does not show the latest design styles.
![all-in-one](https://github.com/wojciechmarek/todo-list/assets/27026036/3d663019-eef6-469f-9871-df8135bac2f7)

## Used technologies

- 🎁 **Project:** vite, react, typescript
- 🛠️ **Tools:** yarn, eslint, prettier, husky, speedy web compiler, conventional commits, storybook
- 🎨 **Styling:** styled-components by emotion
- 🧪 **Testing:** jest, react-testing-library
- 💎 **Others:** desktop-first approach, atomic design, progressive web app, docker and dev container

## Storybook

To see all components in isolation:

1. Run `yarn storybook` in the root directory.
2. Open `http://localhost:6006` in your browser.

## How to run

1. Install [Node.js](https://nodejs.org/en/download/).
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/).
3. Clone the repository.
4. Type and run: `yarn` in the root directory.
5. Type and run: `yarn dev` in the root directory.
6. Open `http://localhost:5173` in your browser to see the app.

**NOTICE ℹ️:** The repository contains also the **dev container** configuration for Visual Studio Code. If you have the Remote - Containers extension installed, you can run the project in a container instead of installing all dependencies on your local machine.
