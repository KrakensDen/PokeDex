This is [Poke-Dex](https://) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


<h1 align='center' style='font-size: 50px;'>Poke - Dex</h1>
<h3 align='center'>Project By: Nathan Cuevas & Christian ...</h3>

## Folder Structure

- public - folder - Holds all the necessary files/images that we will need for the project
- src - all the folders & files used for the UI/UX of the project including the source directory
  - components - folder - All elements/Components that are used site wide and will be reused multiple times throughout the project
  - data - folder - Has any necessary/persistent data that will last throughout the project.
  - layouts - folder - any layouts that are gonna be used throughout the entire project including: (Navbars, Sidebars, Footers, Headers, Hero Sections, etc..)
  - lib - folder - holds any helper functions that will be used throughout the project also making it easier to update and refactor libraries that are being updated.
    - Example : Making a global fetch Facade Pattern that you can easily later replace with something like axios.
  - pages - folder `root directory` - everything in the pages folder is gonna be the routing for the web app, the index.js file in here points to our websites home page.
    - api - folder - this is the api that comes with next.js framework useful for creating dynamic routes and our own api.
  - utils - folder - contains any helper functions that will be needed such as currency converters, or money converters, something that won't need changing and can be sectioned out on its own
- styles - folder - has all the style sheets (mainly the gloabal stylesheet) that is for the project.


