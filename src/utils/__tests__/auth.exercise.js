import cases from 'jest-in-case';
import { isPasswordAllowed } from '../auth';

cases('when valid password provided: (pass)', (opts) => {
  const res = isPasswordAllowed(opts.pass);
  expect(res).toBe(true);
}, {
  "!aBc123": { pass: '!aBc123' }
});

cases('when invalid provided: (pass)', (opts) => {
  const res = isPasswordAllowed(opts.pass);
  expect(res).toBe(false);
}, {
  "a2c!": {pass: "a2c!"},
  "123456!": {pass: "123456!"},
  "ABCdef!": {pass: "ABCdef!"},
  "abc123!": {pass: "abc123!"},
  "ABC123!": {pass: "ABC123!"},
  "ABCdef123": {pass: "ABCdef123"}
})

// 🐨 write tests for valid and invalid passwords
// 💰 here are some you can use:
//
// valid:
// - !aBc123
//
// invalid:
// - a2c! // too short
// - 123456! // no alphabet characters
// - ABCdef! // no numbers
// - abc123! // no uppercase letters
// - ABC123! // no lowercase letters
// - ABCdef123 // no non-alphanumeric characters
