# Botkit echo
Botkit repearts everything...

## Requirements
- [Botkit](https://github.com/howdyai/botkit)

## Usage

```js
var Botkit = require("botkit");
var botkitEcho = require("botkit-echo");

// instantiate bot controller
var controller = Botkit.slackbot({
  debug: false
});

// connect the bot

// enable botkit-echo plugin
botkitEcho(controller);
```

## Instalation

```
npm install botkit-echo
```

## Inspired by
- [taiki45/ruboty-echo](https://github.com/taiki45/ruboty-echo)

## License
[MIT](http://izumin.mit-license.org/2016)

## Author
Masayuki Izumi (Twitter: [@izumin5210](https://twitter.com/izumin5210), GitHub: [@izumin5210](https://github.com/izumin5210))
