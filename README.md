- [MATERIAL-UI v4.0.4-beta.1](https://next.material-ui.com/)

## [Installation](https://next.material-ui.com/getting-started/installation/)


### npm
```bash
// create react app
ux$ create-react-app material_ui_test

ux/material_ui_test$ yarn start

//// stop react app
ux/material_ui_test$ <ctrl + c>


// git init
ux/material_ui_test$ git init



//// install material-ui
// with yarn
ux/material_ui_test$ yarn add material-ui react-tap-event-plugin @material-ui/core@next

// with npm
// ux/material_ui_test$ npm install @material-ui/core@next

```

### Roboto Font
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
```

### Font Icons
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

### SVG Icons
```bash
// with npm
ux/material_ui_test$ install @material-ui/icons@next

// with yarn
ux/material_ui_test$ yarn add @material-ui/icons@next
```

### CDN
You can start using Material-UI with minimal Front-end infrastructure, which is great for prototyping. We discourage using this approach in production though - the client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilisation.

### UMD releases
We are providing two Universal Module Definition (UMD) files:

- one for development: https://unpkg.com/@material-ui/core@next/umd/material-ui.development.js
- one for production: https://unpkg.com/@material-ui/core@next/umd/material-ui.production.min.js
You can follow this CDN example to quickly get started.


## Usage

### test
- public/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="app"></div>
  </body>
</html>
```

- src/app.js
```javascript
import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```
