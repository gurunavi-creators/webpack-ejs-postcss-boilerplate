
# webpack-ejs-postcss-boilerplate

## 開発環境

### Install

```
$ git clone https://github.com/gurunavi-creators/webpack-ejs-postcss-boilerplate.git
$ cd webpack-ejs-postcss-boilerplate
$ npm i
```

### Node Version

```
v9.7.1
```

### Package

- [package.json](https://github.com/gurunavi-creators/webpack-ejs-postcss-boilerplate/package.json)

### Development

```
$ npm run dev
```
（Clean & Build & watch）

### Build

```
$ npm run build
```
（html & js & css & img）

### Clean

```
$ npm run build-file-clean
```

### fmt

```
$ npm run fmt
```

## eslint-config-gnavi

[![License](http://img.shields.io/npm/l/eslint-config-gnavi.svg?style=flat-square)](https://github.com/gurunavi-creators/eslint-config-gnavi)

> [ESLint](http://eslint.org/) shareable config for Gnavi UI

## Develop Directory Structure

```
src/
  └ css/
    └ foundation/
    └ layout/
    └ object/
    └ utility/
    └ page/
  └ ejs/
    └ data/
      └ source/
    └ html/
    └ include/
  └ img/
  └ js/
    └ modules/

↓ After Compilation

dist/
  └ assets/
    └ css/
    └ img/
    └ js/
  └index.html
```
