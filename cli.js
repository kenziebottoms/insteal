'use strict';

let insta = require('./index');

let { argv } = process;
if (argv.length == 3) {
  let user = argv[2];
  insta.profile(user)
    .then(response => console.log(JSON.stringify(response)))
    .catch(err => console.log(err));
} else if (argv.length == 4) {
  insta[argv[2]](argv[3])
    .then(response => console.log(JSON.stringify(response)))
    .catch(err => console.log(err));
} else if (argv.length == 5) {
  insta[argv[2]](argv[3], argv[4])
    .then(response => console.log(JSON.stringify(response)))
    .catch(err => console.log(err));
}