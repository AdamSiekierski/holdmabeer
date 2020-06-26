const test = require('ava');
const { hold } = require('./lib');

test('Hold my number', (t) => {
  return hold(1000).then(() => t.pass());
});

test('Hold my milliseconds', (t) => {
  return hold('1000ms').then(() => t.pass());
});

test('Hold my seconds', (t) => {
  return hold('1s').then(() => t.pass());
});
