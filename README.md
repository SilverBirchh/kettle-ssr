# kettle-ssr

## How to run

1. Install [ngrok](https://dashboard.ngrok.com/get-started) and create an account
2. `cd kettle-ssr`
3. `npm install`
4. `~/ngrok http 3000` - This will give you your URL to hit. Copy this.
5. Go in to `index.html` and on line 29 replace the url with the one you copied. This URL will also need to be set on the Arduino
6. 'node index.js'
7. Send the URl around and you're all good

## How it works

It's very simple right now. The website sets an ephemeral flag for 30 seconds. The arduino should poll the `/status` end point. If the status is `true` then it should boil the kettle.
After 30 seconds the flag is changed back.
