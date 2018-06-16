'use strict';

let insta = require('./index');

let { argv } = process;

// ex: node cli.js profile <username>
//    calls `profile.profile(username)`
if (argv.length == 4) {
  insta[argv[2]][argv[2]](argv[3])
    .then(response => console.log(JSON.stringify(response)))
    .catch(err => console.log(err));
}
// ex: node cli.js profile <username> bio
//    calls `profile.bio(username)`
if (argv.length == 5) {
  insta[argv[2]][argv[4]](argv[3])
    .then(response => console.log(JSON.stringify(response)))
    .catch(err => console.log(err));
}
// ex: node cli.js profile <username> feed 3
//    calls `profile.feed(username, 3)`
if (argv.length == 6) {
  insta[argv[2]][argv[4]](argv[3], argv[5])
    .then(response => console.log(JSON.stringify(response)))
    .catch(err => console.log(err));
}