'use strict';

let insta = require('./index');

let { argv } = process;
if (argv.length == 3) {
  let user = argv[2];
  insta.profile(user)
    .then(user => {
      console.log(user);
    })
    .catch(err => console.log(err));
} else if (argv.length == 4) {
  insta[argv[2]](argv[3])
    .then(response => console.log(response))
    .catch(err => console.log(err));
}