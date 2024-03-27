import cases from 'jest-in-case'
import {isPasswordAllowed} from '../auth'

cases(
  'when valid provided',
  (opts) => {
    const res = isPasswordAllowed(opts.pass)
    expect(res).toBe(true)
  },
  {'!aBc123': {pass: '!aBc123'}},
)

cases(
  'when invalid provided',
  (opts) => {
    const res = isPasswordAllowed(opts.pass)
    expect(res).toBe(false)
  },
  {
    'too short': {pass: 'a2c!'},
    'no alphabet characters': {pass: '123456!'},
    'no numbers': {pass: 'ABCdef!'},
    'no uppercase letters': {pass: 'abc123!'},
    'no lowercase letters': {pass: 'ABC123!'},
    'no non-alphanumeric characters': {pass: 'ABCdef123'},
  },
)

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
