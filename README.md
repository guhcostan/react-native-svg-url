<!-- Bootstrapped with make-react-native-package v0.62.18 -->

# react-native-svg-url
[![npm version](https://badge.fury.io/js/react-native-svg-url.svg)](https://badge.fury.io/js/react-native-svg-url)
[![CircleCI](https://circleci.com/gh/guhcostan/react-native-svg-url.svg?style=svg)](https://circleci.com/gh/guhcostan/react-native-svg-url)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)
[![Dependency Status](https://david-dm.org/guhcostan/react-native-svg-url.svg)](https://david-dm.org/guhcostan/react-native-svg-url)
[![devDependencies Status](https://david-dm.org/guhcostan/react-native-svg-url/dev-status.svg)](https://david-dm.org/guhcostan/react-native-svg-url?type=dev)
[![typings included](https://img.shields.io/badge/typings-included-brightgreen.svg?t=1495378566925)](package.json)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/react-native-svg-url)

Yet another react-native package

## Status

- iOS & Android:
  - ???
- react-native:
  - supported versions "<strong>&gt;= 0.62.2</strong>"

## Installation

<table>
<td>
<details style="border: 1px solid; border-radius: 5px; padding: 5px">
  <summary>with react-native "<strong>&gt;=0.62.2</strong>"</summary>

### 0. Setup Swift and Kotlin

- Open your iOS project in Xcode and create empty Swift file and bridging header to enable Swift support
- Modify `android/build.gradle`:

  ```diff
  buildscript {
    ext {
      ...
  +   kotlinVersion = "1.3.72"
    }
  ...

    dependencies {
  +   classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:${kotlinVersion}")
      ...
  ```

### 1. Install latest version from npm

`$ npm i react-native-svg-url -S`

### 2. Install pods

`$ cd ios && pod install && cd ..`

</details>
</td>
</table>

## Demo

 Android                                       |  iOS
:---------------------------------------------:|:---------------------------------------------:
???  |  ???

## Example

```jsx
import * as React from 'react'
import { View } from 'react-native'
import {
  SvgUrl
} from 'react-native-svg-url'

```

## Reference

<table>
  <tr>
    <th>prop</th>
    <th>type</th>
    <th>default</th>
    <th>desc</th>
  </tr>
  <tr>
    <td>color</td>
    <td><code>string</code></td>
    <td><code>'red'</code></td>
    <td>-</td>
  </tr>
</table>
