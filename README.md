
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



## インストール
```sh
$ git clone http://gitlab102.gnavi.co.jp/corporate/corporate-rule.git

$ npm i
```

## タスク

## fmt

```sh
$ npm run fmt
```

jsファイルをフォーマットします。
.prettierrc の記述に従います。

### build
```sh
$ npm run build
```
ビルドします。同時にwatchタスクが走ります。

### watch
```sh
$ npm run dev
```
browserSyncでブラウザ確認できます。
<http://localhost:3000/rule/>でローカル確認

## ディレクトリ構成
```
├── dist/ - ビルドフォルダ
└── src/ - 作業フォルダ
  ├── css/ - CSS
  ├── ejs/ - EJS
  ├── img/ - 画像
  ├── js/ - JS
  └── pdf/ - PDF
```

## jsライブラリ
+ jQuery
<https://jquery.com/>

## 動作環境 (2019.07.03 現在）
+ Internet Explorer 11
+ Edge 最新版
+ Firefox 最新版
+ Safari 最新版
+ Chrome 最新版
+ Mobile Safari iOS 9.x -
+ Android Browser 4.2 - 4.4
+ Android Chrome 最新版

## 設計方針
+ FLOCSS
https://github.com/hiloki/flocss

## Git運用ルール
+ master
+ develop
+ feature/ページ名_yyyymmdd

develop から feature/ページ名_yyyymmdd ブランチを作成

## 注意事項
