- [MATERIAL-UI v4.0.4-beta.1](https://next.material-ui.com/)

## [Installation](https://next.material-ui.com/getting-started/installation/)

### create app / git init / install
```bash
// create react app
ux$ create-react-app material_ui_test

ux/material_ui_test$ yarn start

//// stop react app
ux/material_ui_test$ <ctrl + c>


// git init
ux/material_ui_test$ git init

ux/material_ui_test$ git remote add origin https://github.com/hopelife/material_ui_test.git

ux/material_ui_test$ git push origin master

//// install material-ui
// with yarn
ux/material_ui_test$ yarn add material-ui react-tap-event-plugin @material-ui/core@next @material-ui/icons

// with npm
// ux/material_ui_test$ npm install @material-ui/core@next

```

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
