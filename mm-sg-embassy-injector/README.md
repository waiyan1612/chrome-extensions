# mm-embassy-injector

Inject the JS functions in mm-embassy.js into the DOM.

# How to use
1. Unpack the extenstion locally and load it into the browser.
2. Update `mm-embassy.js` with proper values.
3. The textboxes would be autopuplated every time the appointment page is loaded.

# Suggested flow
1. Install [Buster](https://chrome.google.com/webstore/detail/buster-captcha-solver-for/mpbjkejclgfgadiemmefgebjfooflfhl?hl=en).
2. Refresh the appointment page at 00:00. Click the reCAPTCHA to let Buster solve it for you.
3. While Buster is solving the captcha, select an available date from the date picker.

NOTE: As of 28-09-2022, the appointment page will reload 50s after inactivity (from mouse or keyboard). This will reset your solved captcha.
