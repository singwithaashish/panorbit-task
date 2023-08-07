**Panorbit task** is a simple website design based on [Adobe XD](https://xd.adobe.com/view/68404abc-8176-4529-aa55-fbea81ff4a60-3d13/screen/710e4aaa-8150-4f4a-ad07-d88c48e9bb0a?fullscreen) design.

## Table of contents
* [Demo](#demo)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Folder Structure](#folder-structure)
* [Screenshots](#screenshots)

## Demo
Here is a working live demo:  https://endearing-tulumba-6806f1.netlify.app/
## Technologies
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [React Router](https://reactrouter.com/) - Declarative routing for React.js
* [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
* [TypeScript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types.
* [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
* [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling


## Setup
To run this project, install it locally using npm:

```
$ git clone https://github.com/singwithaashish/panorbit-task
$ cd panorbit-task
$ npm install
$ npm run dev
```

## Features
* Redux store
* TypeScript
* React Router
* Tailwind CSS

## Folder Structure
```
.
├── public
├── src
│   ├── app
|   |   ├── features
|   |   |   └── userSlice.ts
|   |   ├── store.ts
|   |   └── types.ts
│   ├── assets
│   ├── components
|   |   ├── Dashboard
|   |   |   ├── ChatBox.tsx # messaging popup
|   |   |   └── ChatSelector.tsx # select users to chat popup
|   |   ├── Layout
|   |   |   └── Sidebar.tsx
|   |   ├── Screens
|   |   |   ├── GalleryScreen.tsx
|   |   |   ├── PostScreen.tsx
|   |   |   ├── ProfileScreen.tsx
|   |   |   └── TodoScreen.tsx
|   |   └── Users
|   |       ├── UserCard.tsx # user's name and avatar
|   |       └── OnlineUsers.tsx # user's name, avatar and online status
│   ├── Pages
|   |   ├── LandingPage.tsx
|   |   └── UserPage.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── typings.d.ts
├── .gitignore
├── package.json

```

## Screenshots

 



