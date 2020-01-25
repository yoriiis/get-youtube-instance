# getYoutubeInstance

![getYoutubeInstance](https://img.shields.io/badge/get--youtube--instance-v1.0.0-546e7a.svg?style=for-the-badge) [![TravisCI](https://img.shields.io/travis/com/yoriiis/get-youtube-instance/master?style=for-the-badge)](https://travis-ci.com/yoriiis/get-youtube-instance) [![Coverage Status](https://img.shields.io/coveralls/github/yoriiis/get-youtube-instance?style=for-the-badge)](https://coveralls.io/github/yoriiis/get-youtube-instance?branch=master) ![Node.js](https://img.shields.io/node/v/get-youtube-instance?style=for-the-badge) [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/get-youtube-instance?style=for-the-badge)](https://bundlephobia.com/result?p=get-youtube-instance@latest)

`getYoutubeInstance` is a minimalist script to easily get the Youtube instance from Youtube player `iframe` (element or id).

The YouTube instance then allows you to manipulate the player.

## Installation

The plugin is available as the `get-youtube-instance` package name on [npm](https://www.npmjs.com/package/get-youtube-instance) and [Github](https://github.com/yoriiis/get-youtube-instance).

```bash
npm i --save-dev get-youtube-instance
```

```bash
yarn add --dev get-youtube-instance
```

## Environment

`getYoutubeInstance` was built for Node.js `>=8.11.2`.

## Usage

### Usage with HTML element

The following example returns the Youtube instance for the current player from `iframe` element.

```html
<iframe id="player-yt" src="https://www.youtube.com/embed/aqz-KE-bpKQ"></iframe>
```

```javascript
getYoutubeInstance(document.querySelector('#player-yt'));
```

### Usage with HTML id

The following example returns the Youtube instance for the current player from `iframe` id.

```html
<iframe id="player-yt" src="https://www.youtube.com/embed/aqz-KE-bpKQ"></iframe>
```

```javascript
getYoutubeInstance('player-yt');
```

## Parameters

### `option`

`HTMLElement || string`

Tells to the function the target element or the id of the target element.

## Licence

`getYoutubeInstance` is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Created with ♥ by [@yoriiis](http://github.com/yoriiis).
