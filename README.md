# VentexBot
A test\for fun discord bot built using [eris](https://abal.moe/Eris/)

## To run yourself
1. Clone the repo locally
2. Inside the repo run `npm install`
3. Create an `auth.json` file in `"./src"` as described below
4. Run `node bot.js`

## auth.json example
You can choose to omit any of these, excluding token, that you don't wish to use. However, I would also remove their related commands to prevent errors until I implment some way of automatically doing it >B^)
```js
{
  "token": "<discord bot user token>",
}
```