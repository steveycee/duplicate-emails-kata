# Duplicate email removal tool

## Quick start

To run function against 100000 randomly generated emails simply type

`npm run demo`

You should see how many emails the function worked against and how long it took in your console.

If you want to ask it to run against a particular number of internally generated email addresses you can type

`npm run demo-cli [number]`

Where `[number]` is the number of random emails you want to generate, keep in mind this number will be doubled in order to make sure we get 50% duplicate emails.
