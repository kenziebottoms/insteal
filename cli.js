'use strict';

let insta = require('./index');

let { argv } = process;


if (argv.length == 5) {
  insta[argv[2]][argv[3]](argv[4])
    .then(response => console.log(JSON.stringify(response)))
    .catch(err => console.log(err));
}