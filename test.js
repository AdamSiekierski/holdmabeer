const test = require('ava');
const { hold } = require('.');

test('Hold my number', t => {
  return hold(1000).then(() => t.pass());
});

test('Hold my milliseconds', t => {
  return hold('2000ms').then(() => t.pass());
});

test('Hold my seconds', t => {
  return hold('3s').then(() => t.pass());
});
