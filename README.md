# electron-fate-boilerplate

> A fate starter kit with live editing

[Electron](http://electron.atom.io/) application boilerplate based on
[React](https://facebook.github.io/react/),
[React Router](http://rackt.github.io/react-router/),
[Webpack](http://webpack.github.io/docs/),
[React Trasform HMR](https://github.com/gaearon/react-transform-hmr)
for rapid application development

## Install

Install dependencies.

```bash
$ npm install
```

## Run

Run this two commands __simultaniously__ in different console tabs.

```bash
npm run hot-server
npm run start-hot
```

## Externals

If you use any 3rd party libraries which can't be built with webpack,
you must list them in your `webpack.config.base.js`：

```javascript
externals: [
  // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
]
```

You can find those lines in the file.

## CSS Modules support

[CSSModules](https://github.com/css-modules/css-modules) are the
default way to use CSS.

## Package

```bash
npm run package
```

#### Options

- --name, -n: Application name (default: ElectronReact)
- --version, -v: Electron version (default: latest version)
- --asar, -a: [asar](https://github.com/atom/asar) support (default: false)
- --icon, -i: Application icon
- --all: pack for all platforms

Use `electron-packager` to pack your app with `--all` options for
darwin (osx), linux and win32 (windows) platform. After build, you
will find them in `release` folder. Otherwise, you will only find one
for your os.

`test`, `tools`, `release` folder and devDependencies in
`package.json` will be ignored by default.

#### Default Ignore modules

We add some module's `peerDependencies` to ignore option as default
for application size reduction.

- `babel-core` is required by `babel-loader` and its size is ~19 MB
- `node-libs-browser` is required by `webpack` and its size is ~3MB.

> **Note:** If you want to use any above modules in runtime, for example: `require('babel/register')`, you should move them form `devDependencies` to `dependencies`.

#### Building windows apps from non-windows platforms

Please checkout
[Building windows apps from non-windows platforms](https://github.com/maxogden/electron-packager#building-windows-apps-from-non-windows-platforms).

## Credits
Originally forked from [electron-react-boilerplate](https://npmjs.org/package/electron-react-boilerplate)
