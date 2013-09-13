# Skype Emoji for NodeBB

This NodeBB plugin is a parser that allows users to use Emoji by typing in their text code equivalents.

e.g.

* `:)` becomes ![smile](http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0100-smile.gif)
* `:^)` becomes ![wondering](http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0112-wondering.gif)
* `(clap)` becomes ![clapping](http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0137-clapping.gif)
* etc...

## Installation

    npm install nodebb-plugin-emoji-skype

... or if you're feeling particularly risky, clone this repo and use `npm link` to "install" this plugin.

Then you can enable this plugin from the administration panel (`/admin`).

## Future functionality

* Integration of country flags `(flag:AF)`, `(flag:HK)`, etc