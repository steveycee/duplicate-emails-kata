# Duplicate email removal tool

## Quick start 🦊

To run function against randomly generated emails simply type

`npm run demo [number]`

Where `[number]` is the number of random emails you want to generate, keep in mind this number will be doubled in order to make sure we get 50% duplicate emails.

## How it all works ⚙️

You can no doubt see 4 functions in `demo.js`

`generateFakeEmails()`

Not particulary part of the excersise itself but generating 100K emails felt like a particularly manual task. While I appreciate there are tools and npm packages out there that might have helped with this I thought it better to demonstrate my ability to put something like this together.

Essentially the function generate a fake string by connecting together a randomised choice from 3 different arrays to put together an seemingly life like email address (sort of).

`shuffle()`

One thing `generateFakeEmails()` does in order to make sure 50% of the emails are duplicates is it concat's the array it generates to itself. This means if we generated 5 emails then we would end up with 10 with the first 5 being in the same order as the last 5. Thus we need a way to mix things up a bit and thats what shuffle does. The final function works on the result of shuffle.

`removeDuplicateEmails()`

Finally we have a function that takes an array from shuffle() (called inside of generateFakeEmails()) and removes all the duplicates. We can modify this in code to take in a file if needs be.

`demo()`

This function brings it all together and is the function called in the Quickstart above.

## Testing 🧪

💻 Tested on Early 2015 MPB 2.7Ghz i5 Dual Core 8GB RAM

- `removeDuplicateEmails()` and `generateFakeEmails()` both make use of `performance.now` to track how long the functions are taking to run. At time of writing the operation to deduplicate 100K email entries was taking roughly 80 to 100 ms
- Manual testing: spot checked over several runs that the order of the final array is in the same order as the array it had been asked to work on.
- Exploratory testing: Crashes out consistently at 4.2 million emails but this includes the generation operation.

## What I'd like to have added ⏳

- More automated tests! while there is benchmarking I didn't find the opportunity in good time to add the right amount of automated tests I'd have liked.
- More configuration options, right now it works on a randomly generated list of emails, I'd have loved to configure the CLI to work against a file like emails.json or something like that.
- More life like emails, I tried using domains and providers but ultimately the unique part of the email address isn't very life like.
- Better performance given it crashes out parsing a certain number of emails.
