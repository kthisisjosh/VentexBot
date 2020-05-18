<h1 align="center">
VentexBot
</h1>
<p align="center">
  A test\for fun discord bot built using <a href="https://abal.moe/Eris/">Eris</a>.
</p>

## Table of Contents
- [Commands](#commands)
- [Getting Started](#getting-started)

## Commands

#### Random Screenshot Memory
```js
~rsm
```
Cycles through a random screenshot saved in the #random-screenshot-memory channel whenver the ♻️ react is clicked.

#### Val10Man / Val5Man
```js
~val10man / ~val5man
```
Mentions the @Valorant role and displays the username of all those who react to the message.
#### Example
<img src="https://github.com/kthisisjosh/readme-assets/blob/master/ventexbot/Val10ManEx.JPG"/>

#### Tft
```js
~tft
```
Mentions the @tft role and displays the username of all those who react to the message.

## Getting Started

#### 1. Get the latest version

Start by cloning the latest version on your local machine by running:

```sh
$ git clone https://github.com/kthisisjosh/VentexBot.git ventexbot
$ cd ventexbot
```

#### 2. Install the dependencies

```sh
$ npm install
```

#### 3. Create an `auth.json` file in `./src` as described below

##### auth.json example
```js
{
  "token": "<discord bot user token>",
}
```

#### 4. Run the bot

```js
$ nodemon bot.js
```
