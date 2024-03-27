import { isPasswordAllowed } from '../auth';

test('when valid password provided', () => {
  const res = isPasswordAllowed('!aBc123');
  expect(res).toBe(true);
});

describe('when incorrect password provided', () => {
  const incorrectPasswords = [
    "a2c!",
    "123456!",
    "ABCdef!",
    "abc123!",
    "ABC123!",
    "ABCdef123"
  ];

  test.each(incorrectPasswords)('when password is %s', (password) => {
    const res = isPasswordAllowed(password);
    expect(res).toBe(false);
  });
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
