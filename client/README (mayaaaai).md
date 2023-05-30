# Just so I don't forget

## How I created the app

```ps
npx create-react-app proiect-dt
cd proiect-dt
npm start
```

## Adding Bootstrap

Use `npm` to install the package:

```ps
npm install bootstrap
```

Import it in `index.js`:

```js
import 'bootstrap/dist/css/bootstrap.css';
// Below I put other imports so that CSS from my
// components takes precedence over default styles.
```

## Adding React Router

Use `npm` to install the package:

```ps
npm install react-router-dom@latest
```

Import it in `index.js`:

```js
import { BrowserRouter } from 'react-router-dom';
```

Wrap the `App` component in `index.js` with `BrowserRouter`:

```js
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

## Adding custom fonts

I used [1001fonts.com](https://www.1001fonts.com/cursive-fonts.html) to find cursive fonts that I liked. I added the `.tff` and `.otf` to `src/fonts`. I also added a `Fonts.css` file in `src/styles`. Next, I added each font to the `Fonts.css` file as follows:

```css
@font-face {
    font-family: '<font-name>';
    src: local('<font-name>'),
        url('../fonts/<font-name>.ttf') format("truetype");
        /* url('../fonts/<font-name>.otf') format("opentype"); */
}
```

To use the fonts, import each font and the `css` file in the page.

```js
import '../styles/Fonts.css'
import '../fonts/<font-name>.ttf'
```

## Adding Layout

I created a `Layout` component that wraps the content of each page. It contains the navigation bar and the footer. It uses a prop called `children` to render the content of the page.

## `src` directory structure

```sh
src
├── components
│   └── Layout
├── fonts
├── images
├── pages
└── styles
```
