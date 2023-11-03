# Todo List

This project represents modern UI design styles under a todo list app.

## Purpose

Collect all design styles together in one place and learn how to implement them in CSS.

## Demo

A live demo is available at [https://todo-list-rust-theta.vercel.app](https://todo-list-rust-theta.vercel.app).
To change the theme, click the `Settings` button on the left navigation bar. Then, select the style you want to use.

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
- VFD Display (the dark theme with a retro VFD display glowing effect)
- CRT (the old-school cathode ray tube monitor effect)

## Screenshots

![all-styles](https://github.com/wojciechmarek/todo-list/assets/27026036/412e9562-da0b-4e74-8561-2036df550935)

## Used technologies

- 🎁 **Project:** vite, react, typescript
- 🛠️ **Tools:** yarn, eslint, prettier, husky, speedy web compiler, conventional commits, storybook, react-hook-form, react-router
- 🎨 **Styling:** styled-components by emotion, lucide icons
- 🧪 **Testing:** jest, react-testing-library
- 💎 **Others:** desktop-first approach, atomic design, progressive web app, docker and dev container

## Versioning

This application uses conventional commits for generating changelog and versioning. The change log is available at [CHANGELOG.md](./CHANGELOG.md).

## How to run the app

1. Install [Node.js](https://nodejs.org/en/download/).
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/).
3. Clone the repository.
4. Type and run: `yarn` in the root directory.
5. Type and run: `yarn dev` in the root directory.
6. Open `http://localhost:5173` in your browser to see the app.

> The repository contains also the **dev container** configuration for Visual Studio Code. If you have the Remote - Containers extension installed, you can run the project in a container instead of installing all dependencies on your local machine.

## Component tests

The project contains component tests for all dump (atom/molecule/organism) components (111 tests in total including 23 snapshot tests). To run the tests, type and run: `yarn test` in the root directory.
Report:

<img width="670" alt="Screenshot 2023-11-03 at 16 29 35" src="https://github.com/wojciechmarek/todo-list/assets/27026036/502adcaf-e9e3-4409-b202-f0d473769410">
